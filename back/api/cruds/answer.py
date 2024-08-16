#cruds/answer.py
from sqlalchemy.ext.asyncio import AsyncSession
import api.models.task as answer_model
import api.schemas.answer as answer_schema

async def create_answer(db: AsyncSession, answer_create: answer_schema.AnswerCreate) -> answer_model.Answer:
    answer = answer_model.Answer(**answer_create.dict())
    db.add(answer)
    await db.commit()
    await db.refresh(answer)
    return answer

async def delete_answer(db: AsyncSession, original: answer_model.Answer) -> None:
    await db.delete(original)
    await db.commit()
