# Tasks: Open Data Modelling Documentation Website

**Input**: Design documents from `/specs/001-odm-docs-site/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - not explicitly requested in feature specification, so no test tasks included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Hugo static site**: `hugo-site/` at repository root
- Content: `hugo-site/content/`
- Assets: `hugo-site/assets/`
- Layouts: `hugo-site/layouts/`
- Static files: `hugo-site/static/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Hugo site structure in hugo-site/ directory per implementation plan
- [x] T002 Initialize Hugo site with `hugo new site hugo-site` command
- [x] T003 [P] Create package.json in hugo-site/ with Node.js tooling dependencies (markdownlint, stylelint, prettier, ESLint, htmltest, axe-core)
- [x] T004 [P] Configure .markdownlint.json in hugo-site/ for Markdown linting
- [x] T005 [P] Configure .stylelintrc.json in hugo-site/ for CSS/SCSS linting
- [x] T006 [P] Configure .prettierrc in hugo-site/ for code formatting
- [x] T007 [P] Configure .editorconfig in hugo-site/ for editor consistency
- [x] T008 [P] Setup pre-commit hooks for formatting and linting (mandatory per constitution Principle II)
- [x] T009 [P] Configure CI/CD quality gates in .github/workflows/deploy.yml (linting, formatting, security scans)
- [x] T010 [P] Setup dependency security scanning in CI/CD (npm audit, Dependabot)
- [x] T011 [P] Configure static code analysis (SAST) tools (HTMLHint, accessibility linting)
- [x] T012 [P] Setup secret scanning pre-commit hook (detect API keys, passwords, tokens)
- [x] T013 [P] Setup GPG commit signing configuration and documentation in hugo-site/README.md
- [x] T014 [P] Verify all quality checks runnable locally via npm scripts
- [x] T015 [P] Document language-specific formatting and linting standards in hugo-site/README.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T016 Create Hugo config.toml in hugo-site/ with site configuration (title, baseURL, languageCode)
- [x] T017 [P] Setup Hugo theme (custom theme or base theme like PaperMod/Docsy) in hugo-site/themes/ or configure external theme
- [x] T018 [P] Create base layout templates in hugo-site/layouts/_default/ (baseof.html, single.html, list.html)
- [x] T019 [P] Create navigation partial in hugo-site/layouts/partials/navigation.html
- [x] T020 [P] Create header partial in hugo-site/layouts/partials/header.html
- [x] T021 [P] Create footer partial in hugo-site/layouts/partials/footer.html
- [x] T022 [P] Create data/navigation.yaml in hugo-site/ with site navigation structure
- [x] T023 [P] Create data/external-links.yaml in hugo-site/ with external link definitions (ODCS, ODPS, GitHub repos)
- [x] T024 [P] Create assets/css/main.scss in hugo-site/ with base styles and responsive design
- [x] T025 [P] Design and create professional logo in hugo-site/assets/images/logos/logo.svg
- [x] T026 [P] Create logo PNG versions in hugo-site/assets/images/logos/ (logo.png for fallback)
- [x] T027 [P] Generate favicon files in hugo-site/assets/images/favicons/ (16x16, 32x32, 180x180, 192x192, 512x512)
- [x] T028 [P] Copy favicon.ico to hugo-site/static/favicon.ico
- [x] T029 [P] Copy logo files to hugo-site/static/logo.svg and hugo-site/static/logo.png
- [x] T030 [P] Create assets/images/ directory structure (logos/, diagrams/, screenshots/, favicons/)
- [x] T031 [P] Configure Cloudflare Pages deployment in .github/workflows/deploy.yml
- [x] T032 [P] Verify all quality gates passing (formatting, linting, security scans)
- [x] T033 [P] Run initial security audit and address critical/high vulnerabilities
- [x] T034 [P] Verify cross-platform compatibility (test Hugo build on different OS)
- [x] T035 [P] Setup accessibility testing tools (axe-core, Lighthouse) in CI/CD

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Learn About Data Contracts and ODCS Standard (Priority: P1) 🎯 MVP

**Goal**: Educate visitors about data contracts, ODCS standard, and data schema types with clear explanations and visual diagrams

**Independent Test**: A visitor can navigate to the homepage and read through the data contracts and ODCS sections. The visitor should understand what data contracts are, what ODCS provides, and the benefits of different schema types without needing to access other sections.

### Implementation for User Story 1

