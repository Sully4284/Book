// Character portrait mapping.
//
// Each entry has a `default` portrait and may also have:
//   - `carved` / `carvedAtChapter` / `carvedInBook`: a transformation that happens mid-book
//     (Darrow's Carving in Red Rising). Before that chapter of that book the default shows;
//     from that chapter on, and in every later book, the carved portrait shows.
//   - `eras`: per-book overrides so a character can age across the series
//     (e.g. Lysander is a child in Golden Son and an adult from Iron Gold onward).

export type BookId =
  | 'red-rising'
  | 'golden-son'
  | 'morning-star'
  | 'iron-gold'
  | 'dark-age'
  | 'light-bringer';

export const BOOK_ORDER: BookId[] = [
  'red-rising',
  'golden-son',
  'morning-star',
  'iron-gold',
  'dark-age',
  'light-bringer',
];

// Books 4-6 take place a decade after Morning Star — the cast has visibly aged.
const LATER_ERA: BookId[] = ['iron-gold', 'dark-age', 'light-bringer'];
const forLaterBooks = (path: string): Partial<Record<BookId, string>> =>
  Object.fromEntries(LATER_ERA.map((b) => [b, path]));

interface CharacterImageConfig {
  default: string;
  carved?: string;
  carvedAtChapter?: number;
  carvedInBook?: BookId;
  eras?: Partial<Record<BookId, string>>;
}

const img = (file: string) => `/images/characters/${file}.png`;

const characterImages: Record<string, CharacterImageConfig> = {
  // Main protagonist - Red before the Carving, Gold after
  darrow: {
    default: img('darrow-red'),
    carved: img('darrow-gold'),
    carvedAtChapter: 12,
    carvedInBook: 'red-rising',
  },

  // Darrow's family
  eo: { default: img('eo') },
  kieran: { default: img('kieran') },
  leanna: { default: img('leanna') },
  'mother-darrow': { default: img('mother-darrow') },
  'father-darrow': { default: img('father-darrow') },
  narol: { default: img('narol') },
  dio: { default: img('dio') },
  loran: { default: img('loran') },

  // Sons of Ares
  dancer: { default: img('dancer') },
  harmony: { default: img('harmony') },
  mickey: { default: img('mickey') },
  evey: { default: img('evey') },
  matteo: { default: img('matteo') },

  // Gold Society
  'nero-augustus': { default: img('nero-augustus') },
  octavia: { default: img('octavia-lune') },
  fitchner: { default: img('fitchner') },

  // House Bellona
  karnus: { default: img('karnus') },
  'tiberius-bellona': { default: img('tiberius-bellona') },
  'julia-bellona': { default: img('julia-bellona') },

  // Sovereign's Court
  lysander: {
    default: img('lysander'),
    eras: forLaterBooks(img('lysander-adult')),
  },
  aja: { default: img('aja') },
  moira: { default: img('moira') },

  // House Arcos
  lorn: { default: img('lorn') },

  // House Telemanus
  kavax: { default: img('kavax') },
  daxo: { default: img('daxo') },
  pax: { default: img('pax') },

  // House Julii
  victra: { default: img('victra') },
  agrippina: { default: img('agrippina') },

  // House Augustus
  pliny: { default: img('pliny') },
  leto: { default: img('leto') },

  // Darrow's household
  theodora: { default: img('theodora') },

  // Other Golden Son characters
  tactus: { default: img('tactus') },

  // Institute - House Mars and others
  mustang: { default: img('mustang') },
  cassius: { default: img('cassius') },
  julian: { default: img('julian') },
  sevro: { default: img('sevro') },
  roque: { default: img('roque') },
  quinn: { default: img('quinn') },
  lea: { default: img('lea') },
  antonia: { default: img('antonia') },
  jackal: { default: img('jackal') },
  titus: { default: img('titus') },
  vixus: { default: img('vixus') },

  // Grays and Coppers
  'ugly-dan': { default: img('ugly-dan') },
  podginus: { default: img('podginus') },

  // Obsidians
  ragnar: { default: img('ragnar') },
  sefi: { default: img('sefi') },
  alia: { default: img('alia') },
  volga: { default: img('volga') },
  'volsung-fa': { default: img('volsung-fa') },
  valdir: { default: img('valdir') },
  wulfgar: { default: img('wulfgar') },

  // Grays
  holiday: { default: img('holiday') },
  trigg: { default: img('trigg') },
  ephraim: { default: img('ephraim') },

  // Reds
  lyria: { default: img('lyria') },
  rhonna: { default: img('rhonna') },

  // Gold protagonists/allies (later books)
  alexandar: { default: img('alexandar') },
  thraxa: { default: img('thraxa') },
  'pax-augustus': { default: img('pax-augustus') },
  electra: { default: img('electra') },

  // Gold antagonists
  apollonius: { default: img('apollonius') },
  atlas: { default: img('atlas') },
  atalantia: { default: img('atalantia') },
  ajax: { default: img('ajax') },

  // Rim Golds
  romulus: { default: img('romulus') },
  dido: { default: img('dido') },
  diomedes: { default: img('diomedes') },
  seraphina: { default: img('seraphina') },
  kalindora: { default: img('kalindora') },

  // Blues
  orion: { default: img('orion') },
  pytha: { default: img('pytha') },

  // Silver
  quicksilver: { default: img('quicksilver') },

  // Additional characters
  liam: { default: img('liam') },
  niobe: { default: img('niobe') },
  marius: { default: img('marius') },
  'ash-lord': { default: img('ash-lord') },
  'duke-of-hands': { default: img('duke-of-hands') },
  'syndicate-queen': { default: img('syndicate-queen') },
};

function bookIndex(bookId: string): number {
  const i = BOOK_ORDER.indexOf(bookId as BookId);
  return i === -1 ? 0 : i;
}

/** True once the character's mid-book transformation has happened, given the book being read. */
export function isCharacterCarved(
  characterId: string,
  currentChapter: number,
  bookId: string = 'red-rising'
): boolean {
  const config = characterImages[characterId];
  if (!config?.carved || config.carvedAtChapter === undefined) return false;
  const carvedIn = config.carvedInBook ?? 'red-rising';
  const delta = bookIndex(bookId) - bookIndex(carvedIn);
  if (delta > 0) return true; // a later book: the transformation is history
  if (delta < 0) return false; // an earlier book: hasn't happened yet
  return currentChapter >= config.carvedAtChapter;
}

export function getCharacterImage(
  characterId: string,
  currentChapter: number,
  bookId: string = 'red-rising'
): string | null {
  const config = characterImages[characterId];
  if (!config) return null;

  const eraImage = config.eras?.[bookId as BookId];
  if (eraImage) return eraImage;

  if (config.carved && isCharacterCarved(characterId, currentChapter, bookId)) {
    return config.carved;
  }

  return config.default;
}

export function getCarvedAtChapter(characterId: string): number | null {
  return characterImages[characterId]?.carvedAtChapter ?? null;
}
