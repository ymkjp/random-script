import assert from 'power-assert';
import RandomScript from '../lib/main';
import Random from 'random-js';

describe('RandomScript::create', () => {
  let one, two;

  before('Initialize instances', () => {
    one = RandomScript.create();
    two = RandomScript.create();
  });

  it('should init RandomScript instance', () => {
    assert(typeof one === 'object');
    assert(one instanceof RandomScript);
  });

  it('should init different instances each time', () => {
    assert.notStrictEqual(one, two);
  });
});

describe('RandomScript::string', () => {
  let engine, fixed, num;

  before('Generate random num', () => {
    num = Random().integer(1, 1028);
  });

  beforeEach('Initialize fixed-seed instance', () => {
    engine = Random.engines.mt19937().seed(0);
    fixed = RandomScript.create(engine);
  });

  it('should generate given length strings', () => {
    assert.equal(fixed.string(num).length, num);
    assert.equal(fixed.string(num.toString()).length, num);
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
    assert.throws(() => fixed.string(-1), RangeError);
    assert.throws(() => fixed.string(0), RangeError);
    assert.throws(() => fixed.string(null), RangeError);
    assert.throws(() => fixed.string('foo'), RangeError);
  });

  it('should not accept unknown Unicode block name', () => {
    assert.throws(() => fixed.string(3, 'Foo'), Error);
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
