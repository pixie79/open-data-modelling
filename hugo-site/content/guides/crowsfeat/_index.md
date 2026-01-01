---
title: "Crow's Foot Notation"
description: "Learn about Crow's Foot notation (IE notation) for Entity-Relationship Diagrams"
date: 2025-01-01
draft: false
weight: 30
---

## Crow's Foot Notation Guide

Crow's Foot notation (also known as IE notation) is a widely-used data modeling notation that uses
graphical symbols to represent entities, attributes, and relationships in Entity-Relationship
Diagrams (ERDs). The most recognizable characteristic of Crow's Foot notation is the three-pronged
"many" symbol, which is how this notation style got its name.

## History of Crow's Foot Notation

Crow's Foot notation dates back to an article by Gordon Everest in 1976 (Fifth Computing
Conference, IEEE). Originally called the "inverted arrow" to distinguish it from Bachman's
notation, it was designed to avoid implying directionality or a physical access path while being
visually intuitive in showing "manyness."

As Mr. Everest explained:

> I preferred it to the arrow because it did not imply directionality or a physical access path, and
> it was visually intuitive, showing manyness. Others then started referring to it as chicken feet.
> I now prefer to call it a FORK, which is short and to the point.

The notation can be represented in a standard character set as:

```text
[ X ]——<[ Y ]
```

This shows that an individual X can relate to multiple Ys (and each Y relates to at most one X).

## Entities

### Definition

An **entity** is a representation of a class of object. It can be a person, place, thing, or concept.
Entities usually have attributes that describe them.

### Representation

In Crow's Foot notation, an entity is represented by a **rectangle**, with its name on the top. The
name is singular (entity) rather than plural (entities).

![Entity representation](/images/diagrams/crowsfeat-examples.svg "Entity in Crow's Foot notation")

### Attributes

An **attribute** is a property that describes a particular entity. Attributes are listed inside the
entity rectangle.

The attribute(s) that uniquely distinguishes an instance of the entity is the **identifier**.
Usually, this type of attribute is marked with an asterisk (*).

## Relationships

### Definition

**Relationships** illustrate the association between two entities. They are presented as a straight
line. Usually, each relationship has a name, expressed as a verb, written on the relationship line.
This describes what kind of relationship connects the objects.

Note that Crow's Foot notation typically represents binary relationships (between two entities). In
the Entity-Relationship model, representing ternary or higher order relationships can be
problematic.

### Cardinality

Relationships have two indicators shown on both sides of the line:

#### 1. Multiplicity (Maximum)

The first indicator (often called **multiplicity**) refers to the _maximum_ number of times that an
instance of one entity can be associated with instances in the related entity. It can be **one** or
**many**.

- **Multiplicity of one**: Represented by a straight line perpendicular to the relationship line
- **Multiplicity of many**: Represented by the three-pronged "crow's foot" symbol

#### 2. Optionality (Minimum)

The second indicator describes the _minimum_ number of times one instance can be related to others.
It can be **zero** or **one**, and accordingly describes the relationship as **optional** or
**mandatory**.

- **Mandatory relationship**: Represented by a straight line perpendicular to the relationship line
- **Optional relationship**: Represented by an empty circle

### Symbol Placement

The combination of these two indicators is always in a specific order. Placed on the outside edge of
the relationship:

