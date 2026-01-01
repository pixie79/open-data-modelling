---
title: "Crowsfeat Notation"
description: "Learn about Crowsfeat notation for representing data structures"
date: 2025-01-01
draft: false
weight: 30
---

## Crowsfeat Notation Guide

Crowsfeat notation is a concise, readable way to represent data structures and relationships.
It provides a human-friendly syntax for describing data models that is both easy to write
and easy to understand.

## What is Crowsfeat?

Crowsfeat notation uses a simple, text-based syntax to describe:

- **Data Structures**: Objects, arrays, and nested structures
- **Field Types**: String, number, boolean, date, and custom types
- **Relationships**: References between data entities
- **Constraints**: Validation rules and requirements

## Basic Syntax

### Simple Fields

````text
name: string
age: number
isActive: boolean
createdAt: date
```text

### Objects

```text
user {
  id: string
  name: string
  email: string
}
```text

### Arrays

```text
tags: string[]
users: user[]
```text

### Nested Structures

```text
order {
  id: string
  customer: user
  items: orderItem[]
  total: number
}

orderItem {
  productId: string
  quantity: number
  price: number
}
```text

## Advanced Features

### Optional Fields

Use `?` to mark optional fields:

```text
user {
  id: string
  name: string
  email?: string  // Optional
  phone?: string   // Optional
}
```text

### Required Fields

Fields are required by default. Use `!` to explicitly mark as required:

```text
user {
  id: string!
  name: string!
  email: string!
}
```text

### Field Constraints

Add constraints using `@` annotations:

```text
user {
  id: string @unique
  email: string @email @unique
  age: number @min(18) @max(120)
  password: string @minLength(8)
}
```text

### Relationships

Define relationships between entities:

```text
order {
  id: string
  customer: user @ref(user.id)
  items: orderItem[] @ref(orderItem.orderId)
}
```text

## Examples

![Crowsfeat Examples](/images/diagrams/crowsfeat-examples.svg "Crowsfeat notation examples")

### E-Commerce Example

```text
product {
  id: string @unique
  name: string
  description: string
  price: number @min(0)
  category: category @ref(category.id)
  tags: string[]
  inStock: boolean
}

category {
  id: string @unique
  name: string
  parent?: category @ref(category.id)
}

order {
  id: string @unique
  customer: user @ref(user.id)
  items: orderItem[]
  status: orderStatus
  createdAt: date
  total: number
}

orderItem {
  id: string @unique
  order: order @ref(order.id)
  product: product @ref(product.id)
  quantity: number @min(1)
  price: number
}
```text

## Converting to Other Formats

Crowsfeat notation can be converted to:

- **JSON Schema**: Standard JSON Schema format
- **Avro**: Apache Avro schema
- **Protobuf**: Protocol Buffer definitions
- **SQL DDL**: Database schema definitions

### Example Conversion

**Crowsfeat:**

```text
user {
  id: string @unique
  name: string
  email: string @email
}
```text

**JSON Schema:**

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" }
  },
  "required": ["id", "name", "email"]
}
```text

## Best Practices

### Naming Conventions

- Use **camelCase** for field names: `firstName`, `lastName`
- Use **singular** for entity names: `user`, `order`, `product`
- Use **descriptive** names that clearly indicate purpose

### Organization

- Group related fields together
- Use comments for complex logic: `// Calculated field`
- Keep structures focused and cohesive

### Documentation

- Add descriptions for complex fields
- Document relationships and constraints
- Include examples where helpful

## Using Crowsfeat in Open Data Modelling

### Creating Contracts

You can create data contracts directly using Crowsfeat notation:

1. Navigate to **New Contract**
2. Select **Crowsfeat** as the input format
3. Enter your Crowsfeat notation
4. The system will parse and convert to a contract

### Importing Crowsfeat

```javascript
import { CrowsfeatParser } from "@opendatamodelling/sdk";

const parser = new CrowsfeatParser();
const contract = parser.parse(crowsfeatNotation);
```text

### Exporting to Crowsfeat

Export existing contracts to Crowsfeat notation for easy reading and editing:

```javascript
const exporter = new ContractExporter();
const crowsfeat = await exporter.export({
  contractId: "contract-123",
  format: "crowsfeat",
});
```text

## Related Resources

- [Data Flows Guide](/guides/data-flows/) - Learn about data flows
- [Data Contracts](/data-contracts/) - Understanding data contracts
- [Import Guide](/guides/import/) - Import Crowsfeat notation
- [Export Guide](/guides/export/) - Export to Crowsfeat format
````
