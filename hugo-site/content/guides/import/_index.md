---
title: "Import Guide"
description: "How to import existing schemas and data contracts into Open Data Modelling"
date: 2025-01-01
draft: false
weight: 10
---

## Import Guide

The import functionality allows you to bring existing schemas and data contracts into Open Data
Modelling from various formats. This guide covers the import process, supported formats, and
best practices.

## Supported Formats

Open Data Modelling supports importing from:

- **JSON Schema**: Standard JSON Schema format
- **Avro**: Apache Avro schema files
- **Protobuf**: Protocol Buffer schema definitions
- **OpenAPI/Swagger**: API schema definitions
- **CSV**: Columnar data with header inference
- **ODCS**: Open Data Contract Standard format

## Import Process

![Import Process](/images/diagrams/import-process.svg "Data import process flow")

The import process follows these steps:

1. **Select Source**: Choose the format and source of your schema
2. **Upload/Provide**: Upload a file or provide schema content
3. **Parse & Validate**: System parses and validates the schema
4. **Transform**: Convert to internal format if needed
5. **Review**: Review the imported schema
6. **Save**: Save as a new data contract

## Step-by-Step Instructions

### Using the Web App

1. Navigate to the **Contracts** section
2. Click **Import** button
3. Select the format from the dropdown
4. Upload your schema file or paste the content
5. Review the parsed schema
6. Click **Import** to create the contract

### Using the SDK

```javascript
import { SchemaImporter } from "@opendatamodelling/sdk";

const importer = new SchemaImporter();

// Import from JSON Schema
const contract = await importer.import({
  format: "json-schema",
  source: jsonSchemaContent,
  name: "my-contract",
  version: "1.0.0",
});

// Import from file
const contractFromFile = await importer.importFromFile({
  format: "avro",
  filePath: "./schema.avsc",
});
```

### Using the API

```bash
# Import via API
curl -X POST https://api.opendatamodelling.com/v1/import \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "format": "json-schema",
    "content": "{\"type\": \"object\", ...}",
    "name": "my-contract",
    "version": "1.0.0"
  }'
```

## Format-Specific Notes

### JSON Schema

- Supports all JSON Schema draft versions (4, 6, 7, 2020-12)
- Nested objects and arrays are fully supported
- Custom validation rules are preserved

### Avro

- Schema evolution is supported
- Complex types (unions, maps, arrays) are converted appropriately
- Namespace information is preserved

### Protobuf

- Message definitions are converted to object schemas
- Field types are mapped to standard types
- Enum types are preserved

## Best Practices

### Before Importing

- **Validate First**: Ensure your source schema is valid
- **Check Format**: Verify the format matches what you're importing
- **Review Structure**: Understand the schema structure before importing
- **Version Control**: Consider versioning your imported schemas

### After Importing

- **Review Carefully**: Check that all fields were imported correctly
- **Add Metadata**: Add descriptions and documentation
- **Set Permissions**: Configure access controls if needed
- **Test Validation**: Test with sample data to ensure it works

## Troubleshooting

### Common Issues

#### Schema Parse Errors

- Verify the schema format matches the selected import type
- Check for syntax errors in the source file
- Ensure the schema follows the format specification

#### Missing Fields

- Some formats may not support all features
- Check the format compatibility guide
- Consider manual adjustments after import

#### Validation Failures

- Review the error messages carefully
- Check for required fields that may be missing
- Verify data types match expectations

## Related Resources

- [Export Guide](/guides/export/) - Learn how to export contracts
- <a href="https://bitol-io.github.io/open-data-contract-standard/latest/" target="_blank" rel="noopener noreferrer">ODCS Documentation</a> - Standard format documentation
- [Data Contracts](/data-contracts/) - Understanding data contracts
