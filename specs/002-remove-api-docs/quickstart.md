# Quickstart: Documentation Updates

**Feature**: 002-remove-api-docs  
**Date**: 2025-01-27  
**Phase**: 1 - Design

## Overview

This guide provides step-by-step instructions for updating the documentation to remove API references and update tool information.

## Prerequisites

- Hugo Extended 0.100+ installed
- Node.js 18+ and npm 9+ installed
- Git repository cloned
- Branch `002-remove-api-docs` checked out
- Text editor with Markdown support

## Step-by-Step Instructions

### 1. Remove API from Navigation

**File**: `hugo-site/data/navigation.yaml`

1. Open `hugo-site/data/navigation.yaml`
2. Locate the Tools section (`children` array under Tools)
3. Remove the API entry:
   ```yaml
   - title: "API"
     url: "/tools/api/"
     weight: 2
   ```
4. Adjust weights if needed to maintain order:
   - SDK: weight 1
   - CLI: weight 2 (NEW)
   - OSX App: weight 3
   - Web App: weight 4
5. Save file

**Verification**: Run `hugo server` and verify API no longer appears in navigation menu.

### 2. Replace API Page Content

**File**: `hugo-site/content/tools/api/_index.md`

1. Open `hugo-site/content/tools/api/_index.md`
2. Replace entire content with:
   ```markdown
   ---
   title: "Data Modelling API"
   description: "API service coming in v2"
   date: 2025-01-27
   draft: false
   weight: 20
   ---
   
   ## Data Modelling API
   
   The Data Modelling API service is currently under development and will be available in **version 2.0**.
   
   For now, please use our other available tools:
   
   - **[SDK](/tools/sdk/)** - Integrate data contract functionality into your applications
   - **[CLI](/tools/cli/)** - Command-line format conversion tool
   - **[OSX App](/tools/osx-app/)** - Native macOS application
   - **[Web App](/tools/web-app/)** - Browser-based application
   
   [← Back to Tools](/tools/)
   ```
3. Save file

**Verification**: Visit `/tools/api/` and verify v2 message appears.

### 3. Update Tools Index Page

**File**: `hugo-site/content/tools/_index.md`

1. Open `hugo-site/content/tools/_index.md`
2. Remove API section/tool entry
3. Add CLI tool entry:
   ```markdown
   ### Data Modelling CLI
   
   Command-line format conversion tool for converting between data contract formats.
   
   [Learn more about the CLI →](/tools/cli/)
   ```
4. Update tool list to show: SDK, CLI, OSX App, Web App (no API)
5. Save file

**Verification**: Visit `/tools/` and verify API removed, CLI added.

### 4. Create CLI Tool Page

**File**: `hugo-site/content/tools/cli/_index.md` (NEW)

1. Create directory: `hugo-site/content/tools/cli/`
2. Create file: `hugo-site/content/tools/cli/_index.md`
3. Add content:
   ```markdown
   ---
   title: "Data Modelling CLI"
   description: "Command-line format conversion tool for data contracts"
   date: 2025-01-27
   draft: false
   weight: 15
   ---
   
   ## Data Modelling CLI
   
   The Data Modelling CLI is a command-line tool for converting between different data contract formats. Perfect for automation, scripting, and batch processing.
   
   ## Features
   
   - Convert between multiple formats (SQL, ODCS, JSON Schema, Avro, Protobuf, etc.)
   - Batch processing capabilities
   - Script-friendly output
   - Integration with CI/CD pipelines
   
   ## Installation
   
   Download packages from the [GitHub repository releases](https://github.com/pixie79/data-modelling-sdk/releases).
   
   ## Documentation
   
   For complete CLI documentation, usage examples, and command reference:
   
   - **[CLI Documentation](https://github.com/pixie79/data-modelling-sdk/blob/main/docs/CLI.md)** - Complete CLI guide
   
   ## Related Tools
   
   - [Data Modelling SDK](/tools/sdk/) - Programmatic access to data contract functionality
   - [OSX App](/tools/osx-app/) - Native macOS application
   - [Web App](/tools/web-app/) - Browser-based application
   ```
4. Save file

**Verification**: Visit `/tools/cli/` and verify page loads correctly.

### 5. Update SDK Page Version

**File**: `hugo-site/content/tools/sdk/_index.md`

1. Open `hugo-site/content/tools/sdk/_index.md`
2. Search for version references (e.g., "1.0.0", "version")
3. Update to v1.7.1:
   - Update any version numbers in text
   - Update installation examples if they specify versions
   - Update links to point to v1.7.1 documentation
4. Remove any API references (replace with SDK examples)
5. Save file

**Verification**: Search file for "1.7.1" and verify all version references updated.

### 6. Update Web App Page Version

**File**: `hugo-site/content/tools/web-app/_index.md`

