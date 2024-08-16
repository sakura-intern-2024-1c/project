#cruds/question.py
from sqlalchemy.ext.asyncio import AsyncSession
import api.models.user as question_model
import api.schemas.question as question_schema

async def create_question(db: AsyncSession, question_create: question_schema.QuestionCreate) -> question_model.Question:
    question = question_model.Question(**question_create.dict())
    db.add(question)
    await db.commit()
    await db.refresh(question)
    return question

async def delete_question(db: AsyncSession, original: question_model.Question) -> None:
    await db.delete(original)
    await db.commit()
