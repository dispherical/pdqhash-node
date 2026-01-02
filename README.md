# pdqhash-node

A minimal Node.js wrapper around the Cargo crate [pdqhash](https://github.com/darwinium-com/pdqhash), which is a pure Rust implementation of [Meta's PDQ algorithm](https://github.com/facebook/ThreatExchange/tree/main/pdq).

## Prerequisites
- [Rust programming language](https://rust-lang.org/)

## Install
```
yarn add pdqhash-node
```

## Usage

```js
import { readFileSync } from 'fs';
import { pdqhash, pdqhashBuffer } from 'pdqhash-node';

const buf = readFileSync('image.jpg');
var hashHex = pdqhash(buf); // string | null
// or
var hashBuf = pdqhashBuffer(buf); // Buffer | null
console.log(hashHex);
```

## API

- `pdqhash(input: Buffer): string | null`
	- Hex string PDQ hash. Returns `null` if hashing fails.
- `pdqhashBuffer(input: Buffer): Buffer | null`
	- Raw PDQ hash bytes as a `Buffer`. Returns `null` if hashing fails.
- `pdqhashWithQuality(input: Buffer): { hash: string; quality: number } | null`
	- Hex string PDQ hash plus the quality score. Returns `null` if hashing fails.
- `hammingDistance(a: Buffer, b: Buffer): number`
	- Computes Hamming distance between two PDQ hash Buffers.

### Examples

Compute hash in hex and Buffer:

```js
import { readFileSync } from 'fs';
import { pdqhash, pdqhashBuffer } from 'pdqhash-node';

const buf = readFileSync('image.jpg');
console.log(pdqhash(buf)); // hex string
console.log(pdqhashBuffer(buf)?.toString('hex')); // same hash from Buffer
```

Get hash with quality:

```js
import { readFileSync } from 'fs';
import { pdqhashWithQuality } from 'pdqhash-node';

const buf = readFileSync('image.jpg');
const result = pdqhashWithQuality(buf);
if (result) {
	console.log(result.hash, result.quality);
}
```

Compute Hamming distance:

```js
import { readFileSync } from 'fs';
import { pdqhashBuffer, hammingDistance } from 'pdqhash-node';

const a = pdqhashBuffer(readFileSync('image1.jpg'));
const b = pdqhashBuffer(readFileSync('image2.jpg'));
if (a && b) {
	console.log(hammingDistance(a, b));
}
```
