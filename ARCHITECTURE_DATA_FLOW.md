# Data Flow Architecture - Generated Responses Export

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER INTERACTION                              │
│  Clicks "Auto-Answer & Generate Report" (Yellow Button)         │
└─────────────────────────────────────┬───────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────┐
│               autoAnswerAndReport() Function                     │
│  1. Selects random questions (50-360)                           │
│  2. Generates random scores based on distribution               │
│  3. Saves to userResponses object                               │
└──────┬──────────────────────────────┬──────────────────────┬────┘
       │                              │                      │
       ▼                              ▼                      ▼
┌─────────────┐         ┌──────────────────────┐   ┌──────────────┐
│ localStorage│         │ exportResponsesToFile()│   │ HTML Report  │
│   Save      │         │                      │   │  Download    │
└──────┬──────┘         └──────────┬───────────┘   └──────────────┘
       │                           │
       │                           ▼
       │              ┌──────────────────────────┐
       │              │ generated_responses.js   │
       │              │  File Download           │
       │              │  (Auto-downloaded)       │
       │              └──────────┬───────────────┘
       │                         │
       │                         │ Replace file at root
       │                         ▼
       │              ┌──────────────────────────┐
       │              │ Project Root Directory   │
       │              │ generated_responses.js   │
       │              └──────────┬───────────────┘
       │                         │
       │                         │ Loaded via <script> tag
       │                         ▼
       │              ┌──────────────────────────┐
       │    ┌────────▶│  generatedResponses      │◀────────┐
       │    │         │  (Global Object)         │         │
       │    │         └──────────┬───────────────┘         │
       │    │                    │                         │
       │    │                    ▼                         │
       │    │         ┌──────────────────────────┐         │
       │    │         │ loadGeneratedResponses() │         │
       │    │         │  Merges with userResponses│        │
       │    │         └──────────┬───────────────┘         │
       │    │                    │                         │
       └────┼────────────────────┴─────────────────────────┘
            │                    │
            │                    ▼
            │         ┌──────────────────────────┐
            │         │    userResponses         │
            │         │  (Unified Data Object)   │
            │         └──────────┬───────────────┘
            │                    │
            │                    │ Used by all functions
            │                    │
    ┌───────┴────────────────────┴───────────────────────┐
    │                                                     │
    ▼                                                     ▼
┌─────────────────────┐                    ┌──────────────────────┐
│ Helper Functions    │                    │   Dashboard          │
│ - getAnsweredCount()│                    │   Rendering          │
│ - getTotalScore()   │                    │ - renderDashboardExec│
│ - getDimensionMetrics()                  │ - renderCharts()     │
│ - getCompletionPercentage()              │ - Maturity Radar     │
└─────────┬───────────┘                    └──────────┬───────────┘
          │                                           │
          │                                           │
          └───────────────┬───────────────────────────┘
                          │
                          ▼
          ┌───────────────────────────────────────────┐
          │          ALL DASHBOARDS                    │
          │  - Executive Dashboard                     │
          │  - Maturity by Dimensions                  │
          │  - Maturity Radar Chart                    │
          │  - Bar Charts                              │
          │  - Question Library                        │
          │  - Export Reports                          │
          └───────────────────────────────────────────┘
```

## Data Loading Priority

```
Priority 1: generatedResponses.js (if exists and has data)
            ↓
Priority 2: localStorage (tasheer_resp_ent_v3)
            ↓
Priority 3: Empty userResponses object
```

## Function Call Chain

### When Auto-Answer Button is Clicked:

```
autoAnswerAndReport()
  ├─▶ Generate random answers
  ├─▶ Save to userResponses
  ├─▶ saveResponses() → localStorage
  ├─▶ exportResponsesToFile() → Download JS file
  ├─▶ Update generatedResponses (in-memory)
  ├─▶ loadGeneratedResponses() → Merge data
  └─▶ renderDashboardExec() → Display results
```

### When Dashboard Loads:

```
renderDashboardExec()
  ├─▶ loadGeneratedResponses()
  │     └─▶ Check if generatedResponses.responses exists
  │           └─▶ Merge into userResponses
  │
  ├─▶ getDimensionMetrics()
  │     ├─▶ loadGeneratedResponses()
  │     └─▶ Calculate metrics from userResponses
  │
  ├─▶ getAnsweredCount()
  │     ├─▶ loadGeneratedResponses()
  │     └─▶ Count from userResponses
  │
  ├─▶ getTotalScore()
  │     ├─▶ loadGeneratedResponses()
  │     └─▶ Sum from userResponses
  │
  └─▶ renderCharts()
        └─▶ Display radar & bar charts
```

## File Structure

```
DMI Assessment System
│
├── index.html (Main Application)
│   ├── Loads: generated_responses.js
│   ├── Contains: All helper functions
│   └── Manages: userResponses object
│
├── generated_responses.js (Auto-Generated Data)
│   ├── Created by: exportResponsesToFile()
│   ├── Contains: All responses + metadata
│   └── Loaded by: <script> tag in index.html
│
└── assets/
    └── quizzes/ (Question Banks)
        ├── quiz_1_external_applications.js
        ├── quiz_2_internal_applications.js
        ├── quiz_3_security_compliance.js
        ├── quiz_4_monitoring_controls.js
        └── quiz_5_innovation_edge.js
```

## Key Features

### 1. Automatic Sync
- All dashboards automatically load from generated_responses.js
- No manual configuration needed
- Data stays synchronized across all views

### 2. Multiple Storage Layers
- **In-Memory**: userResponses object (runtime)
- **Browser**: localStorage (persistence)
- **File System**: generated_responses.js (export/backup)

### 3. Seamless Integration
- Helper functions automatically load generated data
- No changes needed to dashboard rendering code
- Backwards compatible with existing functionality

---

**Architecture Version**: 1.0  
**Date**: February 3, 2026  
**System**: DMI Assessment Tool
