# router/question.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
import api.cruds.question as question_crud
from api.db import get_db
from api.schemas.question import Question
from api.schemas.search import SearchRequest
from api.models.user import Question as QuestionModel
from sqlalchemy import or_, asc
from typing import List
from sqlalchemy.future import select

router = APIRouter()

@router.post("/create_question", response_model=Question)
async def create_question(question_body: Question, db: AsyncSession = Depends(get_db)):
    return await question_crud.create_question(db, question_create=question_body)
"""
@router.delete("/delete_question/{question_id}", response_model=None)
async def delete_question(question_id: int, db: AsyncSession = Depends(get_db)):
    question = await question_crud.get_question(db, question_id=question_id)
    if question is None:
        raise HTTPException(status_code=404, detail="Question not found")
    await question_crud.delete_question(db, original=question)
    return {"detail": "Question deleted"}
"""
@router.post("/search_questions", response_model=List[Question])
async def search_questions(
    search_request: SearchRequest,
    db: AsyncSession = Depends(get_db)
):
    words = search_request.word.split()
    filters = [QuestionModel.question_text.like(f"%{word}%") for word in words]
    result = await db.execute(
        select(QuestionModel).where(or_(*filters))
    )
    questions = result.scalars().all()
    if not questions:
        raise HTTPException(status_code=404, detail="No questions found with the given keyword")
    return questions

@router.get("/questions", response_model=List[Question])
async def get_questions(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(QuestionModel).order_by(asc(QuestionModel.id)))
    questions = result.scalars().all()
    return questions
