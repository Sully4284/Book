# Red Rising — Fact-Check

Data file audited: `book-character-app/src/data/redRising.ts`
Primary source: full text of *Red Rising* (Pierce Brown, 2014), chapter boundaries located by heading lines (Prologue = ch 0; "Helldiver" = ch 1 … "Rise" = ch 44). Secondary: Red Rising Wiki (fandom) via search snippets.
Method: every name/claim grepped against the novel; each hit mapped to its chapter. Quoted evidence is kept to a few words.

## Summary

- Character entries checked: **33** (all entries in the file) + 5 family groups + 45 chapter titles.
- Errors found: **46** — **HIGH: 17**, **MED: 18**, **LOW: 11**.
- Dominant error patterns: (1) `firstAppearance` too late for ~12 Institute characters (most of them are introduced in chs 15–18, before the Passage); (2) identity/parentage reveals placed at the wrong chapter (Mustang's Augustus identity is ch 43 not 41; the Jackal's parentage is ch 34; Fitchner as Sevro's father is ch 39, not 44); (3) three outright factual errors on major plot points — Titus's death (ch 29, killed by Cassius, not ch 25 by Proctors), Cassius's discovery of Darrow's secret (ch 33, not 28), Darrow's draft position (tenth, not first); (4) two characters placed in the wrong Institute House (Pax → Minerva; the Jackal → Pluto); (5) surnames/names imported from later books (Barca, Fabii, Deanna) that never appear in this novel; (6) one later-book spoiler (Pax's namesake son).

## Errors

### darrow
- **darrow** · `progressiveInfo[ch16].description` · CURRENT: "Enters the Institute under the identity of Darrow au Andromedus. Drafted first by House Mars." → CORRECTED: "Enters the Institute under the identity of Darrow au Andromedus. Drafted tenth overall by House Mars." · Evidence: ch 17 — "I am chosen tenth. Tenth out of one thousand." (Draft happens in ch 17 "The Draft", not ch 16; consider moving the entry to ch 17.) · **HIGH**
- **darrow** · `progressiveInfo[ch24].description` · CURRENT: "Leads a faction against Titus au Ladros within House Mars. Earns the nickname \"Reaper\" for his deadly efficiency." → CORRECTED: "Leads a faction against Titus au Ladros within House Mars. Already dubbed \"Reaper\" (from ch 21) for the curved slingBlade he chose as his weapon." · Evidence: ch 21 — "You look like a grain reaper" and Fitchner's "Prime, Reaper." The nickname comes from the slingBlade's shape in ch 21, not from efficiency in ch 24. · **MED**
- **darrow** · `aliases` · CURRENT: `'Darrow of Lykos'` → CORRECTED: remove (or replace with `'Son of Dale'`, ch 14 "I am Darrow, son of Dale"). · Evidence: the phrase "Darrow of Lykos" never occurs in the novel (0 hits). · **LOW**
- **darrow** · `relationships[narol]` · CURRENT: `type: 'ally', description: 'Uncle'` → CORRECTED: a family type (e.g. `type: 'uncle'` if the schema allows, else keep `ally` but this is a blood relative — see also mother-darrow/narol below). · **LOW**
- **darrow** · `progressiveInfo[ch3].description` "Son of a man who was hanged for the Dancer's Rebellion" — fine, but the ch 1 entry for `father-darrow` already exposes the same detail (see below). · LOW (noted under father-darrow)

### eo
- **eo** · `relationships[dio].revealedAtChapter` · CURRENT: `1` → CORRECTED: `3` · Evidence: Dio is first named in ch 3 — "his own wife, Dio, her sister". Dio's own `firstAppearance` is already 3, so the ch 1 reveal is inconsistent. · **MED**
- **eo** · `relationships[liam]` · CURRENT: `{ targetId: 'liam', type: 'sibling', revealedAtChapter: 1 }` → CORRECTED: either delete, or add a `liam` character entry (Red, firstAppearance 3) and set `revealedAtChapter: 3`. · Evidence: Liam is mentioned exactly once, ch 3 ("her brother Liam"); there is no `liam` entry in the roster, so this is a dangling `targetId`. · **HIGH** (broken reference)
- **eo** · `progressiveInfo[ch4].description` · CURRENT: "...proof that Mars has been terraformed..." → CORRECTED: "Shows Darrow a hidden garden open to the night sky and real stars, and asks him to fight for something more than the Laurel." · Evidence: ch 4 describes the sky and "roof of stars"; the word/idea "terraformed" and the 'Reds are slaves' conclusion is Dancer's reveal in ch 9. Mild early spoiler. · **LOW**

