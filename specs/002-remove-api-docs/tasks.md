# Tasks: Remove API Documentation and Update Tool Information

**Input**: Design documents from `/specs/002-remove-api-docs/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No automated tests required - documentation changes verified via manual review and Hugo build validation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- Documentation content: `hugo-site/content/`
- Navigation data: `hugo-site/data/`
- Root documentation: `README.md`

---

## Phase 1: Setup (Verification Tools)

**Purpose**: Ensure verification tools are ready for documentation updates

- [x] T001 Verify Hugo Extended 0.100+ is installed and accessible
- [x] T002 [P] Verify Node.js 18+ and npm 9+ are installed
- [x] T003 [P] Verify markdownlint is configured and working (`npm run lint:markdown`)
- [x] T004 [P] Verify Hugo site builds successfully (`cd hugo-site && hugo`)
- [x] T005 [P] Verify local Hugo server can be started (`cd hugo-site && hugo server`)

---

## Phase 2: User Story 1 - Documentation Accuracy for Offline Tools (Priority: P1) 🎯 MVP

**Goal**: Remove all API documentation and references, ensuring users only see available tools (SDK, CLI, OSX App, Web App)

**Independent Test**: Review all documentation pages and verify:
- No API endpoints are documented
- No API installation instructions are present
- No API usage examples are shown
- Navigation menus don't include API links
- Related tools sections don't reference the API
- All references to API are replaced with appropriate v2 messaging where contextually relevant

### Implementation for User Story 1

- [x] T006 [P] [US1] Remove API entry from navigation menu in `hugo-site/data/navigation.yaml`
- [x] T007 [P] [US1] Replace API page content with v2 availability message in `hugo-site/content/tools/api/_index.md`
- [x] T008 [P] [US1] Remove API section from tools index page in `hugo-site/content/tools/_index.md`
- [x] T009 [P] [US1] Remove API from homepage tool list in `hugo-site/content/_index.md`
- [x] T010 [P] [US1] Remove API references from SDK page in `hugo-site/content/tools/sdk/_index.md`
- [x] T011 [P] [US1] Remove API references from OSX App page in `hugo-site/content/tools/osx-app/_index.md`
- [x] T012 [P] [US1] Remove API references from Web App page in `hugo-site/content/tools/web-app/_index.md`
- [x] T013 [P] [US1] Remove API curl examples from import guide in `hugo-site/content/guides/import/_index.md`
- [x] T014 [P] [US1] Remove API curl examples from export guide in `hugo-site/content/guides/export/_index.md`
- [x] T015 [P] [US1] Remove API link from ODCS overview page in `hugo-site/content/odcs/odcs-overview.md`
- [x] T016 [US1] Update README.md to mark API as v2 in `README.md`
- [x] T017 [US1] Verify no API references remain (run grep search: `grep -ri "api" hugo-site/content --include="*.md" | grep -v "CLI\|clients\|applications\|capabilities"`)
- [x] T018 [US1] Verify navigation YAML has no API entries (`cat hugo-site/data/navigation.yaml | grep -i api`)
- [x] T019 [US1] Verify Hugo builds successfully (`cd hugo-site && hugo --minify`)
- [x] T020 [US1] Verify markdown linting passes (`npm run lint:markdown`)

**Checkpoint**: At this point, User Story 1 should be complete - all API references removed except v2 messaging, navigation updated, and Hugo site builds successfully.

---

## Phase 3: User Story 2 - Updated SDK Version Information (Priority: P1)

**Goal**: Update all SDK version references to v1.7.1 to ensure users access correct documentation and installation instructions

**Independent Test**: Search all documentation files for SDK version references and verify:
- All version numbers are updated to v1.7.1
- Links to SDK documentation point to the correct version
- Installation instructions reference the correct version
- Examples and code snippets are compatible with v1.7.1

### Implementation for User Story 2

- [x] T021 [US2] Update SDK version to v1.7.1 in SDK page `hugo-site/content/tools/sdk/_index.md`
- [x] T022 [US2] Update SDK version in installation examples in `hugo-site/content/tools/sdk/_index.md`
- [x] T023 [US2] Update SDK documentation links to point to v1.7.1 in `hugo-site/content/tools/sdk/_index.md`
- [x] T024 [US2] Search for other SDK version references in `hugo-site/content/` and update to v1.7.1
- [x] T025 [US2] Verify all SDK version references are v1.7.1 (`grep -r "1.7.1" hugo-site/content/tools/sdk/`)
- [x] T026 [US2] Verify no old SDK versions remain (`grep -r "1.0.0\|1.6\|1.7[^.]" hugo-site/content/tools/sdk/`)
- [x] T027 [US2] Verify Hugo builds successfully (`cd hugo-site && hugo --minify`)
- [x] T028 [US2] Verify markdown linting passes (`npm run lint:markdown`)

**Checkpoint**: At this point, User Stories 1 AND 2 should both be complete - API removed and SDK version updated to v1.7.1.

---

## Phase 4: User Story 3 - CLI Tool Discovery and Usage (Priority: P2)

**Goal**: Add CLI tool documentation so users can discover and use the Data Modelling CLI format conversion tool

**Independent Test**: Verify that:
- CLI tool is mentioned in appropriate documentation sections
- CLI tool has its own documentation page
- CLI tool documentation includes installation instructions
- CLI tool documentation includes usage examples
- Links to CLI documentation (CLI.md) are present and correct
- Package download information is provided

### Implementation for User Story 3

- [x] T029 [US3] Create CLI tool directory `hugo-site/content/tools/cli/`
- [x] T030 [US3] Create CLI tool page with front matter in `hugo-site/content/tools/cli/_index.md`
- [x] T031 [US3] Add CLI tool features section in `hugo-site/content/tools/cli/_index.md`
- [x] T032 [US3] Add CLI installation instructions with GitHub releases link in `hugo-site/content/tools/cli/_index.md`
- [x] T033 [US3] Add CLI documentation link to CLI.md in `hugo-site/content/tools/cli/_index.md`
- [x] T034 [US3] Add CLI to navigation menu with weight 2 in `hugo-site/data/navigation.yaml`
- [x] T035 [US3] Add CLI tool entry to tools index page in `hugo-site/content/tools/_index.md`
- [x] T036 [US3] Add CLI to homepage tool list in `hugo-site/content/_index.md`
- [x] T037 [US3] Add CLI examples to import guide (if appropriate) in `hugo-site/content/guides/import/_index.md`
- [x] T038 [US3] Add CLI examples to export guide (if appropriate) in `hugo-site/content/guides/export/_index.md`
- [x] T039 [US3] Verify CLI page loads correctly (`cd hugo-site && hugo server`, visit `/tools/cli/`)
- [x] T040 [US3] Verify CLI appears in navigation menu
- [x] T041 [US3] Verify CLI links are functional (check external GitHub links)
- [x] T042 [US3] Verify Hugo builds successfully (`cd hugo-site && hugo --minify`)
- [x] T043 [US3] Verify markdown linting passes (`npm run lint:markdown`)

**Checkpoint**: At this point, User Stories 1, 2, AND 3 should all be complete - API removed, SDK version updated, and CLI tool documented.

---

## Phase 5: User Story 4 - Updated Frontend Application Information (Priority: P2)

**Goal**: Update Frontend Web App and Electron App versions to v1.1.0 and add links to release branch documentation

**Independent Test**: Verify that:
- Frontend application documentation references v1.1.0
- Links to the release branch are present and correct
- Changelog information is accessible
- Release notes highlight key updates

### Implementation for User Story 4

- [x] T044 [P] [US4] Update Web App version to v1.1.0 in `hugo-site/content/tools/web-app/_index.md`
- [x] T045 [P] [US4] Add Frontend v1.1.0 README link to Web App page in `hugo-site/content/tools/web-app/_index.md`
- [x] T046 [P] [US4] Add Frontend v1.1.0 CHANGELOG link to Web App page in `hugo-site/content/tools/web-app/_index.md`
- [x] T047 [P] [US4] Update OSX App version to v1.1.0 in `hugo-site/content/tools/osx-app/_index.md`
- [x] T048 [P] [US4] Add Frontend v1.1.0 README link to OSX App page in `hugo-site/content/tools/osx-app/_index.md`
- [x] T049 [P] [US4] Add Frontend v1.1.0 CHANGELOG link to OSX App page in `hugo-site/content/tools/osx-app/_index.md`
- [x] T050 [US4] Verify Web App version is v1.1.0 (`grep -r "1.1.0" hugo-site/content/tools/web-app/`)
- [x] T051 [US4] Verify OSX App version is v1.1.0 (`grep -r "1.1.0" hugo-site/content/tools/osx-app/`)
- [x] T052 [US4] Verify release branch links are correct and accessible
- [x] T053 [US4] Verify Hugo builds successfully (`cd hugo-site && hugo --minify`)
- [x] T054 [US4] Verify markdown linting passes (`npm run lint:markdown`)

**Checkpoint**: At this point, all user stories should be complete - API removed, SDK version updated, CLI tool documented, and Frontend versions updated.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification, quality checks, and cross-cutting documentation updates

- [x] T055 [P] Run comprehensive API reference search (`grep -ri "api" hugo-site/content --include="*.md" | grep -v "CLI\|clients\|applications\|capabilities"`)
- [x] T056 [P] Verify all version numbers are correct (SDK: 1.7.1, Frontend: 1.1.0)
- [x] T057 [P] Verify all external links are accessible (GitHub links, CLI.md, release branch)
- [x] T058 [P] Verify navigation menu structure is correct (SDK, CLI, OSX App, Web App - no API)
- [x] T059 [P] Verify YAML syntax is valid (`yamllint hugo-site/data/navigation.yaml`)
- [x] T060 [P] Run comprehensive markdown linting (`npm run lint:markdown`)
- [x] T061 [P] Run comprehensive Hugo build test (`cd hugo-site && hugo --minify`)
- [x] T062 [P] Test local Hugo server and verify all pages load correctly
- [x] T063 [P] Verify `/tools/api/` shows v2 message
- [x] T064 [P] Verify `/tools/cli/` exists and loads correctly
- [x] T065 [P] Verify all internal links work (no 404s)
- [x] T066 Verify all commits are GPG signed (if multiple commits made)
- [x] T067 Run quickstart.md validation checklist
- [x] T068 Create commit message following conventional commit format

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **User Story 1 (Phase 2)**: Can start after Setup - Removes API references (MVP)
- **User Story 2 (Phase 3)**: Can start after Setup - Updates SDK version (independent of US1)
- **User Story 3 (Phase 4)**: Can start after Setup - Adds CLI tool (independent of US1/US2)
- **User Story 4 (Phase 5)**: Can start after Setup - Updates Frontend versions (independent of other stories)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Setup - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Setup - No dependencies on other stories
- **User Story 3 (P2)**: Can start after Setup - No dependencies on other stories
- **User Story 4 (P2)**: Can start after Setup - No dependencies on other stories

**Note**: All user stories are independent and can be worked on in parallel if team capacity allows.

### Within Each User Story

- File updates can be done in parallel (marked [P])
- Verification tasks should be done after implementation tasks
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All User Story 1 tasks marked [P] can run in parallel (different files)
- User Story 2 can run in parallel with User Story 1 (different files)
- User Story 3 can run in parallel with User Stories 1 and 2 (different files)
- User Story 4 tasks marked [P] can run in parallel (Web App and OSX App are separate files)
- All Polish tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all User Story 1 file updates in parallel (different files):
Task: "Remove API entry from navigation menu in hugo-site/data/navigation.yaml"
Task: "Replace API page content with v2 message in hugo-site/content/tools/api/_index.md"
Task: "Remove API section from tools index page in hugo-site/content/tools/_index.md"
Task: "Remove API from homepage tool list in hugo-site/content/_index.md"
Task: "Remove API references from SDK page in hugo-site/content/tools/sdk/_index.md"
Task: "Remove API references from OSX App page in hugo-site/content/tools/osx-app/_index.md"
Task: "Remove API references from Web App page in hugo-site/content/tools/web-app/_index.md"
Task: "Remove API curl examples from import guide in hugo-site/content/guides/import/_index.md"
Task: "Remove API curl examples from export guide in hugo-site/content/guides/export/_index.md"
Task: "Remove API link from ODCS overview page in hugo-site/content/odcs/odcs-overview.md"
```

