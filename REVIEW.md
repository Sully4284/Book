# Red Rising Character Guide — UX/UI & Content Review

_Reviewed 2026-09-08 against the running app (Vite dev server), the source, the 83 generated portraits, the six novels' full text in `../Red Rising Books/`, and the Red Rising Wiki._

## TL;DR

- **The app has good bones** (progressive reveal by chapter, book branding, tree + grid) but the default Family Tree view was actively broken: it silently omitted characters, floated empty group labels in space, and drew nothing for many relationships. That is most of the "clunky" feeling. **Fixed in this pass** — see §1.
- **Portraits are the second-biggest polish problem.** Rendering technique is similar across the set, but backgrounds, crops, and lighting vary, roughly half break the Society's colour rules (brown-haired Golds, a grey-eyed Sovereign, a jet-black-skinned Obsidian), and every character except Lysander uses one image for a 20-year span. **Code fixed for book-aware/era portraits; regeneration script written; images not regenerated (needs your API key — ~US$8).** See §2.
- **Visual language** is split between a neon sci-fi header (Orbitron + glow) and a "premium dark / Blood & Gold" body. Recommendations in §3 — not applied, since they are taste decisions for you to confirm.
- **Card content accuracy was the biggest problem of all**: ~410 errors across the six books (wrong death chapters and killers, invented events, spoilers leaked early, a fabricated Prologue). **All HIGH/MED corrections are applied**; reports with evidence are in `factcheck/`. See §4.

---

## 1. Structural defects found (and fixed)

| # | Severity | Finding | Fix |
|---|---|---|---|
| 1.1 | **High** | Family Tree (the default view) only drew people listed in hand-made layouts. Anyone missing from the layout, or in no group, never appeared at all: 5 in Red Rising, 4 in Golden Son, **10 in Morning Star**, 7 in Iron Gold, 6 in Dark Age, 1 in Light Bringer. | Layouts are now a *hint*, not the source of truth. Unplaced group members get an extra row; people in no group land in an "Other Characters" cluster. Nobody is dropped. |
| 1.2 | **High** | Darrow showed as the red-haired miner for the first 11 chapters of **every** book, because "carved at chapter 12" ignored which book was selected. Lysander showed as a 10-year-old in Iron Gold/Dark Age/Light Bringer even though an adult portrait existed on disk (it was mapped to an id no book uses). | `getCharacterImage` / `isCharacterCarved` now take the book id. Transformations know which book they happen in; `eras` lets any character have a per-book portrait. |
| 1.3 | **High** | Spouse/sibling lines vanished whenever the "from" node sat to the right of the "to" node (the left handle is a target, not a source). Example: Narol ↔ Dale never drew. | Horizontal links always run left→right. |
| 1.4 | Med | Group positions were hard-coded x/y per book, so groups drifted apart with big dead zones, and **empty groups still drew their label** (Red Rising ch.1 showed four floating labels with no one under them). | Groups pack dynamically into rows; a group with no visible members isn't drawn. |
| 1.5 | Med | Viewport never re-fit after changing book/chapter; later books opened with rows cut off. Fit zoom was floored at 0.4 so tall canvases were clipped. | Re-fit on content change; zoom floor 0.1; rows use the 16:9 width. |
| 1.6 | Med | Layouts placed people who weren't in that group (Sevro/Victra inside "Republic Leadership"), and lineage rows were used for cohorts (Sevro/Roque drawn as *parents* of House Mars; Narol drawn as Dale's *child*). | Layout members are filtered by group membership; family trees are prioritised ahead of faction lists; Narol moved to his brother's generation; House Mars flattened; Dio & Loran added to Darrow's family. |
| 1.7 | Med | Header star field was regenerated with `Math.random()` on every render, so the stars jumped every keystroke in Search (ESLint `react-hooks/purity` error). | Generated once via lazy `useState`. |
| 1.8 | Low | Title crossfade ran `setState` inside an effect (ESLint error). | Moved into the book-change handler. |
| 1.9 | Low | Dead code: `BookSelector.tsx`, `ChapterSelector.tsx`, `App.css` (Vite template) were never imported. `octavia.png` is an orphan (books use `octavia-lune.png`). "Family Tree" button label wrapped to two lines. | Removed the dead files; `whitespace-nowrap` on the toggle. Orphan image left for you to delete. |

`tsc -b` and `eslint .` are both clean after the changes. Nothing is committed — review the diff with `git diff` in `book-character-app/`.

---

## 2. Portraits — polish, consistency, and ageing

