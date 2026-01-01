<!--
  ============================================================================
  SYNC IMPACT REPORT
  ============================================================================
  Version Change: [NONE] → 1.0.0 (Initial Constitution)
  
  Scope Clarifications Applied:
  - Q1A: All languages in codebase (multi-language project) - explicitly stated
  - Q2D: Pre-commit hooks AND CI/CD gates - both mandatory, dual-layer enforcement
  - Q3D: Dependency scanning + SAST + infrastructure security - all three layers required
  
  Principles Added:
  - I. Code Formatting & Consistency (NON-NEGOTIABLE)
  - II. Automated Quality Enforcement (NON-NEGOTIABLE)
  - III. Security-First Development (NON-NEGOTIABLE)
  - IV. Cross-Platform Compatibility
  - V. Accessibility & Inclusivity
  - VI. Signed Commits & Traceability
  
  Sections Added:
  - Code Quality Standards (detailed requirements)
  - Enforcement & Integration Requirements
  - Documentation Requirements
  
  Templates Requiring Updates:
  - ✅ plan-template.md (Constitution Check section updated with compliance checklist)
  - ✅ spec-template.md (Quality Requirements section added with constitution compliance)
  - ✅ tasks-template.md (Quality task categories added across all phases)
  
  Follow-up TODOs:
  - None (all placeholders filled)
  ============================================================================
-->

# Open Data Modelling Constitution

## Core Principles

### I. Code Formatting & Consistency (NON-NEGOTIABLE)

All code across ALL programming languages in the codebase MUST be consistently formatted according to language-specific standards. This applies to both new code and legacy code (with grandfathering provisions for gradual migration where documented). Formatting tool configuration files (e.g., `.prettierrc`, `.editorconfig`, `black.toml`, `rustfmt.toml`) MUST be present in the repository root or appropriate subdirectories. Formatting standards MUST be explicitly defined for each programming language in use, including line length limits, indentation style (spaces vs tabs), trailing whitespace handling, file encoding (UTF-8), and end-of-line characters (LF). Primary programming language(s) and version requirements MUST be explicitly stated in project documentation. Naming conventions MUST be specified per language (camelCase, snake_case, kebab-case, etc.). Code style guides (e.g., PEP 8, Google Style Guide, Rust API Guidelines) MUST be referenced or included.

**Rationale**: Consistent formatting reduces cognitive load, prevents merge conflicts, and enables automated tooling. Language consistency ensures maintainability and reduces context switching overhead. Multi-language support requires explicit standards per language to maintain quality across the entire codebase.

### II. Automated Quality Enforcement (NON-NEGOTIABLE)

Linting tools MUST be specified and configured for each language (e.g., ESLint, Pylint, Clippy, golangci-lint). Linter configuration files MUST be required and their locations specified. Quality enforcement MUST be implemented at TWO levels: (1) Pre-commit hooks MUST be configured to block commits that fail quality checks, and (2) CI/CD pipeline gates MUST fail builds on violations. Both enforcement mechanisms are mandatory. Linting requirements MUST specify which rule sets are mandatory vs optional, severity levels (error, warning, info), and enforcement mechanisms. All quality checks MUST be runnable locally by developers. Tool versions MUST be specified to ensure consistency across environments.

**Rationale**: Dual-layer enforcement (pre-commit + CI/CD) provides defense in depth: pre-commit hooks catch issues before they enter the repository, while CI/CD gates provide a safety net and ensure compliance even if pre-commit hooks are bypassed. This prevents quality degradation and ensures consistent code quality without relying on manual review memory.

### III. Security-First Development (NON-NEGOTIABLE)

