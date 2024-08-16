# schemas/user.py

from pydantic import BaseModel

# 共通のフィールド（idを除く）
class UserBase(BaseModel):
    name: str
    status: str
    experience: str

# 新しいユーザーを作成するためのスキーマ（idなし）
class UserCreate(BaseModel):
    name: str
    status: str
    experience: str

# ユーザー作成後のレスポンススキーマ
class UserCreateResponse(UserBase):
    id: int  # 作成後にデータベースが生成したIDを含む

    class Config:
        orm_mode = True

# データベースから取得したユーザー情報を表すスキーマ
class User(UserBase):
    id: int

    class Config:
        orm_mode = True
