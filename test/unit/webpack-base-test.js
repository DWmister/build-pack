/* eslint-disable no-undef */
const assert = require('assert').strict;
const baseConfig = require('../../lib/webpack.base');

// eslint-disable-next-line no-undef
describe('webpack.base.js test case', () => {
  it('entry is right', () => {
    assert.strictEqual(baseConfig.entry.index.includes('/test/smoke/template/src/index/index.js'), true);
    assert.strictEqual(baseConfig.entry.search.includes('/test/smoke/template/src/search/index.js'), true);
  });
  it('output is right', () => {
    assert.strictEqual(baseConfig.output.path.includes('/test/smoke/template/dist'), true);
  });
});
