# Open Data Modelling

Open Data Modelling provides tools, standards, and best practices for creating, managing, and
sharing data contracts and schemas. Our mission is to make data contracts accessible,
standardized, and easy to implement.

## Project Overview

This repository contains the documentation website for Open Data Modelling, built with Hugo and
deployed via Cloudflare Pages. The site provides comprehensive documentation on:

- **Data Contracts**: Learn what data contracts are and why they matter
- **ODCS Standard**: Open Data Contract Standard documentation and resources
- **Data Schemas**: Understanding different schema types and their benefits
- **Products**: SDK, API, OSX App, and Web App documentation
- **Usage Guides**: Import, export, Crowsfeat notation, and Data Flows

## Quick Start

### Prerequisites

- Hugo Extended (latest stable, 0.100+)
- Node.js (LTS version, >=18.0.0)
- npm (>=9.0.0)
- GPG key configured for commit signing

### Development Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:pixie79/open-data-modelling.git
   cd open-data-modelling
   ```

2. Navigate to the Hugo site directory:
   ```bash
   cd hugo-site
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run serve
   ```

5. Open your browser to `http://localhost:1313`

For detailed setup instructions, see [quickstart.md](specs/001-odm-docs-site/quickstart.md).

## Project Standards

This project follows strict quality standards defined in our
[Constitution](.specify/memory/constitution.md). All contributors must comply with these
standards.

### Code Quality Standards

- **Formatting**: Code MUST be formatted per language standards (see constitution Principle I)
- **Linting**: All linting checks MUST pass (see constitution Principle II)
- **Security**: Dependency scanning + SAST + infrastructure security MUST pass (see constitution
  Principle III)
- **Signing**: All commits MUST be GPG signed (see constitution Principle VI)
- **Cross-platform**: Code MUST be cross-platform compatible (see constitution Principle IV)
- **Accessibility**: UI components MUST meet WCAG 2.1 Level AA (see constitution Principle V)

### Language-Specific Standards

#### Markdown

- Use `.markdownlint.json` configuration
- Maximum line length: 100 characters (80 for prose)
- Use ATX-style headers (#)
- 2-space indentation

#### CSS/SCSS

- Use `.stylelintrc.json` configuration
- Follow stylelint-config-standard-scss
- 2-space indentation
- Double quotes for strings

#### JavaScript/TypeScript

- Use ESLint with standard configuration
- Prettier formatting
- 2-space indentation
- Semicolons required

#### YAML/TOML

- 2-space indentation
- Prettier formatting

### Quality Enforcement

All code changes must pass:

1. **Pre-commit hooks**: Automatic formatting and linting checks
2. **CI/CD gates**: Automated quality checks in GitHub Actions
3. **Security scans**: Dependency and code security scanning
4. **Accessibility checks**: WCAG 2.1 Level AA compliance

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

# Security audit
npm audit --audit-level=high
```

## Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. **Fork the repository** and clone your fork
2. **Create a feature branch** following the naming convention: `001-feature-name`
3. **Make your changes** following our code quality standards
4. **Test your changes** locally
5. **Commit with GPG signing** (required)
6. **Push to your fork** and create a pull request

### Commit Guidelines

- **All commits MUST be GPG signed** (see constitution Principle VI)
- Use conventional commit messages:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for test changes
  - `chore:` for maintenance tasks

Example:
```bash
git commit -S -m "feat: Add new data contract example page"
```

### Pull Request Process

1. **Ensure all quality checks pass**:
   - Code formatting
   - Linting (markdown, CSS, JavaScript)
   - Security scans
   - Accessibility checks

2. **Update documentation** if needed:
   - README.md for user-facing changes
   - CHANGELOG.md for notable changes
   - CONTRIBUTORS.md if this is your first contribution

3. **Write clear PR descriptions**:
   - What changes were made
   - Why the changes were needed
   - How to test the changes
   - Any breaking changes

4. **Request review** from maintainers

### Code Review Guidelines

- Be respectful and constructive
- Focus on code quality and standards compliance
- Check that all quality gates pass
- Verify accessibility and cross-platform compatibility
- Ensure documentation is updated

### Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node.js version, Hugo version)
- Relevant error messages or logs

## Project Structure

```
open-data-modelling/
├── .specify/          # Project specification and templates
├── checklists/        # Quality checklists
├── hugo-site/         # Hugo documentation website
│   ├── assets/        # Unprocessed assets (SCSS, JS, images)
│   ├── content/       # Markdown content pages
│   ├── data/          # Data files (YAML/JSON)
│   ├── layouts/       # Hugo templates
│   └── static/        # Static files
├── specs/             # Feature specifications
└── README.md          # This file
```

## Resources

- [Constitution](.specify/memory/constitution.md) - Project quality standards
- [Quickstart Guide](specs/001-odm-docs-site/quickstart.md) - Detailed setup instructions
- [Code Quality Checklist](checklists/code-quality-requirements-checklist.md) - Quality
  requirements checklist

## Related Projects

- [Data Modelling SDK](https://github.com/pixie79/data-modelling-sdk) - Software Development Kit
- [Data Modelling API](https://github.com/pixie79/data-modelling-api) - RESTful API service
- [Data Modelling Frontend](https://github.com/pixie79/data-modelling-frontend) - OSX App and Web
  App

## Standards and Specifications

- [Open Data Contract Standard (ODCS)](https://bitol-io.github.io/open-data-contract-standard/latest/)
- [Open Data Product Standard (ODPS)](https://bitol-io.github.io/open-data-product-standard)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for
details.

## Support

For questions, issues, or contributions, please:

- Open an issue on GitHub
- Check existing documentation
- Review the [Constitution](.specify/memory/constitution.md) for quality standards

## Acknowledgments

Thank you to all contributors who help make Open Data Modelling better. See
[CONTRIBUTORS.md](CONTRIBUTORS.md) for a list of contributors.

