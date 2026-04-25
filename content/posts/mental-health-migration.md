---
title: "Cutting 85% Hosting Costs for a Mental Health Startup"
slug: "mental-health-migration"
date: "2025-03-01"
status: "Public"
type: "Post"
category: ["Portfolio", "Digital", "Automation"]
tags: ["infrastructure", "migration", "cloudflare", "cloudways", "cost-optimization"]
summary: "Migrated a mental health social enterprise off overprovisioned legacy hosting, centralised their DNS on Cloudflare, and reduced monthly infrastructure costs by 85%."
thumbnail: null
---

# Cutting 85% Hosting Costs for a Mental Health Startup

**Project Type:** Infrastructure Migration & Cost Optimization
**Client:** A Malaysian mental health social enterprise
**Deliverable:** Completed migration + branded technical report

---

## The Situation

A mental health social enterprise providing peer support services was paying RM470/month (approximately RM5,640/year) for shared hosting on a legacy provider. The plan was overprovisioned for their actual traffic, and the provider refused downgrade requests. Their infrastructure was fragmented across multiple platforms with no centralized management.

![Infrastructure migration before and after with 85 percent cost reduction](/images/portfolio/mental-health-migration-1.png)


Their tech stack at the time: a WordPress landing page, a Laravel + Redis assessment tool for B2B mental health questionnaires, a Next.js booking platform for peer supporter scheduling and payments, DNS managed through the hosting provider's panel, domain registration through Squarespace, and email on Zoho free tier. Several deprecated subdomains still pointed to inactive services.

## What I Did

**Discovery.** Catalogued all active services, DNS records, and email routing (MX/SPF/DKIM). Mapped actual resource utilization against provisioned capacity. Documented credentials and access points across the fragmented infrastructure. Identified deprecated services still consuming DNS entries and potential security surface.

**Migration.** Moved DNS management to Cloudflare (free tier) for centralized control. Migrated WordPress and Laravel applications from legacy shared hosting to Cloudways (managed cloud hosting on DigitalOcean). Preserved all email routing through proper MX, SPF, and DKIM record configuration. Maintained the existing Vercel deployment for the Next.js booking platform. Configured SSL certificates and verified all subdomains post-migration.

**Testing & Handover.** Verified all services operational. Produced a branded migration report documenting discovery findings, work performed, testing results, and open items. Handed over credentials with proper access documentation.

## Outcomes

Monthly hosting cost reduced from RM470 to approximately RM80. Annualized savings of approximately RM4,680. DNS centralized under a single management plane instead of being locked inside a hosting provider's panel. Migration completed within the client's billing cycle deadline to prevent another month of legacy charges.

## What This Demonstrates

Multi-platform migration planning across WordPress, Laravel, DNS, and email. Cloudflare DNS configuration including email routing preservation. Risk assessment and stakeholder communication for non-technical founders. Professional technical documentation (branded report with phased deliverables) that established the standard used in subsequent client engagements.

*Part of a case study. See also: [Platform Governance Assessment](/mental-health-governance) and [Designing a Sustainable Advisory Model](/mental-health-advisory).*

*\* Images are conceptualized, not the real implementation to protect client's intellectual right*
