---
title: "Personal Finance Dashboard: Full-Stack Engineering"
slug: "dashboard-fullstack"
date: "2025-02-15"
status: "Public"
type: "Post"
category: ["Portfolio", "Digital"]
tags: ["dashboard", "full-stack", "next-js", "supabase", "finance", "data-visualization"]
summary: "A personal finance dashboard built as a full-stack application: Next.js frontend, Supabase backend, with transaction categorization, budget tracking, and trend visualization."
thumbnail: null
---

# Personal Finance Dashboard: Full-Stack Engineering

**Project Type:** Full-Stack Web Application
**Stack:** Next.js, Supabase (PostgreSQL + Auth), Tailwind CSS
**Status:** In active personal use

---

## The Application

A personal finance dashboard that aggregates transaction data, categorizes spending, tracks budgets, and visualizes financial trends over time. Built as a full-stack application with Next.js on the frontend, Supabase providing the PostgreSQL database and authentication layer, and a data pipeline that ingests transaction records from multiple sources.

![Full-stack finance dashboard architecture with Next.js and Supabase](/images/portfolio/dashboard-fullstack-1.png)


The application was built to scratch a personal itch: existing personal finance tools are either too simple (spreadsheet tracking), too complex (enterprise accounting software), or require giving a third-party service access to bank credentials. This dashboard sits in the middle: powerful enough for real analysis, simple enough to maintain as a solo project, and self-hosted so financial data never leaves controlled infrastructure.


![Rule-based transaction categorization engine with manual override](/images/portfolio/dashboard-fullstack-2.png)

## Technical Decisions

Transaction categorization uses a rule-based engine with manual override rather than ML classification. The reasoning: for a single-user application with hundreds (not millions) of transactions per month, a well-maintained rule set is more accurate, more predictable, and far simpler to debug than a classification model. The rules are stored as database entries, making them editable without code changes.

Budget tracking uses a rolling-average approach rather than fixed monthly targets. This accommodates the reality that spending is lumpy: a month with annual insurance premiums looks nothing like a normal month, and fixed budgets penalize necessary irregular spending.

## What This Demonstrates

Full-stack development from database schema design through API layer to frontend visualization. Practical architecture decisions (rules over ML, rolling averages over fixed budgets) driven by actual use requirements rather than resume-driven development. Self-hosted deployment on personal infrastructure. And the discipline to build and maintain a tool for personal use with the same quality standards applied to client work.

*Part of a dashboard project. See also: [Government Open Data Pipeline](/dashboard-data-pipeline), [Product Design](/dashboard-product-design), [Infrastructure](/dashboard-infrastructure), and [Brand & Design System](/dashboard-brand-design).*

*\* Images are conceptualized, not the real implementation to protect client's intellectual right*