---

## Parallel Example: User Story 4

```bash
# Launch all User Story 4 file updates in parallel (Web App and OSX App are separate):
Task: "Update Web App version to v1.1.0 in hugo-site/content/tools/web-app/_index.md"
Task: "Update OSX App version to v1.1.0 in hugo-site/content/tools/osx-app/_index.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (verification tools)
2. Complete Phase 2: User Story 1 (Remove API documentation)
3. **STOP and VALIDATE**: Verify API removed, Hugo builds, navigation updated
4. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup → Verification tools ready
2. Add User Story 1 → API removed → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → SDK version updated → Test independently → Deploy/Demo
4. Add User Story 3 → CLI tool documented → Test independently → Deploy/Demo
5. Add User Story 4 → Frontend versions updated → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup together
2. Once Setup is done:
   - Developer A: User Story 1 (Remove API)
   - Developer B: User Story 2 (Update SDK version)
   - Developer C: User Story 3 (Add CLI tool)
   - Developer D: User Story 4 (Update Frontend versions)
3. Stories complete and integrate independently (no conflicts - different files)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each user story or logical group (all commits MUST be GPG signed per constitution Principle VI)
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Documentation-only changes - no code implementation needed
- All changes are to Markdown/YAML files in Hugo site

## Quality Requirements Compliance

**Constitution Reference**: `.specify/memory/constitution.md`  
**Checklist Reference**: `checklists/code-quality-requirements-checklist.md`

All tasks MUST comply with the project constitution. Key requirements:

- **Formatting**: Markdown MUST be formatted per project standards (Principle I)
- **Linting**: All markdown linting checks MUST pass (Principle II)
- **Security**: No security concerns for documentation (Principle III)
- **Signing**: All commits MUST be GPG signed (Principle VI)
- **Cross-platform**: Hugo generates platform-agnostic HTML (Principle IV)
- **Accessibility**: Generated HTML MUST meet WCAG 2.1 Level AA (Principle V - Hugo theme responsibility)

Quality verification tasks are included in each phase to ensure continuous compliance.

