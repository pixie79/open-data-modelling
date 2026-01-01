# Open Data Modelling Documentation Website

Hugo-based static documentation website for Open Data Modelling.

## Prerequisites

- Hugo Extended (latest stable, 0.100+)
- Node.js (LTS version, >=18.0.0)
- npm (>=9.0.0)
- GPG key configured for commit signing

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install pre-commit hooks:

   ```bash
   pre-commit install
   ```

3. Start development server:

   ```bash
   npm run serve
   ```

## Development

### Code Quality Standards

This project follows the Open Data Modelling Constitution. All code must comply with:

- **Formatting**: Code MUST be formatted per language standards (Principle I)
- **Linting**: All linting checks MUST pass (Principle II)
- **Security**: Dependency scanning + SAST + infrastructure security MUST pass (Principle III)
- **Signing**: All commits MUST be GPG signed (Principle VI)
- **Cross-platform**: Code MUST be cross-platform compatible (Principle IV)
- **Accessibility**: UI components MUST meet WCAG 2.1 Level AA (Principle V)

### Language-Specific Standards

#### Markdown

- Use `.markdownlint.json` configuration
- Maximum line length: 100 characters (80 for prose)
- Use ATX-style headers (#)
- 2-space indentation

#### CSS/SCSS

- Use `.stylelintrc.json` configuration
- Follow stylelint-config-standard
- 2-space indentation
- Double quotes for strings
- Maximum line length: 100 characters

#### JavaScript/TypeScript

- Use ESLint with standard configuration
- Prettier formatting
- 2-space indentation
- Semicolons required

#### YAML/TOML

- 2-space indentation
- Prettier formatting

### Running Quality Checks

```bash
# Format code
npm run format

# Lint Markdown
npm run lint:markdown

# Lint CSS
npm run lint:css

# Lint JavaScript
npm run lint:js

# Run all linters
npm run lint

# Check links (after build)
npm run test:links

# Accessibility check (after build)
npm run test:accessibility
```

### GPG Commit Signing

All commits MUST be GPG signed per constitution Principle VI.

1. Generate GPG key if needed:

   ```bash
   gpg --full-generate-key
   ```

2. Configure Git:

   ```bash
   git config --global user.signingkey YOUR_GPG_KEY_ID
   git config --global commit.gpgsign true
   ```

3. Verify signing:

   ```bash
   git log --show-signature
   ```

## Building

```bash
# Build for production
npm run build

# Clean build directory
npm run clean
```

## Deployment

The site is automatically deployed to Cloudflare Pages via GitHub Actions on push to main branch.

Manual deployment:

1. Build the site: `npm run build`
2. Deploy `hugo-site/public/` directory to Cloudflare Pages

## Project Structure

```text
hugo-site/
├── assets/          # Unprocessed assets (SCSS, JS, images)
├── content/         # Markdown content pages
├── data/            # Data files (YAML/JSON)
├── layouts/         # Hugo templates
├── static/          # Static files (copied as-is)
└── config.toml      # Hugo configuration
```

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Constitution](../.specify/memory/constitution.md)
