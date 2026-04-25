---
title: "PADU Security Disclosure: Finding a Critical Vulnerability in Malaysia's National Database"
slug: "padu-security"
date: "2024-01-25"
status: "Public"
type: "Post"
category: ["Portfolio", "Security"]
tags: ["security", "responsible-disclosure", "malaysia", "public-interest", "padu"]
summary: "Discovered and responsibly disclosed a critical password reset vulnerability in PADU, Malaysia's national citizen database, within hours of its public launch. The disclosure reached 1.3 million views, prompted a same-day ministerial response, and was covered by 6+ major media outlets."
thumbnail: null
---

# PADU Security Disclosure

**Project Type:** Security Research / Responsible Disclosure
**Target:** PADU (Pangkalan Data Utama), Malaysia's national citizen database
**Timeline:** Discovered within hours of public launch (January 2024)
**Outcome:** Vulnerability patched by government after disclosure
**Impact:** 1.3 million views on disclosure thread, same-day ministerial response
**Coverage:** [Malay Mail](https://www.malaymail.com), [SoyaCincau](https://soyacincau.com), [Lowyat.NET](https://www.lowyat.net), [The Rakyat Post](https://www.therakyatpost.com), [Malaysia Today](https://www.malaysia-today.net), and others
**Writeup:** Published on [Hashnode](https://hashnode.com/@drmsr)

---

## What Happened

PADU launched as Malaysia's centralised citizen database, intended to be the backbone of the government's targeted subsidy mechanism. Within hours of its public launch, I identified a critical vulnerability in the password reset flow that could have allowed unauthorized access to citizen accounts.

The vulnerability was documented in a detailed technical writeup published on Hashnode and a tweet thread that broke down the issue for a general audience. The disclosure reached approximately 1.3 million views across platforms. The response was swift: the responsible minister acknowledged the issue on the same day, and the government team deployed a patch.

## The Reach

The disclosure generated coverage from six or more major Malaysian media outlets. Malay Mail, SoyaCincau, Lowyat.NET (Malaysia's largest technology forum), and The Rakyat Post all covered the story. The coverage was organic, driven by public interest in the security of a system that every Malaysian citizen was being asked to trust with their personal data.

The 1.3 million views on the disclosure were not engagement-optimized content. It was a straightforward security finding communicated clearly. The reach came from the significance of the target (a national database) and the clarity of the explanation.

## Why This Matters

This was not a penetration test or a bug bounty. It was a citizen with security awareness looking at a system that affects every Malaysian, noticing something that should not have been there, and choosing to report it properly rather than exploit it or ignore it.

The same-day ministerial response demonstrated that responsible disclosure, when done transparently and in good faith, can produce rapid institutional action. The media coverage reflected the public interest dimension: a national database handling sensitive citizen data had a fundamental authentication flaw at launch.

## What It Demonstrates

Security awareness as a default lens, not a specialized service. The ability to assess authentication flows critically and communicate findings to both technical and non-technical audiences. Understanding of responsible disclosure protocols and civic engagement when public systems have vulnerabilities. The composure to handle national media attention around a sensitive government system. And the reach to make a security finding matter at scale: 1.3 million views, 6+ media outlets, ministerial engagement, all from a single individual's disclosure.

*See also: [National Media Appearances](/media-appearances).*
