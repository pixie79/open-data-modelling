---
title: "Data Modeling Styles"
description: "Comprehensive guide to different data modeling styles and when to use each approach"
date: 2025-01-02
draft: false
weight: 50
---

## Data Modeling Styles

Data modeling styles define how data is structured, stored, and accessed within systems. Different modeling approaches serve different purposes: some are optimized for operational systems requiring fast transactional processing, while others are designed for analytical workloads that need to support complex queries and historical analysis.

### Operational vs. Analytical Modeling

Understanding the distinction between operational and analytical data modeling is crucial:

**Operational Data Models**:

- Designed for transactional systems (OLTP - Online Transaction Processing)
- Optimized for fast inserts, updates, and deletes
- Normalized structures to reduce redundancy
- Real-time data access with low latency
- Examples: Customer databases, order systems, inventory management

**Analytical Data Models**:

- Designed for reporting and analysis (OLAP - Online Analytical Processing)
- Optimized for complex queries and aggregations
- Denormalized structures for query performance
- Historical data with time-based analysis
- Examples: Data warehouses, business intelligence systems, analytics platforms

### Slowly Changing Dimensions (SCD)

Slowly Changing Dimensions handle changes to dimension data over time. They are essential for maintaining historical accuracy in analytical systems.

#### SCD Type 1: Overwrite

SCD Type 1 simply overwrites the old value with the new value, losing historical information.

**Use Case**: When historical accuracy is not required, and you only need the current state.

**Example**:

```sql
-- Customer dimension table
CREATE TABLE dim_customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(50),
    updated_at TIMESTAMP
);

-- When customer moves from "New York" to "Los Angeles"
-- Old value is overwritten, no history maintained
UPDATE dim_customer 
SET city = 'Los Angeles', updated_at = CURRENT_TIMESTAMP
WHERE customer_id = 123;
```

**Characteristics**:

- Simple implementation
- No history tracking
- Minimal storage requirements
- Suitable for correcting errors or when history is irrelevant

#### SCD Type 2: Historical Tracking

SCD Type 2 maintains a complete history of changes by creating new records for each change, preserving both old and new values.

**Use Case**: When you need to track all historical changes and analyze data as it existed at any point in time.

**Example**:

```sql
-- Customer dimension table with SCD Type 2
CREATE TABLE dim_customer (
    customer_key INT PRIMARY KEY,
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(50),
    effective_date DATE,
    expiry_date DATE,
    is_current BOOLEAN,
    version_number INT
);

-- Initial record
INSERT INTO dim_customer VALUES 
(1, 123, 'John Doe', 'john@example.com', 'New York', 
 '2020-01-01', '9999-12-31', TRUE, 1);

-- When customer moves to Los Angeles
-- Close old record
UPDATE dim_customer 
SET expiry_date = '2023-06-15', is_current = FALSE
WHERE customer_id = 123 AND is_current = TRUE;

-- Insert new record
INSERT INTO dim_customer VALUES 
(2, 123, 'John Doe', 'john@example.com', 'Los Angeles', 
 '2023-06-16', '9999-12-31', TRUE, 2);
```

**Characteristics**:

- Complete historical tracking
- Enables point-in-time analysis
- Increased storage requirements
- More complex queries (need to filter by date or is_current flag)
- Essential for compliance and audit requirements

**Querying SCD Type 2**:

```sql
-- Get current customer information
SELECT * FROM dim_customer 
WHERE customer_id = 123 AND is_current = TRUE;

-- Get customer information as of a specific date
SELECT * FROM dim_customer 
WHERE customer_id = 123 
  AND '2023-06-10' BETWEEN effective_date AND expiry_date;
```

### Dimensional Modeling (Star Schema)

Dimensional modeling organizes data into fact tables (measurable events) and dimension tables (descriptive attributes). The star schema is the simplest form, with a central fact table surrounded by dimension tables.

**Use Case**: Business intelligence, reporting, and analytics where query performance is critical.

**Example - Star Schema**:

```sql
-- Fact table (measures/events)
CREATE TABLE fact_sales (
    sale_id INT PRIMARY KEY,
    date_key INT,
    customer_key INT,
    product_key INT,
    store_key INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    total_amount DECIMAL(10,2),
    discount_amount DECIMAL(10,2)
);

-- Dimension tables
CREATE TABLE dim_date (
    date_key INT PRIMARY KEY,
    date DATE,
    year INT,
    quarter INT,
    month INT,
    week INT,
    day_of_week VARCHAR(10),
    is_weekend BOOLEAN
);

CREATE TABLE dim_customer (
    customer_key INT PRIMARY KEY,
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(50),
    country VARCHAR(50),
    customer_segment VARCHAR(50)
);

CREATE TABLE dim_product (
    product_key INT PRIMARY KEY,
    product_id INT,
    product_name VARCHAR(100),
    category VARCHAR(50),
    brand VARCHAR(50),
    price DECIMAL(10,2)
);

CREATE TABLE dim_store (
    store_key INT PRIMARY KEY,
    store_id INT,
    store_name VARCHAR(100),
    city VARCHAR(50),
    region VARCHAR(50),
    store_type VARCHAR(50)
);
```

