# Changelog Style Guide

## Recommended structure

```txt
src/main/resources/
  db/
    changelog/
      db.changelog-master.yaml
      changes/
        2026-05-21-001-create-users-table.yaml
        2026-05-21-002-add-email-index-to-users.yaml
```

## Master changelog

```yaml
databaseChangeLog:
  - include:
      file: db/changelog/changes/2026-05-21-001-create-users-table.yaml
  - include:
      file: db/changelog/changes/2026-05-21-002-add-email-index-to-users.yaml
```

## Naming

Use descriptive IDs:

```txt
YYYY-MM-DD-001-create-users-table
YYYY-MM-DD-002-add-email-index-to-users
YYYY-MM-DD-003-add-role-id-to-users
```

Use the same ID in the file name.

Use the existing author if available. Otherwise use `system`, `developer`, or a user-provided name.
