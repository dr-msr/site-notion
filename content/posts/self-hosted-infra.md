---
title: "Self-Hosted Infrastructure Stack — 5-Machine Tailscale Mesh"
slug: "self-hosted-infra"
date: "2025-04-15"
status: "Public"
type: "Post"
category: ["Portfolio", "Digital", "Automation"]
tags: ["infrastructure", "tailscale", "dokploy", "traefik", "minio", "waha", "self-hosted", "devops", "security"]
summary: "A 5-machine Tailscale mesh running Dokploy, Traefik, MinIO, WAHA, and monitoring infrastructure. Includes a real security incident response to CVE-2025-66478 that validated the architecture's resilience."
thumbnail: null
---

# Self-Hosted Infrastructure Stack

**Project Type:** Infrastructure Engineering / DevOps
**Scale:** 5-machine Tailscale mesh
**Stack:** Dokploy, Traefik, MinIO, WAHA, Prometheus/Grafana, Cloudflare Tunnel
**Security Incident:** CVE-2025-66478 response

---

## The Architecture

Five machines connected via Tailscale mesh network, forming a private overlay network with zero public inbound ports. The machines span cloud providers (Oracle Cloud free tier, DigitalOcean) and architectures (ARM64, x86), unified under a single management plane.

**Dokploy** handles container orchestration and deployment. It is the self-hosted alternative to platforms like Railway or Render, providing a deployment dashboard for Docker containers without the per-container pricing of managed PaaS. All client applications, internal tools, and automation infrastructure deploy through Dokploy.

**Traefik** serves as the reverse proxy and automatic SSL termination layer. Every service gets HTTPS automatically via Let's Encrypt, with routing rules defined in Docker labels rather than nginx configuration files. Cloudflare Tunnel sits in front of Traefik for public-facing services, meaning the actual server IP is never exposed.

**MinIO** provides S3-compatible object storage, self-hosted. Used for newsletter image assets (CDN-proxied for public reads), backup storage, and application file storage. The decision to self-host object storage rather than use S3 directly was driven by cost (free tier) and data sovereignty (Malaysian client data stays on infrastructure I control).

**WAHA** (WhatsApp HTTP API) is a self-hosted WhatsApp Business API gateway. It enables the WhatsApp automation workflows described in the automation practice, providing HTTP endpoints for sending and receiving WhatsApp messages without relying on third-party SaaS middleware.

**Monitoring** runs Prometheus for metrics collection and Grafana for dashboards. Uptime monitoring, container health, disk usage, and network metrics are tracked across all five machines.

---

## Security Incident: CVE-2025-66478

The architecture was validated under real conditions when CVE-2025-66478 required an emergency response. The vulnerability affected a component in the stack and required rapid assessment, patching, and verification across all machines.

The response demonstrated that the infrastructure was designed for exactly this scenario: Tailscale mesh meant patches could be applied remotely without exposing management interfaces. Dokploy's container-based deployment meant affected services could be redeployed with patched images without downtime to unaffected services. The monitoring stack provided immediate visibility into whether the vulnerability had been exploited before patching.

The incident was contained with no data loss, no service interruption, and no client impact. The post-mortem documented the response timeline and identified improvements to the patching workflow.

---

## What This Demonstrates

Production infrastructure operation, not just deployment scripting. A coherent architecture where every component (mesh networking, container orchestration, reverse proxy, object storage, monitoring) serves a specific purpose and the interactions between them are understood. Cost discipline: this entire stack runs on free tier and minimal-cost instances, proving that enterprise-grade infrastructure patterns do not require enterprise budgets. Security-first design (zero public ports, Tailscale mesh, Cloudflare Tunnel) validated by a real incident response. And the operational maturity to maintain, monitor, and defend running infrastructure, not just build it.

*See also: [Workflow Automation Practice](/automation-practice) and [Ephemeral Deployment Architecture](/civic-ephemeral-infra).*
