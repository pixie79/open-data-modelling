# Implementation Plan: Remove API Documentation and Update Tool Information

**Branch**: `002-remove-api-docs` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-remove-api-docs/spec.md`

## Summary

This feature involves updating the Hugo-based documentation website to remove all API-related content and update tool information. The primary changes are: (1) removing API documentation pages and references, (2) updating SDK version to v1.7.1, (3) adding CLI tool documentation, and (4) updating Frontend application versions to v1.1.0. This is a documentation-only change with no code modifications to the tools themselves.

## Technical Context

**Language/Version**: Markdown (Hugo content), YAML (navigation/data), TOML (Hugo config), Hugo Extended 0.100+  
**Primary Dependencies**: Hugo static site generator, Node.js 18+ (for npm scripts), markdownlint, prettier  
**Storage**: N/A (static site generation, content stored in git repository)  
**Testing**: Manual review, link validation, grep searches for API references, version number verification  
**Target Platform**: Web (static HTML site deployed via Cloudflare Pages)  
**Project Type**: Documentation website (Hugo static site)  
**Performance Goals**: N/A (documentation site, no performance requirements)  
**Constraints**: Must maintain Hugo site structure, preserve existing navigation patterns, ensure all links remain functional  
**Scale/Scope**: ~20 content files to review/update, 1 navigation YAML file, 1 README.md, multiple cross-references

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Constitution Reference**: `.specify/memory/constitution.md`

**Required Compliance Checks** (Pre-Phase 0):
- [x] Code formatting standards defined for all languages used (Markdown, YAML, TOML - see README.md)
- [x] Linting tools specified and configured (markdownlint, prettier - pre-commit hooks + CI/CD gates)
- [x] Security audit tools configured (npm audit for dependencies, no code security concerns for docs)
- [x] Cross-platform compatibility verified (Hugo generates static HTML, platform-agnostic)
- [x] Accessibility requirements addressed (WCAG 2.1 Level AA for generated HTML - Hugo theme responsibility)
- [x] Git commit signing configured (required per constitution)
- [x] All quality checks runnable locally (npm run lint, npm run format)
- [x] Tool versions specified for consistency (Hugo Extended 0.100+, Node.js 18+, npm 9+)

**Required Compliance Checks** (Post-Phase 1):
- [x] Documentation structure contracts defined (see contracts/documentation-structure.md)
- [x] Page structure requirements documented (front matter, content format)
- [x] Link validation requirements specified (internal/external link contracts)
- [x] Version reference standards defined (semantic versioning, consistency rules)
- [x] Navigation structure contracts established (YAML format, validation rules)
- [x] All design artifacts comply with constitution requirements

**Violations**: None - documentation-only changes comply with all constitution requirements. Phase 1 design maintains compliance.

## Project Structure

### Documentation (this feature)

```text
specs/002-remove-api-docs/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   └── documentation-structure.md
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
hugo-site/
├── content/                    # Markdown content files
│   ├── _index.md              # Homepage (needs API removal)
│   ├── tools/
│   │   ├── _index.md          # Tools overview (needs API removal, CLI addition)
│   │   ├── api/
│   │   │   └── _index.md      # API page (DELETE or replace with v2 message)
│   │   ├── sdk/
│   │   │   └── _index.md      # SDK page (update to v1.7.1)
│   │   ├── osx-app/
│   │   │   └── _index.md      # OSX App page (update to v1.1.0)
│   │   ├── web-app/
│   │   │   └── _index.md      # Web App page (update to v1.1.0)
│   │   └── cli/               # NEW: CLI tool page (create)
│   │       └── _index.md
│   ├── guides/
│   │   ├── import/
│   │   │   └── _index.md      # Remove API examples
│   │   └── export/
│   │       └── _index.md      # Remove API examples
│   ├── data-contracts/
│   │   └── _index.md          # May reference API
│   └── odcs/
│       └── odcs-overview.md   # May reference API
├── data/
│   └── navigation.yaml        # Remove API from navigation menu
├── config.toml                 # Hugo configuration (no changes needed)
└── static/                     # Static assets (no changes needed)

README.md                        # Update related projects section
```

**Structure Decision**: Hugo static site structure is already established. Changes involve:
1. Content file updates (Markdown files in `hugo-site/content/`)
2. Navigation data update (YAML file in `hugo-site/data/`)
3. Root README.md update
4. New CLI tool page creation (`hugo-site/content/tools/cli/_index.md`)
5. API page removal or replacement (`hugo-site/content/tools/api/_index.md`)

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations - documentation-only changes comply with all constitution requirements.
