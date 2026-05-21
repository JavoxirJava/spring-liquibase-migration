# spring-liquibase-migration Skill

A reusable agent skill for creating and reviewing production-safe Liquibase migrations in Spring Boot projects.

## What it does

- Spring Boot Liquibase setup
- Maven/Gradle dependency setup
- `application.yml` / `application.properties` Liquibase config
- master changelog files
- YAML/XML/SQL changesets
- rollback blocks
- preconditions
- table, column, index, foreign key migrations
- entity-to-migration changes
- PostgreSQL/MySQL-safe type decisions
- Liquibase migration reviews

## What it prevents

- editing already executed changesets
- using `ddl-auto=update` with Liquibase
- missing rollback
- missing preconditions
- huge unsafe changesets
- duplicate IDs
- forgetting master changelog includes
- destructive changes without warning

## Install

```bash
npx skills add JavoxirJava/spring-liquibase-migration
```

## Use

```txt
Use $spring-liquibase-migration.

Add Liquibase to this Spring Boot project and create production-safe YAML migrations. Use a master changelog, small focused changesets, rollback blocks, preconditions where needed, and set Hibernate ddl-auto to validate.
```

## Recommended GitHub topics

```txt
agent-skills
codex-skills
spring-boot
liquibase
database-migration
java
postgresql
mysql
backend
devops
```
