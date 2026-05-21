# Scripts

## check-liquibase-scope.js

Simple helper script for detecting obvious Liquibase safety issues.

Usage:

```bash
node scripts/check-liquibase-scope.js /path/to/spring-project
```

It checks for `ddl-auto=update` and destructive operations in changelog-like files. This script is intentionally simple and does not replace a real migration review.
