# Data Model: Open Data Modelling Documentation Website

**Feature**: 001-odm-docs-site  
**Date**: 2025-01-01

## Overview

This document describes the content structure and data entities for the Hugo static documentation website. Since this is a static site with no database, the "data model" represents the content organization, front matter schema, and site structure.

## Content Entities

### Page

A content page represents a single page on the website.

**Attributes**:
- `title` (string, required): Page title displayed in browser and navigation
- `description` (string, required): Meta description for SEO
- `date` (datetime, optional): Publication/update date
- `draft` (boolean, default: false): Whether page is published
- `weight` (integer, optional): Sort order for navigation
- `tags` (array of strings, optional): Content tags for categorization
- `images` (array of strings, optional): Paths to featured images
- `aliases` (array of strings, optional): URL aliases/redirects

**Relationships**:
- Belongs to a Section (via directory structure)
- Can reference multiple Visual Assets
- Can contain multiple External Links

**Example Front Matter**:
```yaml
title: "Understanding Data Contracts"
description: "Learn what data contracts are and why they matter for data quality"
date: 2025-01-01
draft: false
weight: 10
tags: ["data-contracts", "concepts"]
images: ["/images/diagrams/data-contract-flow.svg"]
```

### Section

A section represents a logical grouping of related pages (e.g., "Data Contracts", "Products").

**Attributes**:
- `title` (string, required): Section title
- `description` (string, optional): Section description
- `weight` (integer, optional): Sort order in navigation
- `icon` (string, optional): Icon identifier for navigation

**Relationships**:
- Contains multiple Pages
- Can have subsections (nested structure)

**Structure**:
- Defined by directory structure in `content/`
- Each section has `_index.md` for section landing page

**Sections**:
1. **data-contracts** (P1): Educational content about data contracts
2. **odcs** (P1): Information about Open Data Contract Standard
3. **schemas** (P1): Benefits and types of data schemas
4. **products** (P2): Product introductions (SDK, API, OSX App, Web App)
5. **guides** (P3): Usage guides (import, export, Crowsfeat, Data Flows)

### Visual Asset

A visual asset represents images, diagrams, or screenshots used in content.

**Attributes**:
- `path` (string, required): File path relative to assets/images/
- `type` (enum: "logo", "diagram", "screenshot", "icon", "favicon"): Asset type
- `alt` (string, required): Alternative text for accessibility
- `caption` (string, optional): Image caption
- `width` (integer, optional): Image width in pixels
- `height` (integer, optional): Image height in pixels

**Types**:
- **Logo**: OpenDataModelling logo (SVG, PNG)
- **Favicon**: Favicon files (multiple sizes)
- **Diagram**: Visual diagrams explaining concepts (SVG preferred)
- **Screenshot**: Product screenshots (PNG, WebP)
- **Icon**: UI icons (SVG preferred)

**Storage**:
- Logos: `assets/images/logos/`
- Diagrams: `assets/images/diagrams/`
- Screenshots: `assets/images/screenshots/`
- Favicons: `assets/images/favicons/`

### External Link

An external link represents a reference to an external resource.

**Attributes**:
- `url` (string, required): Full URL
- `title` (string, required): Link text/description
- `type` (enum: "odcs", "odps", "github", "other"): Link type
- `opens_in_new_tab` (boolean, default: true): Whether to open in new tab

**External Resources**:
- **ODCS**: https://bitol-io.github.io/open-data-contract-standard/latest/
- **ODPS**: https://bitol-io.github.io/open-data-product-standard
- **GitHub SDK**: https://github.com/pixie79/data-modelling-sdk
- **GitHub API**: https://github.com/pixie79/data-modelling-api
- **GitHub Frontend**: https://github.com/pixie79/data-modelling-frontend

### Navigation Item

A navigation item represents an entry in the site navigation.

**Attributes**:
- `title` (string, required): Display text
- `url` (string, required): Relative URL path
- `weight` (integer, optional): Sort order
- `icon` (string, optional): Icon identifier
- `children` (array of Navigation Items, optional): Submenu items

**Navigation Structure**:
```
Home
├── Data Contracts
├── ODCS Standard
├── Data Schemas
├── Products
│   ├── SDK
│   ├── API
│   ├── OSX App
│   └── Web App
└── Guides
    ├── Import
    ├── Export
    ├── Crowsfeat Notation
    └── Data Flows
```

## Site Configuration

### Hugo Configuration (config.tomL)

**Key Settings**:
- `baseURL`: Production URL (set via Cloudflare Pages environment)
- `title`: "Open Data Modelling"
- `languageCode`: "en-us"
- `theme`: Theme name or custom theme path
- `markup`: Markdown processing settings
- `params`: Custom site parameters (logo, social links, etc.)

### Content Organization

```
content/
├── _index.md                    # Homepage
├── data-contracts/
│   ├── _index.md                # Section landing page
│   └── what-are-data-contracts.md
├── odcs/
│   ├── _index.md
│   └── odcs-overview.md
├── schemas/
│   ├── _index.md
│   └── schema-types.md
├── products/
│   ├── _index.md
│   ├── sdk/
│   │   └── _index.md
│   ├── api/
│   │   └── _index.md
│   ├── osx-app/
│   │   └── _index.md
│   └── web-app/
│       └── _index.md
└── guides/
    ├── _index.md
    ├── import/
    │   └── _index.md
    ├── export/
    │   └── _index.md
    ├── crowsfeat/
    │   └── _index.md
    └── data-flows/
        └── _index.md
```

## Validation Rules

### Page Validation

- `title` must be present and non-empty
- `description` must be present and 50-160 characters (SEO best practice)
- `images` must reference valid files in assets/images/
- All images must have corresponding `alt` text

### Visual Asset Validation

- All images must have `alt` text (accessibility requirement)
- Image paths must be valid
- Supported formats: SVG, PNG, WebP, JPG
- Logo must exist in multiple sizes for favicon

### External Link Validation

- URLs must be valid and accessible
- External links must have `rel="noopener"` when `target="_blank"`
- Link text must be descriptive (not "click here")

## State Transitions

### Page Lifecycle

```
Draft → Published → Updated → Archived (optional)
```

- **Draft**: `draft: true` in front matter, not included in build
- **Published**: `draft: false`, included in site build
- **Updated**: `date` updated, content modified
- **Archived**: Moved to archive section, still accessible but not in main navigation

## Data Files

Hugo data files (YAML/JSON) stored in `data/` directory:

- `navigation.yaml`: Site navigation structure
- `external-links.yaml`: External link definitions
- `products.yaml`: Product metadata
- `social.yaml`: Social media links

## Summary

The content model is file-based, using Hugo's content organization system. Pages are Markdown files with YAML front matter, organized into sections via directory structure. Visual assets are stored in assets/images/ and referenced from pages. External links are managed through front matter and data files.

