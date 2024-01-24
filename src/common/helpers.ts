import path from "path";
import fs from "fs";
import readline from "readline";

/** Extracts all the lines from an Advent of Code
 *  "input.txt" file and formats it into a string array.
 *
 *  @param filepath {string}
 *  @param dirname {string} A global NodeJS variable, Syntax: `__dirname`. */
export async function extractFileLines(filepath: string, dirname: string): Promise<string[]> {
	const resolvedFilepath = path.resolve(dirname, filepath);
	const filestream = fs.createReadStream(resolvedFilepath);
	const lineReader = readline.createInterface({
		input: filestream,
		crlfDelay: Infinity,
	});

	const fileLines: string[] = [];
	for await (const line of lineReader) {
		fileLines.push(line)
	}

	return fileLines;
}


