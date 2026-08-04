import asyncio
import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlalchemy import text
from dotenv import load_dotenv

load_dotenv()

async def main():
    engine = create_async_engine(
        os.getenv("DATABASE_URL"),
        echo=True,
        connect_args={"statement_cache_size": 0}
    )
    async_session = sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)
    
    async with async_session() as session:
        # Get user ID
        result = await session.execute(text("SELECT id FROM users WHERE email = 'demo@skillforge.com'"))
        user_id = result.scalar()
        
        if not user_id:
            print("User not found!")
            return
            
        print(f"Found user ID: {user_id}")
        
        # Delete grades associated with this user's submissions
        await session.execute(text("DELETE FROM grades WHERE submission_id IN (SELECT id FROM submissions WHERE user_id = :user_id)"), {"user_id": user_id})
        
        # Delete submissions
        result = await session.execute(text("DELETE FROM submissions WHERE user_id = :user_id"), {"user_id": user_id})
        print(f"Deleted submissions.")
        
        await session.commit()
        print("Success.")

if __name__ == "__main__":
    asyncio.run(main())
