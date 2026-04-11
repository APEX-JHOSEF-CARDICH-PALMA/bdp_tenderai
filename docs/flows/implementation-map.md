# TenderAI — Frontend Implementation Map

> Source of truth: `docs/flows/flow_000` through `flow_007`  
> Generated: 2026-04-11

---

## Overview

| Flow | Functional Scope | Primary Page | Feature Module |
|------|-----------------|--------------|----------------|
| flow_000 | Main user journey / app loop | All pages (navigation) | `app-shell` |
| flow_001 | Daily cockpit / prioritization | `/dashboard` | `dashboard` |
| flow_002 | Company onboarding & profile quality | `/profile` | `company-profile` |
| flow_003 | Opportunity scoring & gap analysis | `/opportunities/:id/score` | `scoring` |
| flow_004 | Apply / discard / archive decision | `/opportunities/:id/decision` | `decision` |
| flow_005 | Pipeline portfolio management | `/pipeline` | `pipeline` |
| flow_006 | Tender execution workspace | `/pipeline/:tenderId/execution` | `tender-execution` |
| flow_007 | Market intelligence & reporting | `/reporting` | `reporting` |

---

## flow_000 — Main Journey

### Functional Scope
Top-level orchestration. Entry point → profile setup → matching → dashboard → opportunity detail → scoring → decision → pipeline. Defines the product loop.

### Pages
| Path | Description |
|------|-------------|
| `/` | App entry / redirect (auth guard) |
| `/dashboard` | Prioritized opportunity feed |
| `/profile` | Company profile setup |
| `/opportunities/:id` | Opportunity detail view |
| `/opportunities/:id/score` | Score + gap view |
| `/pipeline` | Active tender list |

### Components
- `AppShell` — root layout with sidebar + topbar
- `RouteGuard` — auth + onboarding completeness check
- `OnboardingBanner` — profile completeness prompt
- `NavigationSidebar` — links to all main sections

### Feature Module
`src/app/features/app-shell/`

### Domain Types
```ts
// types/user.ts
User, UserRole, AuthSession

// types/opportunity.ts
Opportunity, OpportunityStatus

// types/navigation.ts
NavItem, AppRoute
```

### Mock Data
- `mock/user.ts` — authenticated user session
- `mock/routes.ts` — route definitions with guards

---

## flow_001 — Dashboard

### Functional Scope
Daily cockpit. Shows: operational summary (active, in-prep, at-risk counts), recommended opportunities with scoring, urgent alerts (deadlines, missing docs, blocked tasks), quick-action shortcuts.

### Pages
| Path | Description |
|------|-------------|
| `/dashboard` | Main dashboard view |

### Components
| Component | Responsibility |
|-----------|---------------|
| `DashboardPage` | Page container |
| `OperativeSummaryPanel` | Active / in-prep / at-risk counters |
| `RecommendedOpportunitiesList` | Top scored opportunities feed |
| `OpportunityCard` | Single opportunity with score + actions |
| `AlertsPanel` | Deadline / missing doc / blocked task alerts |
| `AlertItem` | Single alert row |
| `QuickActionsBar` | Shortcut buttons to Pipeline, Execution, Profile, Reporting |

### Feature Module
`src/app/features/dashboard/`

### Domain Types
```ts
// types/dashboard.ts
DashboardSummary {
  active: number
  inPreparation: number
  atRisk: number
}

Alert {
  id: string
  type: 'deadline' | 'missing_document' | 'blocked_task'
  message: string
  severity: 'high' | 'medium' | 'low'
  relatedEntityId?: string
}
```

### Mock Data
- `mock/dashboard.ts` — summary counts, alert list
- `mock/opportunities.ts` — 5–8 recommended opportunities with score

---

## flow_002 — Company Profile

### Functional Scope
Multi-step form to capture: general company data, capabilities/services, past experience, certifications, admin documentation, opportunity preferences. Drives `profile completeness` score that directly affects matching quality.

### Pages
| Path | Description |
|------|-------------|
| `/profile` | Profile overview + completeness |
| `/profile/general` | General company info |
| `/profile/capabilities` | Services & capabilities |
| `/profile/experience` | Past projects |
| `/profile/certifications` | Certifications list |
| `/profile/documents` | Admin document upload |
| `/profile/preferences` | Opportunity preference filters |

