#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = process.argv[2] || process.cwd();

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!['.git', 'target', 'build', 'node_modules'].includes(item)) walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

const warnings = [];
for (const file of walk(root)) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, 'utf8');
  if (/ddl-auto\s*[:=]\s*update/.test(text)) warnings.push(`${rel}: uses ddl-auto update; prefer validate with Liquibase`);
  if (rel.includes('db') && rel.match(/\.(yaml|yml|xml|sql)$/) && /dropTable|dropColumn|DELETE FROM|TRUNCATE/i.test(text)) {
    warnings.push(`${rel}: contains destructive operation; verify rollback and data safety`);
  }
}

if (warnings.length) {
  console.log('Liquibase scope warnings:');
  for (const warning of warnings) console.log(`- ${warning}`);
  process.exit(0);
}
console.log('Liquibase scope check passed.');
