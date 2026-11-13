/* Math Quest pixel sprites.
   Each sprite is a grid of letters; each letter is a colour from PAL ('.' = see-through).
   S(name) returns an inline <svg> that scales crisply to the current font size. */
(function () {
  'use strict';
  const PAL = {
    K: '#2b2350', D: '#3b3366', W: '#ffffff', w: '#e8e4f5', g: '#9a93b8', G: '#6b6394', c: '#c9c4dd',
    B: '#b0703c', b: '#7a4a25', L: '#f6d9a8', O: '#ff9f1c', o: '#ffc46b', Y: '#ffd23f', y: '#fff1a8',
    R: '#ff4d5e', P: '#ff8fc4', p: '#ffc6df', N: '#2ec27e', n: '#8fe3a9', U: '#3fa7ff', u: '#a8dcff',
    V: '#9b5cff', v: '#d7c2ff', T: '#1fc8b5'
  };

  const G = {
    owl: [
      '..KK........KK..', '..KBK......KBK..', '..KBBKKKKKKBBK..', '..KBBBBBBBBBBK..',
      '.KBBBBBBBBBBBBK.', '.KBWWWWBBWWWWBK.', '.KBWKKWBBWKKWBK.', '.KBWKKWOOWKKWBK.',
      '.KBWWWWOOWWWWBK.', '.KBBLLLLLLLLBBK.', '.KBLLLKLLKLLLBK.', '.KBLLLLLLLLLLBK.',
      '.KBLKLLKKLLKLBK.', '..KBLLLLLLLLBK..', '...KKKKKKKKKK...', '....OO....OO....'
    ],
    star: [
      '.....K.....', '....KYK....', '....KYK....', 'KKKKYYYKKKK', 'KYYWYYYYYYK', '.KYYYYYYYK.',
      '..KYYYYYK..', '..KYYYYYK..', '.KYYYKYYYK.', '.KYYK.KYYK.', '.KKK...KKK.'
    ],
    heart: ['.KK...KK.', 'KRRK.KRRK', 'KRWRKRRRK', 'KRRRRRRRK', '.KRRRRRK.', '..KRRRK..', '...KRK...', '....K....'],
    home: [
      '.....K.....', '....KRK....', '...KRRRK...', '..KRRRRRK..', '.KRRRRRRRK.', 'KKKKKKKKKKK',
      '.KyyyyyyyK.', '.KyUUyBByK.', '.KyUUyBByK.', '.KyyyyBByK.', '.KKKKKKKKK.'
    ],
    soundOn: ['...KK......', '..KwK...U..', 'KKwwK.U..U.', 'KwwwK..U.U.', 'KwwwK..U.U.', 'KKwwK.U..U.', '..KwK...U..', '...KK......'],
    soundOff: ['...KK......', '..KwK......', 'KKwwK.R..R.', 'KwwwK..RR..', 'KwwwK..RR..', 'KKwwK.R..R.', '..KwK......', '...KK......'],
    speak: [
      '.KKKKKKKKK.', 'KWWWWWWWWWK', 'KWWWWWWWWWK', 'KWUWWUWWUWK', 'KWWWWWWWWWK', '.KKWKKKKKK.',
      '..KWK......', '..KK.......'
    ],
    book: [
      'KKKKK.KKKKK', 'KUUUUKVVVVK', 'KUuuUKVvvVK', 'KUUUUKVVVVK', 'KUuuUKVvvVK', 'KUUUUKVVVVK',
      'KUUUUKVVVVK', 'KUUUUKVVVVK', '.KKKKKKKKK.'
    ],
    phone: ['KKKKKKK', 'KGGGGGK', 'KUUUUUK', 'KUuUUUK', 'KUUUUUK', 'KUUUuUK', 'KUUUUUK', 'KUUUUUK', 'KGGGGGK', 'KGGWGGK', 'KKKKKKK'],
    check: ['........KK', '.......KNK', 'KK....KNK.', 'KNK..KNK..', '.KNKKNK...', '..KNNK....', '...KK.....'],
    trophy: [
      '.KKKKKKKKK.', 'KKYYYYYYYKK', 'KYKYYWYYKYK', 'KYKYYYYYKYK', '.KKYYYYYKK.', '...KYYYK...',
      '....KYK....', '....KYK....', '...KKKKK...', '..KYYYYYK..', '..KKKKKKK..'
    ],
    share: ['....U....', '...UUU...', '..UUUUU..', '....U....', '....U....', 'UUU.U.UUU', 'U...U...U', 'U.......U', 'U.......U', 'UUUUUUUUU'],
    egg: [
      '...KKKK...', '..KWWWWK..', '.KWWWWWWK.', '.KWWWWWwK.', 'KWKWWKWWwK', 'KKWKKWKKwK',
      'KWWWWWWWwK', 'KWWWWWWWwK', '.KWWWWWwK.', '..KKKKKK..'
    ],
    chick: [
      '....KKKK....', '...KYYYYK...', '..KYYYYYYK..', '..KYKYYKYK..', '..KYYOOYYK..', '...KYOOYK...',
      '.KKYYYYYYKK.', 'KYYKYYYYKYYK', '.KYYYYYYYYK.', '..KYYYYYYK..', '...KKKKKK...', '....O..O....'
    ],
    plus: [
      '...KKKK...', '...KWWK...', '...KWWK...', 'KKKKWWKKKK', 'KWWWWWWWWK', 'KWWWWWWWWK',
      'KKKKWWKKKK', '...KWWK...', '...KWWK...', '...KKKK...'
    ],
    minus: ['..........', '..........', '..........', 'KKKKKKKKKK', 'KWWWWWWWWK', 'KWWWWWWWWK', 'KKKKKKKKKK', '..........', '..........', '..........'],
    times: [
      'KKK....KKK', 'KWWK..KWWK', 'KWWWKKWWWK', '.KWWWWWWK.', '..KWWWWK..', '..KWWWWK..',
      '.KWWWWWWK.', 'KWWWKKWWWK', 'KWWK..KWWK', 'KKK....KKK'
    ],
    question: [
      '.KKKKKKK.', 'KWWWWWWWK', 'KWWKKKWWK', 'KKK..KWWK', '....KWWWK', '...KWWWK.',
      '...KWWK..', '...KKKK..', '.........', '...KKKK..', '...KWWK..', '...KKKK..'
    ],
    mix: [
      '..KKK.........', '..KWK.........', 'KKKWKKK.KKKKKK', 'KWWWWWK.KWWWWK', 'KKKWKKK.KKKKKK',
      '..KWK.........', '..KKK.........'
    ],
    croc: [
      '..........KKKK..', 'KKKKKKKKKKWKNNK.', 'KNNNNNNNNNNNNNNK', 'KNWNWNWNWNNNNNNK',
      'KKKKKKKKKKNNNNNK', 'KNNNNNNNNNNNNNNK', '.KNNNNNNNNNNNNK.', '..KKKKKKKKKKKK..'
    ],
    apple: ['....b.NN.', '....bNN..', '.KKKbKKK.', 'KRRRRRRRK', 'KRWRRRRRK', 'KRRRRRRRK', 'KRRRRRRRK', '.KRRRRRK.', '..KK.KK..'],
    fish: ['...KKKK....', '..KUUUUK.KK', '.KUWKUUUKUK', 'KUUUUUUUUUK', '.KUUUUUUKUK', '..KUUUUK.KK', '...KKKK....'],
    strawberry: ['...NNN...', '..NNNNN..', '.KRRRRRK.', 'KRRYRRYRK', 'KRRRRRRRK', 'KRYRRYRRK', '.KRRRRRK.', '.KRRYRRK.', '..KRRRK..', '...KKK...'],
    flower: ['...KKK...', '..KPPPK..', '.KKPPPKK.', 'KPPKYKPPK', 'KPPYYYPPK', 'KPPKYKPPK', '.KKPPPKK.', '..KPPPK..', '...KKK...'],
    balloon: ['.KKKKK.', 'KRRRRRK', 'KRWRRRK', 'KRWRRRK', 'KRRRRRK', 'KRRRRRK', '.KRRRK.', '..KRK..', '...K...', '..K....', '...K...'],
    cookie: ['..KKKKK..', '.KoooooK.', 'KoboooboK', 'KoooooooK', 'KoooboooK', 'KoboooooK', '.KoooobK.', '..KKKKK..'],

    /* ---- sticker animals ---- */
    roundFace: [
      '.KKK....KKK.', 'KEEEK..KEEEK', 'KEIEKKKKEIEK', 'KEEFFFFFFEEK', '.KFFFFFFFFK.', 'KFFKFFFFKFFK',
      'KFFKFFFFKFFK', 'KFFFMMMMFFFK', 'KFFMMKKMMFFK', '.KFMMMMMMFK.', '..KFFFFFFK..', '...KKKKKK...'
    ],
    pointyFace: [
      'K..........K', 'KK........KK', 'KEK......KEK', 'KEIK....KIEK', 'KEIFKKKKFIEK', 'KFFFFFFFFFFK',
      'KFFKFFFFKFFK', 'KFFKFFFFKFFK', 'KFFFMMMMFFFK', '.KFMMKKMMFK.', '..KMMMMMMK..', '...KKKKKK...'
    ],
    bunny: [
      '..KK....KK..', '.KWWK..KWWK.', '.KWPK..KPWK.', '.KWPK..KPWK.', '.KWPK..KPWK.', '.KWWKKKKWWK.',
      '.KWWWWWWWWK.', 'KWWKWWWWKWWK', 'KWWKWWWWKWWK', 'KPWWWKKWWWPK', '.KWWWWWWWWK.', '..KKKKKKKK..'
    ],
    frog: [
      '.KKK....KKK.', 'KWWWK..KWWWK', 'KWKWKKKKWKWK', 'KNNNNNNNNNNK', 'KNNNNNNNNNNK',
      'KNPNNNNNNPNK', 'KNKNNNNNNKNK', 'KNNKKKKKKNNK', '.KNNNNNNNNK.', '..KKKKKKKK..'
    ],
    penguin: [
      '...KKKKKK...', '..KDDDDDDK..', '.KDWWWWWWDK.', '.KWKWWWWKWK.', '.KWWWOOWWWK.', 'KDWWWWWWWWDK',
      'KDWWWWWWWWDK', 'KDWWWWWWWWDK', '.KDWWWWWWDK.', '..KKKKKKKK..', '..OO....OO..'
    ],
    octopus: [
      '...KKKKKK...', '..KPPPPPPK..', '.KPPPPPPPPK.', '.KPWKPPWKPK.', '.KPPPPPPPPK.', '.KPPpKKpPPK.',
      '.KPPPPPPPPK.', '.KPPPPPPPPK.', 'KPKPKPPKPKPK', 'KPKPKPPKPKPK', 'K.KK.KK.KK.K'
    ],
    turtle: ['....KKKKK.....', '...KNnNnNK.KK.', '..KnNnNnNnKnKK', '.KNnNnNnNnNnnK', 'KKKKKKKKKKKKK.', '.KnK.....KnK..', '.KK......KK...'],
    ladybug: [
      '....KKKK....', '...KWKKWK...', '..KRRKKRRK..', '.KRRRKKRRRK.', 'KRKKRKKRKKRK', 'KRKKRKKRKKRK',
      'KRRRRKKRRRRK', 'KRRKRKKRKRRK', '.KRRRKKRRRK.', '..KKKKKKKK..'
    ],
    butterfly: [
      '.KK......KK.', 'KVVK.KK.KVVK', 'KVYVKKKKVYVK', 'KVVVVKKVVVVK', '.KVVVKKVVVK.', '.KPPPKKPPPK.',
      'KPYPPKKPPYPK', 'KPPPK..KPPPK', '.KKK....KKK.'
    ],
    dino: [
      '......KKKKK..', '.....KNNNNNK.', '.....KNWKNNNK', '.....KNNNNNNK', '.....KNNNKKK.', 'K....KNNNK...',
      'KK..KNNNNNK..', 'KNKKNNNNNNNK.', '.KNNNNNNNNK..', '..KNNNNNNK...', '...KNK.KNK...', '...KK..KK....'
    ],
    whale: ['..........u.u.', '...........u..', '....KKKKKKKK..', 'KK.KUUUUUUUUK.', 'KUKUUUUUUUKUUK', '.KUUUUUUUUUUUK', 'KUKuuuuuuuuuuK', 'KK.KKKKKKKKKK.']
  };

  // Recoloured / tweaked versions of a base drawing
  const V = {
    bear: { base: 'roundFace', map: { E: 'B', I: 'L', F: 'B', M: 'L' } },
    panda: { base: 'roundFace', map: { E: 'K', I: 'K', F: 'W', M: 'W' }, rows: { 5: 'KFKKFFFFKKFK', 6: 'KFKWFFFFWKFK' } },
    koala: { base: 'roundFace', map: { E: 'g', I: 'W', F: 'g', M: 'w' } },
    mouse: { base: 'roundFace', map: { E: 'c', I: 'P', F: 'c', M: 'W' } },
    pig: { base: 'roundFace', map: { E: 'P', I: 'p', F: 'p', M: 'P' } },
    monkey: { base: 'roundFace', map: { E: 'b', I: 'L', F: 'b', M: 'L' } },
    lion: { base: 'roundFace', map: { E: 'O', I: 'o', F: 'Y', M: 'y' } },
    cat: { base: 'pointyFace', map: { E: 'O', I: 'P', F: 'O', M: 'y' } },
    fox: { base: 'pointyFace', map: { E: 'O', I: 'W', F: 'O', M: 'W' } },
    tiger: { base: 'pointyFace', map: { E: 'O', I: 'W', F: 'O', M: 'W' }, rows: { 5: 'KFKFFKKFFKFK' } },
    wolf: { base: 'pointyFace', map: { E: 'g', I: 'w', F: 'g', M: 'W' } },
    goldfish: { base: 'fish', map: { U: 'O' } }
  };

  const cache = {};
  function grid(name) {
    if (G[name]) return { rows: G[name], map: {} };
    const v = V[name];
    if (!v) return null;
    const rows = G[v.base].slice();
    if (v.rows) for (const i in v.rows) rows[i] = v.rows[i];
    return { rows, map: v.map || {} };
  }
  function build(name) {
    const g = grid(name);
    if (!g) return '';
    const h = g.rows.length, w = Math.max(...g.rows.map(r => r.length));
    let rects = '';
    g.rows.forEach((row, y) => {
      let x = 0;
      while (x < row.length) {
        let ch = row[x];
        if (ch === '.') { x++; continue; }
        let len = 1;
        while (x + len < row.length && row[x + len] === ch) len++;
        const key = g.map[ch] || ch;
        rects += `<rect x="${x}" y="${y}" width="${len}" height="1.02" fill="${PAL[key] || key}"/>`;
        x += len;
      }
    });
    return { svg: rects, w, h };
  }
  function S(name, cls) {
    const b = cache[name] || (cache[name] = build(name));
    if (!b) return '';
    return `<svg class="spr${cls ? ' ' + cls : ''}" viewBox="0 0 ${b.w} ${b.h}" style="width:${(b.w / b.h).toFixed(3)}em" ` +
      `shape-rendering="crispEdges" aria-hidden="true" focusable="false">${b.svg}</svg>`;
  }
  function fill(root) {
    (root || document).querySelectorAll('[data-spr]').forEach(el => { el.innerHTML = S(el.dataset.spr); });
  }
  S.names = () => Object.keys(G).concat(Object.keys(V));
  window.S = S;
  window.fillSprites = fill;
})();
