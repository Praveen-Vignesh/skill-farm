from fastapi import APIRouter, HTTPException, Depends, Response
from sqlalchemy.orm import Session
from typing import List, Annotated, Optional

from app.models import User, Post
from app.database import get_db
from app.schemas import UserResponse, PostResponse, PostCreate
from passlib.context import CryptContext 


router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"])


@router.post("/{username}/newpost/", response_model=PostResponse)
def createPost(username: str, NewPost: PostCreate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()

    if not user:
        raise HTTPException(404, "User not found")
    
    userId = user.id

    new_post = Post(author_id = userId, **NewPost.model_dump())

    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    return new_post



@router.get("/{username}/posts", response_model=List[PostResponse])
def get_user_posts(username: str, search: Optional[str] = None, post_id: Optional[str] = None, db: Session = Depends(get_db)
):

    user = db.query(User).filter(User.username == username).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")


    posts_query = db.query(Post).filter(Post.author_id == user.id)


    if post_id:
        posts_query = posts_query.filter(Post.id == post_id)

    if search:
        posts_query = posts_query.filter(Post.title.contains(search))

    results = posts_query.all()

    return results


@router.delete("/{username}/posts")
def deletePost(username: str, password: str,postname: str, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.username == username).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if not pwd_context.verify(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid password") 
    
    posts_query = db.query(Post).filter(Post.author_id == user.id)

    post = posts_query.filter(Post.title.contains(postname)).first()

    db.delete(post)
    db.commit()

    return "Post deleted Successfully"
