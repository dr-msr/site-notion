---
title: "Solat Today — Prayer Times for Malaysia"
slug: "solat-today"
date: "2025-01-15"
status: "Public"
type: "Post"
category: ["Portfolio", "Community"]
tags: ["nextjs", "typescript", "tailwindcss", "jakim", "pwa"]
summary: "A modern, responsive prayer times web app for Muslims in Malaysia, built with Next.js and official JAKIM data."
thumbnail: null
---

# Solat Today — Prayer Times for Malaysia

**Project Type:** Personal / Community Tool
**Live:** [solat.today](https://solat.today) *(currently experiencing API issues)*
**Source:** [github.com/dr-msr/solat-today-2025](https://github.com/dr-msr/solat-today-2025)

---

## What It Does

Solat Today provides accurate, real-time prayer times for Muslims in Malaysia. It uses your device's geolocation to determine your zone, then pulls official prayer time data from JAKIM (Malaysian Islamic Development Department).

### Features

- **Real-time prayer times** based on current location
- **Countdown timer** to the next prayer
- **Hijri calendar** alongside the Gregorian date
- **Multi-day navigation** for planning ahead
- **Offline support** via saved zone information
- **Responsive design** that works across mobile, tablet, and desktop

## Ecosystem

Solat Today is part of a broader ecosystem that includes [My-Kariah](https://github.com/dr-msr/my-kariah), an open-source Muslim community hub built with Next.js, TypeScript, and Planetscale. My-Kariah focused on mosque management, community engagement, and prayer times as part of a larger neighbourhood platform. The lessons learned from My-Kariah informed the more focused, single-purpose design of Solat Today.

## Tech Stack

**Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
**UI:** Shadcn UI components
**API:** Next.js API Routes, JAKIM data integration
**Location:** Browser Geolocation API
**Storage:** Local storage for offline capabilities

## Why It Matters

Prayer times apps are ubiquitous, but many are bloated with ads, trackers, or unnecessary features. Solat Today was built to be fast, clean, and respectful of the user's attention. It does one thing well: tell you when to pray, based on the most authoritative local data source available.
