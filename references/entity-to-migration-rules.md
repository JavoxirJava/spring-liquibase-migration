# Entity to Migration Rules

When converting JPA entities into Liquibase changesets, inspect:

- `@Entity`
- `@Table`
- `@Id`
- `@GeneratedValue`
- `@Column`
- `@Enumerated`
- relationship annotations
- `@JoinColumn`
- `@JoinTable`
- `@UniqueConstraint`
- `@Index`
- `@CreationTimestamp`
- `@UpdateTimestamp`
- `@Version`

Ignore:

- `@Transient`
- computed properties
- DTO fields
- request/response model fields

ManyToOne usually adds a foreign key column on the current table. OneToMany usually does not add a column on the current table. ManyToMany usually creates a join table.

For enums, prefer `VARCHAR(50)` unless the project uses native enum types.

If adding a non-null column to an existing table, add it nullable first, backfill, then add not-null constraint later.
