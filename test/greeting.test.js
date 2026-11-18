import assert from 'node:assert/strict';
import { test } from 'node:test';
import { greeting } from '../src/greeting.js';

test('greets the world by default', () => {
  assert.equal(greeting(), 'Hello, world!');
});

test('greets a supplied name', () => {
  assert.equal(greeting('Node.js'), 'Hello, Node.js!');
});
