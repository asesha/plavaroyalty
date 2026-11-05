# Plava Royalty Points System - Universal Rewards & Loyalty Application

## Overview

Plava Royalty Points System is a unified rewards and loyalty platform designed to serve multiple merchants and their customers with a seamless membership experience. This application enables member registration, points earning and redemption, merchant onboarding, and platform administration including fraud detection and reporting.

## Features

- **Member Registration & Account Management:** Unique membership numbers and secure account handling.
- **Points Engine:** Earn, calculate, notify, and redeem loyalty points.
- **Merchant Onboarding:** POS integration and dashboard analytics for merchants.
- **Platform Administration:** Fraud detection, reporting, and subscription management.
- **Health Monitoring:** System health check endpoint.

## APIs

| Method | Path                                | Purpose                                                                 |
|--------|------------------------------------|-------------------------------------------------------------------------|
| GET    | `/health`                          | Verify deployment and report system health status                       |
| POST   | `/api/create-a-seamless-unified-re` | Create a seamless, unified rewards experience for customers and merchants |
| GET    | `/api/enable-easy-member-registrat` | Enable easy member registration and secure transaction-based point allocation |
| GET    | `/api/generate-recurring-revenue-t` | Generate recurring revenue through merchant subscriptions and transaction fees |
| GET    | `/api/support-future-growth-with-s` | Support future growth with scalable cloud infrastructure and integrations |

## System Context

The system consists of the following components:

- **User Management Service:** Handles member registration and account management.
- **Points Engine:** Manages points earning, calculation, notification, and redemption.
- **Merchant Onboarding Service:** Manages merchant onboarding, POS integration, and analytics.
- **Platform Administration Service:** Handles fraud detection, reporting, and subscription management.
- **API Gateway:** Exposes RESTful APIs for client and merchant interactions.
- **Health Check Endpoint:** Provides system health monitoring.
- **Fixture Data Module:** Provides fixture data for testing and development.

## Technologies

- Node.js for API Gateway, User Management, Merchant Onboarding, and Health Check.
- Python for Points Engine and Platform Administration services.
- JSON fixtures for test data.

## Deployment

The system is designed for deployment on scalable cloud infrastructure. After linting, unit, and integration testing, deploy to the **dev** environment. Rollback owner is the Platform on-call team.

## Assumptions

- Authentication and authorization are implemented within the platform.
- POS integrations follow standard protocols.
- Compliance with data protection and privacy regulations.
- Testing includes unit, integration, and linting.
- No physical card issuance or non-digital rewards management.
- **No separate database has been created for this application; data is currently served from in-memory fixtures and static JSON data.**

## License

MIT

---

For detailed architecture, API specifications, and development guidelines, refer to the approved architecture document `architecture.md`.
