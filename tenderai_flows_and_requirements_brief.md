# TenderAI — Application Flows, Core Business Flows, and Requirements Mapping Brief for VS Code / Copilot

## Purpose of this document

This document is intended to help GitHub Copilot (inside Visual Studio Code) understand the **business domain**, **main application flows**, **core user journeys**, **screen relationships**, and **functional architecture** of TenderAI.

The goal is to use this document as a **single source of product context** so Copilot can:

1. infer product requirements,
2. propose user flows,
3. generate Mermaid diagrams,
4. create domain models,
5. suggest APIs, entities, and services,
6. analyze existing repository files and reuse them as references,
7. iteratively refine architecture, requirements, and implementation artifacts.

---

## Instructions for Copilot / VS Code

Use this document together with the existing repository content as product context.

### What Copilot should do
- Analyze the codebase and documents already present in the repository.
- Use existing files, README content, mockup references, notes, and architecture docs as supporting context.
- Infer reusable concepts, naming conventions, domain objects, and modules.
- Generate:
  - application flow diagrams,
  - business flow diagrams,
  - screen navigation maps,
  - requirement breakdowns,
  - domain entities,
  - backlog candidates,
  - feature modules,
  - service architecture proposals,
  - Mermaid diagrams,
  - user stories,
  - functional specifications.

### Expected outputs from Copilot
Create or suggest:
- `docs/flows/application-flows.md`
- `docs/flows/business-flows.md`
- `docs/flows/navigation-map.md`
- `docs/requirements/functional-requirements.md`
- `docs/requirements/non-functional-requirements.md`
- `docs/architecture/domain-model.md`
- `docs/architecture/service-map.md`
- `docs/architecture/state-machine.md`
- `docs/diagrams/*.mmd`

When generating diagrams, prefer **Mermaid**.

---

# 1. Business Overview

## What TenderAI is

TenderAI is a B2B SaaS platform designed to help companies, consultancies, and associations:

- identify public tenders and grants,
- evaluate fit and probability of success,
- detect missing requirements and gaps,
- prepare required documentation,
- execute the tender process operationally,
- monitor progress,
- make strategic decisions,
- improve win probability.

TenderAI is not just a search tool. It is a **decision and execution system** for tenders and grants.

---

## Core value proposition

TenderAI enables users to:

- discover relevant opportunities,
- understand whether they should apply,
- know what is missing,
- organize and execute the application process,
- track all active tenders in a pipeline,
- receive strategic insights from market data,
- improve company profile quality to increase match scores.

---

## Main product pillars

TenderAI has six core product pillars:

1. **Dashboard**
2. **Pipeline**
3. **Opportunity Matching & Scoring**
4. **Tender Execution Workspace**
5. **Company Profile**
6. **Reporting / Insights**

Supporting pillars:
- Document management
- AI document analysis
- Task management
- Team collaboration
- Notifications / reminders
- Search and filtering

---

# 2. Main User Types

## Primary users
1. **SME / Company user**
   - applies to public tenders and grants
   - wants operational clarity and guidance

2. **Consultancy user**
   - manages multiple clients and applications
   - needs portfolio and execution control

3. **Association / Chamber user**
   - may support member companies with opportunity access

4. **Administrator**
   - manages settings, users, permissions, integrations

## Secondary actors
- AI scoring engine
- Document analysis engine
- Notification engine
- External data providers
- Public tender data sources
- Identity/auth system

---

# 3. High-Level Product Flow

At the highest level, TenderAI follows this product loop:

1. Company profile is created or completed.
2. Opportunities are discovered and searched.
3. System evaluates fit using scoring and gap analysis.
4. User decides whether to apply.
5. Opportunity enters operational pipeline.
6. Tasks and documentation are managed.
7. AI analyzes documentation and detects issues.
8. Team executes the tender process.
9. User tracks progress until submission/completion.
10. Reporting and market insights refine future strategy.
11. Company profile and preferences are improved over time.
12. Better profile leads to better matching and higher win probability.

---

# 4. Main Application Modules

## 4.1 Dashboard
Purpose:
- daily operating cockpit,
- quick overview,
- next actions,
- alerts,
- top opportunities,
- execution priorities.

Main questions answered:
- what do I need to do today?
- what is urgent?
- which opportunities are in progress?
- what is blocked or at risk?

## 4.2 Pipeline
Purpose:
- global list of all tenders / grants in progress,
- operational tracking,
- status overview,
- access point to each opportunity workspace.