Security audit requirements MUST cover three comprehensive layers: (1) Dependency scanning tools (e.g., Snyk, Dependabot, npm audit, cargo audit) MUST scan for known CVEs in packages with scans running on every commit or at minimum daily, (2) Static code analysis tools (SAST) MUST be specified and run (e.g., Bandit, Semgrep, CodeQL, SonarQube) to detect code-level security vulnerabilities, and (3) Infrastructure and configuration security checks MUST be implemented to detect secrets in configuration files, IAM misconfigurations, and infrastructure-as-code vulnerabilities. Security audit requirements MUST define severity thresholds (critical, high, medium, low) with critical and high severity vulnerabilities blocking CI/CD. Remediation timelines MUST be specified (e.g., critical within 24h, high within 7 days). Secret scanning MUST be implemented to detect API keys, passwords, and tokens in code and configuration. Security audit requirements MUST include reporting and notification mechanisms.

**Rationale**: Security vulnerabilities pose existential risks to projects and users. Comprehensive security coverage across dependencies, code, and infrastructure prevents security gaps. Early detection and mandatory remediation prevent security debt accumulation.

### IV. Cross-Platform Compatibility

Code MUST be cross-platform compliant. Supported platforms (OS, architectures) MUST be explicitly listed. CI/CD MUST include platform testing matrix. File path handling MUST use platform-agnostic methods (forward/backward slashes). Line ending handling MUST be consistent (LF preferred, CRLF when required). Character encoding MUST be UTF-8. Dependency compatibility across platforms MUST be verified. Platform-specific code paths MUST be documented and tested.

**Rationale**: Cross-platform compatibility ensures code works for all users regardless of their operating system or architecture, maximizing accessibility and reducing support burden.

### V. Accessibility & Inclusivity

Accessibility requirements MUST specify standards (WCAG 2.1 Level AA minimum, Section 508 compliance where applicable). Components requiring accessibility MUST be defined (UI, APIs, documentation). Accessibility testing tools MUST be specified (e.g., axe-core, WAVE, Lighthouse). Keyboard navigation, screen reader compatibility, color contrast ratios, and alternative text for images/media MUST be addressed. ARIA labels MUST be used where applicable.

**Rationale**: Accessible code ensures all users can interact with the project regardless of abilities, complying with legal requirements and ethical standards.

### VI. Signed Commits & Traceability

All git commits MUST be signed using GPG keys. Commit signing MUST be enforced via pre-commit hooks or CI checks. GPG key setup process and developer configuration instructions MUST be documented. Unsigned commits MUST be rejected in CI/CD pipelines.

**Rationale**: Signed commits provide cryptographic proof of authorship, enable audit trails, and protect against repository tampering.

## Code Quality Standards

### Formatting Requirements

- Formatting standards MUST be explicitly defined for each programming language in use
- Formatting tool configuration files MUST be specified and version-controlled
- Formatting requirements MUST specify whether auto-formatting is mandatory or advisory
- Formatting requirements MUST include line length limits (if applicable)
- Formatting requirements MUST specify indentation style (spaces vs tabs, count)
- Formatting requirements MUST define handling of trailing whitespace
- Formatting requirements MUST specify file encoding standards (UTF-8)
- Formatting requirements MUST include end-of-line character specifications (LF vs CRLF)
- Formatting requirements MUST be documented in a discoverable location (README, CONTRIBUTING, or docs/)

### Language Consistency Requirements

- Primary programming language(s) MUST be explicitly stated in project documentation
- Language version requirements MUST be specified (e.g., Python 3.11+, Node.js 18+, Rust 1.70+)
- Language consistency requirements MUST define allowed language mixing (e.g., Python + C extensions, JS + TS)
- Naming conventions MUST be specified per language (camelCase, snake_case, kebab-case, etc.)
- Import/package organization rules MUST be defined (e.g., import ordering, grouping)
- Code style guide MUST be referenced or included (e.g., PEP 8, Google Style Guide, Rust API Guidelines)
- Language-specific idioms and patterns MUST be documented or referenced
- Requirements MUST specify handling of deprecated language features or versions

### Linting Requirements

