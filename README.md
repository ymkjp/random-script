# random-script

[![Build Status](https://travis-ci.org/ymkjp/random-script.svg?branch=master)](https://travis-ci.org/ymkjp/random-script)

This is a library to generate random strings for multiple languages in JavaScript.

## Usage

#### node.js

```bash
npm install random-script
```

```js
var randomScript = require('random-script').create();
var kanbun = randomScript.string(12, 'Emoticons');
console.log(kanbun);  // '😌😺😴😏😋😞😡😶😔😏🙌🙇'
```

#### Browser

See example on [RandomScript Demo](https://cdn.rawgit.com/ymkjp/random-script/master/public/index.html) page.

```html
<script src="https://rawgit.com/ymkjp/random-script/master/build/random-script.min.js"></script>
<script>
  var random = require('random-script').create();
  alert(random.string(1, 'Emoticons'));
</script>
```

## Supported Languages

RandomScript supports following languages based on [Unicode-8.0.0](http://ftp.unicode.org/Public/8.0.0/ucd/Blocks.txt).

* Basic Latin
* Latin-1 Supplement
* Latin Extended-A
* Latin Extended-B
* IPA Extensions
* Spacing Modifier Letters
* Combining Diacritical Marks
* Greek and Coptic
* Cyrillic
* Cyrillic Supplement
* Armenian
* Hebrew
* Arabic
* Syriac
* Arabic Supplement
* Thaana
* NKo
* Samaritan
* Mandaic
* Arabic Extended-A
* Devanagari
* Bengali
* Gurmukhi
* Gujarati
* Oriya
* Tamil
* Telugu
* Kannada
* Malayalam
* Sinhala
* Thai
* Lao
* Tibetan
* Myanmar
* Georgian
* Hangul Jamo
* Ethiopic
* Ethiopic Supplement
* Cherokee
* Unified Canadian Aboriginal Syllabics
* Ogham
* Runic
* Tagalog
* Hanunoo
* Buhid
* Tagbanwa
* Khmer
* Mongolian
* Unified Canadian Aboriginal Syllabics Extended
* Limbu
* Tai Le
* New Tai Lue
* Khmer Symbols
* Buginese
* Tai Tham
* Combining Diacritical Marks Extended
* Balinese
* Sundanese
* Batak
* Lepcha
* Ol Chiki
* Sundanese Supplement
* Vedic Extensions
* Phonetic Extensions
* Phonetic Extensions Supplement
* Combining Diacritical Marks Supplement
* Latin Extended Additional
* Greek Extended
* General Punctuation
* Superscripts and Subscripts
* Currency Symbols
* Combining Diacritical Marks for Symbols
* Letterlike Symbols
* Number Forms
* Arrows
* Mathematical Operators
* Miscellaneous Technical
* Control Pictures
* Optical Character Recognition
* Enclosed Alphanumerics
* Box Drawing
* Block Elements
* Geometric Shapes
* Miscellaneous Symbols
* Dingbats
* Miscellaneous Mathematical Symbols-A
* Supplemental Arrows-A
* Braille Patterns
* Supplemental Arrows-B
* Miscellaneous Mathematical Symbols-B
* Supplemental Mathematical Operators
* Miscellaneous Symbols and Arrows
* Glagolitic
* Latin Extended-C
* Coptic
* Georgian Supplement
* Tifinagh
* Ethiopic Extended
* Cyrillic Extended-A
* Supplemental Punctuation
* CJK Radicals Supplement
* Kangxi Radicals
* Ideographic Description Characters
* CJK Symbols and Punctuation
* Hiragana
* Katakana
* Bopomofo
* Hangul Compatibility Jamo
* Kanbun
* Bopomofo Extended
* CJK Strokes
* Katakana Phonetic Extensions
* Enclosed CJK Letters and Months
* CJK Compatibility
* CJK Unified Ideographs Extension A
* Yijing Hexagram Symbols
* CJK Unified Ideographs
* Yi Syllables
* Yi Radicals
* Lisu
* Vai
* Cyrillic Extended-B
* Bamum
* Modifier Tone Letters
* Latin Extended-D
* Syloti Nagri
* Common Indic Number Forms
* Phags-pa
* Saurashtra
* Devanagari Extended
* Kayah Li
* Rejang
* Hangul Jamo Extended-A
* Javanese
* Myanmar Extended-B
* Cham
* Myanmar Extended-A
* Tai Viet
* Meetei Mayek Extensions
* Ethiopic Extended-A
* Latin Extended-E
* Cherokee Supplement
* Meetei Mayek
* Hangul Syllables
* Hangul Jamo Extended-B
* High Surrogates
* High Private Use Surrogates
* Low Surrogates
* Private Use Area
* CJK Compatibility Ideographs
* Alphabetic Presentation Forms
* Arabic Presentation Forms-A
* Variation Selectors
* Vertical Forms
* Combining Half Marks
* CJK Compatibility Forms
* Small Form Variants
* Arabic Presentation Forms-B
* Halfwidth and Fullwidth Forms
* Specials
* Linear B Syllabary
* Linear B Ideograms
* Aegean Numbers
* Ancient Greek Numbers
* Ancient Symbols
* Phaistos Disc
* Lycian
* Carian
* Coptic Epact Numbers
* Old Italic
* Gothic
* Old Permic
* Ugaritic
* Old Persian
* Deseret
* Shavian
* Osmanya
* Elbasan
* Caucasian Albanian
* Linear A
* Cypriot Syllabary
* Imperial Aramaic
* Palmyrene
* Nabataean
* Hatran
* Phoenician
* Lydian
* Meroitic Hieroglyphs
* Meroitic Cursive
* Kharoshthi
* Old South Arabian
* Old North Arabian
* Manichaean
* Avestan
* Inscriptional Parthian
* Inscriptional Pahlavi
* Psalter Pahlavi
* Old Turkic
* Old Hungarian
* Rumi Numeral Symbols
* Brahmi
* Kaithi
* Sora Sompeng
* Chakma
* Mahajani
* Sharada
* Sinhala Archaic Numbers
* Khojki
* Multani
* Khudawadi
* Grantha
* Tirhuta
* Siddham
* Modi
* Takri
* Ahom
* Warang Citi
* Pau Cin Hau
* Cuneiform
* Cuneiform Numbers and Punctuation
* Early Dynastic Cuneiform
* Egyptian Hieroglyphs
* Anatolian Hieroglyphs
* Bamum Supplement
* Mro
* Bassa Vah
* Pahawh Hmong
* Miao
* Kana Supplement
* Duployan
* Shorthand Format Controls
* Byzantine Musical Symbols
* Musical Symbols
* Ancient Greek Musical Notation
* Tai Xuan Jing Symbols
* Counting Rod Numerals
* Mathematical Alphanumeric Symbols
* Sutton SignWriting
* Mende Kikakui
* Arabic Mathematical Alphabetic Symbols
* Mahjong Tiles
* Domino Tiles
* Playing Cards
* Enclosed Alphanumeric Supplement
* Enclosed Ideographic Supplement
* Miscellaneous Symbols and Pictographs
* Emoticons
* Ornamental Dingbats
* Transport and Map Symbols
* Alchemical Symbols
* Geometric Shapes Extended
* Supplemental Arrows-C
* Supplemental Symbols and Pictographs
* CJK Unified Ideographs Extension B
* CJK Unified Ideographs Extension C
* CJK Unified Ideographs Extension D
* CJK Unified Ideographs Extension E
* CJK Compatibility Ideographs Supplement
* Tags
* Variation Selectors Supplement
* Supplementary Private Use Area-A
* Supplementary Private Use Area-B


## Development Tips

Please feel free to send patches.

```bash
npm install
npm run compile -- --watch
npm test -- --watch
```
