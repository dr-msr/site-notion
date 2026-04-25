---
title: "Untangling a Startup's Technical Debt Before It Becomes a Crisis"
slug: "mental-health-governance"
date: "2025-03-15"
status: "Public"
type: "Post"
category: ["Portfolio", "Consultancy"]
tags: ["governance", "technical-debt", "due-diligence", "platform-assessment"]
summary: "Diagnosed systemic platform governance risks in a bootstrapped social enterprise, including a live production system deployed on a third party's personal account."
thumbnail: null
---

# Untangling a Startup's Technical Debt Before It Becomes a Crisis

**Project Type:** Technical Assessment & Platform Governance
**Client:** A Malaysian mental health social enterprise
**Deliverable:** Governance risk assessment with prioritized recommendations

---

## The Situation

Beyond the immediate hosting cost problem, the organization had deeper structural issues stemming from a pattern of isolated, transactional developer engagements with no integrated technical ownership. Previous developers had built components independently, deployed them on personal accounts, and moved on without proper handover.

The most critical finding: their core booking platform (a Next.js application handling customer payments and peer supporter scheduling) was deployed on a third-party developer's personal Vercel account. The organization had no access to the deployment pipeline. No GitHub-Vercel integration existed. The source code repository showed zero registered deployment environments.

## What I Found

**Governance Risk.** I traced the deployment chain for the booking platform and discovered it was running on an account the organization did not own or control. Through the GitHub API, I verified that no CI/CD integration existed: zero deployments, zero environments registered against the repository. The previous developer had deployed via `vercel --prod` from a local machine, leaving no audit trail.

The operational risk was severe: if the developer's account hit free tier limits, was suspended, or the project was deleted, the booking platform (their primary revenue tool) would go offline without warning.

**Structural Pattern.** This wasn't an isolated incident. Each developer engagement had produced an isolated component with no integration to the broader ecosystem. The founding team (non-technical backgrounds) had been making infrastructure decisions without the context to evaluate vendor recommendations. A previous "IT advisor" had suggested hosting plans that didn't match the application stack.

**Operational Overhead.** The COO was manually reconciling data across three disconnected platforms (WordPress, Laravel assessment tool, Next.js booking system) with no shared database or API layer.

## The Key Insight

The organization's technical problems were not caused by any single bad developer or vendor. They were the predictable result of engaging developers transactionally (one task, one payment, goodbye) without anyone holding integrated technical ownership across the ecosystem. Each developer made reasonable decisions in isolation. The dysfunction emerged from the pattern itself.

## What This Demonstrates

Diagnostic and advisory capability, not code output. The ability to see systemic patterns rather than technical symptoms. The governance risk finding (live production system on a third party's personal account) is the kind of discovery that prevents crises rather than responds to them. This is what happens when someone with both technical depth and business awareness examines an organization's infrastructure as a whole rather than one ticket at a time.

*Part of a case study. See also: [Cutting 85% Hosting Costs](/mental-health-migration) and [Designing a Sustainable Advisory Model](/mental-health-advisory).*
