---
title: "End-to-End Newsletter Engineering: From Editorial Workflow to Inbox"
slug: "civic-newsletter"
date: "2025-08-15"
status: "Public"
type: "Post"
category: ["Portfolio", "Automation"]
tags: ["newsletter", "email-engineering", "smtp", "minio", "template-design", "editorial"]
summary: "Built and operated the complete production pipeline for a weekly subscriber newsletter serving 2,200+ subscribers, covering editorial coordination, template engineering, asset delivery, and SMTP relay management."
thumbnail: null
---

# End-to-End Newsletter Engineering: From Editorial Workflow to Inbox

**Project Type:** Content Infrastructure / Email Engineering
**Client:** A civic organization (anonymized)
**Role:** Sole technical lead and production operator
**Scale:** 2,200+ subscribers, weekly cadence

---

## The Problem

The organization needed a recurring publication that could deliver content to 2,200+ subscribers weekly, maintain a distinctive visual identity, and operate on near-zero budget with no dedicated design or engineering staff.

## Editorial Tooling

Weekly production cycle with contributor coordination and editorial restructuring. A pen-name system for contributor privacy. Style guide enforcement across editions. The editorial process was as much a design challenge as the technical infrastructure: coordinating contributors, maintaining voice consistency, and shipping on schedule every week.

## Template Engineering

Custom HTML email templates with a distinctive vintage newspaper aesthetic (warm sepia/teal palette, serif/sans-serif typography pairing). Deep mastery of the mailing platform's Go-based template syntax, including tracking pixel placement, link tracking shorthand, and campaign variable interpolation.

This included documenting critical template gotchas (recursive depth errors from nested template calls) that weren't covered in upstream documentation and would have caused production failures without careful testing.

## Asset and Delivery Infrastructure

MinIO object storage for image assets, CDN-proxied for public reads. Migrated from self-hosted SMTP to a managed relay service for improved deliverability. Reverse-engineered the relay provider's undocumented internal template format (a block-based schema with UUIDs and grid layout properties that differs significantly from their published specification).

## Outcome

Multiple editions produced and delivered on schedule. Consistent subscriber growth with strong engagement metrics. The publication became the organization's primary communication channel to its base.

## What This Demonstrates

Full-stack ownership beyond code: editorial process, visual design, delivery infrastructure, and operational discipline. The ability to operate a complete content production pipeline solo, shipping reliably every week. Email engineering depth that goes beyond "send an email" into template systems, deliverability optimization, and infrastructure management.

*Part of a civic tech engagement. See also: [Ephemeral Deployment Architecture](/civic-ephemeral-infra) and [Geospatial & Content Monitoring System Design](/civic-system-design).*
