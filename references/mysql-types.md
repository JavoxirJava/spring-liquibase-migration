# MySQL / MariaDB Type Guide

```txt
Java UUID      -> CHAR(36) or BINARY(16), depending on convention
String short   -> VARCHAR(255)
String long    -> TEXT
Boolean        -> BOOLEAN or TINYINT(1)
Long           -> BIGINT
Integer        -> INT
BigDecimal     -> DECIMAL(19,2)
Instant        -> DATETIME or TIMESTAMP, depending on convention
LocalDateTime  -> DATETIME
LocalDate      -> DATE
Enum           -> VARCHAR(50)
JSON           -> JSON, if supported by target version
```

Do not use PostgreSQL-specific types like `JSONB`. Be careful with index length limits for long varchar columns. Use explicit constraint and index names.