Main questions answered:
- how many active tenders do I have?
- which are advanced / blocked / pending?
- which one should I open next?

## 4.3 Matching & Scoring
Purpose:
- evaluate a concrete opportunity,
- decide if the company should apply,
- explain why,
- show strengths and gaps.

Main questions answered:
- should I apply?
- why is this a good fit or bad fit?
- what is missing?

## 4.4 Tender Execution Workspace
Purpose:
- operational workspace for one specific tender,
- tasks,
- owners,
- required documentation,
- progress,
- AI document validation status.

Main questions answered:
- what is left to complete?
- who is responsible?
- what documents are missing?
- what does AI say about current documentation quality?

## 4.5 Company Profile
Purpose:
- company onboarding,
- store profile data,
- services,
- certifications,
- preferences,
- legal/admin information,
- improve matching quality.

Main questions answered:
- how complete is my profile?
- what do I need to improve?
- how does profile completeness affect matching?

## 4.6 Reporting / Insights
Purpose:
- aggregated market intelligence,
- trends,
- competition signals,
- opportunity patterns,
- strategic recommendations.

Main questions answered:
- where should I compete?
- what sectors are growing?
- where is the best opportunity density?
- what patterns should influence my strategy?

## 4.7 Documentation Module
Purpose:
- manage files and required document folders,
- validate completeness,
- support AI processing.

Main questions answered:
- what documents do I have?
- what is missing?
- what has been validated?

---

# 5. Core Screen Inventory

This is the current set of main designed screens:

1. **Dashboard**
2. **Pipeline table view**
3. **Opportunity scoring / matching**
4. **Tender execution screen**
5. **Company profile**
6. **Reporting / insights**
7. **Documentation panel / related docs section**

Potential future screens:
- login / onboarding
- opportunity search results
- opportunity detail preview
- notifications center
- admin settings
- team / permissions
- submission confirmation
- AI recommendation history
- kanban pipeline view

---

# 6. Core Business Flows

## 6.1 Company onboarding flow
### Goal
Create or complete company profile so the system can score opportunities accurately.

### Steps
1. User signs in.
2. User enters company profile screen.
3. User fills general info:
   - company name,
   - sector,
   - size,
   - revenue band,
   - location.
4. User defines capabilities and services.
5. User adds relevant project experience.
6. User adds certifications.
7. User uploads administrative/company documentation.
8. User sets opportunity preferences:
   - sectors,
   - regions,
   - contract sizes,
   - tender types.
9. System calculates profile completeness.
10. System surfaces profile gaps.
11. User saves profile.
12. Profile becomes input for scoring engine.

### Business value
- better match quality,
- better recommendations,
- faster opportunity triage.

---

## 6.2 Opportunity discovery flow
### Goal
Find relevant tenders and grants.

### Steps
1. User uses search bar / filters.
2. System fetches relevant tenders/grants.
3. User sees list of opportunities.
4. User opens a concrete opportunity.
5. System computes matching score and fit analysis.

### Inputs
- company profile,
- preferences,
- tender metadata,
- historical tender data,
- document requirements.

### Outputs
- ranked opportunity list,
- recommended opportunities,
- scoring context.

---

## 6.3 Opportunity scoring / decision flow
### Goal
Decide whether to apply.

### Steps
1. User opens opportunity scoring screen.
2. System displays:
   - score,
   - recommendation,
   - strengths,
   - detected gaps,
   - score composition,
   - potential improvement.
3. User reviews fit.
4. User chooses:
   - apply now,
   - save,
   - discard,
   - request human review.
5. If applying, opportunity moves into active pipeline.

### Business value
- avoids wasted effort,
- increases focus,
- improves portfolio quality.

---

## 6.4 Tender execution flow
### Goal
Execute one tender application from preparation to completion.

### Steps
1. User opens tender execution screen.
2. System shows:
   - tender context,
   - project summary,
   - completion status,
   - checklist tasks,
   - assigned owners,
   - documentation folders,
   - AI analysis status.
3. User reviews pending tasks.
4. User uploads missing docs or assigns owners.
5. Team progresses the checklist.
6. AI re-analyzes documentation.
7. System updates completion %.
8. User completes required work.
9. Opportunity is ready for submission / finalization.

### Business value
- operational control,
- transparency,
- reduced missed deadlines,
- execution confidence.

---

## 6.5 Document management flow
### Goal
Organize and validate required documentation.

