from fastapi import APIRouter, HTTPException, Depends
from pydantic import EmailStr
from sqlalchemy.orm import Session
from typing import List, Annotated
from uuid import uuid4
from passlib.context import CryptContext

from app.models import User
from app.database import get_db
from app.schemas import UserCreate, UserUpdate, UserResponse, PostResponse, PostCreate

router = APIRouter()#instance of APIRouter

pwd_context = CryptContext(schemes=["bcrypt"])

#function decorator
#       HTTP method: POST
#       Endpoint: /register/     response model says what we expect to return
#                                Fastapi automaitcally type checks and tries to convert to this schema (pydantic model)
@router.post("/register/", response_model=UserResponse)

#function to register a new user
            #body parameter user of type UserCreate (pydantic model)
def register(user : UserCreate, db: Session = Depends(get_db)):
    new_user = user.model_dump()
    print(f'password length is {len(new_user["password"])}')

    new_user['password']= pwd_context.hash(new_user["password"])

    print(f'password length is {len(new_user["password"])}, {new_user["password"]}')

    if db.query(User).filter(User.email == new_user["email"]).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    
    db_user = User(**new_user)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
    
@router.get("/user/{username}", response_model=UserResponse)
def displayUser(username: str, db: Session = Depends(get_db)):

    userDetails = db.query(User).filter(User.username == username).first()
    if not userDetails:
        raise HTTPException(404, "User not found")
    
    new_user = UserResponse.model_validate(userDetails)
    return new_user

@router.put("/user/{username}", response_model=UserResponse)
def updateUser(username: str, old_password: str, new_email: EmailStr = None, new_password: str = None, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == username).first()
    if not existing_user:
        raise HTTPException(status_code=404, detail="No user exists")
    if not pwd_context.verify(old_password, existing_user.password):
        raise HTTPException(status_code=401, detail="Invalid password") 
    
    if new_email:
        existing_user.email = new_email
        
    if new_password:
        existing_user.password = pwd_context.hash(new_password)

    db.commit()
    db.refresh(existing_user)
    return existing_user

@router.delete("/users/{username}")
def deleteUser(username: str, password: str, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == username).first()

    if not existing_user:
        raise HTTPException(404, "User does not exist")
    # Verify password using .verify method of pwd_context
    if not pwd_context.verify(password, existing_user.password):
        raise HTTPException(status_code=401, detail="Invalid password") 
    
    db.delete(existing_user)
    db.commit()
    return "User deleted Successfully"
