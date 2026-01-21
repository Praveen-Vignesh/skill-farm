from fastapi import FastAPI

from .database import create_all_tables

from Routers.users import router as users_router
from Routers.posts import router as posts_router


# Initialize FastAPI app
app = FastAPI(
    title="Basic Implementation",
    description="Basic API demonstrating fundamental CRUD operations using FastAPI and SQLAlchemy",
    version="1.0.0"
)

# Create database tables on startup
create_all_tables()


# Include all routers (A router is a collection of routes related to a specific functionality
#                      for eg: user management, post management etc.)

app.include_router(users_router)
app.include_router(posts_router)


