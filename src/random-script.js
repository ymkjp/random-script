import Fs from 'fs';
import Util from 'util';
import Random from 'random-js';

const BLOCKS_PATH = './data/unicode-%s-blocks.json';
const UNICODE_VERSION = '8.0.0';
const DEFAULT_BLOCK = 'Basic Latin';

export default class RandomScript
{
  /**
   * @see https://github.com/ckknight/random-js/tree/v1.0.8#engines
   * @param {object} engine Engine of random-js: nativeMath, browserCrypto, mt19937()
   * @param {string} version Unicode version
   */
  constructor(engine = Random.engines.nativeMath, version = UNICODE_VERSION)
  {
    let path = Util.format(BLOCKS_PATH, version);
    let file = Fs.readFileSync(path);
    this.blocks = JSON.parse(file);
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
    let key = RandomScript.standardizeKey(name);
    if (!this.blocks.hasOwnProperty(key)) {
      throw new Error(Util.format(
        'Unknown name of Unicode block "%s". Choose from http://ftp.unicode.org/Public/8.0.0/ucd/Blocks.txt',
        name));
    }
    let range = this.blocks[key];
    let random = Random.integer(range[0], range[1]);
    let cue = [];
    for (let i = 0; i < length; ++i) {
      cue.push(String.fromCharCode(random(this.engine)));
    }
    return cue.join('');
  }

  static standardizeKey(key)
  {
    let result;
    result = key.replace(/[\s\-_]/g, '');
    result = RandomScript.manualLowercase(result);
    return result;
  }

  static manualLowercase(string)
  {
    return string.replace(/[A-Z]/g, function(ch) {
      return String.fromCharCode(ch.charCodeAt(0) | 32);
    });
  }
}