- [x] T036 [P] [US1] Create homepage content in hugo-site/content/_index.md introducing Open Data Modelling
- [x] T037 [P] [US1] Create data-contracts section directory in hugo-site/content/data-contracts/
- [x] T038 [P] [US1] Create data-contracts section landing page in hugo-site/content/data-contracts/_index.md
- [x] T039 [P] [US1] Create data-contracts content page in hugo-site/content/data-contracts/what-are-data-contracts.md
- [x] T040 [P] [US1] Create odcs section directory in hugo-site/content/odcs/
- [x] T041 [P] [US1] Create odcs section landing page in hugo-site/content/odcs/_index.md with link to ODCS documentation
- [x] T042 [P] [US1] Create odcs overview page in hugo-site/content/odcs/odcs-overview.md
- [x] T043 [P] [US1] Create schemas section directory in hugo-site/content/schemas/
- [x] T044 [P] [US1] Create schemas section landing page in hugo-site/content/schemas/_index.md
- [x] T045 [P] [US1] Create schema types page in hugo-site/content/schemas/schema-types.md explaining different schema types and benefits
- [x] T046 [P] [US1] Create data contract flow diagram in hugo-site/assets/images/diagrams/data-contract-flow.svg
- [x] T047 [P] [US1] Create ODCS architecture diagram in hugo-site/assets/images/diagrams/odcs-architecture.svg
- [x] T048 [P] [US1] Create schema types comparison diagram in hugo-site/assets/images/diagrams/schema-types-comparison.svg
- [x] T049 [US1] Add diagrams to content pages with proper alt text for accessibility
- [x] T050 [US1] Verify code formatting compliance (run formatter)
- [x] T051 [US1] Verify linting compliance (all checks passing)
- [x] T052 [US1] Verify security scans passing (dependency + SAST)
- [x] T053 [US1] Verify accessibility compliance (WCAG 2.1 Level AA, alt text, keyboard navigation)

**Checkpoint**: At this point, User Story 1 should be fully functional, testable independently, and compliant with all quality requirements

---

## Phase 4: User Story 2 - Discover Open Data Modelling Products (Priority: P2)

**Goal**: Introduce visitors to available Open Data Modelling tools (SDK, API, OSX App, Web App) with clear information and links

**Independent Test**: A visitor can navigate directly to the products section and read about each product (SDK, API, OSX App, Web App). The visitor should understand what each product offers and where to find more information, without needing to access the usage guide.

### Implementation for User Story 2

- [x] T054 [P] [US2] Create products section directory in hugo-site/content/products/
- [x] T055 [P] [US2] Create products section landing page in hugo-site/content/products/_index.md
- [x] T056 [P] [US2] Create SDK subsection directory in hugo-site/content/products/sdk/
- [x] T057 [P] [US2] Create SDK section page in hugo-site/content/products/sdk/_index.md with link to GitHub repository
- [x] T058 [P] [US2] Create API subsection directory in hugo-site/content/products/api/
- [x] T059 [P] [US2] Create API section page in hugo-site/content/products/api/_index.md with link to GitHub repository
- [x] T060 [P] [US2] Create OSX App subsection directory in hugo-site/content/products/osx-app/
- [x] T061 [P] [US2] Create OSX App section page in hugo-site/content/products/osx-app/_index.md with link to frontend repository
- [x] T062 [P] [US2] Create Web App subsection directory in hugo-site/content/products/web-app/
- [x] T063 [P] [US2] Create Web App section page in hugo-site/content/products/web-app/_index.md with link to frontend repository
- [x] T064 [P] [US2] Create SDK screenshot in hugo-site/assets/images/screenshots/sdk-demo.svg
- [x] T065 [P] [US2] Create API screenshot in hugo-site/assets/images/screenshots/api-demo.svg
- [x] T066 [P] [US2] Create OSX App screenshot in hugo-site/assets/images/screenshots/osx-app-demo.svg
- [x] T067 [P] [US2] Create Web App screenshot in hugo-site/assets/images/screenshots/web-app-demo.svg
- [x] T068 [US2] Add screenshots to product pages with proper alt text for accessibility
- [x] T069 [US2] Verify code formatting compliance (run formatter)
- [x] T070 [US2] Verify linting compliance (all checks passing)
- [x] T071 [US2] Verify security scans passing (dependency + SAST)
- [x] T072 [US2] Verify accessibility compliance (WCAG 2.1 Level AA, alt text, keyboard navigation)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently and be compliant with all quality requirements

---

## Phase 5: User Story 3 - Learn How to Use Open Data Modelling (Priority: P3)

**Goal**: Provide practical usage guides covering import, export, Crowsfeat notation, and Data Flows with clear examples and visual aids

**Independent Test**: A visitor can navigate directly to the usage guide section and follow instructions for import, export, Crowsfeat notation, and Data Flows. The visitor should be able to understand how to perform these operations without needing to access other sections.

### Implementation for User Story 3

