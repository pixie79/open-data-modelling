---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

<!-- 
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.
  
  The /speckit.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/
  
  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment
  
  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize [language] project with [framework] dependencies
- [ ] T003 [P] Configure formatting tools per constitution (e.g., `.prettierrc`, `.editorconfig`, `black.toml`, `rustfmt.toml`)
- [ ] T004 [P] Configure linting tools per constitution (e.g., ESLint, Pylint, Clippy, golangci-lint)
- [ ] T005 [P] Setup pre-commit hooks for formatting and linting (mandatory per constitution Principle II)
- [ ] T006 [P] Configure CI/CD quality gates (linting, formatting, security scans)
- [ ] T007 [P] Setup dependency security scanning (e.g., Snyk, Dependabot, npm audit, cargo audit)
- [ ] T008 [P] Configure static code analysis (SAST) tools (e.g., Bandit, Semgrep, CodeQL, SonarQube)
- [ ] T009 [P] Setup secret scanning (API keys, passwords, tokens)
- [ ] T010 [P] Configure infrastructure security checks (if applicable)
- [ ] T011 [P] Setup GPG commit signing configuration and documentation
- [ ] T012 [P] Verify all quality checks runnable locally
- [ ] T013 [P] Document language-specific formatting and linting standards

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T014 Setup database schema and migrations framework
- [ ] T015 [P] Implement authentication/authorization framework
- [ ] T016 [P] Setup API routing and middleware structure
- [ ] T017 Create base models/entities that all stories depend on
- [ ] T018 Configure error handling and logging infrastructure
- [ ] T019 Setup environment configuration management
- [ ] T020 [P] Verify all quality gates passing (formatting, linting, security scans)
- [ ] T021 [P] Run initial security audit and address critical/high vulnerabilities
- [ ] T022 [P] Verify cross-platform compatibility (if applicable)
- [ ] T023 [P] Setup accessibility testing tools (if UI components)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T024 [P] [US1] Contract test for [endpoint] in tests/contract/test_[name].py
- [ ] T025 [P] [US1] Integration test for [user journey] in tests/integration/test_[name].py

### Implementation for User Story 1

- [ ] T026 [P] [US1] Create [Entity1] model in src/models/[entity1].py
- [ ] T027 [P] [US1] Create [Entity2] model in src/models/[entity2].py
- [ ] T028 [US1] Implement [Service] in src/services/[service].py (depends on T026, T027)
- [ ] T029 [US1] Implement [endpoint/feature] in src/[location]/[file].py
- [ ] T030 [US1] Add validation and error handling
- [ ] T031 [US1] Add logging for user story 1 operations
- [ ] T032 [US1] Verify code formatting compliance (run formatter)
- [ ] T033 [US1] Verify linting compliance (all checks passing)
- [ ] T034 [US1] Verify security scans passing (dependency + SAST)
- [ ] T035 [US1] Verify accessibility compliance (if UI components)

**Checkpoint**: At this point, User Story 1 should be fully functional, testable independently, and compliant with all quality requirements

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T036 [P] [US2] Contract test for [endpoint] in tests/contract/test_[name].py
- [ ] T037 [P] [US2] Integration test for [user journey] in tests/integration/test_[name].py

### Implementation for User Story 2

- [ ] T038 [P] [US2] Create [Entity] model in src/models/[entity].py
- [ ] T039 [US2] Implement [Service] in src/services/[service].py
- [ ] T040 [US2] Implement [endpoint/feature] in src/[location]/[file].py
- [ ] T041 [US2] Integrate with User Story 1 components (if needed)
- [ ] T042 [US2] Verify code formatting compliance (run formatter)
- [ ] T043 [US2] Verify linting compliance (all checks passing)
- [ ] T044 [US2] Verify security scans passing (dependency + SAST)
- [ ] T045 [US2] Verify accessibility compliance (if UI components)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently and be compliant with all quality requirements

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T046 [P] [US3] Contract test for [endpoint] in tests/contract/test_[name].py
- [ ] T047 [P] [US3] Integration test for [user journey] in tests/integration/test_[name].py

### Implementation for User Story 3

- [ ] T048 [P] [US3] Create [Entity] model in src/models/[entity].py
- [ ] T049 [US3] Implement [Service] in src/services/[service].py
- [ ] T050 [US3] Implement [endpoint/feature] in src/[location]/[file].py
- [ ] T051 [US3] Verify code formatting compliance (run formatter)
- [ ] T052 [US3] Verify linting compliance (all checks passing)
- [ ] T053 [US3] Verify security scans passing (dependency + SAST)
- [ ] T054 [US3] Verify accessibility compliance (if UI components)

**Checkpoint**: All user stories should now be independently functional and compliant with all quality requirements

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T055 [P] Documentation updates in docs/
- [ ] T056 Code cleanup and refactoring
- [ ] T057 Performance optimization across all stories
- [ ] T058 [P] Additional unit tests (if requested) in tests/unit/
- [ ] T059 [P] Final security audit and vulnerability remediation
- [ ] T060 [P] Verify all quality gates passing across entire feature
- [ ] T061 [P] Run comprehensive linting check on all code
- [ ] T062 [P] Run comprehensive formatting check on all code
- [ ] T063 [P] Verify all commits are GPG signed
- [ ] T064 [P] Cross-platform compatibility verification (if applicable)
- [ ] T065 [P] Accessibility audit and fixes (if UI components)
- [ ] T066 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Contract test for [endpoint] in tests/contract/test_[name].py"
Task: "Integration test for [user journey] in tests/integration/test_[name].py"

# Launch all models for User Story 1 together:
Task: "Create [Entity1] model in src/models/[entity1].py"
Task: "Create [Entity2] model in src/models/[entity2].py"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group (all commits MUST be GPG signed per constitution Principle VI)
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

## Quality Requirements Compliance

**Constitution Reference**: `.specify/memory/constitution.md`  
**Checklist Reference**: `checklists/code-quality-requirements-checklist.md`

All tasks MUST comply with the project constitution. Key requirements:

- **Formatting**: Code MUST be formatted per language standards (Principle I)
- **Linting**: All linting checks MUST pass (Principle II)
- **Security**: Dependency scanning + SAST + infrastructure security MUST pass (Principle III)
- **Signing**: All commits MUST be GPG signed (Principle VI)
- **Cross-platform**: Code MUST be cross-platform compatible (Principle IV)
- **Accessibility**: UI components MUST meet WCAG 2.1 Level AA (Principle V)

Quality verification tasks are included in each phase to ensure continuous compliance.
