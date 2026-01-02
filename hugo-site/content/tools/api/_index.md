---
title: "Data Modelling API"
description: "RESTful API service for managing data contracts, schemas, and validations"
date: 2025-01-01
draft: false
weight: 20
---

## Data Modelling API

The Open Data Modelling API provides a RESTful service for managing data contracts, schemas,
and validations. Perfect for server-side applications, microservices architectures, and
cloud-based data management systems.

## Features

### Contract Management

- Create, read, update, and delete data contracts
- Version management and history tracking
- Contract search and filtering
- Bulk operations support

### Validation Service

- Real-time data validation against contracts
- Batch validation endpoints
- Detailed validation error reporting
- Performance-optimized validation engine

### Schema Operations

- Schema storage and retrieval
- Schema transformation and conversion
- Schema comparison and diffing
- Compatibility checking

### Authentication & Security

- API key authentication
- OAuth 2.0 support
- Rate limiting and quotas
- Audit logging

## API Endpoints

### Contracts

- `GET /api/v1/contracts` - List all contracts
- `POST /api/v1/contracts` - Create a new contract
- `GET /api/v1/contracts/{id}` - Get contract details
- `PUT /api/v1/contracts/{id}` - Update a contract
- `DELETE /api/v1/contracts/{id}` - Delete a contract

### Validation

- `POST /api/v1/validate` - Validate data against a contract
- `POST /api/v1/validate/batch` - Batch validation

### Schemas

- `GET /api/v1/schemas` - List schemas
- `POST /api/v1/schemas` - Create a schema
- `GET /api/v1/schemas/{id}` - Get schema details

## Installation

The API is available on [crates.io](https://crates.io/crates/data-modelling-api) for Rust projects:

```bash
# Add to your Cargo.toml
cargo add data-modelling-api

# Or specify version
cargo add data-modelling-api@1.0.1
```

**Current Version**: v1.0.1

## Getting Started

### Authentication

```bash
# Set your API key
export ODM_API_KEY="your-api-key-here"

# Make authenticated requests
curl -H "Authorization: Bearer $ODM_API_KEY" \
  https://api.opendatamodelling.com/v1/contracts
```

### Example Request

```bash
# Create a new contract
curl -X POST https://api.opendatamodelling.com/v1/contracts \
  -H "Authorization: Bearer $ODM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "user-profile",
    "version": "1.0.0",
    "schema": {
      "type": "object",
      "properties": {
        "id": {"type": "string"},
        "name": {"type": "string"}
      }
    }
  }'
```

## Documentation

For complete API documentation, including all endpoints, request/response formats, and
authentication details:

- **<a href="https://github.com/pixie79/data-modelling-api" target="_blank" rel="noopener noreferrer">Data Modelling API on GitHub →</a>**
- **<a href="https://crates.io/crates/data-modelling-api" target="_blank" rel="noopener noreferrer">Data Modelling API on crates.io →</a>** (v1.0.1)

## Screenshot

![API Demo](/images/screenshots/api-demo.svg "Data Modelling API documentation and examples")

## Use Cases

- **Microservices**: Centralized contract management across services
- **Data Pipelines**: Server-side validation and schema management
- **Cloud Applications**: Scalable data contract services
- **Integration Platforms**: API-first data contract operations

## Related Products

- [Data Modelling SDK](/tools/sdk/) - Client libraries and tools
- [OSX App](/tools/osx-app/) - Native macOS application
- [Web App](/tools/web-app/) - Browser-based application

## Support

For issues, questions, or contributions, please visit the
<a href="https://github.com/pixie79/data-modelling-api" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
