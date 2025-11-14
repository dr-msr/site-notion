# Linting Instruction

## Important: Always Run Linting Checks

For every task completed in this repository, please ensure to run linting checks before committing and deploying.

### How to Run Linting

```bash
yarn lint
```

This will check the codebase for:
- ESLint rule violations
- TypeScript type errors
- Code style issues

### How to Run Type Checking

```bash
npx tsc --noEmit
```

This will verify TypeScript types without building the project.

### How to Build the Project

```bash
yarn build
```

This will run linting, type checking, and build the Next.js application.

### Before Deployment

Always ensure:
1. ✅ Linting passes without errors
2. ✅ Type checking passes
3. ✅ Build completes successfully
4. ✅ All tests pass (if applicable)

## Note

Warnings are acceptable if they existed before your changes. Only errors will prevent deployment.
