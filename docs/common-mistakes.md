# Common Liquibase Mistakes

## Editing old changesets

Problem: checksum mismatch.

Fix: create a new changeset instead of editing the old one.

## Forgetting master changelog include

Migration file exists but never runs.

## Using ddl-auto update

Hibernate and Liquibase both change schema. Use `ddl-auto=validate`.

## Adding non-null column to non-empty table

Safer strategy:

1. Add nullable column.
2. Backfill values.
3. Add not-null constraint in a later changeset.

## Missing rollback

Add rollback or explicitly explain why rollback is not safe.

## Duplicate changeset IDs

Each changeset ID must be unique for the author and file path combination.

## Database-specific types in portable migrations

Avoid PostgreSQL-only types like `JSONB` if the project may use MySQL.
