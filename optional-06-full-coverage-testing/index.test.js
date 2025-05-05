import sum from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('sum should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(2, 3), 5);
});

test('sum should return 0 if one of the arguments is not a number', () => {
    assert.strictEqual(sum('2', 3), 0);
    assert.strictEqual(sum(2, '3'), 0);
    assert.strictEqual(sum('2', '3'), 0);
});

test('sum should return 0 if one of the arguments is negative', () => {
    assert.strictEqual(sum(-2, 3), 0);
    assert.strictEqual(sum(2, -3), 0);
    assert.strictEqual(sum(-2, -3), 0);
});

test('sum should return 0 if both arguments are missing', () => {
    assert.strictEqual(sum(), 0);
});

test('sum should return 0 if only one argument is provided', () => {
    assert.strictEqual(sum(2), 0);
    assert.strictEqual(sum(undefined, 3), 0);
});