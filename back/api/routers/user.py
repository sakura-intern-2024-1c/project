# router/user.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
import api.cruds.task as task_crud
from api.db import get_db
from api.schemas.user import User
from typing import List
from sqlalchemy.future import select
from api.models.task import User as UserModel

router = APIRouter()

@router.post("/create_user", response_model=User)
async def create_user(user_body: User, db: AsyncSession = Depends(get_db)):
    return await task_crud.create_user(db, user_create=user_body)

@router.delete("/user/{user_id}", response_model=None)
async def delete_user(user_id: int, db: AsyncSession = Depends(get_db)):
    user = await task_crud.get_user(db, user_id=user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    await task_crud.delete_user(db, original=user)
    return {"detail": "User deleted"}

@router.get("/users", response_model=List[User])
async def get_users(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(UserModel))
    users = result.scalars().all()
    return users