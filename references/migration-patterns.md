# Migration Patterns

## Create table

```yaml
databaseChangeLog:
  - changeSet:
      id: 2026-05-21-001-create-users-table
      author: system
      preConditions:
        - onFail: MARK_RAN
        - not:
            - tableExists:
                tableName: users
      changes:
        - createTable:
            tableName: users
            columns:
              - column:
                  name: id
                  type: UUID
                  constraints:
                    primaryKey: true
                    nullable: false
              - column:
                  name: username
                  type: VARCHAR(100)
                  constraints:
                    nullable: false
              - column:
                  name: created_at
                  type: TIMESTAMP
                  constraints:
                    nullable: false
      rollback:
        - dropTable:
            tableName: users
```

## Add column safely

```yaml
databaseChangeLog:
  - changeSet:
      id: 2026-05-21-002-add-email-to-users
      author: system
      preConditions:
        - onFail: MARK_RAN
        - not:
            - columnExists:
                tableName: users
                columnName: email
      changes:
        - addColumn:
            tableName: users
            columns:
              - column:
                  name: email
                  type: VARCHAR(255)
      rollback:
        - dropColumn:
            tableName: users
            columnName: email
```

## Add index

```yaml
databaseChangeLog:
  - changeSet:
      id: 2026-05-21-003-add-email-index-to-users
      author: system
      changes:
        - createIndex:
            tableName: users
            indexName: idx_users_email
            columns:
              - column:
                  name: email
      rollback:
        - dropIndex:
            tableName: users
            indexName: idx_users_email
```

## Add foreign key

```yaml
databaseChangeLog:
  - changeSet:
      id: 2026-05-21-004-add-users-role-fk
      author: system
      changes:
        - addForeignKeyConstraint:
            baseTableName: users
            baseColumnNames: role_id
            referencedTableName: roles
            referencedColumnNames: id
            constraintName: fk_users_role_id
      rollback:
        - dropForeignKeyConstraint:
            baseTableName: users
            constraintName: fk_users_role_id
```
