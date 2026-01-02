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
 */
declare function pdqhash(input: Buffer): string | null;

/**
 * Generate a PDQ perceptual hash from a binary buffer.
 *
 * This function accepts a {@link Buffer} and returns the raw PDQ
 * hash as a {@link Buffer}.
 *
 * @param input - A Buffer containing the binary data to hash.
 * @returns A Buffer containing the PDQ hash, or `null` if a hash could not be generated.
 *
 * @throws {TypeError}
 * Thrown if `input` is not a Buffer.
 */
declare function pdqhashBuffer(input: Buffer): Buffer | null;

/**
 * Generate a PDQ hash with quality metadata from a binary buffer.
 *
 * Returns an object containing the PDQ hash in hex string form and
 * the computed quality score.
 *
 * @param input - A Buffer containing the binary data to hash.
 * @returns An object `{ hash: string, quality: number }`, or `null` if a hash could not be generated.
 *
 * @throws {TypeError}
 * Thrown if `input` is not a Buffer.
 */
declare function pdqhashWithQuality(input: Buffer): { hash: string; quality: number } | null;

/**
 * Compute Hamming distance between two PDQ hashes.
 *
 * Accepts two PDQ hash Buffers and returns their Hamming distance
 * as a number.
 *
 * @param a - First PDQ hash as a Buffer.
 * @param b - Second PDQ hash as a Buffer.
 * @returns The Hamming distance between `a` and `b`.
 *
 * @throws {TypeError}
 * Thrown if either argument is not a Buffer.
 */
declare function hammingDistance(a: Buffer, b: Buffer): number;

declare const _default: {
	pdqhash: typeof pdqhash;
	pdqhashBuffer: typeof pdqhashBuffer;
	pdqhashWithQuality: typeof pdqhashWithQuality;
	hammingDistance: typeof hammingDistance;
};

export = _default;
