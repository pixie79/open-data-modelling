# Research: Open Data Modelling Documentation Website

**Feature**: 001-odm-docs-site  
**Date**: 2025-01-01  
**Purpose**: Research technical decisions and best practices for Hugo static site implementation

## Hugo Static Site Generator

### Decision: Use Hugo latest stable version (0.100+)

**Rationale**: 
- Hugo is the fastest static site generator, meeting performance requirements (< 3s page load)
- Excellent Markdown support for content authoring
- Built-in template system (Go templates) provides flexibility
- Strong ecosystem with themes and plugins
- Native support for content organization (sections, taxonomies)
- Excellent documentation and community support

**Alternatives Considered**:
- **Jekyll**: Slower build times, Ruby dependency, less active development
- **Next.js**: Overkill for static content, requires Node.js runtime knowledge
- **Gatsby**: Complex setup, GraphQL overhead for simple content
- **11ty**: Good alternative but smaller ecosystem, less theme support

**Implementation Notes**:
- Use Hugo Extended version for SCSS processing
- Configure with TOML for better readability
- Use Hugo modules for theme management (if using external theme)

## Hugo Theme Selection

### Decision: Custom theme or minimal base theme (e.g., PaperMod, Docsy)

**Rationale**:
- Custom theme provides full control over branding and design
- Can ensure WCAG 2.1 Level AA compliance from the start
- Better integration with OpenDataModelling branding requirements
- If using base theme, PaperMod or Docsy are good starting points

**Alternatives Considered**:
- **PaperMod**: Clean, minimal, good accessibility support
- **Docsy**: Google's documentation theme, excellent for technical docs
- **Custom**: Full control, matches branding requirements exactly

**Implementation Notes**:
- Start with minimal base theme if time-constrained
- Customize colors, typography, and layout to match OpenDataModelling branding
- Ensure theme supports dark mode (accessibility requirement)

## Cloudflare Pages Deployment

### Decision: Deploy via Cloudflare Pages with GitHub integration

**Rationale**:
- Free tier supports static sites with excellent performance
- Global CDN ensures fast page loads worldwide
- Automatic deployments on git push
- Built-in SSL/TLS certificates
- Excellent integration with GitHub
- Supports Hugo build process natively

**Alternatives Considered**:
- **Netlify**: Similar features but Cloudflare has better global CDN
- **GitHub Pages**: Slower, less control over build process
- **Vercel**: Good but Cloudflare Pages is more cost-effective

**Implementation Notes**:
- Configure build command: `hugo --minify`
- Set output directory: `public`
- Use Hugo version: latest stable
- Enable automatic HTTPS

## Content Organization

### Decision: Organize content by topic sections (data-contracts, odcs, schemas, products, guides)

**Rationale**:
- Matches user mental model (learning about concepts, then products, then usage)
- Easy to navigate and maintain
- Supports Hugo's section-based organization
- Allows for future expansion

**Structure**:
```
content/
├── _index.md (homepage)
├── data-contracts/ (P1 content)
├── odcs/ (P1 content)
├── schemas/ (P1 content)
├── products/ (P2 content)
│   ├── sdk/
│   ├── api/
│   ├── osx-app/
│   └── web-app/
└── guides/ (P3 content)
    ├── import/
    ├── export/
    ├── crowsfeat/
    └── data-flows/
```

## Visual Assets Strategy

### Decision: Create professional logo and favicon, use diagrams and screenshots throughout

**Logo Design Considerations**:
- Represent "Open Data Modelling" concept
- Work at multiple sizes (header, favicon, social sharing)
- Accessible color contrast (WCAG 2.1 Level AA)
- SVG format for scalability
- Consider data flow, schema, or contract visualization elements

**Favicon Strategy**:
- Generate multiple sizes (16x16, 32x32, 180x180, 192x192, 512x512)
- Use logo simplified version or icon
- Support dark/light mode if possible
- Include Apple touch icons

**Diagrams and Screenshots**:
- Use Mermaid.js or PlantUML for code-based diagrams (version controlled)
- Screenshots from actual products (SDK, API, Apps)
- Ensure all images have alt text for accessibility
- Optimize images (WebP format, lazy loading)

