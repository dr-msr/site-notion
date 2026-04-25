---
title: "2Opinion — AI-Assisted Medical Document Analysis"
slug: "2opinion"
date: "2024-09-15"
status: "Public"
type: "Post"
category: ["Portfolio", "AI"]
tags: ["medical-ai", "document-analysis", "anthropic", "openai", "ocr", "nextjs"]
summary: "A medical second opinion tool that uses AI to analyze uploaded clinical documents, combining OCR with multi-model AI analysis for structured diagnostic support."
thumbnail: null
---

# 2Opinion — AI-Assisted Medical Document Analysis

**Project Type:** Clinical AI Tool
**Components:** Frontend (Next.js), OCR service, analysis pipeline
**AI Models:** Anthropic Claude, OpenAI GPT
**Key Features:** PDF upload, document OCR, multi-model analysis, structured output

---

## What It Does

2Opinion is a tool for analyzing medical documents using AI. Patients or clinicians upload clinical documents (lab results, imaging reports, discharge summaries) as PDFs, and the system extracts text via OCR, then runs the content through multiple AI models to provide structured analysis and potential areas for clinical attention.

The system uses both Anthropic and OpenAI models, leveraging the strengths of each for different analytical tasks. The multi-model approach provides a form of cross-validation: when two independently-architected AI systems agree on a finding, confidence increases. When they disagree, that disagreement itself is informative and worth surfacing to the clinician.

## Tech Stack

**Frontend:** Next.js, TypeScript, Tailwind CSS, React Hook Form with Zod validation
**Document Handling:** React Dropzone for uploads, React PDF for preview, OCR pipeline for text extraction
**AI Pipeline:** Anthropic AI SDK, OpenAI AI SDK, Vercel AI SDK for streaming
**UI:** Radix UI components, Shadcn, Sonner for notifications, React JSON View for structured data inspection

## Why It Matters

Getting a second opinion on medical findings is one of the most valuable things a patient can do, but access barriers (cost, geography, specialist availability) often prevent it. This tool doesn't replace a specialist consultation, but it can surface patterns, flag anomalies, and structure findings in a way that helps both patients and clinicians focus their attention where it matters most.

The clinical domain expertise built into the prompting and analysis pipeline is what separates this from a generic "upload a document and ask ChatGPT" workflow. The system knows what matters in a lab report and what constitutes a clinically significant finding versus statistical noise.
