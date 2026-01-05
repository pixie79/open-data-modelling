# Data Model: Documentation Structure

**Feature**: 002-remove-api-docs  
**Date**: 2025-01-27  
**Phase**: 1 - Design

## Overview

This document describes the structure of the Hugo documentation site and the entities involved in this documentation update feature.

## Entities

### Documentation Page

**Description**: A content page in the Hugo site that contains markdown content, front matter metadata, and may reference tools, versions, or other pages.

**Attributes**:
- `path`: File path relative to `hugo-site/content/` (e.g., `tools/api/_index.md`)
- `title`: Page title from front matter
- `description`: Page description from front matter
- `weight`: Navigation weight (if applicable)
- `content`: Markdown content body
- `references`: Links to other pages or external resources

**Relationships**:
- Referenced by: Navigation Menu, Other Documentation Pages
- References: External Links, Tool Listings

**Validation Rules**:
- Must have valid front matter (YAML)
- Must use valid Markdown syntax
- External links must be accessible
- Version numbers must match current versions

### Navigation Menu

**Description**: Site navigation structure defined in YAML that controls the main menu and sidebar navigation.

**Attributes**:
- `items`: Array of navigation items
  - `title`: Display text
  - `url`: Relative URL path
  - `weight`: Sort order
  - `children`: Nested items (optional)

**Relationships**:
- Contains: Documentation Page references
- Referenced by: Hugo theme templates

**Validation Rules**:
- All URLs must resolve to existing pages
- Weights must be unique within same level
- No circular references

### Tool Listing

**Description**: Collection of available tools displayed to users, typically shown on tools index page and homepage.

**Attributes**:
- `tools`: Array of tool entries
  - `name`: Tool name (SDK, CLI, OSX App, Web App)
  - `url`: Link to tool documentation page
  - `description`: Brief description
  - `version`: Current version number (if applicable)

**Relationships**:
- References: Documentation Page (tool detail pages)
- Referenced by: Homepage, Tools Index Page

**Validation Rules**:
- Must list only available tools (no API)
- Version numbers must be current
- All URLs must be valid

### Version Reference

**Description**: Specific version number mentioned in documentation for a tool or component.

**Attributes**:
- `tool`: Tool name (SDK, Web App, OSX App)
- `version`: Version string (e.g., "1.7.1", "1.1.0")
- `context`: Where version appears (page title, installation instructions, code example)

**Relationships**:
- Belongs to: Documentation Page
- References: External Link (to version-specific documentation)

**Validation Rules**:
- SDK version must be "1.7.1"
- Frontend versions must be "1.1.0"
- Version format must be semantic versioning (major.minor.patch)

### External Link

**Description**: Link to external resources such as GitHub repositories, documentation, or package downloads.

**Attributes**:
- `url`: Full URL (absolute)
- `text`: Link display text
- `type`: Link type (GitHub repo, documentation, download, release notes)
- `target`: Link target (`_blank` for external)

**Relationships**:
- Referenced by: Documentation Page, Version Reference

**Validation Rules**:
- URLs must be accessible (no 404s)
- External links should open in new tab
- GitHub links should point to correct branch/tag

## State Transitions

### API Page Removal

**Initial State**: API page exists with full documentation  
**Transition**: Replace content with v2 availability message  
**Final State**: API page exists but shows v2 message instead of documentation

**Rules**:
- Page URL (`/tools/api/`) must remain unchanged
- Front matter structure must be preserved
- Content must clearly indicate v2 availability

### Version Update

**Initial State**: Documentation references old version (e.g., SDK v1.0.0)  
**Transition**: Update all version references to new version (e.g., SDK v1.7.1)  
**Final State**: All references show current version

**Rules**:
- All instances must be updated (no partial updates)
- Version format must be consistent
- Links must point to version-specific resources

### Navigation Update

**Initial State**: Navigation includes API menu item  
**Transition**: Remove API from navigation items  
**Final State**: Navigation shows only SDK, CLI, OSX App, Web App

**Rules**:
- Navigation weights must be adjusted if needed
- No broken menu structure
- All remaining items must have valid URLs

## Data Integrity Rules

1. **No Orphaned Pages**: All pages referenced in navigation must exist
2. **No Broken Links**: All internal and external links must be valid
3. **Version Consistency**: All version references for the same tool must match
4. **Tool Completeness**: All available tools must be documented
5. **No API References**: No documentation should reference API except v2 messaging

## Validation Checklist

- [ ] All API page references removed from navigation
- [ ] All API endpoint examples removed from guides
- [ ] All API installation instructions removed
- [ ] SDK version updated to 1.7.1 in all locations
- [ ] Web App version updated to 1.1.0
- [ ] OSX App version updated to 1.1.0
- [ ] CLI tool page created and linked
- [ ] All external links verified and functional
- [ ] Navigation menu updated (no API entry)
- [ ] README.md updated (API marked as v2)

