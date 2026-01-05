# Documentation Structure Contract

**Feature**: 002-remove-api-docs  
**Date**: 2025-01-27  
**Phase**: 1 - Design

## Overview

This contract defines the structure and format requirements for documentation pages, navigation, and links in the Hugo documentation site.

## Page Structure Contract

### Front Matter Requirements

All documentation pages MUST include front matter with the following structure:

```yaml
---
title: "Page Title"
description: "Page description for SEO and previews"
date: YYYY-MM-DD
draft: false
weight: NUMBER  # For navigation ordering (optional)
---
```

**Validation Rules**:
- `title` is required and must be a string
- `description` is required and must be a string (max 160 characters)
- `date` is required and must be in YYYY-MM-DD format
- `draft` must be `false` for published pages
- `weight` is optional but recommended for navigation ordering

### Content Structure

**Required Sections** (for tool pages):
1. Title (H1) - matches front matter title
2. Description paragraph
3. Features section (H2)
4. Installation/Getting Started section (H2)
5. Documentation/Links section (H2)
6. Related Tools section (H2)

**Optional Sections**:
- Use Cases
- Screenshots
- Examples
- FAQ

### Link Format Contract

**Internal Links**:
- Format: `[Link Text](/path/to/page/)`
- Must use relative paths starting with `/`
- Must end with `/` for directory pages
- Must resolve to existing pages

**External Links**:
- Format: `[Link Text](https://example.com)`
- Must use `https://` protocol
- Should open in new tab: `[Link Text](https://example.com){target="_blank"}`
- Must be accessible (no 404s)

**GitHub Links**:
- Repository: `https://github.com/pixie79/[repo-name]`
- File: `https://github.com/pixie79/[repo-name]/blob/[branch]/path/to/file`
- Release: `https://github.com/pixie79/[repo-name]/releases`
- Must specify branch/tag when linking to specific files

## Navigation Contract

### Navigation YAML Structure

```yaml
items:
  - title: "Display Text"
    url: "/path/"
    weight: NUMBER
    children:  # Optional nested items
      - title: "Child Item"
        url: "/path/child/"
        weight: NUMBER
```

**Validation Rules**:
- All `url` values must resolve to existing pages
- `weight` values must be unique within same level
- No circular references in nested structures
- All items must have `title` and `url`

### Tool Navigation Requirements

Tools section MUST include exactly these items (in order):
1. SDK (weight: 1)
2. CLI (weight: 2)
3. OSX App (weight: 3)
4. Web App (weight: 4)

**API MUST NOT appear in navigation**.

## Version Reference Contract

### Version Format

- Must use semantic versioning: `MAJOR.MINOR.PATCH`
- Examples: `1.7.1`, `1.1.0`
- Must be consistent across all references for same tool

### Version Placement

Versions MUST be referenced in:
1. Tool page titles or descriptions (if version-specific)
2. Installation instructions
3. Links to version-specific documentation
4. Release notes links

### Current Versions

- **SDK**: `1.7.1` (MUST be used in all SDK references)
- **Web App**: `1.1.0` (MUST be used in all Web App references)
- **OSX App**: `1.1.0` (MUST be used in all OSX App references)
- **CLI**: No version required (link to latest)

## Tool Listing Contract

### Available Tools

Documentation MUST list exactly these tools:
1. **SDK** - Software Development Kit
2. **CLI** - Command-line format conversion tool
3. **OSX App** - Native macOS application (Electron)
4. **Web App** - Browser-based application (offline mode)

**API MUST NOT be listed as an available tool**.

### Tool Page Requirements

Each tool page MUST include:
- Tool name and description
- Features list
- Installation instructions
- Documentation links
- Related tools section

### CLI Tool Page Contract

CLI tool page MUST include:
- Link to external CLI.md: `https://github.com/pixie79/data-modelling-sdk/blob/main/docs/CLI.md`
- Package download information pointing to GitHub releases
- Feature list (format conversion, batch processing, etc.)
- Related tools section

## API Page Contract

### API Page Content

The API page (`/tools/api/`) MUST:
- Show v2 availability message
- List available tools (SDK, CLI, OSX App, Web App)
- Link back to tools index
- NOT include API endpoint documentation
- NOT include API installation instructions
- NOT include API usage examples

### API Reference Contract

**Allowed API References**:
- References indicating API will be available in v2
- References in roadmap or future features sections
- References in README.md marked as "v2 - coming soon"

**Prohibited API References**:
- API endpoint documentation
- API installation instructions
- API usage examples (curl commands, etc.)
- API in navigation menus
- API in tool listings
- API in code examples

## Link Validation Contract

### Internal Link Validation

- All internal links MUST resolve to existing pages
- All navigation URLs MUST resolve to existing pages
- No broken internal links allowed

### External Link Validation

- All external links MUST be accessible (no 404s)
- GitHub links MUST point to existing repositories/branches/files
- Release links MUST point to valid release pages
- Documentation links MUST point to existing documentation

### Link Maintenance

- Broken links MUST be fixed or removed
- External links MUST be verified before commit
- GitHub branch/tag links MUST be updated when versions change

## Content Update Contract

### Version Update Requirements

When updating versions:
1. Search all files for old version references
2. Update ALL instances (no partial updates)
3. Verify consistency across all files
4. Update related links to point to version-specific resources

### API Removal Requirements

When removing API references:
1. Remove from navigation
2. Remove from tool listings
3. Remove API examples from guides
4. Replace API page content with v2 message
5. Update README to mark API as v2
6. Verify no API endpoints or curl commands remain

## Validation Checklist

Before considering documentation updates complete:

- [ ] All pages have valid front matter
- [ ] All internal links resolve correctly
- [ ] All external links are accessible
- [ ] Navigation includes only SDK, CLI, OSX App, Web App
- [ ] API page shows v2 message only
- [ ] SDK version is 1.7.1 everywhere
- [ ] Frontend versions are 1.1.0 everywhere
- [ ] CLI tool page exists and is linked
- [ ] No API endpoint documentation remains
- [ ] No API curl examples remain
- [ ] Hugo builds without errors

## Compliance

This contract MUST be followed for all documentation updates in this feature. Violations will result in build failures or broken user experience.