### Components
| Component | Responsibility |
|-----------|---------------|
| `ProfilePage` | Overview with completeness ring |
| `ProfileCompletenessRing` | Visual % indicator |
| `ProfileGapList` | Missing fields / actionable improvements |
| `GeneralInfoForm` | Name, sector, size, location, revenue |
| `CapabilitiesForm` | Multi-select services + free text |
| `ExperienceForm` | Past project entries (repeatable) |
| `CertificationsForm` | Certification entries (repeatable) |
| `DocumentUploader` | File upload + category tag |
| `PreferencesForm` | Sector / region / budget range filters |

### Feature Module
`src/app/features/company-profile/`

### Domain Types
```ts
// types/company.ts
CompanyProfile {
  id: string
  name: string
  sector: string
  size: CompanySize
  location: string
  revenue: RevenueBand
  capabilities: string[]
  experience: ProjectExperience[]
  certifications: Certification[]
  documents: CompanyDocument[]
  preferences: OpportunityPreferences
  completeness: number // 0–100
}

ProjectExperience { title, client, year, value, sector }
Certification { name, issuedBy, expiresAt }
CompanyDocument { id, name, category, url, uploadedAt }
OpportunityPreferences { sectors: string[], regions: string[], minBudget: number, maxBudget: number }
```

### Mock Data
- `mock/company.ts` — partially filled company profile (completeness ~60%)

---

## flow_003 — Scoring

### Functional Scope
Matching engine output display. Takes company profile dimensions (sector, size, capabilities, certifications, experience) and opportunity requirements (technical, economic, location, deadline, award criteria) → produces: fit score, success probability, detected gaps, next-action recommendation.

### Pages
| Path | Description |
|------|-------------|
| `/opportunities/:id/score` | Scoring detail for one opportunity |

### Components
| Component | Responsibility |
|-----------|---------------|
| `ScoringPage` | Container |
| `FitScoreGauge` | Visual score 0–100 |
| `SuccessProbabilityBadge` | % probability label |
| `StrengthsList` | Matching dimensions (positive) |
| `GapsList` | Missing or weak dimensions |
| `ScoringDimensionRow` | Single criterion comparison (company vs requirement) |
| `NextActionRecommendation` | Apply / Review / Discard CTA |

### Feature Module
`src/app/features/scoring/`

### Domain Types
```ts
// types/scoring.ts
ScoringResult {
  opportunityId: string
  fitScore: number           // 0–100
  successProbability: number // 0–100
  strengths: ScoringDimension[]
  gaps: ScoringDimension[]
  recommendation: 'apply' | 'review' | 'discard'
}

ScoringDimension {
  criterion: string
  companyValue: string
  requiredValue: string
  status: 'match' | 'partial' | 'gap'
  weight: number
}
```

### Mock Data
- `mock/scoring.ts` — 2–3 pre-computed scoring results

---

## flow_004 — Decision

### Functional Scope
Post-scoring decision layer. Evaluates whether minimum requirements are met → if yes: recommend apply and initiate proposal; if no: assess if gap is fixable (find partner / complete info) or not (recommend discard/archive).

### Pages
| Path | Description |
|------|-------------|
| `/opportunities/:id/decision` | Decision view (can be a modal or sub-view of score page) |

### Components
| Component | Responsibility |
|-----------|---------------|
| `DecisionPanel` | Decision summary with recommendation |
| `RequirementCheckList` | Minimum requirements pass/fail list |
| `GapResolutionOptions` | "Find partner", "Complete info" suggestions |
| `DecisionActionBar` | Save to pipeline / Start proposal / Discard / Archive |
| `DiscardConfirmDialog` | Confirmation modal for discard/archive |

### Feature Module
`src/app/features/decision/`

### Domain Types
```ts
// types/decision.ts
DecisionOutcome {
  opportunityId: string
  meetsMinimumRequirements: boolean
  gaps: GapItem[]
  resolution: 'apply' | 'needs_partner' | 'needs_info' | 'discard'
  actionTaken: 'saved_to_pipeline' | 'proposal_started' | 'discarded' | 'archived'
}

GapItem {
  criterion: string
  fixable: boolean
  suggestedAction?: string
}
```

