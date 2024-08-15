# models/task.py
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from api.db import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True)
    title = Column(String(1024))

    done = relationship("Done", back_populates="task", cascade="delete")


class Done(Base):
    __tablename__ = "dones"

    id = Column(Integer, ForeignKey("tasks.id"), primary_key=True)

    task = relationship("Task", back_populates="done")


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(64))
    status = Column(String(16))
    experience = Column(String(4096))

class Question(Base):
        __tablename__ = "questions"

        id = Column(Integer, primary_key=True)
        user_id = Column(Integer, ForeignKey("user.id"))
        question_text = Column(String(8192))

        answers = relationship("Answer", back_populates="question")
    
        user = relationship("User", back_populates="questions")

class Answer(Base):
        __tablename__ = "answers"

        id = Column(Integer, primary_key=True)
        question_id = Column(Integer, ForeignKey("questions.id"))  # Questionテーブルのidを参照する外部キー
        answer_text = Column(String(8192))