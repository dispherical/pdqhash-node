/// <reference types="node" />

/**
 * Generate a PDQ perceptual hash from a binary buffer.
 *
 * This function accepts a {@link Buffer} and returns a hexadecimal
 * string representation of the PDQ hash.
 *
 * @param input - A Buffer containing the binary data to hash.
 * @returns A hex-encoded PDQ hash string, or `null` if a hash could not be generated.
 *
 * @throws {TypeError}
 * Thrown if `input` is not a Buffer.
 *
 * @example
 * ```ts
 * import { pdqhash } from "pdqhash-node";
 *
 * const buf = fs.readFileSync("image.jpg");
 * const hash = pdqhash(buf);
 *
 * if (hash) {
 *   console.log(hash);
 * }
 * ```
 */
declare function pdqhash(input: Buffer): string | null;

declare const _default: {
  pdqhash: typeof pdqhash;
};

export = _default;