**Characteristics**:

- Denormalized structure for fast queries
- Simple to understand and query
- Optimized for read-heavy analytical workloads
- Foreign keys link facts to dimensions
- Supports aggregations and drill-down analysis

**Query Example**:

```sql
-- Sales by product category and month
SELECT 
    d.year,
    d.month,
    p.category,
    SUM(f.total_amount) as total_sales,
    SUM(f.quantity) as total_quantity,
    COUNT(*) as transaction_count
FROM fact_sales f
JOIN dim_date d ON f.date_key = d.date_key
JOIN dim_product p ON f.product_key = p.product_key
WHERE d.year = 2023
GROUP BY d.year, d.month, p.category
ORDER BY d.year, d.month, p.category;
```

### Snowflake Schema

The snowflake schema is a normalized version of the star schema, where dimension tables are further normalized into multiple related tables.

**Use Case**: When storage optimization is important and you're willing to trade some query complexity for reduced redundancy.

**Example - Snowflake Schema**:

```sql
-- Normalized dimension tables
CREATE TABLE dim_customer (
    customer_key INT PRIMARY KEY,
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    city_key INT,
    customer_segment_key INT
);

CREATE TABLE dim_city (
    city_key INT PRIMARY KEY,
    city_name VARCHAR(50),
    state_key INT
);

CREATE TABLE dim_state (
    state_key INT PRIMARY KEY,
    state_name VARCHAR(50),
    country_key INT
);

CREATE TABLE dim_country (
    country_key INT PRIMARY KEY,
    country_name VARCHAR(50),
    region VARCHAR(50)
);

CREATE TABLE dim_customer_segment (
    segment_key INT PRIMARY KEY,
    segment_name VARCHAR(50),
    segment_description TEXT
);
```

**Characteristics**:

- Normalized structure reduces storage
- More complex queries (multiple joins)
- Better for large dimensions with many attributes
- Slightly slower queries than star schema
- Better data integrity and consistency

**Comparison: Star vs. Snowflake**:

| Aspect | Star Schema | Snowflake Schema |
| ------ | ----------- | ---------------- |
| **Normalization** | Denormalized | Normalized |
| **Query Complexity** | Simple (fewer joins) | More complex (more joins) |
| **Storage** | Higher redundancy | Lower redundancy |
| **Query Performance** | Faster (fewer joins) | Slightly slower |
| **Maintenance** | Easier | More complex |
| **Use Case** | Small to medium dimensions | Large dimensions with many attributes |

### Data Vault 2.0

Data Vault 2.0 is a hybrid modeling approach designed for agile data warehousing, focusing on scalability, flexibility, and auditability. It separates business keys from structural relationships and provides a framework for handling historical data.

**Use Case**: Enterprise data warehouses requiring flexibility, scalability, and audit trails. Ideal for environments with changing business requirements.

**Core Components**:

1. **Hubs**: Represent unique business keys
2. **Links**: Represent relationships between hubs
3. **Satellites**: Store descriptive attributes and their history

**Example - Data Vault 2.0**:

```sql
-- Hub: Unique business keys
CREATE TABLE hub_customer (
    customer_hkey CHAR(32) PRIMARY KEY,  -- Hash of business key
    customer_id VARCHAR(50),              -- Business key
    load_date TIMESTAMP,
    record_source VARCHAR(100)
);

CREATE TABLE hub_product (
    product_hkey CHAR(32) PRIMARY KEY,
    product_id VARCHAR(50),
    load_date TIMESTAMP,
    record_source VARCHAR(100)
);

-- Link: Relationships
CREATE TABLE link_customer_product (
    customer_product_lkey CHAR(32) PRIMARY KEY,
    customer_hkey CHAR(32),
    product_hkey CHAR(32),
    load_date TIMESTAMP,
    record_source VARCHAR(100)
);

-- Satellite: Descriptive attributes with history
CREATE TABLE sat_customer (
    customer_hkey CHAR(32),
    load_date TIMESTAMP,
    load_end_date TIMESTAMP,
    record_source VARCHAR(100),
    customer_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    PRIMARY KEY (customer_hkey, load_date)
);

CREATE TABLE sat_customer_product (
    customer_product_lkey CHAR(32),
    load_date TIMESTAMP,
    load_end_date TIMESTAMP,
    record_source VARCHAR(100),
    purchase_date DATE,
    quantity INT,
    price DECIMAL(10,2),
    PRIMARY KEY (customer_product_lkey, load_date)
);
```

