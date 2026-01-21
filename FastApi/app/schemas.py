from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Annotated
from uuid import uuid4

class UserCreate(BaseModel):
    username: str = Field(min_length=3, max_length=18, description="The username of the user")
    email: EmailStr = Field(description="The email of the user")
    password: str = Field(min_length=6, max_length=64, description="The password of the user")      

class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None

class UserResponse(BaseModel):
    username: str
    email: EmailStr
    posts:  List[PostResponse] = []

    class Config:
        from_attributes = True
class PostCreate(BaseModel):
    title: str = Field(min_length=3, max_length=100, description="The title of the post")
    content: str = Field(min_length=0, max_length=1000, description="The content of the post")

class PostResponse(BaseModel):
    title: str
    content: str
    author_id: str

    class Config:
        from_attributes = True

    
