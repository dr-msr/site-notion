---
title: "Unleashed AI: Contextual Transaction Analytics"
slug: "deriv-ai"
date: "2025-02-09"
status: "Public"
type: "Post"
category: ["Portfolio", "AI"]
tags: ["hackathon", "openai", "nextjs", "typescript", "vectorization", "prisma", "postgresql"]
summary: "Built a complete full-stack application in 24 hours at the Deriv AI Hackathon. Contextual transaction analytics using news vectorization, semantic analysis, and the O1 reasoning model."
thumbnail: null
---

# Unleashed AI: Contextual Transaction Analytics

**Project Type:** Hackathon Entry (24-hour build)
**Event:** Deriv AI Hackathon (February 8–9, 2025), Deriv HQ, Cyberjaya
**Team:** Mohd Syamirulah Rahim, Saladin, Suzaril Shah
**Challenge:** Social Trading (Challenge 3)
**Demo:** [deriv-ai.vercel.app](https://deriv-ai.vercel.app)
**Source:** [github.com/dr-msr/deriv-ai](https://github.com/dr-msr/deriv-ai)

---

## What We Built

A complete full-stack application shipped in 24 hours. Unleashed AI enhances traditional transaction logs by incorporating contextual data: news headlines are vectorized and semantically linked to transaction data, connecting financial events with what was happening in the world at the time.

![Contextual transaction analytics architecture with semantic vectorization](/images/portfolio/deriv-ai-1.png)


After an initial mathematical analysis is performed on related data points, the results are refined using O1, OpenAI's reasoning model, to ensure that conclusions are well-supported and logical. As more transactions are logged, even similar transactional values (such as amounts or profits) can have different real-world contexts. The system learns to differentiate these contexts and produces increasingly accurate, real-world relevant analysis.

## Tech Stack

**Frontend:** Next.js 15, TypeScript, Tailwind CSS, Recharts for data visualization
**Backend:** Prisma ORM with PostgreSQL
**AI/ML:** OpenAI API, O1 Reasoning Model, semantic vectorization pipeline
**Deployment:** Vercel

## The Product Idea

Most trading analytics treat transactions as isolated numerical events. A buy order is just a price, a volume, a timestamp. But a trade executed during a market crash has a fundamentally different meaning than the same trade executed during a bull run, even if the numbers look identical.

Unleashed AI makes that context machine-readable. By vectorizing news headlines and associating them semantically with transaction records, the system can surface patterns that pure numerical analysis would miss entirely. The reasoning model then validates these associations, filtering noise from genuine contextual insight.


![24-hour hackathon build timeline showing rapid product development cycle](/images/portfolio/deriv-ai-2.png)

## Why It Matters

This was a 24-hour build that demonstrated not just coding speed but product thinking under pressure: identifying a real analytical gap in social trading, designing a data architecture that could meaningfully address it, and shipping something functional enough to demo with real data flowing through it. The semantic vectorization approach to enriching financial data with world-context is a pattern that scales well beyond this specific use case.

*\* Images are conceptualized, not the real implementation to protect client's intellectual right*
