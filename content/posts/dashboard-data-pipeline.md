---
title: "Government Open Data Pipeline: Data Engineering for the Dashboard"
slug: "dashboard-data-pipeline"
date: "2025-02-16"
status: "Public"
type: "Post"
category: ["Portfolio", "Digital"]
tags: ["dashboard", "data-engineering", "etl", "open-data", "government", "python"]
summary: "A data engineering pipeline that ingests, cleans, and structures Malaysian government open data for integration into the personal finance dashboard's economic context layer."
thumbnail: null
---

# Government Open Data Pipeline

**Project Type:** Data Engineering
**Stack:** Python, PostgreSQL, scheduled jobs
**Data Sources:** Malaysian government open data portals

---

## The Pipeline

A data engineering pipeline that pulls publicly available economic data from Malaysian government open data portals, cleans and normalizes it, and loads it into the dashboard's database for contextual analysis alongside personal financial data.

The goal is to provide economic context to personal finance trends. When your spending on groceries increases 15% month-over-month, is that a personal behavior change or is it tracking the national CPI for food? When your fuel spending drops, is it because you drove less or because pump prices changed? The government data pipeline provides the reference frame that turns personal finance data from isolated numbers into situated analysis.

## Pipeline Stages

Ingestion pulls from government data portals via their published APIs and CSV exports. Cleaning handles the realities of government data: inconsistent date formats, encoding issues, missing values, and schema changes between reporting periods. Normalization maps government categories to the dashboard's internal taxonomy. Loading writes cleaned data to PostgreSQL with idempotent upserts so the pipeline can be re-run safely.

The pipeline runs on a scheduled cadence, with monitoring for source availability (government portals have unannounced maintenance windows) and data freshness (some datasets update monthly, others quarterly, some stop updating without notice).

## What This Demonstrates

Data engineering beyond "call an API": handling real-world data quality issues from institutional sources. ETL pipeline design with idempotency and monitoring. The ability to combine heterogeneous data sources (personal transactions, government statistics) into a unified analytical layer. And the intellectual curiosity to add economic context to what could have been a simple expense tracker.

*Part of a dashboard project. See also: [Full-Stack Engineering](/dashboard-fullstack), [Product Design](/dashboard-product-design), [Infrastructure](/dashboard-infrastructure), and [Brand & Design System](/dashboard-brand-design).*
