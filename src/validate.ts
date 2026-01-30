import Ajv from "ajv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve paths (ESM-safe)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Core schema
const schemaPath = path.join(
  __dirname,
  "../schemas/noema-core-pure.schema.json"
);

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

// Create AJV instance
const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

// CLI usage: node dist/validate.js file.json
const inputFile = process.argv[2];

if (!inputFile) {
  console.error("Usage: noema-validate <file.json>");
  process.exit(1);
}

// Load input JSON
const data = JSON.parse(fs.readFileSync(inputFile, "utf-8"));

// Validate
const valid = validate(data);

if (valid) {
  console.log("✔ Valid Noema Core object");
} else {
  console.log("✖ Invalid Noema Core object");
  console.error(validate.errors);
  process.exit(1);
}
