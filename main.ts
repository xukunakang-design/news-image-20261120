// News image entry for 20 November 2026.
// Reads the bundled entry.png next to this file and writes it
// byte for byte to the output directory, so two runs match.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
// Guard against a truncated or non-PNG input: a valid PNG starts
// with the 8-byte signature 89 50 4E 47 0D 0A 1A 0A.
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngSignature)) {
  throw new Error('entry.png is not a valid PNG');
}
writeFileSync(join(outDir, 'entry.png'), bytes);
