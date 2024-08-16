# router/answer.py
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from api.db import get_db
from sqlalchemy import asc
from api.models.user import Answer as AnswerModel
from api.schemas.answer import Answer
import api.cruds.answer as answer_crud

router = APIRouter()

@router.post("/create_user", response_model=Answer)
async def create_user(user_body: Answer, db: AsyncSession = Depends(get_db)):
    return await answer_crud.create_user(db, user_create=user_body)

@router.get("/{question}/answers", response_model=List[Answer])
async def get_answers_by_question_id(question_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(AnswerModel).where(AnswerModel.question_id == question_id).order_by(asc(AnswerModel.id)))
    answers = result.scalars().all()
    if not answers:
        raise HTTPException(status_code=404, detail="Answers are not found")
    return answers