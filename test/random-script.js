import assert from 'power-assert';
import RandomScript from '../lib/main';
import Random from 'random-js';

describe('RandomScript', () => {
  let engine, fixed, unfixed, num;

  beforeEach('Initialize instances', function() {
    engine = Random.engines.mt19937().seed(0);
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

  /**
   * @see http://apps.timwhitlock.info/unicode/inspect/hex/1F600
   * @see http://apps.timwhitlock.info/unicode/inspect/hex/1F603
   */
  it('should accept Unicode block name', () => {
    assert.equal(fixed.string(3, 'Hiragana'), 'ぬくふ');
    assert.equal(fixed.string(2, 'Emoticons'), '\uD83D\uDE00\uD83D\uDE03');
  });

  it('should not accept unexpected length', () => {
    assert.throws(() => unfixed.string(-1), RangeError);
    assert.throws(() => unfixed.string(0), RangeError);
    assert.throws(() => unfixed.string(null), RangeError);
    assert.throws(() => unfixed.string('foo'), RangeError);
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
