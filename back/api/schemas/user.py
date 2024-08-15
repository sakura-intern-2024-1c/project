# schemas/user.py

from pydantic import BaseModel


class UserBase(BaseModel):
    id: int
    name: str
    status: str
    experience: str


class UserCreate(UserBase):
    pass


class UserCreateResponse(UserCreate):
    id: int

    class Config:
        orm_mode = True


class User(UserBase):
    pass

    class Config:
        orm_mode = True