## Performance Optimization

### Decision: Implement multiple optimization strategies

**Strategies**:
1. **Hugo minification**: Enable `--minify` flag for HTML, CSS, JS
2. **Image optimization**: Use WebP format, lazy loading, responsive images
3. **CSS/JS bundling**: Minimize and combine assets
4. **CDN caching**: Cloudflare Pages handles this automatically
5. **Preload critical resources**: Use `<link rel="preload">` for fonts, critical CSS

**Target Metrics**:
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3s

## Accessibility Implementation

### Decision: WCAG 2.1 Level AA compliance from the start

**Key Requirements**:
1. **Color Contrast**: Minimum 4.5:1 for text, 3:1 for UI components
2. **Keyboard Navigation**: All interactive elements accessible via keyboard
3. **Screen Reader Support**: Semantic HTML, ARIA labels where needed
4. **Alt Text**: All images, diagrams, screenshots have descriptive alt text
5. **Focus Indicators**: Visible focus states for all interactive elements
6. **Heading Structure**: Proper h1-h6 hierarchy

**Testing Tools**:
- **axe-core**: Automated accessibility testing
- **Lighthouse**: Accessibility audit
- **WAVE**: Browser extension for manual testing
- **Screen Reader Testing**: NVDA (Windows) or VoiceOver (macOS)

## Code Quality Tooling

### Decision: Comprehensive linting and formatting setup

**Tools**:
- **Markdown**: markdownlint (markdownlint-cli2)
- **CSS/SCSS**: stylelint with stylelint-config-standard
- **JavaScript/TypeScript**: ESLint with standard config, Prettier
- **HTML**: HTMLHint for validation
- **Links**: htmltest for broken link detection

**Pre-commit Hooks**:
- Use pre-commit framework or husky
- Run markdownlint, stylelint, ESLint before commits
- Block commits with linting errors

**CI/CD**:
- Run all linters in GitHub Actions
- Run accessibility tests (axe-core)
- Run link checking (htmltest)
- Deploy to Cloudflare Pages on success

## Security Considerations

### Decision: Implement security scanning for dependencies and secrets

**Dependency Scanning**:
- npm audit for Node.js dependencies (tooling)
- Dependabot or Snyk for automated vulnerability detection
- Regular updates for Hugo and theme dependencies

**Secret Scanning**:
- GitHub secret scanning (built-in)
- Pre-commit hook to detect secrets in commits
- No API keys or tokens in repository (static site, no backend)

**Infrastructure Security**:
- Cloudflare Pages handles infrastructure security
- No server-side code, reducing attack surface
- HTTPS enforced automatically

## External Link Management

### Decision: Regular link checking and graceful degradation

**Strategy**:
- Use htmltest for automated link checking in CI/CD
- External links open in new tabs (target="_blank" with rel="noopener")
- Consider link checking service (e.g., linkchecker) for monitoring
- Handle broken external links gracefully (inform user, provide context)

**External Links**:
- ODCS: https://bitol-io.github.io/open-data-contract-standard/latest/
- ODPS: https://bitol-io.github.io/open-data-product-standard
- GitHub repositories (SDK, API, Frontend)

## Responsive Design Strategy

### Decision: Mobile-first responsive design

**Breakpoints**:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 2560px

**Approach**:
- Mobile-first CSS (min-width media queries)
- Flexible grid system
- Responsive images (srcset)
- Touch-friendly interactive elements (minimum 44x44px)

## Content Management Workflow

### Decision: Markdown-based content with front matter

**Front Matter Format**: YAML or TOML
**Content Structure**:
- Each page: Markdown file with front matter
- Front matter includes: title, description, date, images, etc.
- Use Hugo shortcodes for complex content (diagrams, code blocks)

**Workflow**:
- Content authors write Markdown
- Visual assets stored in assets/images/
- Build process generates static HTML
- Deploy automatically on git push

## Summary

All technical decisions align with project requirements and constitution principles. Hugo provides the performance and flexibility needed, Cloudflare Pages ensures fast global delivery, and comprehensive tooling ensures code quality and accessibility compliance.

