# pdqhash-node

A minimal Node.js wrapper around the Cargo crate [pdqhash](https://github.com/darwinium-com/pdqhash), which is a pure Rust implementation of [Meta's PDQ algorithm](https://github.com/facebook/ThreatExchange/tree/main/pdq).

## Prerequisites
- [Rust programming language](https://rust-lang.org/)

## Install
```
yarn add pdqhash-node
yarn build
```

## Usage

```js
import { readFileSync } from 'fs';
import { pdqhash } from 'pdqhash-node';

const buf = readFileSync('image.jpg');
const hashHex = pdqhash(buf); // string | null
console.log(hashHex);
```
