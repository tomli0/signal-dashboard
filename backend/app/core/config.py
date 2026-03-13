from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = "postgresql://signal:signal@localhost:5432/signal_dashboard"

    class Config:
        env_file = ".env"


settings = Settings()
