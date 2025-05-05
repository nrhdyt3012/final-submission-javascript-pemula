import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('Menjumlahkan angka positif dan negatif', () => {
  assert.strictEqual(sum(10, -4), 6);
});

test('Menjumlahkan dua angka negatif', () => {
  assert.strictEqual(sum(-5, -3), -8);
});


