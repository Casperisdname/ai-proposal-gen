from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import JobInput
from ai import generate_all

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate")
def generate(data: JobInput):
    result = generate_all(data.description)
    return {"output": result}