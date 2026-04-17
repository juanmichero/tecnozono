// updatePrices.js
// Run this script once from your project root:
//   node updatePrices.js
//
// It will read your products.js, increase all prices by 5%,
// and overwrite the file automatically.

import { readFileSync, writeFileSync } from "fs";

const INCREASE = 1.05; // 5% increase
const FILE_PATH = "./products.js"; // adjust path if needed

// Read the file
let content = readFileSync(FILE_PATH, "utf-8");

// Match all price strings like "$200.000" or "$1.200.000"
content = content.replace(/"\$[\d.]+"/g, (match) => {
  // Remove "$" and dots to get the raw number, e.g. "$200.000" → 200000
  const raw = match.replace(/["$.]/g, "");
  const increased = Math.round(Number(raw) * INCREASE);

  // Reformat back to Argentine style with dots as thousand separators
  const formatted = increased.toLocaleString("es-AR").replace(/,/g, ".");

  return `"$${formatted}"`;
});

// Overwrite the original file
writeFileSync(FILE_PATH, content, "utf-8");

console.log("✅ All prices updated successfully (+5%)!");