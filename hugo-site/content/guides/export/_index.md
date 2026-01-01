---
title: "Export Guide"
description: "How to export data contracts and schemas to different formats"
date: 2025-01-01
draft: false
weight: 20
---

## Export Guide

Export your data contracts and schemas to various formats for use in other systems,
documentation, or integration with external tools. This guide covers all export options and
format-specific considerations.

## Supported Export Formats

Open Data Modelling supports exporting to:

- **JSON Schema**: Standard JSON Schema format (multiple draft versions)
- **Avro**: Apache Avro schema format
- **Protobuf**: Protocol Buffer schema definitions
- **OpenAPI/Swagger**: API schema definitions
- **Markdown**: Human-readable documentation
- **HTML**: Formatted documentation pages
- **ODCS**: Open Data Contract Standard format
- **ODPS**: Open Data Product Standard format

## Export Process

![Export Process](/images/diagrams/export-process.svg "Data export process flow")

The export process follows these steps:

1. **Select Contract**: Choose the contract or schema to export
2. **Choose Format**: Select the target export format
3. **Configure Options**: Set format-specific options
4. **Generate**: System generates the export
5. **Review**: Review the exported content
6. **Download/Save**: Download file or copy to clipboard

## Step-by-Step Instructions

### Using the Web App

1. Navigate to your contract
2. Click the **Export** button
3. Select the desired format from the dropdown
4. Configure any format-specific options
5. Click **Export** to generate
6. Download the file or copy to clipboard

### Using the SDK

```javascript
import { ContractExporter } from "@opendatamodelling/sdk";

const exporter = new ContractExporter();

// Export to JSON Schema
const jsonSchema = await exporter.export({
  contractId: "contract-123",
  format: "json-schema",
  options: {
    draftVersion: "2020-12",
    includeMetadata: true,
  },
});

// Export to Avro
const avroSchema = await exporter.export({
  contractId: "contract-123",
  format: "avro",
  options: {
    namespace: "com.example",
  },
});

// Export to file
await exporter.exportToFile({
  contractId: "contract-123",
  format: "markdown",
  filePath: "./contract-docs.md",
});
```

### Using the API

```bash
# Export via API
curl -X GET \
  "https://api.opendatamodelling.com/v1/contracts/contract-123/export?format=json-schema" \
  -H "Authorization: Bearer $API_KEY" \
  -o contract-schema.json

# Export with options
curl -X POST \
  "https://api.opendatamodelling.com/v1/contracts/contract-123/export" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "format": "avro",
    "options": {
      "namespace": "com.example"
    }
  }' \
  -o contract.avsc
```

## Format-Specific Options

### JSON Schema

- **Draft Version**: Choose JSON Schema draft version (4, 6, 7, 2020-12)
- **Include Metadata**: Include contract metadata in schema
- **Pretty Print**: Format JSON with indentation

### Avro

- **Namespace**: Set the Avro namespace
- **Schema Evolution**: Include evolution metadata
- **Full Name**: Use fully qualified names

### Protobuf

- **Package Name**: Set the protobuf package
- **Syntax Version**: Choose proto2 or proto3
- **Field Numbers**: Auto-assign or preserve field numbers

### Markdown/HTML

- **Template**: Choose documentation template
- **Include Examples**: Include example data
- **Table of Contents**: Generate table of contents

## Use Cases

### Integration with Other Systems

Export contracts to formats compatible with your existing systems:

- **Data Pipelines**: Export to Avro for Kafka or data processing
- **APIs**: Export to OpenAPI for API documentation
- **Databases**: Export to SQL DDL for database schema

### Documentation

Generate documentation in various formats:

- **Markdown**: For version control and wikis
- **HTML**: For web documentation sites
- **PDF**: For printed documentation (via HTML export)

### Standard Compliance

Export to standard formats:

- **ODCS**: Open Data Contract Standard compliance
- **ODPS**: Open Data Product Standard compliance

## Best Practices

### Before Exporting

- **Review Contract**: Ensure the contract is complete and correct
- **Choose Format**: Select the format that best fits your use case
- **Check Compatibility**: Verify the target system supports the format
- **Version Control**: Consider versioning your exports

### After Exporting

- **Validate Export**: Test the exported schema in the target system
- **Document Changes**: Note any manual adjustments needed
- **Update References**: Update any references to the contract
- **Archive**: Keep copies of exports for historical reference

## Troubleshooting

### Common Issues

#### Format Conversion Errors

- Some contract features may not be supported in all formats
- Check format compatibility before exporting
- Consider using an intermediate format

#### Missing Information

- Some formats may not support all metadata
- Review the export to ensure important information is included
- Consider exporting to multiple formats

#### Validation Failures

- Exported schemas should be validated in the target system
- Check for format-specific requirements
- Review error messages for guidance

## Related Resources

- [Import Guide](/guides/import/) - Learn how to import contracts
- <a href="https://bitol-io.github.io/open-data-contract-standard/latest/" target="_blank" rel="noopener noreferrer">ODCS Documentation</a> - Standard format documentation
- <a href="https://bitol-io.github.io/open-data-product-standard" target="_blank" rel="noopener noreferrer">ODPS Documentation</a> - Open Data Product Standard
- [Data Contracts](/data-contracts/) - Understanding data contracts