### kieran
- **kieran** · `progressiveInfo[ch3].description` · CURRENT: "Has a wife and twin children. Known to be more cautious than Darrow." → CORRECTED: "Has a wife and three-year-old twins, a son and a daughter." · Evidence: ch 3 — "Kieran's son and daughter … the twins". "More cautious" is not stated; ch 16 later calls him "too responsible". · **LOW**

### leanna
- **leanna** · `progressiveInfo[ch1].description` · CURRENT: "Darrow's sister. Tall and quiet like their mother." → CORRECTED: "Darrow's sister, who murmurs a lament at their father's hanging." and move "Tall and quiet like their mother" to the ch 6 entry. · Evidence: the description "Tall and quiet like my [mother]" is in ch 6, when Darrow sees her from the duct. · **LOW**

### mother-darrow
- **mother-darrow** · `name` · CURRENT: `'Deanna'` → CORRECTED: `"Darrow's Mother"` (or use `progressiveNames` if the name is to be surfaced later — it is never given in this book). · Evidence: "Deanna" has 0 hits in the novel; the name comes from later books/wiki (Deanna O'Lykos). · **MED**
- **mother-darrow** · `relationships[narol]` · CURRENT: `type: 'sibling', description: 'Brother-in-law'` → CORRECTED: `type: 'in-law'` (or `'ally'`) with description 'Brother-in-law'. · Evidence: Narol is Dale's brother (ch 3 "Narol's the best of my brothers", said by father). `sibling` is wrong. · **MED**
- **mother-darrow** · `progressiveInfo[ch1].description` · CURRENT: "...Makes blood soup from pitvipers." → CORRECTED: drop the soup detail from ch 1 (or move to ch 13). · Evidence: only mention is ch 13, Darrow reminiscing to Dancer — "blood soup out of the pitvipers". · **LOW**

### father-darrow
- **father-darrow** · `name` · CURRENT: `'Dale'` (shown from ch 1) → CORRECTED: add `progressiveNames: [{chapter:1, name:"Darrow's Father"}, {chapter:14, name:'Dale'}]`. · Evidence: the name Dale appears once, ch 14 ("son of Dale"). · **LOW**
- **father-darrow** · `progressiveInfo[ch1]` · CURRENT: full account of the Dancer's Rebellion, food rations, nine men hanged at chapter 1 → CORRECTED: ch 1 entry: "Hanged by the Grays when Darrow was six; Darrow did not cry." and move the Rebellion/nine-men/"Devil's Dance" details to a ch 3 entry. · Evidence: ch 1 only says "Grays hanged him"; the Rebellion, rations and "Nine men at once" are ch 3. · **MED**

### narol
- **narol** · `progressiveInfo[ch3].description` · CURRENT: "Taught Darrow to dance, including the forbidden Reaping Dance. Once the best dancer in Lykos." → CORRECTED: "Plays the zither at the Laurel feast; taught Darrow to dance. Only thirty-five but worn down by drink." · Evidence: ch 3 — "old now at thirty-five, plays his zither"; ch 7 — "when he taught me to dance". "Best dancer in Lykos" never appears (the "best dancer" line in ch 13 is Dancer talking about himself and Oikos). · **MED** (invented detail)
- **narol** · `progressiveInfo[ch7].description` · CURRENT (ch 7): "Revealed to be a secret agent for the Sons of Ares…" → CORRECTED: keep ch 7 as "Drugged Darrow at the wake and buried him alive so the Sons of Ares could dig him up." and move "Revealed to have been a Sons of Ares informer since before Darrow's father's death" to **ch 8**. · Evidence: ch 7 — "Narol did this. He drugged me. He buried me. But why?"; the informer confirmation is Dancer in ch 8 — "worked for us since before your father's death as an informer". · **MED**

### dancer
- **dancer** · `progressiveInfo[ch7].description` · CURRENT: "...A powerful man near Darrow's height but older, maybe in his forties." → CORRECTED: move the height/forties description to the ch 8 entry; ch 7 should only say he leads the Sons who dug Darrow up. · Evidence: "near enough my height … maybe in his forties" is ch 8. · **LOW**
- **dancer** · `progressiveInfo[ch8].description` · CURRENT: "His left arm and leg are crippled from pitviper bites." → CORRECTED: "His left arm hangs limp from nerve damage, and pitviper bite scars mark his neck." · Evidence: ch 8 — "arm on the left side … hangs limp. Nerve damage"; a "bad leg" is only mentioned in ch 13. · **LOW**
- **dancer** · `progressiveInfo[ch9].description` · CURRENT: "...Mars has been terraformed for 300 years and Reds are slaves, not pioneers." → CORRECTED: "Reveals the truth — Reds were sent to Mars five hundred years ago, the other Colors settled the surface three hundred years back, and the Reds have been slaves, not pioneers, ever since." · Evidence: ch 9 — "sent to Mars five hundred years ago"; "other Colors came … three hundred years back". · **MED**

### harmony
- **harmony** · `progressiveInfo[ch8].description/additionalDetails` · CURRENT: "...Trains Darrow physically." / "Lost someone dear to her - the unscarred part of her face reveals this pain." → CORRECTED: description: "Dancer's partner in the cell. Cold, and consumed by hatred for the Golds." (move "Trains Darrow in the gym beneath Mickey's club" to ch 12); delete the additionalDetails. · Evidence: training starts in ch 12 ("training with Harmony"); no passage mentions Harmony having lost someone — invented. · **MED**

### evey
- **evey** · `progressiveInfo[ch12].description` · CURRENT: "Never speaks but shows kindness to Darrow. Gives him a feather from her wings." → CORRECTED: "Rarely speaks, but tells Darrow he is beautiful when she sees his new Sigils, and secretly slips one of her feathers into his pocket." · Evidence: ch 12 — "\"You're beautiful,\" Evey says quietly"; "slip a feather". · **MED**
- **evey** · `progressiveInfo[ch10]` uses the name Evey; she is unnamed ("the winged girl") until ch 12. Consider `progressiveNames`. · **LOW**

### nero-augustus
- **nero-augustus** · `firstAppearance` · CURRENT: `5` → CORRECTED: `3` · Evidence: ch 3, Podginus awards the Laurel "on behalf of the ArchGovernor of Mars, Nero au Augustus". · **MED**
- **nero-augustus** · `relationships[jackal].revealedAtChapter` · CURRENT: `41` → CORRECTED: `34` · Evidence: ch 34, Fitchner: "Adrius is the son of our dear ArchGovernor Augustus." · **HIGH** (reveal lags 7 chapters)
- **nero-augustus** · `relationships[mustang].revealedAtChapter` · CURRENT: `41` → CORRECTED: `43` · Evidence: ch 43 — "Virginia au Augustus. Sister to the Jackal. Twin." · **HIGH** (spoiler two chapters early)
- **nero-augustus** · `progressiveInfo[ch41]` · CURRENT: chapter 41, "Father of both Mustang (Virginia) and the Jackal (Adrius)." → CORRECTED: split: ch 34 "Father of the Jackal, Adrius; the Proctors are rigging the game so his son wins." and ch 43 "Also father of Mustang — Virginia au Augustus, the Jackal's twin." · **HIGH**
- **nero-augustus** · `progressiveInfo[ch6].description` · CURRENT: "Orders Eo's execution with casual indifference. Darrow swears vengeance against him." → CORRECTED: "Attends Eo's trial in person and, fascinated, says 'Let her sing'; presides over her hanging with cold indifference." · Evidence: ch 5 — "Let her sing," he says to Podginus. No explicit oath of vengeance against Nero in ch 6. · **LOW**

### octavia-lune
- No factual errors. (Note: "Sovereign Consul" title appears ch 10; ch 2 only says "aged Sovereign" — acceptable.)

### fitchner
- **fitchner** · `progressiveNames[ch44]` · CURRENT: `{ chapter: 44, name: 'Fitchner au Barca' }` → CORRECTED: remove; `name` should be `'Fitchner'` throughout this book. · Evidence: "Barca" has 0 hits in the novel; the surname is revealed in *Golden Son* (wiki). · **MED**
- **fitchner** · `relationships[sevro].revealedAtChapter` · CURRENT: `44` → CORRECTED: `39` · Evidence: ch 39 — "\"You're Sevro's father,\" I say." · **HIGH** (wrong reveal chapter)
- **fitchner** · `progressiveInfo[ch44]` · CURRENT: chapter 44 "Revealed to be Sevro's father." → CORRECTED: chapter 39: "Darrow realizes from their shared coloring and manner that Fitchner is Sevro's father; Fitchner admits it and agrees to help against Apollo." · **HIGH**

### cassius
- **cassius** · `firstAppearance` · CURRENT: `17` → CORRECTED: `15` · Evidence: ch 15 ("The Testing") — "He calls himself Cassius"; "Cassius au Bellona, it reads. Son of Praetor Tiberius au Bellona". · **MED**
- **cassius** · `relationships[julian].revealedAtChapter` · CURRENT: `17` → CORRECTED: `18` · Evidence: Darrow only connects them in ch 18 — "they are brothers. Twins. Not identical." · **LOW**
- **cassius** · `progressiveInfo[ch28]` · CURRENT: chapter 28 "Discovers that Darrow killed Julian. Their friendship shatters." / "Stabs Darrow and leaves him for dead." → CORRECTED: chapter **33**: "Shown a holo by the Jackal's people proving Darrow killed Julian in the Passage. Duels Darrow, stabs him, and leaves him bleeding in the mud." · Evidence: ch 33 ("Apologies") — "A holo that shows you killing Julian, brother."; "Cassius leaves me bleeding … in the mud." Ch 28 ("My Brother") is about Titus being a Red. · **HIGH** (wrong chapter, spoils 5 chapters early)
- **cassius** · `progressiveInfo[ch21]` "Partners with Darrow to lead a faction" — the tribe split happens in ch 22 ("The Tribes"); minor. · **LOW**

### julian
- **julian** · `firstAppearance` · CURRENT: `17` → CORRECTED: `16` · Evidence: ch 16 — "\"Julian,\" he declares properly". · **MED**
- **julian** · `progressiveInfo[ch17].description` · CURRENT (ch 17): "Cassius's twin brother. Kind and gentle, more scholar than warrior." → CORRECTED: ch 16: "A polite, well-bred Gold who befriends Darrow on arrival; mentions an older brother already at the Institute." and reveal "Cassius's non-identical twin" at ch 18. · Evidence: ch 18 — "Twins. Not identical." · **MED**
- **julian** · `relationships[cassius].revealedAtChapter` · CURRENT: `17` → CORRECTED: `18`. · **LOW**

### sevro
- **sevro** · `firstAppearance` · CURRENT: `17` → CORRECTED: `16` · Evidence: ch 16 — "His name is Sevro, and I like his angle." · **MED**
- **sevro** · `progressiveNames[ch44]` · CURRENT: `{ chapter: 44, name: 'Sevro au Barca' }` → CORRECTED: remove; name stays `'Sevro'`. · Evidence: "Barca" never appears in this book. · **MED**
- **sevro** · `relationships[fitchner].revealedAtChapter` · CURRENT: `44` → CORRECTED: `39` (see fitchner). · **HIGH**
- **sevro** · `progressiveInfo[ch21].description` · CURRENT: "Lives alone in the wilderness, hunting wolves and wearing their skins. Called \"Goblin\" by the others." → CORRECTED: keep "Called 'Goblin'" at ch 21; move "drags a dead wolf into the castle and takes to wearing its skin" to ch 22. · Evidence: ch 21 — "Goblin"; ch 22 — "Sevro drags in a dead wolf"; wolfcloak by ch 26. · **LOW**
- **sevro** · `progressiveInfo[ch29].description` · CURRENT: "...Forms the core of the Howlers." → CORRECTED: move to ch 30: "Leads the Howlers — six wolf-cloaked lowDrafts Darrow forms under his tutelage." · Evidence: the Howlers are named in ch 30 — "them the Howlers … under Sevro's tutelage". · **MED**

### mustang
- **mustang** · `relationships[nero-augustus].revealedAtChapter` and `relationships[jackal].revealedAtChapter` · CURRENT: `41` → CORRECTED: `43` · Evidence: ch 43 — "she is the Jackal's twin sister." / "Virginia au Augustus." · **HIGH** (spoiler)
- **mustang** · `progressiveInfo[ch41]` · CURRENT: chapter 41 "Revealed to be Virginia au Augustus - daughter of the ArchGovernor and twin sister to the Jackal." → CORRECTED: chapter **43**, same text. (Note: the first name "Virginia" is overheard from a Minerva sentry in ch 26, but the Augustus surname/twin link is ch 43.) · **HIGH**
- **mustang** · `progressiveInfo[ch26].description` · CURRENT: "...Earns the nickname \"Mustang\" for her wild spirit. First encounters Darrow as an enemy." → CORRECTED: "A quick, clever Gold from House Minerva who bests Darrow and Sevro in a raid and taunts them; Darrow dubs her 'Mustang' on the spot." · Evidence: ch 26 — Darrow: "Lo … Mustang." · **LOW**
- **mustang** · `progressiveInfo[ch31].description` · CURRENT: "Her House falls. She becomes a more complex ally to Darrow." → CORRECTED: "House Minerva's fortress falls to Darrow's army; Mustang escapes into the wild rather than be enslaved." (Her alliance with Darrow begins ch 34, after she rescues him.) · **LOW**

### roque
- **roque** · `name` · CURRENT: `'Roque au Fabii'` → CORRECTED: `'Roque'` · Evidence: "Fabii" has 0 hits in the novel; the surname first appears in *Golden Son*. · **MED**
- **roque** · `firstAppearance` · CURRENT: `17` → CORRECTED: `18` · Evidence: ch 18 — "a boy named Roque who looks and speaks like a poet". · **MED**

### quinn
- **quinn** · `firstAppearance` · CURRENT: `22` → CORRECTED: `18` · Evidence: ch 18 — "I flirt with a girl named Quinn". · **MED**
- **quinn** · `progressiveInfo[ch22]` "Known for telling elaborate lies as jokes" — supported but in ch 23 ("good stories, most all of them certainly gilded lies"); shift to ch 23. · **LOW**

### lea
- **lea** · `firstAppearance` · CURRENT: `22` → CORRECTED: `20` · Evidence: ch 20 — "the limping girl, Lea". · **MED**

### pax
- **pax** · `house` · CURRENT: `'Mars'` → CORRECTED: `'Minerva'` · Evidence: ch 27 — Pax rides with Mustang's Minerva raiders ("Pax au Telemanus" he screams, charging Darrow); wiki: "a student of House Minerva". · **HIGH**
- **pax** · `firstAppearance` · CURRENT: `29` → CORRECTED: `26` · Evidence: ch 26 — "Someone named Pax seems a bloody nightmare." · **MED**
- **pax** · `progressiveInfo[ch29]` · CURRENT: chapter 29 "A massive Gold from House Mars. Incredibly strong and loyal. Becomes one of Darrow's closest allies." → CORRECTED: two entries — ch 27: "A gigantic Gold of House Minerva, Mustang's fiercest fighter; he laid Titus low and nearly kills Darrow before Darrow beats him with the slingBlade." and ch 35/36: "Captured when Minerva fell; after Mustang joins Darrow, Pax becomes his most loyal and devoted soldier." · Evidence: ch 27 fight; ch 35 — "the famous slingBlade I used to beat Pax". At ch 29 he is still an enemy. · **HIGH**
- **pax** · `progressiveInfo[ch41].additionalDetails` · CURRENT: "His sacrifice saves Darrow's life. Darrow and Virginia later name their son after him." → CORRECTED: "His sacrifice saves Darrow's life; Darrow swears to kill the Jackal for it." · Evidence: the son named Pax is from a later book (*Iron Gold*) — not in this novel. · **HIGH** (later-book spoiler)
- **pax** · `relationships[darrow].revealedAtChapter` · CURRENT: `29` → CORRECTED: `35` (friend), with an earlier `enemy` at 27 if desired. · **MED**

### titus
- **titus** · `firstAppearance` · CURRENT: `20` → CORRECTED: `18` · Evidence: ch 18 — "a tall brute named Titus whose neck is as thick as…". · **MED**
- **titus** · `progressiveInfo[ch24].description` · CURRENT: "Leads savage raids against House Ceres. Uses violence and terror as tools. Darrow suspects he is actually a Red like himself." → CORRECTED: "Leads savage raids on House Ceres from the sixth day, using rape and terror as tools." (drop the Red suspicion). · Evidence: Ceres raids ch 24 ("raid House Ceres from the sixth day on"); Darrow only realizes Titus is a Red in ch 28 — "Titus said bloodydamn. No Gold says that. … Titus is a Red." · **HIGH** (spoiler 4 chapters early)
- **titus** · `progressiveInfo[ch25]` · CURRENT: chapter 25, "His brutality leads to conflict with Darrow. Executed by the Proctors for excessive violence." status `dead`; additionalDetails "Confirmed to be a Red who was transformed like Darrow…" → CORRECTED: ch 25: "Captures and mutilates Quinn, sending her ear to Darrow; open war with Darrow's tribe." status `alive`. New ch 28: "Captured and beaten; Darrow realizes from his slip of 'bloodydamn' that Titus is a carved Red like himself." status `alive`. New ch 29: "Sentenced to death by Darrow before the united House; he demands a duel and is killed by Cassius with straight blades. Darrow buries him in a grove by the river." status `dead`, additionalDetails: "Darrow infers he was a Red carved like himself; the Sons of Ares never confirm it in this book." · Evidence: ch 29 — "I sentence Titus au Ladros to death"; "Cassius steps forward with a straight blade"; "Titus is long dead". No Proctor execution. · **HIGH**

### antonia
- **antonia** · `firstAppearance` · CURRENT: `20` → CORRECTED: `15` · Evidence: ch 15 — "No wonder Antonia sneered your way." (full name "Antonia au Severus" in ch 18). · **MED**
- **antonia** · `progressiveInfo[ch20].description` "A tall, manipulative Gold…" — fine ("Tall Antonia", ch 22). No change.
- **antonia** · `progressiveInfo[ch32].description` · CURRENT: "Betrays House Mars. Her treachery causes significant losses." → CORRECTED: "Defects with Vixus and Cassandra, taking House Mars slaves and armed with Proctor-supplied nightOptics; murders Lea to bait Darrow, then never returns to the castle." · Evidence: ch 32 — "I will cut little Lea's throat"; "Antonia never returned to our castle. Neither did her henchmen, Vixus…". · **LOW** (vague, not wrong)

### jackal
- **jackal** · `house` · CURRENT: `'Minerva'` → CORRECTED: `'Pluto'` · Evidence: ch 41 — "I find his Pluto ring"; ch 32 — Lilath arrives as "an emissary from House Pluto"; wiki: Primus of House Pluto. · **HIGH**
- **jackal** · `firstAppearance` · CURRENT: `41` → CORRECTED: `27` · Evidence: ch 27 — Mustang: "My Proctor calls him the Jackal." He is discussed constantly from ch 29 onward. · **HIGH**
- **jackal** · `progressiveInfo[ch41].description` · CURRENT: "The cunning and ruthless leader of House Minerva's forces. Son of the ArchGovernor. Twin brother to Mustang." → CORRECTED: split: ch 27: "A feared, unseen Primus in the south whose own Proctor calls him the Jackal." ch 34: "Adrius au Augustus, Primus of House Pluto and son of the ArchGovernor — the Proctors are rigging the game for him." ch 41: "Finally met in person: small, weak, brilliant, and utterly amoral; kills Pax to get at Darrow and saws off his own trapped hand to escape." ch 43: "Mustang's twin brother." · Evidence: ch 34 Adrius line; ch 41 — "mostly cauterized stump"; ch 43 twin reveal. · **HIGH**
- **jackal** · `relationships[mustang].revealedAtChapter` · CURRENT: `41` → `43`; `relationships[nero-augustus].revealedAtChapter` · CURRENT: `41` → `34`. · **HIGH**

### vixus
- No factual errors found. (ch 23 beating confirmed: "force of a sledgehammer strike"; "I did not kill him.")

### ugly-dan
- No factual errors found (ch 2 "old replacement model" arm; pulled off "the frontline back in Eurasia"; ch 5 arrest at the Webbery).

### podginus
- **podginus** · `progressiveInfo[ch5].description` · CURRENT: "Presides over Eo's trial and execution. Shows no mercy." → CORRECTED: "Presides over Eo's trial with florid speeches meant to impress the ArchGovernor; awkwardly pleads that the girl acted alone." · Evidence: ch 5 — "trying to impress"; "we find the girl alone in her zealotry". · **LOW**

### Family groups
- **familyGroups[house-mars]** · `members` · CURRENT: includes `'pax'` → CORRECTED: remove `'pax'` (House Minerva). · **HIGH**
- **familyGroups[sons-of-ares]** · `members` · CURRENT: `['dancer','harmony','mickey','evey','matteo','narol']` → CORRECTED: `['dancer','harmony','narol']`; Mickey is a hired Violet Carver (not a Son — he works for money, ch 11 "It doesn't matter what Ares wants"), Evey is his creation, Matteo a hired tutor. Consider a separate group "Darrow's Transformation Team" for mickey/evey/matteo. · **LOW**

## Missing important characters

Ranked by prominence in this book (grep hit counts in parentheses):
1. **Tactus au Valii-Rath** (Gold, House Diana → Darrow's army; ~78 mentions, chs 30–44). Major lieutenant, whipping scene; returns in later books.
2. **Proctor Apollo** (Gold; ~100+ mentions). Chief antagonist among the Proctors; killed by Darrow in ch 38 "The Fall of Apollo".
3. **Proctor Jupiter** (Gold; chs 34–43). Second Proctor Darrow fights; taken down by Sevro (ch 43).
4. **Ares** (leader of the Sons of Ares; masked, referred to from ch 3; Dancer denies being him in ch 8). Central to the rebellion framing.
5. **Milia** (Gold, House Diana; Darrow's lieutenant, chs 35–44).
6. **Nyla** (Gold, House Ceres; lieutenant, chs 36–44).
7. **Pollux** (Gold, House Mars; Titus's man, saves Cassius; chs 21–43).
8. **Thistle, Clown, Screwface, Weed, Pebble** (Gold, House Mars lowDrafts — the Howlers; chs 18–44). At minimum Thistle (~29 mentions).
9. **Lilath au Faran** (Gold, House Pluto; the Jackal's lieutenant, chs 32–43).
10. **Priam au Caan** (Gold, House Mars; the top draft pick killed by Cassius in the Passage, chs 18–24).
11. **Cassandra** (Gold, House Mars; Antonia's follower, defects with her).
12. **Tamara** (Gold, Primus of House Diana, ch 30).
13. Mentioned-only but notable: **Lorn au Arcos** (Rage Knight, ch 17/20/44), **Tiberius au Bellona** (Cassius's father, ch 15), **Lana** (Narol's daughter, ch 10), **Eo's parents**, **Dago** (Gamma Helldiver), **Barlow**, **Bridge** (Gray), **Ralph** (Son of Ares).

## Chapter title issues

None. All 45 headings (Prologue + 44) in the novel match the `chapters` array exactly, in order: Helldiver … Rise. (The novel uses a curly apostrophe in "Titus's War" / "The Proctor's Bounty"; the file's straight apostrophe is fine.) Part divisions (I: Slave, chs 1–6; II: Reborn, 7–19; III: Gold, 20–33; IV: Reaper, 34–44) are not represented in the file — optional addition.

## Verified-correct notes (brief)

- Darrow: Helldiver of Lambda, Lykos (ch 1); "youngest anyone can remember" (ch 1); cuts Eo down and buries her (ch 6); drugged/buried by Narol, dug up by Sons (ch 7); carved by Mickey (chs 11–12); kills Julian in the Passage (ch 19). Alias "Darrow au Andromedus" correct (he refuses "Caius", ch 13).
- Eo: "Little Eo" (ch 1), "Persephone" (from ch 8); sings in ch 5; hanged in ch 6, Darrow pulls her feet; broadcast is hacked to show her (ch 6).
- Kieran three years older (ch 1); Leanna in the Webbery/duct (ch 6); Dio "twin in looks if not birth" (ch 3), receives Eo's last words (ch 6); Loran = Narol's son, "bent a knee" to Eo at fourteen (ch 3).
- Narol = headTalk (ch 1); informer "since before your father's death" (ch 8, Dancer).
- Dancer from Tyros, forties, limp left arm, neck scars (ch 8); Harmony steam-burned half face (ch 7); Mickey thin, black hair, twelve fingers, Violet (ch 10), the Grove and its pills (ch 12); Evey's white eagle wings appear ch 10; Matteo a tall Pink, former "slave for carnal pleasures", corrects mine-slang (ch 13).
- Octavia au Lune: aged Sovereign on the HC, crescent scar on right cheekbone (ch 2). Nero: scar on right cheekbone, Peerless Scarred (ch 5).
- Fitchner introduced ch 17 as Proctor of Mars; Cassius is a Bellona (ch 15); Quinn "the fastest of Mars" (ch 24); Lea "limping"/"meekly" (chs 20–22), killed by Antonia, cairn built (ch 32); Sevro was the last draft pick (wiki, 99th) — file's "picked last" OK; Mustang is House Minerva (ch 26); Vixus's ch 23 beating; Ugly Dan and Podginus details; Titus raids Ceres (ch 24); Pax killed by the Jackal while shielding Darrow (ch 41).
- House groupings for Bellona and Augustus are correct.