### Mock Data
- `mock/decisions.ts` — 2–3 decision outcomes (one apply, one gap-with-fix, one discard)

---

## flow_005 — Pipeline

### Functional Scope
Global portfolio table for all active tenders/grants. Supports: filter by status/type/budget/deadline, sort by priority/progress, row-level quick view, open into Tender Execution workspace. Reflects real-time state changes from execution updates.

### Pages
| Path | Description |
|------|-------------|
| `/pipeline` | Portfolio table |

### Components
| Component | Responsibility |
|-----------|---------------|
| `PipelinePage` | Container + filter bar |
| `PipelineFilterBar` | Status, type, budget range, deadline pickers |
| `PipelineTable` | Sortable, filterable table |
| `PipelineRow` | Single tender row with inline quick info |
| `PipelineRowDetail` | Expanded row: quick summary without full navigation |
| `PipelineStatusBadge` | Color-coded status chip |
| `PipelineProgressBar` | Completion % indicator per row |
| `PipelineSortControls` | Sort by priority / progress / deadline |

### Feature Module
`src/app/features/pipeline/`

### Domain Types
```ts
// types/pipeline.ts
PipelineEntry {
  id: string
  opportunityId: string
  title: string
  status: PipelineStatus
  progress: number // 0–100
  deadline: string // ISO date
  assignees: string[]
  budget: number
  type: 'tender' | 'grant'
  priority: 'high' | 'medium' | 'low'
}

PipelineStatus = 'active' | 'in_preparation' | 'at_risk' | 'submitted' | 'discarded' | 'archived'
```

### Mock Data
- `mock/pipeline.ts` — 8–12 pipeline entries across various statuses

---

## flow_006 — Tender Execution

### Functional Scope
Operational workspace for one specific tender. Manages: task checklist (assign owner, mark progress/done), required documentation (upload, categorize legal/fiscal/technical, detect missing), AI document analysis results (valid/invalid/incomplete + corrective action). Drives overall completion % until "Ready to Submit".

### Pages
| Path | Description |
|------|-------------|
| `/pipeline/:tenderId/execution` | Execution workspace |

### Components
| Component | Responsibility |
|-----------|---------------|
| `TenderExecutionPage` | Full workspace container |
| `ExecutionHeader` | Tender title, deadline, global completion % |
| `ExecutionProgressBar` | Visual completion meter |
| `TaskChecklist` | List of tasks with owner + status controls |
| `TaskItem` | Single task: title, owner selector, status toggle |
| `DocumentationPanel` | Document folder (legal/fiscal/technical) |
| `DocumentRow` | File entry: name, category, upload date, AI status |
| `DocumentUploader` | Upload + classify new document |
| `MissingDocumentAlert` | Warning for each required but missing doc |
| `AIAnalysisPanel` | AI validation results per document |
| `AIAnalysisResult` | Single result: valid / invalid / incomplete + action |
| `ReadyToSubmitBanner` | Shown when all required items are complete |

### Feature Module
`src/app/features/tender-execution/`

### Domain Types
```ts
// types/execution.ts
TenderExecution {
  tenderId: string
  completionPercent: number
  tasks: ExecutionTask[]
  documents: ExecutionDocument[]
  aiAnalysis: AIAnalysisResult[]
  isReadyToSubmit: boolean
}

ExecutionTask {
  id: string
  title: string
  owner?: string
  status: 'pending' | 'in_progress' | 'completed'
}

ExecutionDocument {
  id: string
  name: string
  category: 'legal' | 'fiscal' | 'technical' | 'other'
  url?: string
  isRequired: boolean
  uploadedAt?: string
}

AIAnalysisResult {
  documentId: string
  status: 'valid' | 'invalid' | 'incomplete'
  message: string
  correctiveAction?: string
}
```

### Mock Data
- `mock/execution.ts` — 1 full execution with tasks (mixed statuses), docs (some missing), AI results

---

## flow_007 — Reporting

