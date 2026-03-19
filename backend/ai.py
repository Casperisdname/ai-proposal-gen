from openai import OpenAI
client = OpenAI()

def generate_all(job_description: str):

    prompt = f"""
You are a senior freelance consultant.

Given this job description:
{job_description}

Return:

1. Proposal (client-focused, persuasive)
2. Pricing (range + reasoning)
3. Contract (basic clauses)
4. Risk Assessment (bullet points)

Be structured and clear.
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
    )

    return response.choices[0].message.content