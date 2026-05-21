# PostgreSQL Type Guide

```txt
Java UUID      -> UUID
String short   -> VARCHAR(255)
String long    -> TEXT
Boolean        -> BOOLEAN
Long           -> BIGINT
Integer        -> INTEGER
BigDecimal     -> DECIMAL(19,2)
Instant        -> TIMESTAMP WITH TIME ZONE or TIMESTAMP, depending on convention
LocalDateTime  -> TIMESTAMP
LocalDate      -> DATE
Enum           -> VARCHAR(50)
JSON           -> JSONB if PostgreSQL-specific is acceptable
```

Use `JSONB` only when PostgreSQL-specific migrations are acceptable. Add indexes for foreign keys and frequently filtered columns. Use clear constraint names.
