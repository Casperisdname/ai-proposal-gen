from openai import OpenAI
client = OpenAI()

def generate_all(job_description: str):

    prompt = f"""
You are a senior freelance consultant.

Given this job description:
{job_description}

Return STRICTLY in this format:

=== PROPOSAL ===
Write a strong, client-focused proposal.

=== PRICING ===
Suggest a price range and explain why.

=== CONTRACT ===
Write a simple contract with:
- Scope
- Timeline
- Payment terms
- Ownership

=== RISKS ===
List possible risks or red flags.
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
    )

    return response.choices[0].message.content