#!/usr/bin/env bun

import nlp from "compromise";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const chunkTranscript = async (filePath: string): Promise<void> => {
  const text = await readFile(filePath, "utf-8");
  const doc = nlp(text);
  const sentences = doc.sentences().out("array");
  const chunkedContent = sentences.map((s, i) => `${i + 1}: ${s}`).join("\n");

  const { dir, name, ext } = path.parse(filePath);
  const outputPath = path.join(dir, `${name}.chunked${ext}`);

  await writeFile(outputPath, chunkedContent, "utf-8");
};

const filePath = Bun.argv[2];

if (!filePath) {
  console.error("Please provide a file path");
  process.exit(1);
}

chunkTranscript(filePath).catch(console.error);
