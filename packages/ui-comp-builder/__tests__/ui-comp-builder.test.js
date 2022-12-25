'use strict';

const uiCompBuilder = require('..');
const assert = require('assert').strict;

assert.strictEqual(uiCompBuilder(), 'Hello from uiCompBuilder');
console.info("uiCompBuilder tests passed");
