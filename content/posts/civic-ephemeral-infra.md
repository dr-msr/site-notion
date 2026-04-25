---
title: "Outrunning the Block: Ephemeral Deployment Architecture for Censorship-Resistant Publishing"
slug: "civic-ephemeral-infra"
date: "2025-08-01"
status: "Public"
type: "Post"
category: ["Portfolio", "Automation"]
tags: ["infrastructure", "security", "cloudflare-tunnel", "tailscale", "devops", "censorship-resistance"]
summary: "Designed and operated a self-healing deployment architecture that kept a civic publication accessible despite active DNS-level blocking by a national regulator."
thumbnail: null
---

# Outrunning the Block: Ephemeral Deployment Architecture for Censorship-Resistant Publishing

**Project Type:** Infrastructure Engineering / Adversarial Operations
**Client:** A civic organization operating under regulatory pressure
**Role:** Sole technical lead
**Outcome:** Publication never missed a scheduled send due to infrastructure blocking

---

## The Problem

A civic organization's web presence was subject to recurring DNS-level censorship. Each new domain or subdomain was blocked within days of detection, severing access to subscriber management, newsletter archives, and public content. Enterprise anti-censorship tooling was cost-prohibitive. The entire technical operation was a one-person team.

![Ephemeral deployment architecture outpacing DNS-level censorship](/images/portfolio/civic-ephemeral-infra-1.png)


## The Solution

An ephemeral deployment pattern on a PaaS provider. A fresh service instance with a randomized subdomain is deployed on a weekly cadence, staying ahead of the regulator's detection-to-block lag (approximately 3 days). PostgreSQL serves as the sole persistent component, surviving across disposable application instances. The newsletter platform (a custom fork of an open-source mailing list manager) reconnects to persistent storage on each redeployment, requiring no subscriber data migration.

**Network security posture:** Zero public inbound ports on the development server (ARM64 cloud VM). Cloudflare Tunnel for all public-facing traffic, eliminating direct IP exposure. Tailscale mesh for private administrative access. VPN with foreign exit node for operationally sensitive tasks.


![Subscriber-integrated magic link authentication flow across three systems](/images/portfolio/civic-ephemeral-infra-2.png)

## Technical Depth

Diagnosed a concurrency race condition in the mailing platform's campaign runner that caused progressive duplicate sends. The root cause was a goroutine scheduling issue at connection concurrency > 1. Developed a pre-send configuration protocol and post-send verification queries as a mitigation layer.

Maintained a custom fork of the mailing platform to accommodate deployment-specific patches and template customizations not supportable upstream. Worked around missing ARM64 Linux binaries for the PaaS CLI tooling, and discovered undocumented environment variable naming that contradicted official documentation.

## Subscriber-Integrated Community Infrastructure

Extended the platform with a commenting system (Remark42, self-hosted, privacy-first) that reuses the mailing platform's existing subscriber magic links for authentication. A Cloudflare Worker validates the magic link and sets auth cookies for the commenting engine. Subscribers can comment on newsletter archives without creating a new account or remembering a new password. Zero additional credential burden.

This magic-link-to-commenting-engine auth bridge via edge worker is three systems (mailing platform, commenting engine, edge worker) composed into a seamless subscriber experience with no new credentials.

## What This Demonstrates

Adversarial engineering: building for environments where the infrastructure itself is a target. Solo technical leadership across infrastructure, DevOps, editorial tooling, and platform design. Resourcefulness over resources: cloud free tiers, open-source tooling, PaaS ephemeral instances, no enterprise budget but enterprise-grade operational thinking. Intellectual honesty: mitigations are labeled as mitigations, not fixes.

*Part of a civic tech engagement. See also: [Newsletter Production Pipeline](/civic-newsletter) and [Geospatial & Content Monitoring System Design](/civic-system-design).*

*\* Images are conceptualized, not the real implementation to protect client's intellectual right*
