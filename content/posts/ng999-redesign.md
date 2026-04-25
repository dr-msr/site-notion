---
title: "Redesigning NG-999: What a Next-Generation Emergency System Could Look Like"
slug: "ng999-redesign"
date: "2025-11-21"
status: "Public"
type: "Post"
category: ["Writing", "Digital"]
tags: ["emergency-services", "ux", "ai", "malaysia", "public-policy", "nextjs"]
summary: "A clinician's perspective on Malaysia's 999 emergency system. What it feels like to call it as a doctor, what's broken for laypeople, and a working proof of concept built in 24 hours on a home server."
thumbnail: null
---

Every few months, I find myself dialing 999.

Sometimes it is from a cramped GP clinic where a patient is crashing in front of me and needs to be transferred urgently to a tertiary centre. Other times it is on the side of the road, kneeling next to someone who has just been pulled out of a vehicle, phone wedged between my ear and shoulder while I'm trying to decide what absolutely cannot wait.

I am a practising doctor who does locum work in various clinics, and in that role, I straddle two worlds. On one side, I deal with the clinical reality of medical emergencies. On the other, I spend a lot of time thinking about systems, products, and how technology actually behaves in the wild when humans are stressed, scared, and confused.

Malaysia's 999 system sits right in the middle of that intersection.

---

## What It Feels Like to Call 999 as a Doctor

In GP settings, when we encounter an emergency that needs pre-hospital care or an ambulance transfer, we generally have two paths.

![Next-generation emergency system architecture with three connectivity tiers](/images/portfolio/ng999-redesign-1.png)


If a private ambulance is available and the patient is willing to pay, we might go that route. Otherwise, we fall back on the public emergency response system, which usually means MERS 999.

The system, at least from my experience, does not really distinguish whether the caller is a layperson or a clinician. Yes, we can sometimes call the hospital emergency department directly, but if what we need is an ambulance dispatched as part of an emergency medical response, the path still runs through 999.

Over the past few years, by my rough count, I have had to call 999 about twice a year in a professional capacity, and on top of that, I have made several calls as a bystander or samaritan at road traffic accidents. With experience, you learn to remain calm, to introduce yourself as a doctor, and to communicate in a way that makes it easier for the responder to patch you through to the right person in the emergency department.

But that is not how most people will experience this system.

---

## The Problem from a Layperson's Perspective

For members of the public, a 999 call is often the worst phone call of their lives.

They are panicking. They do not know what to expect. They do not know how the call will be structured, what questions they will be asked, how long it will take, or what "success" even looks like beyond "someone please come and help".

Emergency responders are trained to handle this, but training can only go so far when the system itself is opaque, slow to adapt, or underutilises what modern devices can already do.

Time is not just important in emergencies, it is ruthless. Every extra minute lost to confusion, poor information flow, or technical friction is a minute someone does not have.

---

## Enter NG-999, and the "U-Turn"

The NG-999 app was launched as a "next generation" replacement or enhancement for MERS 999. I am not privy to the internal list of pain points it was supposed to address, and just like many others watching from the outside, I have no visibility on whether it solved those problems or quietly created new ones.

What we do have, very publicly, is the recent "U-turn" on its implementation. That, by itself, suggests that something fundamental did not land well, either in design, execution, policy, or public trust.

So I want to put on both hats, clinician and product designer, and ask a simple question:

**If I were to redesign NG-999 from scratch, guided by what I see in real emergencies, what would it look like?**

---

## The Core Principle: Remove Friction, Not Add It

An emergency app should feel like a fire alarm, not a bank login.

If you need people to find it, download it, configure it, and pass multiple layers of authentication before they can use it, the design has already failed for its primary use case.

My starting point would be brutally simple: this should be a progressive web app, not something that lives behind app stores and APKs.

You type a short, memorable URL, and it just works.

No "go to the store, search this name, update your OS, accept these terms, sideload that APK, allow this vendor". An emergency solution that adds barriers in the name of "innovation" is not innovative, it is hostile.

---

## Three Pillars of Connectivity

Any real-world emergency solution has to make peace with the fact that connectivity will fail, partially or fully, at the worst possible moment. So I would design NG-999 around three tiers of connectivity, from "nice to have" to "absolutely vital".

**First, data connectivity.** Whether it is 5G or 4G, high or low bandwidth, stable or patchy, this is the channel that allows rich information flow: location, video, audio, and real-time updates. Telcos should be expected, contractually and legally, to allow unrestricted, zero-rated access to a designated emergency domain or endpoint so data is never blocked by quota or credit limits.

**Second, GPS connectivity.** Most modern smartphones that can open a browser also have some form of GPS capability. GPS does not depend on the mobile plan, it depends on the hardware and line of sight to the sky. Indoors or underground, it becomes less reliable, but when it works, it can give responders a precision that is impossible to match via shouted landmarks on a panicked call.

**Third, voice calling.** This remains the final fallback and, in many cases, the first instinct. Even when data is non-existent and GPS is spotty, a device connected to the nearest cell tower can still place a 999 call. From the telco side, cell tower triangulation can provide at least a rough location, although in fast-moving emergencies, this limitation becomes obvious.

Right now, MERS 999 is largely anchored in this third pillar: voice. The irony is that most of our devices, and most modern mobile browsers, can already do so much more.

---

## Modern Devices, Underused Capabilities

A device that can open a mobile browser can also, with the user's permission, access the microphone for voice, the GPS chip for geolocation, and the camera for live video or frame capture.

The new NG-999, if we are serious, should treat these capabilities as standard building blocks, not optional extras. The default experience for an emergency web app should look like this:

You tap a short URL, and the browser immediately requests permission to use your location, microphone, and camera. The system gracefully degrades if any of these are not available, but it does not assume the lowest common denominator by default.


![Emergency call user journey from URL tap to ambulance dispatch with real-time ETA](/images/portfolio/ng999-redesign-2.png)

Instead of relying entirely on a voice call, it can initiate a combined session: location is locked in, voice is captured, video can be shared when safe to do so, and all of this is made visible to responders on the other side.

That is the baseline. On top of that, there is one area we need to be particularly careful about: identity.

---

## Rethinking e-KYC for Emergencies

Prank calls and abuse of 999 are very real problems. However, the solution is not to drag e-KYC frameworks from fintech and slap them onto emergencies.

If you are standing over someone who is bleeding out, the last thing you should be asked to do is take a selfie with your IC held up to your face.

In an emergency, the burden of identification should not be pushed onto the caller. It should sit with the system.

That means using the signals we already get from a browser-based emergency session, and using them intelligently. With the right consent and governance, a system like NG-999 can do the following behind the scenes.

It can capture and log the device location, at least to a useful level of precision. This helps responders, and it also means repeat prank callers can be traced without forcing friction upfront on everyone else.

It can, with explicit permission, briefly activate the front camera and microphone, capture a few seconds of video or audio, then store those for retrospective analysis if the call is later flagged as malicious or fake. We do not need Hollywood-level biometrics in real time, we just need enough to build a pattern.

It can log device-level metadata that every web app already sees: IP address, device model, user agent, sometimes a device ID. Combined, these are powerful signals for detecting repeated abuse.

Finally, it can lean on AI models trained on real emergency calls to detect patterns in voice, speech, and content that differ from genuine distress. This is not about letting a machine judge who "deserves" help. It is about giving responders a triage tool: which calls look urgent, which look suspicious, which can be deprioritised without risking lives.

The key is that all of this happens on the provider side, with safeguards, rather than turning an emergency into an onboarding flow.

---

## A Possible User Journey

If I had to design the flow end to end, it might look something like this.

You remember a short URL, something like 999.my. Realistically, with proper coordination between the government and the domain administrator for .my, this is entirely achievable.

You tap the URL. Immediately, the web app requests permission to access your location, microphone, and camera. The app checks what is actually available and adapts automatically. No lectures, no long descriptions, just a clear "this helps us help you faster" explanation.

As soon as permissions are granted, the system begins an initial "soft" verification and triage in the background. It locks in your location, starts a brief selfie video capture if you have granted camera access, and opens an audio channel to an AI-powered agent who begins the conversation.

By this point, without you realising it, your case is already visible on the responder dashboard. The AI agent collects critical information, fills in structured fields, and ranks your case based on several dimensions: type of emergency (medical, police, fire), distance from the nearest available responder, estimated severity, and even an analysis of your emotional state based on your voice.

At any moment, a human responder can step in, take over the conversation from the AI, and continue speaking to you directly. The AI does not disappear, it continues running in the background, parsing, summarising, and updating the case as you speak.

From your perspective as the caller, you see clear action items on your screen: what you have told them, what they have advised you to do, and what is happening next. Once an ambulance or responder has accepted the case, your estimated time of arrival updates in real time, driven by GPS data on their end.

You are not left shouting into a void thinking, "Are they actually on the way?"

---

## Building a Proof of Concept on a Home Server

Now here is where the contrast gets uncomfortable.

Telekom Malaysia, under the Ministry of Communications, reportedly received a budget of RM1.2 billion over ten years to develop the "New Generation 999".

I am a single clinician with a bit of tech experience and a home server.

Within 24 hours, using the newly launched Antigravity IDE by Google to get started, then continuing with Cursor and Claude Code, I built and deployed a working proof of concept of this vision.

The frontend is written in Next.js, with Shadcn and Tailwind CSS for the UI. The backend lives inside Next.js API routes. The AI pipeline leans on several specialised tools: ElevenLabs with tool-calling for agentic behaviour, Hume AI for voice and emotion analysis, and OpenAI for video and frame analysis.

For reverse geocoding, I used a free-tier geocoding service. The entire system runs locally on my home server, exposed via a Cloudflare Tunnel, and I intentionally cap the connection to a maximum of three concurrent callers, with a simple queue handled in middleware.

If I were to turn this into a paid SaaS, I estimate that keeping the proof of concept alive would cost around five US dollars per month in API and infrastructure fees, at the current level of traffic. That number obviously scales with use, but the point is not the exact dollar value.

The point is the order of magnitude between what is possible with a small, focused, modern stack, and what we seem willing to accept as "normal" at a national scale.

---

## Where Do We Go from Here?

This is not a claim that my home-server prototype could, or should, replace a national emergency system. That would be naïve. Real systems carry the weight of policy, redundancy, security, governance, and public trust. They have to perform at scale, in all conditions, for all kinds of people.

What I am saying is that our imagination should not be limited by legacy thinking when the tools in front of us are capable of so much more.

If a single doctor with some evenings to spare can stand up a functional NG-999 prototype that meaningfully uses location, audio, video, and AI-driven triage, then a RM1.2 billion, decade-long programme should be able to do more than just rebrand the friction.

At the very least, we should be honest about what we are building, who it serves, and whether it actually reduces suffering in the moments that matter most.

Because when you are the one holding the phone over a stranger on the road, or over a patient in your clinic, the difference between a system that truly understands urgency and one that just pretends to be "next generation" is not a technical detail.

It is life, mediated through design.

*\* Images are conceptualized, not the real implementation to protect client's intellectual right*