- Linting tools MUST be specified for each language (e.g., ESLint, Pylint, Clippy, golangci-lint)
- Linter configuration files MUST be required and their locations specified
- Linting requirements MUST specify which rule sets are mandatory vs optional
- Linting requirements MUST define severity levels (error, warning, info) and enforcement
- Linting requirements MUST specify whether warnings block CI/CD or are advisory
- Linting requirements MUST include process for adding exceptions or disabling rules
- Linting requirements MUST specify that pre-commit hooks are mandatory (enforcement at commit time)
- Linting requirements MUST define CI/CD integration (fail build on lint errors)
- Linting requirements MUST specify handling of legacy code (grandfathering, gradual migration)

### Security Audit Requirements

- Security audit requirements MUST specify dependency scanning tools (e.g., Snyk, Dependabot, npm audit, cargo audit)
- Security audit requirements MUST define frequency of dependency scans (per commit, daily, weekly)
- Security audit requirements MUST specify static code analysis tools (SAST) (e.g., Bandit, Semgrep, CodeQL, SonarQube)
- Security audit requirements MUST define severity thresholds (critical, high, medium, low)
- Security audit requirements MUST specify which severity levels block CI/CD
- Security audit requirements MUST include process for handling false positives
- Security audit requirements MUST define remediation timelines (e.g., critical within 24h, high within 7 days)
- Security audit requirements MUST specify handling of known vulnerabilities in dependencies
- Security audit requirements MUST include secret scanning (API keys, passwords, tokens)
- Security audit requirements MUST specify infrastructure security checks (secrets in config files, IAM, infrastructure-as-code)
- Security audit requirements MUST define reporting and notification mechanisms

## Enforcement & Integration Requirements

- Requirements MUST specify dual-layer enforcement: pre-commit hooks (block commits) AND CI/CD pipeline gates (fail builds)
- Requirements MUST specify CI/CD integration points (pre-commit, build, pre-merge)
- Requirements MUST define which checks are blocking vs non-blocking
- Requirements MUST specify tool versions to ensure consistency across environments
- Requirements MUST include setup instructions for new developers
- Requirements MUST specify how to run quality checks locally
- Requirements MUST define exception process (when/how to bypass checks)
- Requirements SHOULD include monitoring/reporting of compliance metrics
- Requirements MUST specify update/maintenance process for quality standards

## Documentation Requirements

- All code quality requirements MUST be documented in a single discoverable location
- Requirements documentation MUST include links to tool documentation
- Requirements documentation SHOULD include examples of compliant code
- Requirements documentation SHOULD include examples of non-compliant code with fixes
- Requirements documentation MUST specify who to contact for questions
- Requirements documentation SHOULD include troubleshooting guide for common issues
- Each requirement MUST have clear pass/fail criteria
- Requirements MUST specify how compliance is measured (automated tools, manual review)
- Requirements SHOULD include baseline metrics or targets (e.g., zero critical vulnerabilities)
- Requirements MUST specify how to verify compliance before submission

## Governance

This constitution supersedes all other code quality practices and standards. All pull requests and code reviews MUST verify compliance with these principles. Amendments to this constitution require:

1. **Documentation**: Clear rationale for the change
2. **Approval**: Consensus from project maintainers
3. **Migration Plan**: If the change affects existing code, a migration strategy must be provided
4. **Version Bump**: Constitution version MUST be incremented according to semantic versioning:
   - **MAJOR**: Backward incompatible governance/principle removals or redefinitions
   - **MINOR**: New principle/section added or materially expanded guidance
   - **PATCH**: Clarifications, wording, typo fixes, non-semantic refinements

Complexity introduced by violating these principles MUST be justified in implementation plans with simpler alternatives explicitly rejected and documented.

All developers MUST be familiar with this constitution before contributing code. Non-compliance MUST be addressed before code is merged.

**Version**: 1.0.0 | **Ratified**: 2025-01-01 | **Last Amended**: 2025-01-01
