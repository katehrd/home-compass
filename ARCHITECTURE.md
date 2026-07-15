# Home Compass Architecture

## Mission

Home Compass helps families make confident home-buying decisions by organizing information, surfacing priorities, and guiding them through the entire home-buying journey.

Rather than acting as another real estate search website, Home Compass serves as a decision support system. Every feature should help answer the question:

> **What should I do next?**

---

# Product Principles

These principles guide every design and engineering decision.

## 1. Action Before Information

Every screen should present the next action before supporting data.

The user should immediately understand:

* What changed?
* What needs attention?
* What decision needs to be made?

Statistics and supporting information come second.

---

## 2. Decisions Over Data

Home Compass is not designed to store houses.

It is designed to help families make better decisions.

Whenever we add a feature we should ask:

> Does this help someone make a better home-buying decision?

---

## 3. Preserve History

Information should not be overwritten.

Instead, Home Compass should remember:

* Price changes
* Home score history
* Tours
* Neighborhood visits
* Notes
* Decisions

Every home should tell the story of how a family reached a decision.

---

## 4. Build Small, Reusable Components

Every component should have one responsibility.

Examples include:

* HomeCard
* ActionCard
* StatusBadge
* StatCard

Reusable components keep the application consistent and easy to maintain.

---

# Core Objects

## Home

Represents a property being evaluated.

Examples:

* Address
* Price
* Neighborhood
* Schools
* Home Compass Score
* Status

---

## Journey

Represents the overall decision-making process for a home.

Each home progresses through a journey.

---

## Journey Step

Represents one stage in the journey.

Examples include:

* Review Listing
* Drive Neighborhood
* Tour Home
* Evaluate
* Talk to Realtor
* Decide on Offer

Each step may include:

* Status
* Owner
* Due Date
* Completion Date
* Notes

---

## Event

Represents something that happened.

Examples:

* First neighborhood drive
* Second tour
* Price reduction
* Family discussion
* Inspection

Multiple events may occur within the same Journey Step.

---

## Activity

Represents an automatically recorded event in Home Compass.

Examples:

* Home added
* Score updated
* Task completed
* Price changed

Activities power the dashboard's Recent Activity feed.

---

## Workspace

A collection of homes that belong to the same search.

Examples:

* Westchester Search
* Vacation Home Search
* Investment Properties

---

# Home Journey

Every home follows a decision journey.

Find Listing

↓

Review Listing

↓

Is it worth pursuing?

↓

Drive Neighborhood

↓

Schedule Tour / Open House

↓

Tour Home

↓

Re-evaluate

↓

Identify Questions

↓

Talk to Realtor

↓

Decide Whether to Offer

This workflow represents how our family evaluates homes and should guide the design of the application.

---

# Dashboard Philosophy

The dashboard should answer one question:

> **What should I do today?**

Information should appear in this order:

1. Today's Priorities
2. Dashboard Snapshot
3. Recent Homes
4. Recent Activity

The dashboard should feel like a daily briefing rather than a reporting tool.

---

# Long-Term Vision

Home Compass should become a trusted decision companion throughout the home-buying journey.

Future capabilities may include:

* AI-assisted home analysis
* Timeline of every home's journey
* Price change tracking
* Decision history
* Shared family collaboration
* Realtor collaboration
* Calendar integration
* Notifications and reminders
* Financial analysis
* Offer strategy
* School comparisons
* Commute analysis

Every future feature should support the mission of helping families make confident home-buying decisions.

---

# UI-Polish

* Tighten journey spacing.
* Improve the connector line.
* Highlight the current step.
* Make "Current Decision" dynamic.
* Remove redundant "Completed" labels.