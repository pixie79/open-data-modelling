---
title: "Data Modelling API"
description: "RESTful API service for managing data contracts, schemas, and validations"
date: 2025-01-01
draft: false
weight: 20
---

## Data Modelling API

The Open Data Modelling API provides a RESTful service for managing data models, schemas,
workspaces, and collaboration. Perfect for server-side applications, microservices architectures, and
cloud-based data management systems.

## Features

### Workspace & Domain Management

- Organize data models into workspaces and domains
- Multi-user workspace support with GitHub OAuth
- Cross-domain table and relationship references
- Domain-level access control

### Table & Relationship CRUD

- Full CRUD operations for tables and relationships
- Support for complex data types and constraints
- Visual metadata and positioning
- Data Vault and SCD pattern support

### Multi-format Import

- Import from SQL, ODCS, JSON Schema, Avro, Protobuf, DrawIO
- Text-based and file-based import options
- AI-powered error resolution
- Batch import support

### Multi-format Export

- Export to JSON Schema, Avro, Protobuf, SQL, ODCS, PNG, DrawIO
- Export all formats as ZIP archive
- Format-specific customization options

### Git Synchronization

- Version control integration via Git repositories
- Clone, commit, push, pull operations
- Conflict detection and resolution
- Sync configuration management

### Real-time Collaboration

- Shared editing sessions with presence tracking
- Participant management and invitations
- Access request workflows
- Session-based collaboration

### Authentication & Security

- GitHub OAuth 2.0 authentication
- JWT token-based authorization
- Session management (in-memory and database-backed)
- Complete audit trail

## API Endpoints

The API is organized into the following endpoint groups:

### Workspace Management

- `GET /api/v1/workspace/info` - Get current workspace information
- `GET /api/v1/workspace/domains` - List all domains
- `POST /api/v1/workspace/domains` - Create a new domain
- `GET /api/v1/workspace/domains/{domain}` - Get domain info
- `PUT /api/v1/workspace/domains/{domain}` - Update/rename domain
- `DELETE /api/v1/workspace/domains/{domain}` - Delete domain

### Tables

- `GET /api/v1/workspace/domains/{domain}/tables` - Get all tables in a domain
- `POST /api/v1/workspace/domains/{domain}/tables` - Create a new table
- `GET /api/v1/workspace/domains/{domain}/tables/{table_id}` - Get a single table
- `PUT /api/v1/workspace/domains/{domain}/tables/{table_id}` - Update a table
- `DELETE /api/v1/workspace/domains/{domain}/tables/{table_id}` - Delete a table

### Relationships

- `GET /api/v1/workspace/domains/{domain}/relationships` - Get all relationships
- `POST /api/v1/workspace/domains/{domain}/relationships` - Create a new relationship
- `GET /api/v1/workspace/domains/{domain}/relationships/{relationship_id}` - Get a relationship
- `PUT /api/v1/workspace/domains/{domain}/relationships/{relationship_id}` - Update a relationship
- `DELETE /api/v1/workspace/domains/{domain}/relationships/{relationship_id}` - Delete a relationship

### Import

- `POST /api/v1/import/sql` - Import from SQL file
- `POST /api/v1/import/sql/text` - Import from SQL text
- `POST /api/v1/import/odcl` - Import from ODCS/ODCL file
- `POST /api/v1/import/odcl/text` - Import from ODCS/ODCL text
- `POST /api/v1/import/json-schema` - Import from JSON Schema
- `POST /api/v1/import/avro` - Import from Avro schema
- `POST /api/v1/import/protobuf` - Import from Protobuf
- `POST /api/v1/import/drawio` - Import DrawIO XML layout

### Export

- `GET /api/v1/models/export/{format}` - Export to specified format
- `GET /api/v1/models/export/all` - Export to all formats as ZIP
- `GET /api/v1/export/drawio` - Export to DrawIO XML format

### Git Sync

- `POST /api/v1/git/init` - Initialize Git repository
- `POST /api/v1/git/clone` - Clone a repository
- `GET /api/v1/git/status` - Get Git status
- `POST /api/v1/git/pull` - Pull changes from remote
- `POST /api/v1/git/push` - Push changes to remote
- `POST /api/v1/git/commit` - Commit changes
- `GET /api/v1/git/conflicts` - List Git conflicts
- `POST /api/v1/git/conflicts/resolve` - Resolve a conflict

