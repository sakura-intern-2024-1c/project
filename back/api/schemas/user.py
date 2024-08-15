# schemas/user.py

from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str
    status: str
    experience: str

    class Config:
        orm_mode = True