### What's wrong with the current set
1. **Canon colour breaks** (the Colours are the series' visual grammar, so these read as "wrong" to any fan): Darrow-Gold has brown hair; the Jackal has brown hair *and* brown eyes in a modern business suit; Victra has platinum hair; Octavia has grey eyes; adult Lysander has grey eyes; Eo has amber eyes; Volga is rendered with literally jet-black glossy skin and elf ears (Obsidians are pale/ashen with black eyes).
2. **Inconsistent staging**: some portraits are tight busts, some chest-up, some full torso; backgrounds range from plain charcoal to starfields to blue sci-fi corridors; colour temperature swings warm/cool between neighbours. In an 80px circle this shows up as uneven crops and mismatched brightness across the grid.
3. **No ageing**: Darrow, Mustang, Sevro, Victra, Cassius are 16–23 in Books 1–3 and 33–38 in Books 4–6, yet each has one portrait. Only Lysander had two.
4. Root cause is in the generation scripts: every prompt ended in the same suffix but described background/lighting/framing ad hoc, and caste colours were often omitted.

### What I changed
- **Code**: `src/utils/characterImages.ts` now supports `eras` (per-book overrides) and book-aware transformations. Lysander already uses this (child → adult from Iron Gold on). Deanna, Pax au Telemanus (Morning Star ids) now map to their existing portraits instead of falling back to initials.
- **Script**: `scripts/generatePortraits.mjs` — 90 portraits (all 86 ids + era variants), **one locked style block** (framing, backdrop, key light, palette), and caste colour rules appended automatically so a Gold can't come out brown-haired. Era variants: `darrow-veteran`, `mustang-sovereign`, `sevro-veteran`, `cassius-veteran`, `victra-veteran`, plus the existing `lysander-adult`. Also adds the 4 characters that currently show an initial (Lilath, Harnassus, Aurae, and fixes Deanna/Pax-Telemanus by mapping).
  ```bash
  node scripts/generatePortraits.mjs --dry-run            # read the prompts
  OPENAI_API_KEY=... node scripts/generatePortraits.mjs   # ~90 images, DALL·E 3 HD ≈ US$8
  ```
  It prints the `eras:` lines to paste into `characterImages.ts` when done.

### Recommendation
Regenerate the **whole** set in one run rather than patching individual portraits — consistency comes from every image sharing the same staging, and mixing old and new styles will look worse than either alone. If you want to go further, generate a reference sheet first (Darrow, Mustang, Sevro) and feed those as image references to a model that supports them (gpt-image-1) so faces stay recognisable across eras.

---

## 3. Visual design recommendations (not applied — your call)

The body of the app is going for a restrained "Blood & Gold" premium-dark look, but several pieces pull against it:

1. **Header**: Orbitron in caps with a triple neon glow reads as a 2000s sci-fi game menu, not premium. Playfair Display is already loaded and declared as the display font but never used. **Suggest**: Playfair Display, mixed case, book colour used only as a thin rule under the title; drop the glow; keep the star field but at half the density.
2. **Control bar** does too much on one line (view toggle, count badge, book, chapter, progress %, search, filters). The progress bar/percent duplicates the chapter select. **Suggest**: one row = Book · Chapter · Search; move view toggle to the right; drop the percent; put filters into the search field as chips.
3. **Cards**: 80px circular portraits with a 2px caste ring are fine but the card has no information beyond name + alias, so the grid is a wall of near-identical tiles. **Suggest**: show `house` and the first line of the current description (2-line clamp) so scanning is useful; make the caste ring colour the *only* accent; drop the 0.5px top bar.
4. **Tree nodes**: name chips have a 2px caste-coloured border *and* a caste-coloured ring on the portrait — double-encoding. Keep the ring, make the chip neutral.
5. **Empty-state box** in the grid still uses a parchment-cream gradient from the old theme — the one light element in a dark UI.
6. **Filters**: "Group" filter applies to both views but Search only shows in Grid; unify.
7. React Flow attribution link stays unless you have a Pro licence.

If you want, I'll apply 1–5 in one pass; each is under an hour.

---

## 4. Card content accuracy

See `factcheck/*.md` (one report per book, with exact current → corrected text) and the summary below.

Every character card in all six books was checked claim-by-claim against the full novel text (grep-verified, with chapter boundaries reconstructed where the ebook lacked headings) and cross-checked against the Red Rising Wiki. **The cards were badly wrong**: roughly one in three progressive-info entries contained a factual error, and the mid-book chapter numbers in Golden Son and Iron Gold were systematically off by 4–20 chapters. All HIGH and MED corrections have been **applied to the data files**; LOW ones were applied when they fixed a fact, a chapter, or an invented alias.

| Book | Entries checked | Errors (HIGH / MED / LOW) | Worst offenders (now fixed) |
|---|---|---|---|
| Red Rising | 33 chars, 5 groups, 45 titles | 46 (17 / 18 / 11) | Titus's death (ch 29 by Cassius, not ch 25 by Proctors); Darrow drafted 10th not 1st; Pax in House Minerva, Jackal in House Pluto; Mustang/Jackal/Fitchner identity reveals leaked 2–5 chapters early; later-book surnames (Barca, Fabii) and "Deanna" don't appear in this book; Iron Gold spoiler on Pax's card |
| Golden Son | 30 chars, 9 groups, 52 titles | 78 (34 / 30 / 14) | Triumph betrayal placed at ch 47 (is ch 51); gala duel at ch 33 (is ch 12); Pliny/Leto/Tactus deaths wrong; invented "Octavia orders Bellona massacre"; Darrow "enslaved in mines" invented; **Roque's betrayal — the book's central twist — was missing entirely** |
| Morning Star | 31 chars, 12 groups, 66 titles | ~70 (27 / 26 / 17) | Octavia "killed by Cassius" (Darrow stabs her, ch 61–62); Ragnar's death 3 chapters late and a post-mortem scene; Antonia "captured/executed" invented (strangled by Aja ch 60); Victra's pregnancy is an Iron Gold detail; Jackal "nuke blackmail" framing invented; ch 48 mistitled; Epilogue missing |
| Iron Gold | 38 chars, 10 groups, 66 titles | 74 (34 / 26 / 14) | Nearly every mid/late event 10–20 chapters early (kidnapping ch 35/39 not 23; Ash Lord dies ch 60 not 46; Romulus executed ch 62 not 40); **Lysander's alias swapped with Cassius's** (Lysander = Castor au Janus, Cassius = Regulus); invented "Oracle creature/parasite", "Kavax cut off Atalantia's leg", Holiday as "Dux" |
| Dark Age | 26 chars, 10 groups, 93 titles | 71 (42 / 21 / 8) | **Sevro placed on Mercury "captured by Atlas" — he is on Luna all book, captured by Lilath and the Adrius clone (ch 55)**; Alexandar killed at ch 60 (survives to ch 80, shot by Lysander); Sefi's death and Fá's paternity leaked at ch 40–41 (ch 76); Orion "dies in evacuation" (Darrow kills her ch 15); invented Kalindora romance (she dies confessing, ch 90); Apollonius as Darrow's ally (he allies with Lysander); Atlas mis-aliased "The Abomination"; three chapter titles wrong |
| Light Bringer | 20 chars, 8 groups, 90 titles | 71 (27 / 32 / 12) | **Invented Prologue** (book starts at ch 1; 16 fields keyed to a chapter that doesn't exist); **Cassius's and Atlas's deaths (ch 84) missing**; Ajax credited to Darrow (killed by Victra, ch 30); Volsung Fá credited to Darrow (killed by Volga, ch 76); Apollonius listed on Darrow's crew (he fights for Lysander); Atalantia listed as Ajax's mother (she's his aunt) |

After the corrections a script validates all six files: every relationship target exists, no character has info before their first appearance, and nobody flips from dead back to alive. Remaining validator notes are cosmetic (family ties "revealed" before a character appears — never displayed) plus three characters awaiting portraits (Lilath, Harnassus, Aurae — included in the regeneration script).

### Things the fact-check surfaced that are *not* fixed (need your call)
1. **Missing important characters** (each report has a ranked list). Highest-impact omissions: **Cassius, Lilath, and the Abomination (the Adrius clone) in Dark Age**, **Ragnar Volarus and Lilath in Golden Son** (Ragnar is one of the book's most important new characters and has 130+ mentions), **Tactus and Proctor Apollo in Red Rising**, **Narol, Thistle, and the Howlers (Pebble/Clown/Screwface) in Morning Star**, **Tharsus au Valii-Rath, Publius, Gorgo, Helios in Iron Gold**, **Rhone ti Flavinius, Helios au Lux, Cicero au Votum, Athena, Holiday, Dido, Matteo in Light Bringer**. Adding them means new entries + portraits; I kept the roster fixed for this pass.
2. **Data-model gaps** the reports exposed: no `'Unknown'` colour (the Syndicate Queen is a masked figure listed as Pink); no in-law/uncle/aunt/betrothed relationship types (Narol↔Deanna and Atalantia↔Ajax are approximated); `progressiveNames` is only used for a handful of reveals but many cards show later-book surnames from chapter 1.
3. **Iron Gold chapter titles** use the source text's POV labels (e.g. "Ch 35: Lyria") rather than the published chapter titles (e.g. "Teardrop in the Door"). Accurate to the file you have, but the published names would read better.
