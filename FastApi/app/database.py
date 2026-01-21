from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database URL for SQLite  dbtype       db file name
sqlalchemy_database_url = "sqlite:///./test.db"

# Create the SQLAlchemy engine to do the database communication
engine = create_engine(sqlalchemy_database_url,connect_args={"check_same_thread": False})


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for all database models
# All models must inherit from this Base class
Base = declarative_base()

def get_db():
    db = SessionLocal()  # Create a new database session
    try:
        yield db  # Provide the session to the route handler
    finally:
        db.close()  # Ensure the session is closed after use


def create_all_tables():
    Base.metadata.create_all(bind=engine)