**Characteristics**:

- Highly scalable and flexible
- Complete audit trail
- Parallel loading capabilities
- Handles source system changes gracefully
- More complex than star/snowflake schemas
- Requires specialized ETL patterns
- Excellent for enterprise data integration

**Querying Data Vault**:

```sql
-- Get current customer information
SELECT 
    h.customer_id,
    s.customer_name,
    s.email,
    s.phone
FROM hub_customer h
JOIN sat_customer s ON h.customer_hkey = s.customer_hkey
WHERE s.load_end_date = '9999-12-31'  -- Current record
  AND h.customer_id = 'CUST001';
```

### Graph Data Modeling

Graph modeling represents data as nodes (entities) and edges (relationships), enabling complex relationship analysis and traversal.

**Use Case**: Social networks, recommendation systems, fraud detection, knowledge graphs, network analysis, and any scenario requiring relationship traversal.

**Example - Graph Model**:

```cypher
// Neo4j Cypher example
// Create nodes
CREATE (alice:Person {name: 'Alice', age: 30, city: 'New York'})
CREATE (bob:Person {name: 'Bob', age: 35, city: 'San Francisco'})
CREATE (charlie:Person {name: 'Charlie', age: 28, city: 'New York'})
CREATE (acme:Company {name: 'ACME Corp', industry: 'Technology'})
CREATE (xyz:Company {name: 'XYZ Inc', industry: 'Finance'})

// Create relationships
CREATE (alice)-[:KNOWS {since: 2010}]->(bob)
CREATE (alice)-[:KNOWS {since: 2015}]->(charlie)
CREATE (bob)-[:WORKS_AT {role: 'Engineer', since: 2018}]->(acme)
CREATE (charlie)-[:WORKS_AT {role: 'Analyst', since: 2020}]->(xyz)
CREATE (alice)-[:LIVES_IN]->(:City {name: 'New York'})
CREATE (bob)-[:LIVES_IN]->(:City {name: 'San Francisco'})

// Query: Find friends of Alice who work in Technology
MATCH (alice:Person {name: 'Alice'})-[:KNOWS]->(friend)-[:WORKS_AT]->(company)
WHERE company.industry = 'Technology'
RETURN friend.name, company.name
```

**Characteristics**:

- Excellent for relationship-heavy data
- Supports complex traversals and path queries
- Flexible schema (schema-optional)
- High performance for relationship queries
- Not ideal for traditional reporting
- Requires specialized graph databases (Neo4j, Amazon Neptune, etc.)

**Use Cases for Graph Modeling**:

- **Social Networks**: Friend connections, follower relationships
- **Recommendation Systems**: "People who bought X also bought Y"
- **Fraud Detection**: Identifying suspicious relationship patterns
- **Knowledge Graphs**: Entity relationships in AI/ML systems
- **Network Analysis**: IT infrastructure, supply chains

### Choosing the Right Modeling Style

| Modeling Style | Best For | Operational | Analytical | Real-time Support |
| -------------- | -------- | ----------- | ---------- | ----------------- |
| **Normalized Relational** | Transactional systems, OLTP | ✅ Excellent | ❌ Poor | ✅ Excellent |
| **Star Schema** | Business intelligence, reporting | ❌ Poor | ✅ Excellent | ⚠️ Limited |
| **Snowflake Schema** | Large analytical systems | ❌ Poor | ✅ Good | ⚠️ Limited |
| **Data Vault 2.0** | Enterprise data warehouses | ❌ Poor | ✅ Excellent | ⚠️ Limited |
| **SCD Type 2** | Historical tracking, compliance | ⚠️ Moderate | ✅ Excellent | ⚠️ Moderate |
| **Graph** | Relationship analysis, networks | ⚠️ Moderate | ✅ Excellent | ✅ Good |

### Modern Data Architecture: Blending Operational and Analytical

With the shift to faster real-time data processing and newer technologies (streaming, event-driven architectures, in-memory computing), the traditional boundary between operational and analytical systems is blurring.

#### Real-Time Analytics

Modern systems increasingly require:

- **Streaming Analytics**: Processing data in real-time as it arrives
- **Operational Analytics**: Running analytical queries against operational data
- **Hybrid Workloads**: Supporting both transactional and analytical queries simultaneously

**Example - Real-Time Customer Analytics**:

