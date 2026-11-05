---
title: "Public advisory: Malaysia's cyber threat level is now Medium. What it means for you, and what anyone in IT must do now"
slug: "cyber-threat-level-en"
date: "2026-11-05"
status: "Public"
type: "Post"
category: ["Advisory"]
tags: ["advisory", "security", "nacsa", "pdpa", "healthcare", "malaysia"]
summary: "On 4 November 2026 the National Security Council raised Malaysia's cyber threat level from Low to Medium. The same week, Kluang billboards were hijacked and DigiCert confirmed a breach. Here is what to do now, and what anyone who builds or runs a system has to do this week."
thumbnail: null
---

<div style="text-align:center"><a href="/advisory/cyber-threat-level-bm">Baca dalam Bahasa Melayu</a></div>

## What happened

On 4 November 2026 the National Security Council (Majlis Keselamatan Negara, MKN) announced that the National Cyber Security Agency (NACSA) has raised the National Cyber Security Threat Level from **Low** to **Medium**. MKN called it a precaution in light of current security developments, meant to keep essential services running.

It followed the Prime Minister's statement in the Dewan Rakyat on 3 November, after a special MKN meeting the day before. He said Malaysia is considered a potential target for cyberattacks, for two reasons: the country's digital infrastructure and data centres are among the strongest in the region, and its position on Palestine. He added that not everything the government knows can be made public.

Organisations that run the country's critical systems (the National Critical Information Infrastructure, or NCII) have been ordered to carry out nine readiness measures. The four made public are round-the-clock security monitoring, patching of systems, multi-factor authentication, and updated service continuity plans. Sector heads must now report their threat status to NACSA every week. In October alone, NACSA's coordination centre (NC4) issued eight alerts about vulnerabilities affecting critical operators and government agencies.

::: tab Public

