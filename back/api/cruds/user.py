<<<<<<< HEAD
#cruds/user.py
from sqlalchemy.ext.asyncio import AsyncSession
import api.models.task as user_model
import api.schemas.user as user_schema

async def create_user(db: AsyncSession, user_create: user_schema.UserCreate) -> user_model.User:
    user = user_model.User(**user_create.dict())
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user

async def delete_user(db: AsyncSession, original: user_model.User) -> None:
    await db.delete(original)
    await db.commit()
||||||| 5b9a859
=======
from sqlalchemy.ext.asyncio import AsyncSession
import api.models.user as user_model
import api.schemas.user as user_schema


async def create_user(
    db: AsyncSession, user_create: user_schema.UserCreate
) -> user_model.User:
    user = user_model.User(**user_create.dict())
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user
>>>>>>> main