### Collaboration

- `GET /api/v1/collaboration/sessions` - List collaboration sessions
- `POST /api/v1/collaboration/sessions` - Create a session
- `GET /api/v1/collaboration/sessions/{session_id}` - Get a session
- `DELETE /api/v1/collaboration/sessions/{session_id}` - End a session
- `GET /api/v1/collaboration/sessions/{session_id}/participants` - List participants
- `POST /api/v1/collaboration/sessions/{session_id}/invite` - Invite a user

### Authentication

- `GET /api/v1/auth/github/login` - Initiate GitHub OAuth
- `GET /api/v1/auth/github/callback` - Handle OAuth callback
- `GET /api/v1/auth/status` - Get authentication status
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - Logout and revoke session

### Audit

- `GET /api/v1/audit/workspaces/{workspace_id}/history` - Get workspace audit history
- `GET /api/v1/audit/domains/{domain_id}/history` - Get domain audit history
- `GET /api/v1/audit/tables/{table_id}/history` - Get table audit history
- `GET /api/v1/audit/relationships/{relationship_id}/history` - Get relationship audit history
- `GET /api/v1/audit/entries/{entry_id}` - Get audit entry details

### AI

- `POST /api/v1/ai/resolve-errors` - Use AI to resolve import errors

### OpenAPI

- `GET /api/v1/openapi.json` - Get OpenAPI specification

## Installation

The API is available on [crates.io](https://crates.io/crates/data-modelling-api) for Rust projects:

```bash
# Add to your Cargo.toml
cargo add data-modelling-api

# Or specify version
cargo add data-modelling-api@1.1.0
```

**Current Version**: v1.1.0

## Getting Started

### Authentication

```bash
# Set your API key
export ODM_API_KEY="your-api-key-here"

# Make authenticated requests
curl -H "Authorization: Bearer $ODM_API_KEY" \
  https://api.opendatamodelling.com/api/v1/workspace/info
```

### Example Requests

```bash
# Get workspace information
curl -H "Authorization: Bearer $ODM_API_KEY" \
  https://api.opendatamodelling.com/api/v1/workspace/info

# List all domains
curl -H "Authorization: Bearer $ODM_API_KEY" \
  https://api.opendatamodelling.com/api/v1/workspace/domains

# Create a new domain
curl -X POST https://api.opendatamodelling.com/api/v1/workspace/domains \
  -H "Authorization: Bearer $ODM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-domain",
    "description": "My data modeling domain"
  }'

# Get OpenAPI specification
curl https://api.opendatamodelling.com/api/v1/openapi.json
```

## Documentation

For complete API documentation, including all endpoints, request/response formats, and
authentication details:

- **<a href="https://github.com/pixie79/data-modelling-api" target="_blank" rel="noopener noreferrer">Data Modelling API on GitHub →</a>**
- **<a href="https://crates.io/crates/data-modelling-api" target="_blank" rel="noopener noreferrer">Data Modelling API on crates.io →</a>** (v1.1.0)
- **<a href="https://raw.githubusercontent.com/pixie79/data-modelling-api/main/openapi.json" target="_blank" rel="noopener noreferrer">OpenAPI Specification (JSON) →</a>** - Complete API schema

The OpenAPI specification is also available at runtime:
- `GET /api/v1/openapi.json` - Returns the complete OpenAPI 3.0.3 specification

## Screenshot

![API Demo](/images/screenshots/api-demo.svg "Data Modelling API documentation and examples")

## Use Cases

- **Microservices**: Centralized contract management across services
- **Data Pipelines**: Server-side validation and schema management
- **Cloud Applications**: Scalable data contract services
- **Integration Platforms**: API-first data contract operations

## Related Tools

- [Data Modelling SDK](/tools/sdk/) - Client libraries and tools
- [OSX App](/tools/osx-app/) - Native macOS application
- [Web App](/tools/web-app/) - Browser-based application

## Support

For issues, questions, or contributions, please visit the
<a href="https://github.com/pixie79/data-modelling-api" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
