import Util from 'util';
import Punycode from 'punycode';
import Random from 'random-js';
import UnicodeBlocks from '../data/unicode-8.0.0-blocks.json';

const DEFAULT_BLOCK = 'Basic Latin';

export default class RandomScript
{
  /**
   * @see https://github.com/ckknight/random-js/tree/v1.0.8#engines
   * @param {object} engine Engine of random-js: nativeMath, browserCrypto, mt19937()
   */
  constructor(engine = Random.engines.nativeMath)
  {
    this.blocks = UnicodeBlocks;
    this.engine = engine;
  }

  static create(engine)
  {
    return new RandomScript(engine);
  }

  /**
   * @see http://ftp.unicode.org/Public/8.0.0/ucd/Blocks.txt
   * @param {int} length
   * @param {string} name Block name
   */
  string(length = 1, name = DEFAULT_BLOCK)
  {
    length = parseInt(length, 10);
    if (1 > length || Number.isNaN(length)) {
      throw new RangeError('Argument length should be 1 or greater.');
    }
    const key = RandomScript.standardizeKey(name);
    if (!this.blocks.hasOwnProperty(key)) {
      throw new Error(Util.format(
        'Unknown name of Unicode block "%s". Choose from http://ftp.unicode.org/Public/8.0.0/ucd/Blocks.txt',
        name));
    }
    const range = this.blocks[key];
    const random = Random.integer(range[0], range[1]);
    const cue = Array.from({length: length}, () => random(this.engine));
    return Punycode.ucs2.encode(cue);
  }

  static standardizeKey(key)
  {
    const normalized = key.replace(/[\s\-_]/g, '');
    return RandomScript.manualLowercase(normalized);
  }

  static manualLowercase(string)
  {
    return string.replace(/[A-Z]/g, function(ch) {
      return String.fromCharCode(ch.charCodeAt(0) | 32);
    });
  }
}
