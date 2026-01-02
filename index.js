const addon = require('./index.node');

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
function pdqhash(input) {
  if (!Buffer.isBuffer(input)) {
    throw new TypeError('pdqhash(input): input must be a Buffer');
  }
  const res = addon.generatePdqFromBuffer(input);
  if (!res) return null;
  return Buffer.from(res.hash).toString('hex');
}

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
 *
 * @example
 * ```ts
 * import { pdqhashBuffer } from "pdqhash-node";
 *
 * const buf = fs.readFileSync("image.jpg");
 * const hashBuf = pdqhashBuffer(buf);
 *
 * if (hashBuf) {
 *   console.log(hashBuf.toString('hex'));
 * }
 * ```
 */
function pdqhashBuffer(input) {
  if (!Buffer.isBuffer(input)) {
    throw new TypeError('pdqhashBuffer(input): input must be a Buffer');
  }
  const res = addon.generatePdqFromBuffer(input);
  if (!res) return null;
  return Buffer.from(res.hash);
}

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
 *
 * @example
 * ```ts
 * import { pdqhashWithQuality } from "pdqhash-node";
 *
 * const buf = fs.readFileSync("image.jpg");
 * const result = pdqhashWithQuality(buf);
 *
 * if (result) {
 *   console.log(result.hash, result.quality);
 * }
 * ```
 */
function pdqhashWithQuality(input) {
  if (!Buffer.isBuffer(input)) {
    throw new TypeError('pdqhashWithQuality(input): input must be a Buffer');
  }
  const res = addon.generatePdqFromBuffer(input);
  if (!res) return null;
  return {
    hash: Buffer.from(res.hash).toString('hex'),
    quality: res.quality,
  };
}

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
 *
 * @example
 * ```ts
 * import { pdqhashBuffer, hammingDistance } from "pdqhash-node";
 *
 * const a = pdqhashBuffer(fs.readFileSync("image1.jpg"));
 * const b = pdqhashBuffer(fs.readFileSync("image2.jpg"));
 *
 * if (a && b) {
 *   console.log(hammingDistance(a, b));
 * }
 * ```
 */
function hammingDistance(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('hammingDistance(a, b): arguments must be Buffers');
  }
  return addon.hammingDistance(a, b);
}

module.exports = {
  pdqhash,
  pdqhashBuffer,
  pdqhashWithQuality,
  hammingDistance
};

