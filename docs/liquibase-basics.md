# Liquibase Basics

Liquibase manages database schema changes through changelogs and changesets.

## Main concepts

A changelog contains or includes database changes.

A changeset is one logical database change. Liquibase tracks it using `id`, `author`, and file path.

Liquibase stores executed changesets in `DATABASECHANGELOG` and uses `DATABASECHANGELOGLOCK` to prevent concurrent updates.

## Most important rule

Do not edit already executed changesets. If a change was already applied, create a new changeset instead.

## Recommended style

```txt
1 changeset = 1 logical database change
```

Good:

```txt
001-create-users-table
002-add-email-index-to-users
003-create-roles-table
```

Bad:

```txt
001-create-everything
```
