# routers/user.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
import api.cruds.user as user_crud
from api.db import get_db
from api.schemas.user import User
from typing import List
from sqlalchemy.future import select
from api.schemas.user import UserCreate
from api.models.user import User as UserModel


router = APIRouter()

@router.post("/create_user", response_model=User)
async def create_user(user_body: UserCreate, db: AsyncSession = Depends(get_db)):
    return await user_crud.create_user(db, user_create=user_body)


@router.get("/users", response_model=List[User])
async def get_users(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(UserModel))
    users = result.scalars().all()
    return users