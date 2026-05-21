# Rollback Guide

## Create table rollback

```yaml
rollback:
  - dropTable:
      tableName: users
```

## Add column rollback

```yaml
rollback:
  - dropColumn:
      tableName: users
      columnName: email
```

## Create index rollback

```yaml
rollback:
  - dropIndex:
      tableName: users
      indexName: idx_users_email
```

## Add foreign key rollback

```yaml
rollback:
  - dropForeignKeyConstraint:
      baseTableName: users
      constraintName: fk_users_role_id
```

## Insert data rollback

```yaml
rollback:
  - delete:
      tableName: roles
      where: name = 'ADMIN'
```

If rollback is unsafe, explain it clearly. Do not generate fake rollback.
