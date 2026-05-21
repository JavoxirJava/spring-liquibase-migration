# Spring Boot Liquibase Setup

## Maven

```xml
<dependency>
    <groupId>org.liquibase</groupId>
    <artifactId>liquibase-core</artifactId>
</dependency>
```

## Gradle

```gradle
implementation 'org.liquibase:liquibase-core'
```

## application.yml

```yaml
spring:
  liquibase:
    enabled: true
    change-log: classpath:db/changelog/db.changelog-master.yaml
  jpa:
    hibernate:
      ddl-auto: validate
```

## application.properties

```properties
spring.liquibase.enabled=true
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.yaml
spring.jpa.hibernate.ddl-auto=validate
```

Do not use `ddl-auto=update` with Liquibase-managed schemas. Use `validate`.

For development rollback checks, `spring.liquibase.test-rollback-on-update=true` can be useful, but it may slow startup.
