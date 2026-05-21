--liquibase formatted sql

--changeset system:YYYY-MM-DD-001-create-example-table
CREATE TABLE example (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL
);
--rollback DROP TABLE example;
