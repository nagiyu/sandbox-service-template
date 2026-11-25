import { test } from 'node:test';
import assert from 'node:assert/strict';
import { topMessage } from '../dist/index.js';

test('共通ライブラリの挨拶文にサービスの文言を足す', () => {
  assert.equal(topMessage('nagiyu'), 'こんにちは、nagiyu さん。sandbox-service へようこそ');
});
