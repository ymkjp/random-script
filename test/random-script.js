import assert from 'power-assert';
import RandomScript from '../lib/main';
import Random from 'random-js';

describe('RandomScript', () => {
  let fixed, unfixed, num;
  let engine = Random.engines.mt19937().seed(0);

  beforeEach('Initialize instances', function() {
    fixed = RandomScript.create(engine);
    unfixed = RandomScript.create();
    num = Random.integer(1, 1028)(Random.engines.mt19937().autoSeed());
  });

  it('should be object type', () => {
    assert(typeof fixed === 'object' && fixed instanceof RandomScript);
  });

  it('should be different instances', () => {
    assert.notStrictEqual(fixed, unfixed);
  });

  it('should generate given length strings', () => {
    assert.equal(unfixed.string(num).length, num);
    assert.equal(unfixed.string('20').length, 20);
  });

  it('should accept Unicode block name', () => {
    assert.equal(fixed.string(3, 'Hiragana'), 'ぬくふ');
    assert.equal(fixed.string(2, 'CJK Radicals Supplement'), '⻀⻃');
  });

  it('should not accept unexpected length', () => {
    assert.throws(() => unfixed.string(-1), RangeError);
    assert.throws(() => unfixed.string(0), RangeError);
    assert.throws(() => unfixed.string(null), RangeError);
  });

  it('should not accept unknown Unicode block name', () => {
    assert.throws(() => unfixed.string(3, 'Foo'), Error);
  });
});

describe('RandomScript::standardizeKey method', () => {
  it('should follow UAX #44', () => {
    assert.equal(
      RandomScript.standardizeKey('Latin Extended-A'),
      RandomScript.standardizeKey('latin extended a'));
    assert.equal(
      RandomScript.standardizeKey('__foo_bar__'),
      RandomScript.standardizeKey('FooBar '));
  });
});
