---
title: "Workflow Automation Practice: Orchestration Engines, Edge Workers, and Operational Pipelines"
slug: "automation-practice"
date: "2025-03-15"
status: "Public"
type: "Post"
category: ["Portfolio", "Automation"]
tags: ["automation-engine", "automation", "workflow", "whatsapp", "cloudflare-workers", "cloud-hosting"]
summary: "A consolidated view of production workflow automation work across multiple clients: e-commerce order pipelines, WhatsApp sales automation, event registration systems, and operational dashboards, all built on a workflow automation engine with edge worker integration."
thumbnail: null
---

# Workflow Automation Practice

**Project Type:** Workflow Engineering / Business Automation
**Primary Stack:** Workflow automation engine (self-hosted and cloud-hosted), Cloudflare Workers, WhatsApp Business API
**Scope:** Multiple client engagements

---

## The Practice

Workflow automation is not a single project but a recurring capability deployed across multiple client engagements. The common thread: businesses running on manual processes (copy-paste between apps, forwarding messages, checking spreadsheets) that can be replaced with event-driven automation without requiring custom application development.

![Workflow automation architecture with orchestration engine and edge workers](/images/portfolio/automation-practice-1.png)


The stack centers on a workflow automation engine as the orchestration layer, chosen for its self-hostable nature (no vendor lock-in on workflow definitions), visual workflow builder (clients can understand what the automation does), and extensive integration library. Edge logic runs on Cloudflare Workers for latency-sensitive operations. Hosting varies by client: managed container platforms for cloud deployments, self-hosted on personal infrastructure for internal tools.

---

## E-Commerce Order Pipeline

Built for the boutique flower delivery client. Shopify order webhooks trigger an automation workflow that processes the order, extracts delivery details (date, time slot, message card text, recipient address), formats a notification for the operations team, and pushes it to the appropriate channel. The pipeline replaces a manual process where orders came through WhatsApp, were forwarded to Gmail, and manually entered into a tracking spreadsheet.


![E-commerce order processing pipeline from webhook to notification](/images/portfolio/automation-practice-2.png)

## WhatsApp Sales Automation

Built for a print and packaging client. Inbound WhatsApp messages are captured via a self-hosted WhatsApp HTTP API gateway, classified by intent (new quote request, order follow-up, general inquiry), and routed to the appropriate workflow. Quote requests trigger a structured data extraction pipeline that pulls specifications (quantity, material, dimensions, finishing) from conversational messages and stages them for pricing.

## Event Registration Automation

An event registration pipeline that handles sign-up form submissions, sends confirmation messages, manages waitlists, and generates attendance tracking. Built to replace a manual process involving Google Forms, spreadsheet monitoring, and individual email responses.

## Scratchpad Dashboard

An operational dashboard that aggregates automation metrics: workflow execution counts, error rates, processing times, and queue depths across all active automations. Built as an internal tool for monitoring the health of deployed workflows and catching failures before clients notice them.

---

## What This Demonstrates

Workflow automation as a repeatable practice, not a one-off project. The ability to identify manual business processes and replace them with event-driven pipelines. Multi-platform integration (Shopify, WhatsApp, Google Workspace, custom APIs) through a single orchestration layer. Self-hosted infrastructure (WhatsApp API gateway, automation engine instances) that gives clients data sovereignty. And the operational discipline to monitor and maintain automation in production, not just build it and walk away.

*See also: [E-Commerce Platform Migration](/ecommerce-migration), [Nadi Warranty Automation](/nadi-warranty), and [Self-Hosted Infrastructure Stack](/self-hosted-infra).*

*\* Images are conceptualized, not the real implementation to protect client's intellectual right*
