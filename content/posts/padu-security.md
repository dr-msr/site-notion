---
title: "PADU Security Disclosure — Finding a Critical Vulnerability in Malaysia's National Database"
slug: "padu-security"
date: "2024-01-25"
status: "Public"
type: "Post"
category: ["Portfolio", "Security"]
tags: ["security", "responsible-disclosure", "malaysia", "public-interest"]
summary: "Discovered and responsibly disclosed a critical password reset vulnerability in PADU, Malaysia's national citizen database, within hours of its public launch. Covered by Malay Mail, SoyaCincau, and Malaysia Today."
thumbnail: null
---

# PADU Security Disclosure

**Project Type:** Security Research / Responsible Disclosure
**Target:** PADU (Pangkalan Data Utama), Malaysia's national citizen database
**Timeline:** Discovered within hours of public launch (January 2024)
**Outcome:** Vulnerability patched by government after disclosure
**Coverage:** [Malay Mail](https://www.malaymail.com), [SoyaCincau](https://soyacincau.com), [Malaysia Today](https://www.malaysia-today.net)
**Writeup:** Published on [Hashnode](https://hashnode.com/@drmsr)

---

## What Happened

PADU launched as Malaysia's centralised citizen database, intended to be the backbone of the government's targeted subsidy mechanism. Within hours of its public launch, I identified a critical vulnerability in the password reset flow that could have allowed unauthorized access to citizen accounts.

The vulnerability was responsibly disclosed through proper channels. The government team acknowledged the issue and deployed a patch.

## Why This Matters

This wasn't a penetration test or a bug bounty. It was a citizen with security awareness looking at a system that affects every Malaysian, noticing something that shouldn't have been there, and choosing to report it properly rather than exploit it or ignore it.

The media coverage (Malay Mail, SoyaCincau, Malaysia Today) reflected the public interest dimension: a national database handling sensitive citizen data had a fundamental authentication flaw at launch. The responsible disclosure process ensured it was fixed before it could be exploited at scale.

## What It Demonstrates

Security awareness as a default lens, not a specialized service. The ability to assess authentication flows critically. Understanding of responsible disclosure protocols and the importance of civic engagement when public systems have vulnerabilities. And the composure to handle national media attention around a sensitive government system.