```sql
-- Operational table with analytical capabilities
CREATE TABLE customer_events (
    event_id BIGINT,
    customer_id INT,
    event_type VARCHAR(50),
    event_timestamp TIMESTAMP,
    amount DECIMAL(10,2),
    product_id INT,
    -- Operational fields
    status VARCHAR(20),
    -- Analytical fields
    customer_segment VARCHAR(50),
    lifetime_value DECIMAL(10,2),
    churn_probability DECIMAL(5,4)
) WITH (
    -- Enable real-time analytics
    STREAMING = TRUE,
    RETENTION_DAYS = 90
);

-- Real-time query for operational decision
SELECT customer_id, churn_probability 
FROM customer_events 
WHERE customer_id = 123 
  AND event_timestamp > CURRENT_TIMESTAMP - INTERVAL '1 hour'
ORDER BY event_timestamp DESC 
LIMIT 1;

-- Analytical query with longer lookback
SELECT 
    customer_segment,
    AVG(churn_probability) as avg_churn_risk,
    SUM(amount) as total_revenue,
    COUNT(*) as event_count
FROM customer_events
WHERE event_timestamp > CURRENT_TIMESTAMP - INTERVAL '30 days'
GROUP BY customer_segment;
```

#### AI/ML Model Requirements

AI and ML models processing real-time data often require:

- **Long Lookback Windows**: Historical context for predictions
- **Feature Engineering**: Combining operational and analytical data
- **Time-Series Analysis**: Temporal patterns and trends
- **Real-Time Inference**: Low-latency predictions on streaming data

**Example - Merging Operational and Analytical Data for ML**:

```sql
-- Operational transaction data
CREATE TABLE transactions (
    transaction_id BIGINT,
    customer_id INT,
    amount DECIMAL(10,2),
    timestamp TIMESTAMP,
    merchant_id INT,
    category VARCHAR(50)
);

-- Analytical aggregated features
CREATE TABLE customer_features (
    customer_id INT,
    feature_date DATE,
    -- Real-time features
    last_transaction_amount DECIMAL(10,2),
    last_transaction_time TIMESTAMP,
    -- Historical features (long lookback)
    avg_daily_spend_30d DECIMAL(10,2),
    avg_daily_spend_90d DECIMAL(10,2),
    transaction_count_7d INT,
    transaction_count_30d INT,
    transaction_count_90d INT,
    -- ML model outputs
    fraud_score DECIMAL(5,4),
    churn_probability DECIMAL(5,4),
    next_purchase_prediction TIMESTAMP
);

-- Real-time feature update (operational + analytical merge)
INSERT INTO customer_features
SELECT 
    t.customer_id,
    CURRENT_DATE as feature_date,
    -- Operational: latest transaction
    t.amount as last_transaction_amount,
    t.timestamp as last_transaction_time,
    -- Analytical: 30-day average
    (SELECT AVG(amount) 
     FROM transactions 
     WHERE customer_id = t.customer_id 
       AND timestamp > CURRENT_TIMESTAMP - INTERVAL '30 days') as avg_daily_spend_30d,
    -- Analytical: 90-day average
    (SELECT AVG(amount) 
     FROM transactions 
     WHERE customer_id = t.customer_id 
       AND timestamp > CURRENT_TIMESTAMP - INTERVAL '90 days') as avg_daily_spend_90d,
    -- Call ML model for predictions
    ml_fraud_detection(t.customer_id, t.amount, t.timestamp) as fraud_score,
    ml_churn_prediction(t.customer_id) as churn_probability
FROM transactions t
WHERE t.timestamp > CURRENT_TIMESTAMP - INTERVAL '1 minute';
```

#### Best Practices for Hybrid Architectures

1. **Use Appropriate Storage Layers**:

   - **Hot Data**: In-memory or fast storage for real-time operational queries
   - **Warm Data**: Fast disk storage for recent analytical queries
   - **Cold Data**: Object storage for long-term historical analysis

2. **Implement Data Contracts**:

   - Define schemas for both operational and analytical data
   - Ensure consistency across systems
   - Version schemas to handle evolution

3. **Optimize for Both Workloads**:

   - Use columnar storage for analytical queries
   - Maintain indexes for operational queries
   - Implement materialized views for common analytical patterns

4. **Stream Processing**:

   - Use streaming frameworks (Kafka, Flink, Spark Streaming) for real-time processing
   - Maintain state for aggregations and windowing
   - Enable exactly-once processing semantics

5. **Feature Stores**:

   - Centralize feature definitions for ML models
   - Support both batch and streaming feature computation
   - Enable feature versioning and lineage tracking

## Related Topics

- [Data Schemas](/schemas/) - Understanding different schema types
- [Data Contracts](/data-contracts/) - How data modeling relates to data contracts
- [Data Flows](/guides/data-flows/) - Designing data flows for different modeling styles
- [ODCS](/odcs/) - Standardized approach to data contract definition

