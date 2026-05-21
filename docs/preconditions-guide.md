# Preconditions Guide

Preconditions check database state before a changeset runs.

Use preconditions when a table, column, index, or foreign key may already exist; when the migration is database-specific; or when data must be clean before adding constraints.

## Table does not exist

```yaml
preConditions:
  - onFail: MARK_RAN
  - not:
      - tableExists:
          tableName: users
```

## Column does not exist

```yaml
preConditions:
  - onFail: MARK_RAN
  - not:
      - columnExists:
          tableName: users
          columnName: email
```

## Database-specific migration

```yaml
preConditions:
  - onFail: HALT
  - dbms:
      type: postgresql
```

For destructive changes, prefer `HALT` instead of `MARK_RAN`.
