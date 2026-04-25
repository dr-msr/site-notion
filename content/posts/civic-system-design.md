---
title: "Geospatial Oversight & AI Content Monitoring: System Design for Civic Infrastructure"
slug: "civic-system-design"
date: "2025-09-01"
status: "Public"
type: "Post"
category: ["Portfolio", "Automation"]
tags: ["system-design", "postgis", "geospatial", "automation-engine", "ai-pipeline", "automation"]
summary: "System designs for a geospatial analysis platform detecting regulatory violations on protected land, and an AI-assisted content monitoring pipeline with human-in-the-loop editorial review."
thumbnail: null
---

# Geospatial Oversight & AI Content Monitoring: System Design

**Project Type:** System Design (design-phase work)
**Client:** A civic organization
**Role:** Sole technical lead and architect

---

## Geospatial Oversight Platform

**Stack:** PostGIS, Next.js, Supabase

A spatial analysis platform designed for detecting and verifying regulatory violations on protected land, integrating government cadastral data with satellite imagery and crowdsourced field reports.

**Core capabilities:** Overlay government cadastral (land parcel) boundary data with current satellite imagery. Crowdsourced report ingestion with geotagged photo evidence. Spatial queries including containment checks, intersection analysis, and buffer zones. Verification workflows for legal teams preparing formal complaints.

**Documented unsolved problem:** The relevant government survey authority uses a proprietary coordinate projection system not available in any public geodetic database. Accurate coordinate transformation to WGS84 (standard GPS) remains an open precision problem, meaning boundary overlays carry a margin of error that must be disclosed in any legal application.

The honest documentation of an unsolved technical constraint is itself a signal of engineering maturity. The design demonstrates the ability to scope complex systems where technical, regulatory, and legal requirements intersect.

---

## AI-Assisted Content Monitoring Pipeline

**Orchestration:** Workflow automation engine

A workflow-automated pipeline that monitors news and social sources for domain-relevant developments, filters by keyword relevance, and produces AI-assisted editorial drafts for human review.

**Pipeline stages:** Ingestion via RSS and social monitoring across relevant news sources. Keyword filtering with domain-specific terminology matching. Content extraction using trafilatura for articles and feedparser for RSS. AI draft generation via LLM API to produce initial article drafts from extracted source material. Human approval gate ensuring no AI-generated content enters the editorial pipeline without explicit sign-off.

The critical design principle: human-in-the-loop, not human-out-of-the-loop. AI assists the editorial process; it does not replace editorial judgment.

---

## What These Designs Demonstrate

The ability to scope systems that sit at the intersection of technology, regulation, and civic purpose. Practical workflow automation design for real content operations. Appropriate caution around AI-generated content. And the intellectual honesty to label unsolved problems as unsolved rather than burying them in optimistic assumptions.

*Part of a civic tech engagement. See also: [Ephemeral Deployment Architecture](/civic-ephemeral-infra) and [Newsletter Production Pipeline](/civic-newsletter).*