1. **Multiplicity symbol** comes first (one line or crow's foot)
2. **Optionality symbol** comes after (mandatory line or optional circle)

### Relationship Types

There are four possible combinations at each end of a relationship:

#### Zero or Many (Optional Many)

- Empty circle + Crow's foot
- Represents: 0 to many instances

#### One or Many (Mandatory Many)

- Straight line + Crow's foot
- Represents: 1 to many instances (at least one required)

#### One and Only One (Mandatory One)

- Straight line + Straight line
- Represents: Exactly one instance (required)

#### Zero or One (Optional One)

- Empty circle + Straight line
- Represents: 0 or 1 instance (optional)

### Relationship Degrees

These combinations make relationships readable as:

- **One-to-one**: Each entity instance relates to exactly one instance of the other entity
- **One-to-many**: One entity instance relates to many instances of the other entity
- **Many-to-many**: Many instances of one entity relate to many instances of the other entity

## Example: E-Commerce Data Model

![Crow's Foot Example](/images/diagrams/crowsfeat-examples.svg "Crow's Foot notation example")

### Entities

- **Customer**: Represents customers who place orders
- **Order**: Represents customer orders
- **OrderItem**: Represents individual items within an order
- **Product**: Represents products available for purchase

### Relationships

- **Customer to Order**: One-to-many (one customer can have many orders, each order belongs to one
  customer)
- **Order to OrderItem**: One-to-many (one order contains many items, each item belongs to one
  order)
- **Product to OrderItem**: One-to-many (one product can appear in many order items, each order
  item references one product)

## Using Crow's Foot Notation in Data Modeling

### Creating Entity-Relationship Diagrams

When creating ERDs using Crow's Foot notation:

1. **Identify Entities**: Determine the main objects or concepts in your system
2. **Define Attributes**: List the properties that describe each entity
3. **Identify Relationships**: Determine how entities relate to each other
4. **Specify Cardinality**: For each relationship, determine:
   - Maximum multiplicity (one or many)
   - Minimum optionality (zero or one)
5. **Draw the Diagram**: Use rectangles for entities, lines for relationships, and Crow's Foot
   symbols for cardinality

### Best Practices

- Use **singular** names for entities (Customer, not Customers)
- Mark **identifiers** (primary keys) with an asterisk (*)
- Use **descriptive relationship names** (verbs) on relationship lines
- Keep diagrams **readable** by avoiding crossing lines where possible
- **Document** complex relationships with notes if needed

## Crow's Foot vs. Other Notations

Crow's Foot notation is one of several ERD notations. Others include:

- **Chen notation**: Uses diamonds for relationships
- **UML notation**: Object-oriented modeling notation
- **Barker notation**: Another popular ERD notation
- **Arrow notation**: Uses arrows to show relationships
- **IDEF1X notation**: Integration Definition for Information Modeling

Crow's Foot notation is particularly popular because:

- It's visually intuitive (the crow's foot clearly shows "many")
- It doesn't imply directionality (unlike arrow notation)
- It's widely supported by database modeling tools
- It's easy to read and understand

## Converting Crow's Foot Diagrams to Data Contracts

In Open Data Modelling, Crow's Foot ERD diagrams can be converted to data contracts:

1. **Entities** become contract schemas
2. **Attributes** become schema fields
3. **Relationships** become references or nested structures
4. **Cardinality** informs validation rules and constraints

### Example Conversion

**Crow's Foot ERD:**

- Customer entity with attributes: id*, name, email
- Order entity with attributes: id*, customerId, date, total
- Relationship: Customer (1) ——< (many) Order

**Data Contract:**

```json
{
  "customer": {
    "id": "string",
    "name": "string",
    "email": "string"
  },
  "order": {
    "id": "string",
    "customerId": "string",
    "date": "date",
    "total": "number"
  }
}
```

## Related Resources

- [Data Flows Guide](/guides/data-flows/) - Learn about data flows and their relationship to data
  models
- [Data Contracts](/data-contracts/) - Understanding data contracts
- [Import Guide](/guides/import/) - Import ERD diagrams and convert to contracts
- [Export Guide](/guides/export/) - Export contracts to various formats
- [Red Gate Blog: Crow's Foot Notation](https://www.red-gate.com/blog/crow-s-foot-notation) - Original
  reference on Crow's Foot notation

## References

1. Gordon Everest (1976). "Basic Data Structure Models Explained with a Common Example." Fifth
   Computing Conference, IEEE.
2. John Vincent Carlis, Joseph D. Maguire (2001). _Mastering Data Modeling: A User-driven
   Approach_.