### Functional Scope
Weekly strategic intelligence. Shows: sector trends (density by category), market benchmark (own performance vs market), competition signals (risk/opportunity identification), strategic recommendations → feeds back into: profile adjustments, search preference tuning, pipeline prioritization → drives continuous win-rate improvement.

### Pages
| Path | Description |
|------|-------------|
| `/reporting` | Reporting & Insights main view |

### Components
| Component | Responsibility |
|-----------|---------------|
| `ReportingPage` | Container |
| `ExecutiveSummaryCard` | Weekly narrative summary |
| `SectorTrendChart` | Bar/line chart: opportunity density by sector |
| `MarketBenchmarkPanel` | Own win-rate vs market average |
| `CompetitionSignalsPanel` | Risk/opportunity flags from market data |
| `StrategicRecommendationsList` | Actionable next steps |
| `RecommendationItem` | Single recommendation with linked action |
| `ReportingActionBar` | Quick links: Adjust Profile / Update Filters / Go to Pipeline |

### Feature Module
`src/app/features/reporting/`

### Domain Types
```ts
// types/reporting.ts
ReportingInsights {
  weekOf: string
  executiveSummary: string
  sectorTrends: SectorTrend[]
  marketBenchmark: MarketBenchmark
  competitionSignals: CompetitionSignal[]
  strategicRecommendations: StrategicRecommendation[]
}

SectorTrend { sector: string; opportunityCount: number; trend: 'up' | 'flat' | 'down' }
MarketBenchmark { ownWinRate: number; marketAvgWinRate: number; percentile: number }
CompetitionSignal { description: string; type: 'risk' | 'opportunity'; severity: 'high' | 'medium' | 'low' }
StrategicRecommendation { action: string; rationale: string; linkedTo: 'profile' | 'pipeline' | 'filters' }
```

### Mock Data
- `mock/reporting.ts` — 1 weekly report snapshot with all sections populated

---

## Shared / Cross-Cutting

### Shared UI Components (`src/app/components/ui/`)
| Component | Used By |
|-----------|---------|
| `Badge` | Scoring, Pipeline, Alerts |
| `ProgressBar` | Profile completeness, Execution, Pipeline |
| `ScoreGauge` | Scoring |
| `StatusChip` | Pipeline, Execution tasks |
| `FileUploader` | Company profile, Execution documents |
| `ConfirmDialog` | Decision discard, Archive actions |
| `AlertBanner` | Dashboard alerts, Missing docs |
| `ActionButton` | All pages |
| `SectionCard` | All page sections |
| `EmptyState` | Pipeline empty, No alerts, etc. |

### Shared Services (`src/app/services/`)
| Service | Responsibility |
|---------|---------------|
| `opportunityService.ts` | Fetch, filter, search opportunities |
| `scoringService.ts` | Compute / fetch scoring results |
| `pipelineService.ts` | CRUD pipeline entries |
| `executionService.ts` | Tasks, documents, AI analysis |
| `companyProfileService.ts` | Load / save company profile |
| `reportingService.ts` | Fetch reporting insights |
| `authService.ts` | Auth session management |
| `notificationService.ts` | Alerts and deadline reminders |

### Shared Utils (`src/app/utils/`)
| Util | Responsibility |
|------|---------------|
| `formatDate.ts` | ISO → readable date |
| `calcCompleteness.ts` | Profile completeness % logic |
| `scoringUtils.ts` | Score color thresholds, labels |
| `pipelineFilters.ts` | Filter/sort logic for pipeline table |
| `fileUtils.ts` | File type validation, size check |

---

## Mock Data Index (`src/app/services/mock/`)

| File | Contents |
|------|----------|
| `user.ts` | Auth session, user roles |
| `opportunities.ts` | 8–10 opportunity records |
| `scoring.ts` | 2–3 scoring results |
| `decisions.ts` | 2–3 decision outcomes |
| `pipeline.ts` | 8–12 pipeline entries |
| `execution.ts` | 1 full execution workspace |
| `company.ts` | Partial company profile |
| `dashboard.ts` | Summary + alerts |
| `reporting.ts` | Weekly report snapshot |