- [x] T073 [P] [US3] Create guides section directory in hugo-site/content/guides/
- [x] T074 [P] [US3] Create guides section landing page in hugo-site/content/guides/_index.md
- [x] T075 [P] [US3] Create import guide subsection directory in hugo-site/content/guides/import/
- [x] T076 [P] [US3] Create import guide page in hugo-site/content/guides/import/_index.md with step-by-step instructions and examples
- [x] T077 [P] [US3] Create export guide subsection directory in hugo-site/content/guides/export/
- [x] T078 [P] [US3] Create export guide page in hugo-site/content/guides/export/_index.md with instructions for different export formats
- [x] T079 [P] [US3] Create Crowsfeat subsection directory in hugo-site/content/guides/crowsfeat/
- [x] T080 [P] [US3] Create Crowsfeat notation guide page in hugo-site/content/guides/crowsfeat/_index.md with explanations and examples
- [x] T081 [P] [US3] Create Data Flows subsection directory in hugo-site/content/guides/data-flows/
- [x] T082 [P] [US3] Create Data Flows guide page in hugo-site/content/guides/data-flows/_index.md explaining Data Flows and their relationship to Data Models
- [x] T083 [P] [US3] Create import process diagram in hugo-site/assets/images/diagrams/import-process.svg
- [x] T084 [P] [US3] Create export process diagram in hugo-site/assets/images/diagrams/export-process.svg
- [x] T085 [P] [US3] Create Crowsfeat notation examples diagram in hugo-site/assets/images/diagrams/crowsfeat-examples.svg
- [x] T086 [P] [US3] Create Data Flows diagram in hugo-site/assets/images/diagrams/data-flows-diagram.svg showing relationship to Data Models
- [x] T087 [US3] Add diagrams to guide pages with proper alt text for accessibility
- [x] T088 [US3] Add links to ODCS and ODPS documentation where relevant in guide pages
- [x] T089 [US3] Verify code formatting compliance (run formatter)
- [x] T090 [US3] Verify linting compliance (all checks passing)
- [x] T091 [US3] Verify security scans passing (dependency + SAST)
- [x] T092 [US3] Verify accessibility compliance (WCAG 2.1 Level AA, alt text, keyboard navigation)

**Checkpoint**: All user stories should now be independently functional and compliant with all quality requirements

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T093 [P] Update navigation to include all sections in hugo-site/data/navigation.yaml
- [x] T094 [P] Ensure consistent branding (logo, colors, typography) across all pages
- [x] T095 [P] Optimize all images (convert to WebP where appropriate, compress) in hugo-site/assets/images/
- [x] T096 [P] Add responsive image handling (srcset) in layouts for better performance
- [x] T097 [P] Configure Hugo minification in config.toml for production builds
- [x] T098 [P] Add meta tags (Open Graph, Twitter Cards) to base layout in hugo-site/layouts/_default/baseof.html
- [x] T099 [P] Verify all external links are functional and accessible (run htmltest)
- [x] T100 [P] Final security audit and vulnerability remediation
- [x] T101 [P] Verify all quality gates passing across entire feature
- [x] T102 [P] Run comprehensive linting check on all code (markdownlint, stylelint, ESLint, HTMLHint)
- [x] T103 [P] Run comprehensive formatting check on all code (prettier)
- [x] T104 [P] Verify all commits are GPG signed
- [x] T105 [P] Cross-platform compatibility verification (test Hugo build on macOS, Linux, Windows)
- [x] T106 [P] Accessibility audit and fixes (run axe-core, Lighthouse, verify WCAG 2.1 Level AA compliance)
- [x] T107 [P] Performance optimization (verify page load < 3 seconds, Lighthouse performance score > 90)
- [x] T108 [P] Link checking (verify all internal and external links work)
- [x] T109 Run quickstart.md validation (verify all setup steps work correctly)

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
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - No dependencies on US1, independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on US1/US2, independently testable

### Within Each User Story

- Content pages can be created in parallel (different files)
- Diagrams can be created in parallel (different files)
- Visual assets can be created in parallel (different files)
- Quality verification tasks must run after content creation

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Content pages within a story marked [P] can run in parallel
- Diagrams within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all content pages for User Story 1 together:
Task: "Create data-contracts section landing page in hugo-site/content/data-contracts/_index.md"
Task: "Create data-contracts content page in hugo-site/content/data-contracts/what-are-data-contracts.md"
Task: "Create odcs section landing page in hugo-site/content/odcs/_index.md"
Task: "Create schemas section landing page in hugo-site/content/schemas/_index.md"

# Launch all diagrams for User Story 1 together:
Task: "Create data contract flow diagram in hugo-site/assets/images/diagrams/data-contract-flow.svg"
Task: "Create ODCS architecture diagram in hugo-site/assets/images/diagrams/odcs-architecture.svg"
Task: "Create schema types comparison diagram in hugo-site/assets/images/diagrams/schema-types-comparison.svg"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently (visitor can learn about data contracts and ODCS)
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
   - Developer A: User Story 1 (data-contracts, odcs, schemas content)
   - Developer B: User Story 2 (products content)
   - Developer C: User Story 3 (guides content)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
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

