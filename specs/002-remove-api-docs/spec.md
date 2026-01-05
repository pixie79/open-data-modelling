# Feature Specification: Remove API Documentation and Update Tool Information

**Feature Branch**: `002-remove-api-docs`  
**Created**: 2025-01-27  
**Status**: Draft  
**Input**: User description: "We need to remove information about the API as we are switching to just an offline mode web app and native electron app for now. - API Feature with paired updates will come in v2."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Documentation Accuracy for Offline Tools (Priority: P1)

Users visiting the documentation site need accurate information about available tools. Currently, the documentation references an API service that is not available in the current release. Users should see information only about tools that are actually available: the SDK, CLI tool, OSX App (Electron), and Web App (offline mode). Users should not be confused by references to an API that won't be available until v2.

**Why this priority**: Preventing user confusion and setting correct expectations is critical. Users may waste time trying to use an API that doesn't exist yet, leading to frustration and support requests.

**Independent Test**: Can be fully tested by reviewing all documentation pages and verifying that:
- No API endpoints are documented
- No API installation instructions are present
- No API usage examples are shown
- Navigation menus don't include API links
- Related tools sections don't reference the API
- All references to API are replaced with appropriate v2 messaging where contextually relevant

**Acceptance Scenarios**:

1. **Given** a user visits the documentation homepage, **When** they browse available tools, **Then** they see only SDK, CLI, OSX App, and Web App listed (no API)
2. **Given** a user navigates to the Tools section, **When** they view the tools index page, **Then** they see no API tool entry or link
3. **Given** a user reads import/export guides, **When** they look for integration examples, **Then** they see only SDK, CLI, and app-based examples (no API curl commands or endpoints)
4. **Given** a user searches for "API" in the documentation, **When** they find any remaining references, **Then** those references clearly indicate the API will be available in v2

---

### User Story 2 - Updated SDK Version Information (Priority: P1)

Users need accurate version information for the SDK to ensure they're using the correct version and accessing the right documentation. The SDK has been updated to v1.7.1, and all documentation references should reflect this current version.

**Why this priority**: Incorrect version information can lead to users installing outdated versions, encountering compatibility issues, or accessing incorrect documentation. This is a foundational accuracy requirement.

**Independent Test**: Can be fully tested by searching all documentation files for SDK version references and verifying that:
- All version numbers are updated to v1.7.1
- Links to SDK documentation point to the correct version
- Installation instructions reference the correct version
- Examples and code snippets are compatible with v1.7.1

**Acceptance Scenarios**:

1. **Given** a user reads SDK documentation, **When** they check the version number, **Then** they see v1.7.1 referenced
2. **Given** a user follows installation instructions, **When** they install the SDK, **Then** they receive version 1.7.1
3. **Given** a user accesses SDK links from the documentation, **When** they visit external SDK resources, **Then** they see v1.7.1 information

---

### User Story 3 - CLI Tool Discovery and Usage (Priority: P2)

Users need to discover and understand how to use the Data Modelling CLI format conversion tool. The CLI tool is a new addition that enables command-line format conversions, and users should be able to find information about it, understand its capabilities, and know where to download packages.

**Why this priority**: The CLI tool provides an important workflow option for users who prefer command-line interfaces or need to integrate format conversion into scripts and automation. Making it discoverable enables users to choose the right tool for their workflow.

**Independent Test**: Can be fully tested by verifying that:
- CLI tool is mentioned in appropriate documentation sections
- CLI tool has its own documentation page or section
- CLI tool documentation includes installation instructions
- CLI tool documentation includes usage examples
- Links to CLI documentation (CLI.md) are present and correct
- Package download information is provided

**Acceptance Scenarios**:

1. **Given** a user visits the Tools section, **When** they browse available tools, **Then** they see the CLI tool listed alongside SDK, OSX App, and Web App
2. **Given** a user wants to convert formats via command line, **When** they search for CLI information, **Then** they find documentation explaining CLI capabilities and usage
3. **Given** a user wants to install the CLI tool, **When** they follow installation instructions, **Then** they can download packages from the specified location
4. **Given** a user reads the CLI documentation, **When** they access external CLI.md link, **Then** they see comprehensive CLI usage information

---

### User Story 4 - Updated Frontend Application Information (Priority: P2)

Users need current information about the Frontend Web App and Electron App. These applications have been updated and will be released as v1.1.0. Documentation should reflect the upcoming release and provide links to review the release branch.

**Why this priority**: Users planning to use the frontend applications need accurate version information and access to release notes. This ensures they understand what features and improvements are available.

**Independent Test**: Can be fully tested by verifying that:
- Frontend application documentation references v1.1.0
- Links to the release branch are present and correct
- Changelog information is accessible
- Release notes highlight key updates

**Acceptance Scenarios**:

1. **Given** a user visits the Web App documentation, **When** they check version information, **Then** they see v1.1.0 referenced
2. **Given** a user visits the OSX App documentation, **When** they check version information, **Then** they see v1.1.0 referenced
3. **Given** a user wants to review what's new, **When** they follow links to the release branch, **Then** they can access README and CHANGELOG for v1.1.0
4. **Given** a user reads frontend documentation, **When** they see feature descriptions, **Then** those features match what's available in v1.1.0

---

### Edge Cases

