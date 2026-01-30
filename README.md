# noema-validator
# noema-validator

Minimal, non-normative reference validator for **Noema Core** objects.

This project provides a simple off-chain implementation that validates JSON objects against the Noema Core schema.

It does **not** interpret meaning, execute logic, or enforce policies.

---

## Scope

- Validates Noema Core structure using JSON Schema
- Intended as reference tooling only
- Optional and replaceable

---

## Usage

```bash
npm install
npm run build
node dist/validate.js path/to/object.json
