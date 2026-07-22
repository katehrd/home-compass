# Changelog

## Sprint 4 - Home Journey

### Added
- Home Journey component
- JourneyStep component
- Current Decision card
- Home Overview section
- Dynamic Home Detail improvements

### Changed
- Improved Home Detail page layout
- Added visual journey timeline
- Added UI Polish backlog to ARCHITECTURE.md

# Changelog

## In Progress - Sprint 5

### Added
- Created Task interface
- Added TaskStatus and TaskPriority types
- Created initial tasks data
- Linked tasks to homes and journey steps

## Sprint 5 - Task System

### Added
- Created Task model with status, priority, owner, notes, and due dates
- Added centralized `tasks.ts` data source
- Linked tasks to homes and Home Journey steps

### Changed
- Dashboard "Today's Priorities" now uses task data
- Home Detail "High Priority" card now uses task data
- Action Cards now display task titles instead of `home.nextAction`

### Removed
- Removed `nextAction` from the Home model
- Tasks are now the single source of truth for actionable work

### Architecture
- Separated Home, Task, and Journey into distinct domain models


## Sprint 6 - Interactive Tasks

### Added
- Created reusable `TaskStatusSelect` component
- Introduced interactive task status dropdowns on Dashboard action cards
- Added client-side task state using React `useState`

### Changed
- Action Cards now support interactive status updates
- Refactored Dashboard task flow to lift task state into `TodaysPriorities`
- Established client/server component boundaries for task interactions

### Fixed
- Corrected task due date handling to avoid JavaScript timezone shifts when creating calendar dates

## Sprint 6 - Shared Task State

### Added
- Added `TaskContext` to centralize task state across the application
- Added `TaskProvider` at the application root
- Added reusable `useTasks()` hook for accessing and updating tasks

### Changed
- Refactored Dashboard to use shared task state instead of local `useState`
- Moved task status update logic into `TaskContext`
- Established a single source of truth for task state

### Behavior
- Task status now persists while navigating between pages during a session
- Task state is shared across the application (client-side)
- Task state still resets on browser refresh until persistence is added

### Added
- Home Detail page now uses shared task state through `TaskContext`
- Added interactive task status updates to the Home Detail page

### Changed
- Moved task rendering into reusable `HomeTaskPanel`
- Removed duplicate task lookup logic from `HomeDetailPage`

## Sprint 7 - Task Management

### Added
- Added reusable `TaskCard` component
- Home Detail page now displays all tasks for a home
- Added interactive task status controls to each task

### Changed
- Renamed `HomeTaskPanel` to `HomeTasksPanel`
- Replaced the single High Priority view with a complete task list
- Improved task visibility to reduce duplicate task creation