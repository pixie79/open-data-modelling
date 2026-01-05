# Research: Remove API Documentation and Update Tool Information

**Feature**: 002-remove-api-docs  
**Date**: 2025-01-27  
**Phase**: 0 - Research

## Research Objectives

1. Determine CLI tool documentation location and content structure
2. Verify Frontend release branch structure and content
3. Identify best practices for removing pages from Hugo sites
4. Determine approach for handling removed API page (redirect vs. replacement)
5. Identify all files containing API references

## Findings

### 1. CLI Tool Documentation

**Decision**: CLI tool documentation is located at `https://github.com/pixie79/data-modelling-sdk/blob/main/docs/CLI.md`

**Rationale**: 
- User specified the CLI.md location in the GitHub repository
- CLI tool is part of the data-modelling-sdk repository
- Documentation should link to this external resource
- Package downloads are available from the GitHub repository releases/packages section

**Alternatives considered**:
- Creating new CLI documentation page from scratch - Rejected because external documentation already exists and should be the source of truth
- Copying CLI.md content into Hugo site - Rejected because it would create duplication and maintenance burden

**Action Items**:
- Create new page at `hugo-site/content/tools/cli/_index.md`
- Link to external CLI.md documentation
- Include package download information pointing to GitHub releases

### 2. Frontend Release Branch

**Decision**: Frontend release branch is `release/v1.1.0` at `https://github.com/pixie79/data-modelling-frontend/tree/release/v1.1.0`

**Rationale**:
- User specified the release branch location
- README and CHANGELOG are available in this branch
- Links should point to this branch for users to review upcoming release

**Alternatives considered**:
- Linking to main branch - Rejected because v1.1.0 is not yet merged to main
- Copying content into Hugo site - Rejected because release notes should remain in the repository

**Action Items**:
- Update Web App and OSX App pages to reference v1.1.0
- Add links to release branch README and CHANGELOG
- Ensure links are functional and accessible

### 3. Hugo Page Removal Best Practices

**Decision**: Replace API page content with v2 availability message rather than deleting the file

**Rationale**:
- Deleting the file would result in a 404 error for users who have bookmarked the page
- Replacing content maintains the URL structure (`/tools/api/`)
- Provides clear messaging about v2 availability
- Better user experience than broken links

**Alternatives considered**:
- Complete file deletion - Rejected because it breaks bookmarks and external links
- Redirect to homepage - Rejected because it loses context about what the API was
- Redirect to tools index - Rejected because v2 messaging is more informative

**Action Items**:
- Replace `hugo-site/content/tools/api/_index.md` content with v2 availability message
- Maintain page structure (front matter, title, description)
- Include link to tools index page

### 4. Finding API References

**Decision**: Use grep to find all API references, then systematically update each file

**Rationale**:
- Comprehensive search ensures no references are missed
- Systematic approach ensures consistency
- Can verify completion with follow-up grep

**Search Strategy**:
1. Search for "API" (case-insensitive) in all content files
2. Search for "/tools/api" or "/api/" URL patterns
3. Search for "data-modelling-api" repository references
4. Review navigation.yaml for API menu items
5. Check README.md for API references

**Files Identified** (from initial grep):
- `hugo-site/content/_index.md` - Homepage references API
- `hugo-site/content/tools/_index.md` - Tools overview references API
- `hugo-site/content/tools/api/_index.md` - API page itself
- `hugo-site/content/tools/sdk/_index.md` - SDK page references API
- `hugo-site/content/tools/osx-app/_index.md` - OSX App references API
- `hugo-site/content/tools/web-app/_index.md` - Web App references API
- `hugo-site/content/guides/import/_index.md` - Import guide has API examples
- `hugo-site/content/guides/export/_index.md` - Export guide has API examples
- `hugo-site/content/odcs/odcs-overview.md` - ODCS overview references API
- `hugo-site/data/navigation.yaml` - Navigation menu includes API
- `README.md` - Root README references API repository

**Action Items**:
- Update each identified file to remove API references
- Replace API examples with SDK/CLI alternatives where appropriate
- Add v2 messaging where contextually relevant

### 5. SDK Version Update

**Decision**: Update all SDK version references to v1.7.1

**Rationale**:
- SDK has been bumped to v1.7.1 per user specification
- All documentation should reflect current version
- Version accuracy is critical for user success

**Search Strategy**:
- Search for "1.0.0", "1.6", "1.7" in SDK-related files
- Check SDK page specifically
- Verify installation instructions reference correct version

**Action Items**:
- Update SDK page version references
- Update any code examples with version numbers
- Ensure links point to v1.7.1 documentation

### 6. Frontend Version Update

**Decision**: Update Web App and OSX App versions to v1.1.0

**Rationale**:
- Frontend applications updated to v1.1.0 per user specification
- Release branch contains README and CHANGELOG
- Users need accurate version information

**Action Items**:
- Update Web App page to reference v1.1.0
- Update OSX App page to reference v1.1.0
- Add links to release branch README and CHANGELOG
- Ensure download links point to correct version

## Unresolved Questions

None - all clarifications resolved through research.

## Dependencies Verified

- ✅ CLI.md exists at specified GitHub location (assumed based on user specification)
- ✅ Frontend release branch exists (assumed based on user specification)
- ✅ Hugo site structure is understood
- ✅ Navigation YAML structure is understood

## Next Steps

Proceed to Phase 1: Design & Contracts
- Create data-model.md documenting documentation structure
- Create contracts/ for documentation structure contracts
- Create quickstart.md with step-by-step update instructions

