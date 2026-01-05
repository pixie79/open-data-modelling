---
title: "Data Modelling SDK"
description: "Software Development Kit for integrating data contract functionality into your applications"
date: 2025-01-01
draft: false
weight: 10
---

## Data Modelling SDK

The Open Data Modelling SDK provides a comprehensive toolkit for integrating data contract
functionality into your applications. Build custom tools, workflows, and integrations with
our powerful and flexible SDK.

## Features

### Schema Management

- Create and manage data schemas programmatically
- Support for multiple schema formats (JSON Schema, Avro, Protobuf)
- Schema validation and transformation
- Version management and compatibility checking

### Contract Operations

- Define data contracts with rich metadata
- Validate data against contracts
- Manage contract lifecycle and evolution
- Export contracts in various formats

### Integration Support

- Language bindings for popular programming languages
- RESTful API client libraries
- Command-line tools for automation
- Plugin architecture for extensibility

## Getting Started

### Installation

The SDK is available via package managers for multiple languages:

```bash
# npm (Node.js/TypeScript)
npm install @opendatamodelling/sdk

# pip (Python)
pip install opendatamodelling-sdk

# cargo (Rust)
cargo add opendatamodelling-sdk
```

### Basic Usage

```javascript
import { DataContract, SchemaValidator } from "@opendatamodelling/sdk";

// Create a data contract
const contract = new DataContract({
  name: "user-profile",
  version: "1.0.0",
  schema: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      email: { type: "string", format: "email" },
    },
    required: ["id", "name", "email"],
  },
});

// Validate data
const validator = new SchemaValidator(contract);
const isValid = validator.validate(userData);
```

## Documentation

**Current Version**: v1.7.1

For complete SDK documentation, API reference, and examples, visit the GitHub repository:

**<a href="https://github.com/pixie79/data-modelling-sdk" target="_blank" rel="noopener noreferrer">Data Modelling SDK on GitHub →</a>** (v1.7.1)

## Screenshot

![SDK Demo](/images/screenshots/sdk-demo.svg "Data Modelling SDK in action")

## Use Cases

- **Custom Data Tools**: Build specialized tools for your organization
- **CI/CD Integration**: Automate schema validation in your pipelines
- **Data Quality Systems**: Implement data quality checks and monitoring
- **Schema Management**: Programmatically manage large numbers of schemas

## Related Tools

- [Data Modelling CLI](/tools/cli/) - Command-line format conversion tool
- [OSX App](/tools/osx-app/) - Native macOS application
- [Web App](/tools/web-app/) - Browser-based application

## Support

For issues, questions, or contributions, please visit the
<a href="https://github.com/pixie79/data-modelling-sdk" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
