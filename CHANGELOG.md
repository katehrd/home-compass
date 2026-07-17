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