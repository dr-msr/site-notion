---
title: "Unleashed AI — Contextual Transaction Analytics"
slug: "deriv-ai"
date: "2025-02-09"
status: "Public"
type: "Post"
category: ["Portfolio", "AI"]
tags: ["hackathon", "openai", "nextjs", "typescript", "vectorization"]
summary: "Hackathon project for the Deriv AI Challenge — contextual transaction analytics using news vectorization and the O1 reasoning model."
thumbnail: null
---

# Unleashed AI — Contextual Transaction Analytics

**Project Type:** Hackathon Entry
**Event:** Deriv AI Hackathon (February 8–9, 2025), Deriv HQ, Cyberjaya
**Team:** Mohd Syamirulah Rahim, Saladin, Suzaril Shah
**Challenge:** Social Trading (Challenge 3)
**Demo:** [unleashed-ai.vercel.app](https://unleashed-ai.vercel.app)
**Source:** [github.com/dr-msr/deriv-ai](https://github.com/dr-msr/deriv-ai)

---

## What It Does

Unleashed AI enhances traditional transaction logs by incorporating contextual data like news headlines. These headlines are vectorized, allowing for semantic analysis that connects transaction data with global events.

After an initial mathematical analysis is performed on related data points, the results are refined using O1, a reasoning model, to ensure that conclusions are well-supported and logical.

As more transactions are logged, even similar transactional values (such as amounts or profits) can have different real-world contexts. This allows the system to produce more accurate and real-world relevant analysis as it learns to differentiate the contexts surrounding similar transactions.

## Tech Stack

**Frontend:** Next.js, TypeScript, Tailwind CSS
**AI/ML:** OpenAI API, O1 Reasoning Model, News Vectorization
**Data:** Semantic analysis pipeline, contextual enrichment layer

## Why It Matters

Most trading analytics treat transactions as isolated numerical events. Unleashed AI treats them as events that happened in a world where things were going on. A trade executed during a market crash has a different meaning than the same trade executed during a bull run, even if the numbers look identical. This project makes that context machine-readable and analytically useful.