### Steps
1. Opportunity defines expected document sets.
2. System organizes document folders:
   - legal,
   - fiscal,
   - technical,
   - annexes,
   - others.
3. User uploads files.
4. System associates files to folders.
5. AI analyzes document structure / completeness.
6. Status becomes:
   - complete,
   - pending,
   - missing / critical.
7. User navigates to documentation details if needed.

### Business value
- reduces document chaos,
- enables traceability,
- supports AI validation.

---

## 6.6 Pipeline management flow
### Goal
Track all active tenders globally.

### Steps
1. User opens pipeline screen.
2. System shows:
   - list of all active tenders,
   - type,
   - company,
   - institution,
   - amount,
   - completion %,
   - status,
   - action button.
3. User filters/sorts by:
   - state,
   - aid type,
   - amount,
   - deadline,
   - progress.
4. User opens any row.
5. Row opens tender execution workspace.

### Business value
- centralized control,
- portfolio navigation,
- workload management.

---

## 6.7 Reporting / insights flow
### Goal
Help user decide where to compete strategically.

### Steps
1. User opens reporting/insights screen.
2. System displays:
   - weekly executive summary,
   - sector trends,
   - market evolution,
   - emerging opportunities,
   - aggregated benchmark,
   - competition signals,
   - strategic recommendations.
3. User uses insights to refine focus.
4. User adjusts profile or search preferences.
5. Future opportunities are influenced by strategy changes.

### Business value
- strategic prioritization,
- smarter opportunity focus,
- better long-term positioning.

---

# 7. Main Application Navigation Flows

## 7.1 Dashboard navigation
Dashboard should link to:
- opportunity detail / scoring
- pipeline
- documentation
- profile completion
- alerts / urgent tasks

## 7.2 Pipeline navigation
Pipeline should link to:
- tender execution screen
- filters
- export
- visual pipeline mode (future)
- new opportunity

## 7.3 Scoring navigation
Scoring should link to:
- apply now
- save opportunity
- discard
- plan of action
- documentation
- human review

## 7.4 Execution navigation
Execution should link to:
- documentation
- task completion
- assignee updates
- plan of action
- submission/final completion

## 7.5 Profile navigation
Profile should link to:
- document upload
- gap fixing
- preferences
- opportunities impacted by profile quality

## 7.6 Reporting navigation
Reporting should link to:
- aligned opportunities
- strategic profile adjustment
- optimized searches
- pipeline

---

# 8. Primary Domain Entities

These entities should likely exist in architecture / domain model.

## Core entities
- Company
- User
- Role
- CompanyProfile
- Opportunity
- OpportunityType
- Institution
- Tender
- Grant
- PipelineItem
- OpportunityScore
- ScoreFactor
- Recommendation
- Task
- TaskAssignment
- TaskStatus
- DocumentFolder
- Document
- DocumentStatus
- AIAnalysis
- Gap
- Certification
- ExperienceProject
- SectorPreference
- Notification
- Insight
- MarketTrend
- BenchmarkMetric

---

# 9. Suggested State Models

## 9.1 Opportunity lifecycle state
Possible states:
- discovered
- scored
- saved
- discarded
- applying
- in_preparation
- ready_to_submit
- submitted
- completed
- won
- lost
- archived

## 9.2 Task state
- pending
- in_progress
- completed
- blocked
- cancelled

## 9.3 Document state
- missing
- uploaded
- under_review
- valid
- invalid
- incomplete

## 9.4 Profile completeness state
- incomplete
- partially_complete
- complete
- optimized

---

# 10. Functional Requirements by Module

## Dashboard
- show active opportunities
- show deadlines
- show in-preparation opportunities
- show at-risk items
- show average score
- show quick actions
- show urgent alerts
- show links to execution screens

## Pipeline
- list all active opportunities in one table
- show progress percentage
- show status badge
- allow sorting and filtering
- link each row to execution workspace
- show company and institution
- show tender type
- show amount

## Scoring
- calculate fit score
- show recommendation
- explain score factors
- display strengths and gaps
- suggest next steps
- support apply/save/discard actions

## Tender Execution
- show completion %
- show remaining actions
- show assigned owners
- show project summary
- show documentation section
- show AI analysis status
- allow marking tasks complete
- allow uploads
- allow assigning responsibility

## Company Profile
- manage general company info
- manage services/capabilities
- manage certifications
- manage company documentation
- manage experience
- manage preferences
- calculate profile completeness
- surface profile gaps

## Reporting / Insights
- display weekly summary
- show trends by sector
- show benchmark metrics
- show competition signals
- show strategic recommendations
- link insights to action

