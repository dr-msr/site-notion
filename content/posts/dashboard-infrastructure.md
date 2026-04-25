---
title: "Self-Hosted 3-Container Architecture — Dashboard Infrastructure"
slug: "dashboard-infrastructure"
date: "2025-02-18"
status: "Public"
type: "Post"
category: ["Portfolio", "Digital"]
tags: ["dashboard", "infrastructure", "docker", "self-hosted", "devops", "supabase"]
summary: "The infrastructure design behind the personal finance dashboard: a 3-container Docker architecture running on the self-hosted Tailscale mesh, with automated backups and zero-downtime deployments."
thumbnail: null
---

# Self-Hosted 3-Container Architecture

**Project Type:** Infrastructure / DevOps
**Stack:** Docker, Supabase (self-hosted), Traefik, Tailscale
**Containers:** Application (Next.js), Database (PostgreSQL/Supabase), Reverse Proxy (Traefik)

---

## The Architecture

The dashboard runs as three Docker containers on the self-hosted infrastructure mesh: the Next.js application server, a self-hosted Supabase instance (PostgreSQL with auth and real-time subscriptions), and Traefik handling reverse proxy and SSL termination.

The decision to self-host Supabase rather than use their managed offering was driven by two factors. First, cost: Supabase's free tier has row and storage limits that a personal finance application would eventually hit. Self-hosted has no artificial limits. Second, data sensitivity: personal financial data stays on infrastructure I control, with no third-party access to the database.

## Deployment

Deployments use Dokploy's container management, triggered by git push. The deployment process builds a new container image, performs a health check, and swaps traffic to the new container only after the health check passes. The old container remains available for rollback for 24 hours.

Database migrations run as part of the deployment pipeline, with automatic backup before any schema change. Backups are stored on the MinIO instance (separate machine on the Tailscale mesh) with 30-day retention.

## What This Demonstrates

Infrastructure design that matches the application's actual requirements rather than defaulting to managed services. Cost-conscious self-hosting (the entire stack runs on free-tier cloud instances) without sacrificing operational quality. Automated backup and deployment workflows. And the full-stack ownership from application code through database design through infrastructure operation.

*Part of a dashboard project. See also: [Full-Stack Engineering](/dashboard-fullstack), [Government Open Data Pipeline](/dashboard-data-pipeline), [Product Design](/dashboard-product-design), and [Brand & Design System](/dashboard-brand-design).*