1. Open `hugo-site/content/tools/web-app/_index.md`
2. Update version to v1.1.0
3. Add link to release branch:
   ```markdown
   For detailed documentation, user guides, and release notes, visit the frontend repository:
   
   - **[Frontend v1.1.0 README](https://github.com/pixie79/data-modelling-frontend/tree/release/v1.1.0)** - Release documentation
   - **[Frontend v1.1.0 CHANGELOG](https://github.com/pixie79/data-modelling-frontend/blob/release/v1.1.0/CHANGELOG.md)** - What's new in v1.1.0
   ```
4. Remove API references
5. Save file

**Verification**: Verify version and links are correct.

### 7. Update OSX App Page Version

**File**: `hugo-site/content/tools/osx-app/_index.md`

1. Open `hugo-site/content/tools/osx-app/_index.md`
2. Update version to v1.1.0
3. Add link to release branch (same as Web App)
4. Remove API references
5. Save file

**Verification**: Verify version and links are correct.

### 8. Update Import Guide

**File**: `hugo-site/content/guides/import/_index.md`

1. Open `hugo-site/content/guides/import/_index.md`
2. Find "Using the API" section
3. Remove API curl command examples
4. Replace with CLI examples if appropriate:
   ```markdown
   ### Using the CLI
   
   ```bash
   # Import via CLI
   data-modelling-cli import --format sql --input schema.sql --output odcs
   ```
   ```
5. Save file

**Verification**: Verify no API endpoints or curl commands remain.

### 9. Update Export Guide

**File**: `hugo-site/content/guides/export/_index.md`

1. Open `hugo-site/content/guides/export/_index.md`
2. Find "Using the API" section
3. Remove API curl command examples
4. Replace with CLI examples if appropriate
5. Save file

**Verification**: Verify no API endpoints or curl commands remain.

### 10. Update Homepage

**File**: `hugo-site/content/_index.md`

1. Open `hugo-site/content/_index.md`
2. Find "Available Tools" section
3. Remove API from tool list
4. Add CLI to tool list
5. Update tool descriptions to remove API references
6. Save file

**Verification**: Visit homepage and verify tool list is correct.

### 11. Update ODCS Overview

**File**: `hugo-site/content/odcs/odcs-overview.md`

1. Open `hugo-site/content/odcs/odcs-overview.md`
2. Find API references (e.g., "Try the Tools" section)
3. Remove API link, keep SDK link
4. Save file

**Verification**: Verify no API links remain.

### 12. Update Root README

**File**: `README.md`

1. Open `README.md`
2. Find "Related Projects" section
3. Update API entry to indicate v2:
   ```markdown
   - [Data Modelling SDK](https://github.com/pixie79/data-modelling-sdk) - Software Development Kit
   - [Data Modelling API](https://github.com/pixie79/data-modelling-api) - RESTful API service (v2 - coming soon)
   - [Data Modelling Frontend](https://github.com/pixie79/data-modelling-frontend) - OSX App and Web App
   ```
4. Save file

**Verification**: Verify API marked as v2.

### 13. Final Verification

1. **Search for API references**:
   ```bash
   cd hugo-site/content
   grep -ri "api" . --include="*.md" | grep -v "CLI\|clients\|applications\|capabilities"
   ```
   Verify only v2 messaging remains.

2. **Check navigation**:
   ```bash
   cat hugo-site/data/navigation.yaml | grep -i api
   ```
   Should return no results.

3. **Verify versions**:
   ```bash
   grep -r "1.7.1" hugo-site/content/tools/sdk/
   grep -r "1.1.0" hugo-site/content/tools/web-app/
   grep -r "1.1.0" hugo-site/content/tools/osx-app/
   ```
   Verify versions are correct.

4. **Test Hugo build**:
   ```bash
   cd hugo-site
   hugo --minify
   ```
   Should build without errors.

5. **Test local server**:
   ```bash
   hugo server
   ```
   Visit pages and verify:
   - `/tools/api/` shows v2 message
   - `/tools/cli/` exists and loads
   - Navigation shows SDK, CLI, OSX App, Web App (no API)
   - All links work

## Quality Checks

Before committing:

- [ ] All Markdown files pass linting: `npm run lint:markdown`
- [ ] All YAML files are valid: `yamllint hugo-site/data/navigation.yaml`
- [ ] Hugo builds successfully: `cd hugo-site && hugo`
- [ ] No broken links (check manually or use link checker)
- [ ] All version numbers are correct
- [ ] No API references remain (except v2 messaging)
- [ ] CLI tool page exists and is linked
- [ ] Navigation menu is updated

## Commit Message

```bash
git commit -S -m "docs: remove API documentation and update tool information

- Remove API from navigation and tool listings
- Replace API page with v2 availability message
- Add CLI tool documentation page
- Update SDK version to v1.7.1
- Update Frontend versions to v1.1.0
- Remove API examples from import/export guides
- Update README to mark API as v2

Closes #002-remove-api-docs"
```

