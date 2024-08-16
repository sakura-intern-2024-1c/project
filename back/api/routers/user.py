<<<<<<< HEAD
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
||||||| 5b9a859
=======
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import asc
from api.db import get_db
from api.models.user import Question as QuestionModel, Answer as AnswerModel, User as UserModel
from api.schemas.answer import Answer
from api.schemas.question import Question
from api.schemas.user import User
import api.schemas.user as user_schema
import api.cruds.user as user_crud

router = APIRouter()


@router.get("/users", response_model=List[User])
async def get_users(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(UserModel))
    users = result.scalars().all()
    return users


@router.get("/questions", response_model=List[Question])
async def get_questions(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(QuestionModel).order_by(asc(QuestionModel.id)))
    questions = result.scalars().all()
    return questions


@router.get("/question/{question}/answers", response_model=List[Answer])
async def get_answers_by_question_id(question_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(AnswerModel).where(AnswerModel.question_id == question_id).order_by(asc(AnswerModel.id)))
    answers = result.scalars().all()
    if not answers:
        raise HTTPException(status_code=404, detail="Answers are not found")
    return answers


@router.post("/users", response_model=user_schema.UserCreateResponse)
async def create_user(
    user_body: user_schema.UserCreate, db: AsyncSession = Depends(get_db)
):
    return await user_crud.create_user(db, user_body)
>>>>>>> main
