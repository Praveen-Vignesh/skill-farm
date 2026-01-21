from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
import uuid

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True, default=lambda: str(uuid.uuid4()))
    username = Column(String(18), unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    
    #creates a one-to-many relationship between User and Post, if user is deleted then all the psots are deleted too(that has the user_id as its author_id)
    posts = relationship("Post", back_populates="author", cascade="all, delete-orphan")


class Post(Base):
    __tablename__ = "posts"

    id = Column(String, primary_key=True, index=True, default=lambda: str(uuid.uuid4()) )
    title = Column(String(100), index=True, nullable=False)
    content = Column(String(1000), nullable=False)
    author_id = Column(String, ForeignKey("users.id"), nullable=False)

    author = relationship("User", back_populates="posts")#creates a bidirectional relationship between User and Post
 
