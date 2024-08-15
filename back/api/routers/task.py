from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
import api.cruds.task as task_crud
from api.db import get_db
from sqlalchemy import asc
from api.models.task import Question as QuestionModel, Answer as AnswerModel
from api.schemas.question import Question
from api.schemas.answer import Answer
from api.schemas.user import User
from api.models.task import User as UserModel
import api.schemas.task as task_schema

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "Hello World"}


@router.get("/tasks", response_model=List[task_schema.Task])
async def list_tasks(db: AsyncSession = Depends(get_db)):
    return await task_crud.get_tasks_with_done(db)


@router.post("/tasks", response_model=task_schema.TaskCreateResponse)
async def create_task(
    task_body: task_schema.TaskCreate, db: AsyncSession = Depends(get_db)
):
    return await task_crud.create_task(db, task_body)


@router.put("/tasks/{task_id}", response_model=task_schema.TaskCreateResponse)
async def update_task(
    task_id: int, task_body: task_schema.TaskCreate, db: AsyncSession = Depends(get_db)
):
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")

    return await task_crud.update_task(db, task_body, original=task)


@router.delete("/tasks/{task_id}", response_model=None)
async def delete_task(task_id: int, db: AsyncSession = Depends(get_db)):
    task = await task_crud.get_task(db, task_id=task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")

    return await task_crud.delete_task(db, original=task)

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