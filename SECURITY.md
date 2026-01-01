# Security Policy

## Supported Versions

We actively maintain and update dependencies to ensure security. Currently supported versions:

| Package | Version | Status |
|---------|---------|--------|
| Node.js | >=18.0.0 | ✅ Supported |
| npm | >=9.0.0 | ✅ Supported |
| Hugo Extended | Latest | ✅ Supported |

## Dependency Security

### Current Status

- ✅ **0 vulnerabilities** found in dependencies
- ✅ All packages updated to latest secure versions
- ✅ Regular security audits enabled

### Security Scanning

We use multiple layers of security scanning:

1. **npm audit**: Runs on every commit via pre-commit hooks
2. **CI/CD**: Automated security scans in GitHub Actions
3. **Dependency updates**: Regular updates to latest secure versions

### Dependency Versions

All dependencies are kept up-to-date with latest secure versions:

- `markdownlint-cli2`: ^0.20.0 (latest, fixes ReDoS vulnerability)
- `stylelint-config-standard`: ^39.0.1 (latest)
- `stylelint-config-standard-scss`: ^16.0.0 (latest)
- `prettier`: ^3.7.4 (latest)
- `eslint`: ^9.39.2 (latest)
- `stylelint`: ^16.2.1 (latest)
- `@axe-core/cli`: ^4.11.0 (latest)
- `htmlhint`: ^1.8.0 (latest)

### Known Issues

**ESLint 9 Migration**: ESLint 9 requires migration to flat config format. Currently using ESLint 9
with minimal configuration. Full migration planned for future update.

## Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **Do NOT** open a public issue
2. Email security details to: mark@olliver.me.uk
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

We will respond within 48 hours and work to address the issue promptly.

## Security Best Practices

### For Contributors

- Always run `npm audit` before committing
- Keep dependencies updated
- Review security advisories for packages
- Use GPG-signed commits
- Follow secure coding practices

### For Maintainers

- Regular dependency updates (monthly)
- Monitor security advisories
- Review and merge security patches promptly
- Maintain security documentation

## Security Updates

Security updates are prioritized and released as soon as possible. Critical vulnerabilities are
addressed within 24 hours, high severity within 7 days.

## References

- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)
- [Node.js Security](https://nodejs.org/en/docs/guides/security/)
- [Hugo Security](https://gohugo.io/about/security/)

