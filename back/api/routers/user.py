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
