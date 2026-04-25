---
title: "From WordPress to Shopify: Modernizing a Boutique Flower Delivery Business"
slug: "ecommerce-migration"
date: "2025-02-01"
status: "Public"
type: "Post"
category: ["Portfolio", "Digital", "Automation"]
tags: ["shopify", "woocommerce", "migration", "dns", "cloudflare", "email-marketing", "e-commerce"]
summary: "Platform migration and business modernization for a boutique flower delivery business. From diagnosis through custom Shopify theme build, DNS migration, and integration architecture."
thumbnail: null
---

# From WordPress to Shopify: Modernizing a Boutique Flower Delivery Business

**Project Type:** E-Commerce Consulting / Platform Migration
**Client:** A boutique flower delivery business
**Engagement:** January–May 2025, phased modular delivery
**Tech Stack:** Shopify (custom Git theme), Cloudflare, workflow automation engine (cloud-hosted), email marketing service, Meta Commerce Manager

---

## The Diagnosis

The client had been running on a self-managed WordPress/WooCommerce stack for several years. Online orders had slowed to a trickle. The founder's instinct was that migrating to Shopify would solve the problem.

![Platform migration from fragmented WordPress stack to unified Shopify ecosystem](/images/portfolio/ecommerce-migration-1.png)


Before touching any code, discovery reframed the conversation. The problem wasn't the platform. WordPress/WooCommerce is perfectly capable for this use case. The real bottleneck was a combination of factors: traffic volume too low for Google to even index performance metrics, a fragmented workflow where orders came through WhatsApp and were manually forwarded to Gmail, technical debt from layered ChatGPT-generated code snippets and multi-site configurations, and a trust deficit from a previous developer who had locked the founder out of his own domain (requiring police intervention to recover access).

The recommendation: yes, migrate to Shopify, but not because WordPress is inferior. Migrate because the founder's role demanded less time fighting infrastructure and more time on marketing, product, and operations. Shopify would buy back focus.


![Shopify as canonical PIM with downstream integration architecture](/images/portfolio/ecommerce-migration-2.png)

## What Was Delivered

**Shopify Store Build.** Custom theme built from scratch via Git (not a purchased theme), with luxury minimalist design. The store was designed around the actual purchase flow for flower delivery: hero imagery, collection browsing, product variants, delivery date/time selection, message cards, and add-on products. Mobile-first responsive design with urgency counters, auto-close logic for next-day delivery cutoffs, and welcome voucher popup tied to newsletter signup.

**DNS & Hosting Migration.** DNS migrated from legacy hosting to Cloudflare, with the primary domain proxied and a store subdomain CNAME'd to Shopify. Email infrastructure audited and preserved: nine active mailboxes confirmed, passwords reset. An email marketing service staged for newsletter automation with DKIM/DMARC records prepared.

**Product Data Migration.** WooCommerce catalog migrated to Shopify using the native Store Importer. Deliberately chose the built-in tool over a custom API pipeline: reduced engineering overhead and was well-documented for the client to understand.

**Integration Architecture.** Shopify positioned as the canonical Product Information Manager, feeding downstream into Meta Commerce Manager for Facebook, Instagram, and WhatsApp catalog sync. Automation workflows built on a workflow automation engine (cloud-hosted) for operational notifications and order processing, with Cloudflare Workers handling lighter logic.

## Consulting Approach

Phased, value-based pricing: RM500 in the first month, scaling to RM1,000 as deliverables expanded. No large upfront payment. No vendor lock-in. All credentials in the client's name. All infrastructure designed to be handoverable: if the engagement ended tomorrow, the client would retain full ownership and access to everything built. Platform costs absorbed during trial period and billed to the client only after launch.

*Part of an e-commerce engagement. See also: [Edge Admin Dashboard](/ecommerce-dashboard) and [Consulting Methodology](/ecommerce-methodology).*

*\* Images are conceptualized, not the real implementation to protect client's intellectual right*