---

# 11. Non-Functional Requirements

## UX / Product
- fast to scan
- low cognitive load
- high information clarity
- action-first design
- consistent layout across modules
- premium enterprise visual style

## Technical
- modular architecture
- reusable components
- support for document processing
- ability to compute scores asynchronously
- event-driven updates for AI analysis
- auditable changes to tasks/documents

## Security / Compliance
- role-based access control
- company data isolation
- secure document storage
- audit trail for edits/uploads
- privacy-safe reporting insights
- no leakage of identifiable competitor data

---

# 12. Suggested Mermaid Diagram Requests for Copilot

Ask Copilot to generate these Mermaid diagrams.

## 12.1 Application navigation map
Create a Mermaid flowchart showing navigation between:
- Dashboard
- Pipeline
- Scoring
- Execution
- Company Profile
- Reporting
- Documentation

## 12.2 Business process flow
Create a Mermaid flowchart for:
Company onboarding → opportunity discovery → scoring → apply decision → pipeline → execution → documentation → completion.

## 12.3 Opportunity lifecycle state machine
Create a Mermaid state diagram for:
discovered → scored → saved/applying/discarded → in_preparation → ready_to_submit → submitted → won/lost.

## 12.4 Task workflow
Create a Mermaid state diagram for:
pending → in_progress → completed / blocked / cancelled.

## 12.5 Document workflow
Create a Mermaid state diagram for:
missing → uploaded → under_review → valid / invalid / incomplete.

## 12.6 Company profile completeness flow
Create a Mermaid flowchart for:
profile data + certifications + documentation + experience + preferences → completeness score → gaps → improved matching.

## 12.7 Sequence diagram for scoring
Create a Mermaid sequence diagram showing:
User → Opportunity Screen → Scoring Service → Profile Data → Gap Engine → Recommendation Engine → UI response.

## 12.8 Sequence diagram for AI document analysis
Create a Mermaid sequence diagram showing:
User upload → Document service → Storage → AI analysis engine → Validation result → Execution screen update.

---

# 13. Suggested Copilot Prompts to Run in VS Code

Use prompts like these inside Copilot Chat.

## Prompt 1
Read this repository and this product context document. Infer the main domain entities, aggregates, and application modules for TenderAI. Generate a domain model in Markdown and Mermaid.

## Prompt 2
Using the product context in this file, generate a complete Mermaid navigation map for all major screens and user flows.

## Prompt 3
Analyze existing files in this repository and identify anything that already maps to:
- Dashboard
- Pipeline
- Scoring
- Execution
- Company profile
- Reporting
- Documentation

Then propose how to organize the app into modules.

## Prompt 4
Generate functional requirements and user stories for each main TenderAI module described in this document.

## Prompt 5
Generate Mermaid flowcharts and state diagrams for all core business flows described in this file.

## Prompt 6
Propose backend services and API boundaries for:
- opportunity scoring
- pipeline management
- task management
- document management
- AI analysis
- reporting insights

## Prompt 7
Suggest a folder structure for frontend + backend implementation of TenderAI based on these product flows.

---

# 14. Suggested Frontend Information Architecture

Possible route map:

- `/dashboard`
- `/pipeline`
- `/opportunities/:id/scoring`
- `/opportunities/:id/execution`
- `/company/profile`
- `/reporting/insights`
- `/documents`
- `/settings`

---

# 15. Suggested Backend Service Boundaries

Potential services/modules:
- Auth / Identity
- Company Profile Service
- Opportunity Discovery Service
- Scoring Engine
- Recommendation Engine
- Pipeline Service
- Task Service
- Document Service
- AI Analysis Service
- Reporting / Insights Service
- Notification Service

---

# 16. MVP Scope Recommendation

If building MVP first, prioritize:

1. Company profile
2. Opportunity discovery list
3. Opportunity scoring
4. Pipeline
5. Tender execution workspace
6. Basic documentation module
7. Basic dashboard

Insights/reporting can start lighter and evolve later.

---

# 17. Final Note for Copilot

Do not treat TenderAI as just a dashboard product.
Treat it as:

👉 a decision support + execution platform for tenders and grants

The most important product logic is not only searching opportunities, but helping users:

- decide where to compete,
- understand what they lack,
- organize execution,
- complete work,
- improve over time.

Always optimize for:
- clarity,
- actionability,
- modular architecture,
- reusable design patterns,
- traceable business flows.
