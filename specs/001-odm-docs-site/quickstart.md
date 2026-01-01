# Quickstart: Open Data Modelling Documentation Website

**Feature**: 001-odm-docs-site  
**Date**: 2025-01-01

## Prerequisites

- Hugo Extended (latest stable, 0.100+)
- Node.js (LTS version, for tooling)
- Git
- GPG key configured (for commit signing)

## Initial Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd open-data-modelling
git checkout 001-odm-docs-site
```

### 2. Install Hugo

**macOS** (using Homebrew):
```bash
brew install hugo
```

**Linux**:
```bash
# Download from https://github.com/gohugoio/hugo/releases
# Or use package manager
```

**Windows**:
```bash
# Download from https://github.com/gohugoio/hugo/releases
# Or use Chocolatey: choco install hugo-extended
```

Verify installation:
```bash
hugo version
```

### 3. Install Node.js Dependencies

```bash
cd hugo-site
npm install
```

This installs:
- markdownlint-cli2 (Markdown linting)
- stylelint (CSS linting)
- prettier (Code formatting)
- ESLint (JavaScript linting, if JS/TS used)
- htmltest (Link checking)
- axe-core (Accessibility testing)

### 4. Configure Pre-commit Hooks

```bash
# If using pre-commit framework
pre-commit install

# Or if using husky
npm run prepare
```

## Development Workflow

### 1. Start Development Server

```bash
cd hugo-site
hugo server
```

Server runs at `http://localhost:1313`

### 2. Create New Content Page

```bash
hugo new content/section-name/page-name.md
```

Edit the generated Markdown file with content.

### 3. Add Visual Assets

1. Place images in `assets/images/{type}/`
2. Reference in content: `![Alt text](/images/type/filename.png)`
3. Ensure alt text is descriptive

### 4. Run Quality Checks Locally

```bash
# Format code
npm run format

# Lint Markdown
npm run lint:markdown

# Lint CSS
npm run lint:css

# Lint JavaScript (if applicable)
npm run lint:js

# Check links
npm run test:links

# Accessibility check
npm run test:accessibility

# Build site
hugo --minify
```

### 5. Preview Build

```bash
# Build for production
hugo --minify

# Preview built site
cd public
python3 -m http.server 8000
# Or use any static file server
```

## Content Authoring

### Page Front Matter

Each content page requires front matter:

```yaml
---
title: "Page Title"
description: "Meta description for SEO (50-160 characters)"
date: 2025-01-01
draft: false
weight: 10
tags: ["tag1", "tag2"]
images: ["/images/diagrams/example.svg"]
---
```

### Adding Diagrams

Use Mermaid.js shortcode:

```markdown
{{< mermaid >}}
graph TD
    A[Data Contract] --> B[Schema]
    B --> C[Validation]
{{< /mermaid >}}
```

### Adding Code Blocks

```markdown
```yaml
example:
  key: value
```
```

### Adding External Links

```markdown
[ODCS Documentation](https://bitol-io.github.io/open-data-contract-standard/latest/){:target="_blank" rel="noopener noreferrer"}
```

## Logo and Favicon Creation

### Logo Design

1. Create logo in SVG format (vector graphics)
2. Export PNG versions for fallback
3. Ensure logo works at multiple sizes
4. Test color contrast (WCAG 2.1 Level AA)

### Favicon Generation

1. Create favicon source (512x512px recommended)
2. Generate multiple sizes:
   - 16x16 (favicon.ico)
   - 32x32 (favicon.ico)
   - 180x180 (Apple touch icon)
   - 192x192 (Android)
   - 512x512 (PWA)

3. Place in `static/favicon.ico` and `static/images/favicons/`

## Deployment

### Cloudflare Pages Setup

1. Connect GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `hugo --minify`
   - **Output directory**: `public`
   - **Hugo version**: Latest stable
3. Set environment variables:
   - `HUGO_ENV`: `production`
4. Deploy

### Manual Deployment

```bash
# Build site
hugo --minify

# Deploy public/ directory to Cloudflare Pages
# (via Wrangler CLI or Cloudflare dashboard)
```

## Troubleshooting

### Build Errors

- **Missing Hugo Extended**: Install Hugo Extended version for SCSS support
- **Template errors**: Check Go template syntax in layouts/
- **Missing images**: Verify image paths in assets/images/

### Linting Errors

- **Markdown**: Fix formatting issues, check markdownlint rules
- **CSS**: Fix style issues, check stylelint rules
- **Links**: Fix broken links or update htmltest configuration

### Performance Issues

- Optimize images (use WebP, compress)
- Minimize CSS/JS
- Check for unused assets
- Review Hugo build output for warnings

## Next Steps

1. Review constitution compliance checklist
2. Create initial content pages
3. Design and implement logo/favicon
4. Set up CI/CD pipeline
5. Deploy to Cloudflare Pages

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Markdown Guide](https://www.markdownguide.org/)

## Summary

This quickstart provides the essential steps to set up, develop, and deploy the Open Data Modelling documentation website. Follow the constitution requirements for code quality, security, and accessibility throughout development.