- What happens when users have bookmarked the API documentation page? The page should redirect or show a clear message that the API will be available in v2
- How does the system handle external links to API documentation? Those links should either be removed or updated to indicate v2 availability
- What if users search for "API" in the site? Search results should either show no API pages or clearly indicate v2 availability
- How are API references in code examples handled? Code examples using API endpoints should be removed or replaced with SDK/CLI alternatives
- What about API references in related projects section? The README mentions the API repository - this should be updated to indicate v2 availability

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Documentation MUST remove all API endpoint documentation (workspace, tables, relationships, import, export, git, collaboration, authentication, audit, AI endpoints)
- **FR-002**: Documentation MUST remove the API tool page (`/tools/api/` or equivalent)
- **FR-003**: Documentation MUST remove API from navigation menus and tool listings
- **FR-004**: Documentation MUST remove all API installation instructions and usage examples
- **FR-005**: Documentation MUST remove API curl command examples from import/export guides
- **FR-006**: Documentation MUST update SDK version references to v1.7.1
- **FR-007**: Documentation MUST add information about the Data Modelling CLI format conversion tool
- **FR-008**: Documentation MUST include links to CLI.md documentation
- **FR-009**: Documentation MUST provide CLI package download location information
- **FR-010**: Documentation MUST update Frontend Web App version to v1.1.0
- **FR-011**: Documentation MUST update OSX App (Electron) version to v1.1.0
- **FR-012**: Documentation MUST include links to Frontend release branch (release/v1.1.0) for README and CHANGELOG
- **FR-013**: Documentation MUST add note about API availability in v2 where contextually appropriate (e.g., in roadmap or future features sections)
- **FR-014**: Documentation MUST update README.md to remove API from related projects or mark it as v2
- **FR-015**: Documentation MUST ensure all tool references (SDK, CLI, OSX App, Web App) are accurate and up-to-date

### Key Entities *(include if feature involves data)*

- **Documentation Page**: A content page in the Hugo site that may contain API references, version numbers, or tool information
- **Navigation Menu**: Site navigation structure that includes tool links and may reference the API
- **Tool Listing**: Collection of available tools displayed to users (SDK, CLI, OSX App, Web App)
- **Version Reference**: Specific version number mentioned in documentation (SDK v1.7.1, Frontend v1.1.0)
- **External Link**: Link to external resources (GitHub repositories, documentation, package downloads)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Zero API endpoint documentation pages remain accessible to users (100% removal of API documentation)
- **SC-002**: Zero API references in navigation menus (100% removal from navigation)
- **SC-003**: 100% of SDK version references updated to v1.7.1 (all instances corrected)
- **SC-004**: CLI tool information is discoverable within 2 clicks from the homepage (navigation path exists)
- **SC-005**: 100% of Frontend application version references updated to v1.1.0 (all instances corrected)
- **SC-006**: All external links to Frontend release branch are functional and accessible (100% link validity)
- **SC-007**: Users can find CLI package download information within the CLI documentation section (discoverability verified)
- **SC-008**: Documentation accurately reflects only available tools (SDK, CLI, OSX App, Web App) with no API references in tool listings

## Quality Requirements *(mandatory)*

**Constitution Compliance**: This feature MUST comply with all principles defined in the project constitution. See `.specify/memory/constitution.md` for full requirements.

### Code Quality Standards

- **QR-001**: Code MUST be formatted according to language-specific standards (see constitution Principle I)
- **QR-002**: Code MUST pass all linting checks for all languages used (see constitution Principle II)
- **QR-003**: All commits MUST be GPG signed (see constitution Principle VI)
- **QR-004**: Code MUST be cross-platform compatible (see constitution Principle IV)
- **QR-005**: Security vulnerabilities MUST be addressed per remediation timelines (see constitution Principle III)

### Quality Enforcement

- **QR-006**: Pre-commit hooks MUST be configured and passing before commits
- **QR-007**: CI/CD pipeline MUST pass all quality gates (linting, security scans, formatting)
- **QR-008**: Dependency security scans MUST run on every commit (see constitution Principle III)
- **QR-009**: Static code analysis (SAST) MUST run and pass (see constitution Principle III)
- **QR-010**: Infrastructure security checks MUST pass (if applicable, see constitution Principle III)

### Language-Specific Requirements

- **Markdown**: Use `.markdownlint.json` configuration, maximum line length 100 characters (80 for prose), ATX-style headers, 2-space indentation
- **YAML**: 2-space indentation, Prettier formatting
- **TOML**: 2-space indentation, Prettier formatting

### Accessibility Requirements *(if UI components)*

- **QR-011**: UI components MUST meet WCAG 2.1 Level AA standards
- **QR-012**: Keyboard navigation MUST be fully functional
- **QR-013**: Screen reader compatibility MUST be verified
- **QR-014**: Color contrast ratios MUST meet accessibility standards
- **QR-015**: Alternative text MUST be provided for images/media

### Quality Verification

- **QR-016**: All quality checks MUST pass locally before code submission
- **QR-017**: Quality requirements MUST be verified in code review
- **QR-018**: Baseline metrics MUST be maintained (e.g., zero critical vulnerabilities)

## Assumptions

- The API will be reintroduced in v2, so some references may need to indicate future availability rather than complete removal
- The CLI tool documentation exists at the specified GitHub location (CLI.md)
- The Frontend release branch (release/v1.1.0) exists and contains README and CHANGELOG
- Package downloads for CLI are available at the GitHub repository releases or packages section
- All documentation is in Markdown format within the Hugo site structure
- Navigation is defined in YAML data files
- External links should remain functional or be updated, not broken

## Dependencies

- Access to GitHub repositories for verifying CLI.md and Frontend release branch content
- Understanding of current documentation structure and all files that reference API
- Knowledge of Hugo site structure and how navigation menus are configured
- Access to SDK v1.7.1 documentation for accurate version information

## Out of Scope

- Implementation of the API service itself (v2 feature)
- Updates to SDK or Frontend application code (only documentation updates)
- Changes to actual tool functionality (only documentation accuracy)
- Migration of existing API users (documentation-only change)
- Creation of new documentation pages (only updates to existing pages)