![Public advisory infographic for the public: Malaysia's cyber threat level is now Medium, what it means and six things to do now](https://drmsr.dev/images/advisory/cyber-threat-level-public-en.png?v=2)

[Share the public infographic](#share-image:/images/advisory/cyber-threat-level-public-en.png)

## What this means for you

This is not a drill, and it is already touching ordinary people. In the same week the level was raised:

- **Kluang, 1 November.** Eight Kluang Municipal Council LED screens around the town were hijacked to show pornographic videos. A group calling itself "Leakers" claimed it, said it wanted to expose weak security, and claimed the same sweep hit screens in Egypt, Iraq, Brazil and China. Police have opened investigations. ([report](https://penangtoday.my/news/10192/hacker-group-leakers-says-kluang-led-billboard-hack-aimed-to-expose-weak-security/))
- **DigiCert.** One of the world's largest certificate authorities confirmed that an internal system holding archived customer records was accessed without authorisation, exposing business contact details and, for some accounts, identity documents. DigiCert says certificate issuance was not affected. ([report](https://gbhackers.com/digicert-confirms-data-breach/))
- **Banking app prompts.** On Threads, people are reporting approval requests appearing in their banking app for purchases they never made. These are user reports, not a confirmed incident, but they are exactly what an account takeover attempt looks like.

```gallery
[
 {
  "src": "https://drmsr.dev/images/advisory/cyber-threat-level-kluang.png?v=1",
  "alt": "News headline: Kluang LED billboard hack",
  "caption": "Penang Today, 1 November 2026: the group claiming the Kluang LED hijack."
 },
 {
  "src": "https://drmsr.dev/images/advisory/cyber-threat-level-digicert.png?v=1",
  "alt": "News headline: DigiCert confirms data breach",
  "caption": "GBHackers, 5 November 2026: DigiCert confirms a breach of customer records."
 },
 {
  "src": "https://drmsr.dev/images/advisory/cyber-threat-level-mae-report.png?v=1",
  "alt": "A Threads user's screenshot of an unexpected banking approval request",
  "caption": "A user report on Threads, 4 November 2026: an approval request for a purchase they never made, rejected in time. Name and account details blurred."
 }
]
```

The government calls the higher level a precaution. Read alongside this week, it is a warning to act now. Official bodies and banks never send you links to click, apps to install, or ask for your password or one-time code.

## What to do now

1. If your banking app asks you to approve something you did not start, reject it. Then call the number printed on your card and tell your bank. Do not approve "to see what happens".
2. Turn on two-step verification. WhatsApp (Settings, Account, Two-step verification), your email, your banking app, your Google or Apple account. This one setting stops most account takeovers.
3. Treat urgent messages as suspicious, especially any that mention this alert, your bank, the government, or an "update". Do not tap the link. Open the official app yourself.
4. Update your phone and your computer, and never install an app from a link. Install pending system and app updates today. If you received a ZIP file through WhatsApp recently, read our [earlier advisory](/advisory/whatsapp-malware-en).
5. Never give anyone your one-time code (OTP), and back up what matters. Not your "bank", not "the police", not "tech support". Keep one copy of your photos and files somewhere that is not the same device.
6. If you are scammed, call 997 at once. The National Scam Response Centre runs 24 hours a day and the call counts as a police report. Reporting within 24 hours gives the best chance of freezing the money.

:::

::: tab IT and developers

![Public advisory infographic for IT and developers: the eleven NCII sectors and an eight-step checklist](https://drmsr.dev/images/advisory/cyber-threat-level-it-en.png?v=2)

[Share the IT infographic](#share-image:/images/advisory/cyber-threat-level-it-en.png)

## If you build or run a system: you are a primary target

This part is for developers, system owners, the person who "handles IT" at a clinic or a small company, and everyone who has shipped an app with the help of AI. If your system touches any of the eleven NCII sectors, the readiness measures above are the standard you will be measured against, whether or not anyone has formally designated you.

The eleven sectors under the Cyber Security Act 2024 (Act 854) are: government; banking and finance; transportation; defence and national security; information, communication and digital; healthcare services; water, sewerage and waste management; energy; agriculture and plantation; trade, industry and economy; and science, technology and innovation.

Do this week, in this order:

1. **Multi-factor authentication on every administrative login.** Cloud console, hosting panel, domain registrar, GitHub, database, email, the admin page of your own app. A password alone is no longer acceptable for anything that can change production.
2. **Patch everything that faces the internet.** NACSA has already issued an alert on the PHP2Shell vulnerabilities (CVE-2026-109618 and CVE-2026-109619, severity 9.2). Patched releases are PHP 8.2.35, 8.3.36, 8.4.27 and 8.5.12. PHP 8.1 and older no longer receive security updates and must be upgraded. If you cannot patch now, NACSA's advice is to take the system offline until you can. Then do the same for your operating system, frameworks, dependencies, and plugins.
3. **Know who is logging in.** Keep access logs, keep them for at least 90 days, and set an alert for repeated failed logins and for logins from new countries. Round-the-clock monitoring is on the NCII list for a reason: most breaches are discovered by someone else.
4. **Have a backup you have actually restored.** A backup you have never tested is a hope. Write down what happens if the server is wiped tomorrow: where the backup is, who restores it, how long it takes. That is your service continuity plan.
5. **Least privilege, and rotate your secrets.** Remove access for anyone who has left. No API keys or passwords in source code or chat history. Each service gets its own credential with only the permissions it needs.
6. **Keep real data out of public AI tools.** This includes the AI assistant you code with. Production databases, exported spreadsheets, patient lists, customer lists and logs with personal data stay out of the prompt. Use synthetic or anonymised data to develop and debug.
7. **Know your legal duties before the incident, not after.** Under the Personal Data Protection Act (as amended, guidelines in force since 1 June 2025), a breach likely to cause significant harm, or affecting more than 1,000 people, must be reported to the Personal Data Protection Commissioner within 72 hours, and to the affected people within 7 days after that. You must appoint a Data Protection Officer if you process personal data of more than 20,000 people, or sensitive personal data (health data is sensitive) of more than 10,000. If your organisation is a designated NCII entity, Act 854 also requires you to notify NACSA immediately, with details within 6 hours and a full report within 14 days. Penalties reach RM500,000 and ten years' imprisonment. ISO/IEC 27001 is the standard the sector heads will be reading from; it is also a sensible checklist for a small team.
8. **Write a one-page incident plan.** Who is called first, how the system is isolated, who notifies the Commissioner and the clients, where the backup is. Print it. When the incident comes, nobody will remember.

## If you work in healthcare, read this twice

Health data is sensitive personal data under the law, and it is the most valuable kind to an attacker because it cannot be changed the way a password can. The moment your app, spreadsheet, chatbot or clinic system holds one patient's identity alongside their condition, you are a high-risk target, no matter how small you are.

Two weeks ago Johns Hopkins Bayview Medical Center in Baltimore notified 3,182 patients that their records had been exposed. There was no hacker. An employee uploaded a spreadsheet of patient information (admission dates, treatment, medications, medical record numbers) to a public AI tool the hospital had not approved. The hospital discovered it the same day, made the employee delete the prompt and the document, asked the AI company to delete its copy, and is paying for twelve months of credit monitoring for every patient. One upload, one afternoon.

If you are building a clinic management system, a health record, a lab result interpreter, a clinic marketing tool, or anything with AI in it, the standards above apply to you even if you are "just vibe coding". Build it as if a regulator and an attacker will both read it, because eventually one of them will.

:::

## References

- Majlis Keselamatan Negara statement, 4 November 2026, reported by [Buletin TV3](https://www.buletintv3.my/nasional/tahap-ancaman-keselamatan-siber-negara-dinaikkan-ke-sederhana-mkn/), [The Star](https://www.thestar.com.my/news/nation/2026/11/04/nacsa-raises-level-of-cyber-security-threat-to-medium) and [Lowyat.NET](https://www.lowyat.net/2026/409217/nacsa-malaysia-cybersecurity-level/)
- Malaysiakini, 3 November 2026, [M'sia a potential target for security threats amid global volatility, PM says](https://www.malaysiakini.com/news/888396-msia-a-potential-target-for-security-threats-amid-global-volatility-pm-says)
- NACSA alert on PHP2Shell, 22 October 2026, reported by [Lowyat.NET](https://www.lowyat.net/2026/408157/nacsa-urges-php-systems-patch/); advisories at [nacsa.gov.my](https://www.nacsa.gov.my)
- Cyber Security Act 2024 (Act 854), summary by [CMS](https://cms.law/en/int/legal-updates/malaysia-s-new-cyber-security-law-takes-effect) and [ASEAN Briefing](https://www.aseanbriefing.com/news/malaysias-cyber-security-act-2024-what-businesses-need-to-know/)
- Personal Data Protection Commissioner guidelines on data breach notification and Data Protection Officers, in force 1 June 2025, summary by [DLA Piper](https://privacymatters.dlapiper.com/2025/03/malaysia-guidelines-issued-on-data-breach-notification-and-data-protection-officer-appointment/)
- Johns Hopkins Bayview exposure: [The Baltimore Banner](https://www.thebanner.com/community/public-health/johns-hopkins-data-exposure-unauthorized-ai-tool-3SO2HGS7XVDP7GMKSK7TP527NE/), 25 October 2026, and [Inc.](https://www.inc.com/chloe-rosenberg/the-johns-hopkins-breach-wasnt-caused-by-a-hacker-it-started-with-1-employee-upload/91426495)
- National Scam Response Centre 997, [malaysia.gov.my](https://www.malaysia.gov.my/en/categories/safety-and-community/cybersecurity/nsrc-997-hotline)
