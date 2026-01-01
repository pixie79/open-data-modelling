# Site Structure Contract: Open Data Modelling Documentation Website

**Feature**: 001-odm-docs-site  
**Date**: 2025-01-01

## Overview

Since this is a static documentation website (not an API), this contract defines the site structure, URL patterns, and content organization rather than API endpoints.

## URL Structure

### URL Patterns

All URLs follow the pattern: `/{section}/{page}`

**Base URL**: Determined by Cloudflare Pages deployment (e.g., `https://opendatamodelling.com`)

### Route Definitions

#### Homepage
- **Path**: `/`
- **File**: `content/_index.md`
- **Purpose**: Introduction to Open Data Modelling

#### Data Contracts Section
- **Path**: `/data-contracts/`
- **File**: `content/data-contracts/_index.md`
- **Purpose**: Section landing page for data contracts content

#### ODCS Section
- **Path**: `/odcs/`
- **File**: `content/odcs/_index.md`
- **Purpose**: Information about Open Data Contract Standard

#### Schemas Section
- **Path**: `/schemas/`
- **File**: `content/schemas/_index.md`
- **Purpose**: Benefits and types of data schemas

#### Products Section
- **Path**: `/products/`
- **File**: `content/products/_index.md`
- **Subsections**:
  - `/products/sdk/` - Data Modelling SDK
  - `/products/api/` - Data Modelling API
  - `/products/osx-app/` - OSX Application
  - `/products/web-app/` - Web Application

#### Guides Section
- **Path**: `/guides/`
- **File**: `content/guides/_index.md`
- **Subsections**:
  - `/guides/import/` - Import guide
  - `/guides/export/` - Export guide
  - `/guides/crowsfeat/` - Crowsfeat notation guide
  - `/guides/data-flows/` - Data Flows guide

## Static Assets

### Asset Paths

- **Images**: `/images/{type}/{filename}`
  - Logos: `/images/logos/`
  - Diagrams: `/images/diagrams/`
  - Screenshots: `/images/screenshots/`
  - Favicons: `/images/favicons/`

- **CSS**: `/css/{filename}.css`
- **JavaScript**: `/js/{filename}.js` (if needed)

## Content Requirements

### Required Pages

1. **Homepage** (`/`): Must introduce Open Data Modelling
2. **Data Contracts** (`/data-contracts/`): Must explain data contracts
3. **ODCS** (`/odcs/`): Must include link to ODCS documentation
4. **Schemas** (`/schemas/`): Must explain schema types and benefits
5. **Products** (`/products/`): Must introduce all four products
6. **Guides** (`/guides/`): Must include import, export, Crowsfeat, and Data Flows guides

### Visual Asset Requirements

- Logo must be available at `/images/logos/logo.svg` and `/images/logos/logo.png`
- Favicon must be available at `/favicon.ico` and multiple sizes
- Each content section should include at least one visual element (diagram or screenshot)

## External Link Contracts

### Required External Links

- **ODCS**: `https://bitol-io.github.io/open-data-contract-standard/latest/`
- **ODPS**: `https://bitol-io.github.io/open-data-product-standard`
- **GitHub SDK**: `https://github.com/pixie79/data-modelling-sdk`
- **GitHub API**: `https://github.com/pixie79/data-modelling-api`
- **GitHub Frontend**: `https://github.com/pixie79/data-modelling-frontend`

### Link Behavior

- All external links open in new tab (`target="_blank"`)
- External links include `rel="noopener noreferrer"` for security
- Link text must be descriptive (not "click here" or "link")

## Navigation Contract

### Main Navigation Structure

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

### Navigation Requirements

- Navigation must be consistent across all pages
- Navigation must be keyboard accessible
- Navigation must be responsive (mobile menu)
- Active page must be highlighted in navigation

## Performance Contract

### Page Load Requirements

- All pages must load in under 3 seconds (25 Mbps connection)
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

### Asset Optimization

- Images must be optimized (WebP format preferred)
- CSS and JavaScript must be minified
- Assets must be served via CDN (Cloudflare Pages)

## Accessibility Contract

### WCAG 2.1 Level AA Requirements

- Color contrast: Minimum 4.5:1 for text
- Keyboard navigation: All interactive elements accessible
- Screen reader support: Semantic HTML, ARIA labels
- Alt text: All images must have descriptive alt text
- Focus indicators: Visible focus states required

## SEO Contract

### Meta Tags

- Each page must have unique `<title>` tag
- Each page must have unique `<meta name="description">` tag (50-160 characters)
- Open Graph tags for social sharing
- Canonical URLs to prevent duplicate content

## Deployment Contract

### Cloudflare Pages Configuration

- **Build Command**: `hugo --minify`
- **Output Directory**: `public`
- **Hugo Version**: Latest stable (0.100+)
- **Node Version**: Latest LTS (for tooling)

### Environment Variables

- `HUGO_ENV`: `production` (for production builds)
- `BASE_URL`: Set automatically by Cloudflare Pages

## Validation

### Pre-Deployment Checks

- All internal links must be valid
- All external links must be accessible
- All images must have alt text
- All pages must pass accessibility checks
- All pages must meet performance targets

## Summary

This contract defines the structure and requirements for the static documentation website. All pages, assets, and links must conform to these specifications to ensure consistency, performance, and accessibility.

