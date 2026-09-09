# Golden Son — Fact-Check

Data file audited: `/Users/ryansolomon/Downloads/Sully Content/Claude Projects/Book Project/book-character-app/src/data/goldenSon.ts`
Primary source: `Golden Son by Pierce Brown.txt` (chapter headings located by line number; ch0 = Prologue body starting at the "man came from the sky" paragraph). Secondary: red-rising.fandom.com (search snippets; full pages were not fetched).

Method: every character name, alias, and factual claim was grepped against the novel text and mapped to its chapter by line number. Chapter numbers below refer to the novel's own numbering (matches the file's `chapters` array).

## Summary

- Entries checked: 30 characters, 9 family groups, 52 chapter titles.
- Errors found: 78 (HIGH 34, MED 30, LOW 14).
- Systemic problems driving most HIGH errors:
  1. **The Triumph betrayal is chapter 51 ("Golden Son"), not chapter 47 ("Free").** Every "ch47" Triumph entry (Darrow, Sevro, Aja, Lorn, Pliny, Victra, Agrippina, Antonia, Jackal, Nero, Fitchner) is misplaced by 4 chapters, and ch47 is actually Darrow visiting the Pot in Lykos.
  2. **The Luna gala duel/massacre is chapter 12 ("Blood for Blood"), not chapter 33 ("A Dance").** Every "ch33" entry (Darrow, Cassius, Julia, Octavia, Aja, Quinn, Roque, Sevro, Leto) is wrong. Quinn is wounded in ch18 ("Bloodstains"), not at the gala.
  3. **Lorn is met in ch28/29 on Europa, not ch20.** Tactus is killed by Lorn in ch29, not ch32, and not for "attempting to rape a Pink" (invented).
  4. **Pliny dies in ch35 ("Teatime"), not ch47.**
  5. **The "Octavia orders the massacre of House Bellona except Cassius and Julia" storyline is invented.** In the text the Bellona are destroyed by Augustus's forces after the Rain; their heads are on pikes at Darrow's Triumph, and Cassius blames Darrow ("You killed my family... the children"). Julia's survival is not stated in this book.
  6. **Fitchner is revealed as Ares in ch42 (to Darrow) and ch46 (to Sevro), not ch47, and dies offscreen before ch51** (his head is in the Triumph box).
  7. Several invented details: Mind's Eye, Dux, SIB databases, Daxo's weapon collection/Milton, Agrippina's asteroid blockade lesson and "200+ leechCraft", Tactus "The Rake", Karnus breaking Claudius's spine, Darrow enslaved in the mines at the end.
  8. The Jackal's orchestration of Claudius's death is a **ch51 reveal**, leaked at ch4.

## Errors

### karnus
- **karnus** · progressiveInfo[ch3].additionalDetails · CURRENT: `His fine list for murder stretches longer than an arm. Killed Claudius au Augustus by breaking his spine over his knee.` → CORRECTED: `His list of fines paid for murder stretches longer than an arm. Once broke a Luneborn Gold's spine over his knee at a Pearl club; his true reputation comes from killing Claudius au Augustus, the ArchGovernor's favorite son and heir, in a duel.` · Evidence: ch3 "broke the spine of a fancy Luneborn Gold over his knee after the brat thought to splash a drink"; "true reputation comes from killing Claudius". Spine-breaking victim was not Claudius. · **HIGH**
- **karnus** · progressiveInfo[ch3].description · CURRENT: `Ambushes Darrow in the Academy garden with seven Bellona relatives.` → CORRECTED: `Ambushes Darrow at the Academy hot spring with six Bellona relatives ("Seven Bellona" in total).` · Evidence: ch3 "Seven Bellona," I chuckle — Karnus plus six. Location is a hot spring on the Academy asteroid, not a garden. · LOW
- **karnus** · progressiveInfo[ch42].description · CURRENT: `Confronts Darrow during the Lion's Rain battle. Wounds Darrow severely but is ultimately defeated.` → CORRECTED: `Aboard the Sovereign's shuttle fleeing Agea after the Iron Rain, Karnus charges the captive Darrow. He cuts through Darrow's collarbone but Darrow puts a razor through his stomach and beheads him.` · Evidence: ch42 "put my razor through his stomach... cut off his head"; "It cut through my collarbone". Not during the Rain itself; the term "Lion's Rain" never appears in the novel (it's a wiki coinage). · MED
- **karnus** · progressiveInfo[ch42].additionalDetails · CURRENT: `Stabbed through the chest and decapitated by Darrow in combat.` → CORRECTED: `Stabbed through the stomach and decapitated by Darrow; Fitchner keeps the footage.` · Evidence: ch42 "through his stomach"; ch51 "Fitchner kept the footage of my slaying of Karnus". · LOW
- **karnus** · missing progressiveInfo · Add ch12: `At the Luna gala melee, beheads Leto au Augustus after the Jackal secretly paralyzes Leto with a poisoned stylus.` · Evidence: ch12 "before Karnus chops off his head"; "the Jackal tucking his silver stylus into his sleeve". · MED

### tiberius-bellona
- **tiberius-bellona** · progressiveInfo[ch42] · CURRENT: `Killed during the Lion's Rain battle. His head is later mounted on a pike in Agea.` (chapter 42, status dead) → CORRECTED: chapter 38, status `unknown`, description `Commands the Bellona fleet from the flagship Warchild during the Iron Rain; Telemanus leechCraft board his ship.` and add chapter 51, status `dead`: `Dead by the time of Darrow's Triumph in Agea: the heads of Imperator Bellona and his brothers and sisters are displayed on pikes in the parade.` · Evidence: ch38 "Warchild is festooned with leeches"; "I will not capture Imperator Bellona. The Titans will do that"; ch51 "heads of Imperator Bellona and his brothers and sisters adorn pikes". Death is never shown on page (wiki: killed by Kavax aboard Warchild). · **HIGH**
- **tiberius-bellona** · progressiveInfo[ch1].description · CURRENT: `Head of House Bellona and Imperator of the Sixth Fleet. Father to Cassius, Julian, Karnus, and six other children.` → CORRECTED: `Head of House Bellona and an Imperator of the Society's fleet. Father to Cassius, Julian, Karnus and their many siblings.` · Evidence: "Sixth Fleet" and "six other children" do not appear in the text. · LOW
- **tiberius-bellona** · firstAppearance/naming · CURRENT: `firstAppearance: 1` → CORRECTED: `firstAppearance: 0` (present unnamed as "Cassius with his father" in the Prologue; called "Imperator Bellona" ch12; first named "Tiberius" ch36). · Evidence: Prologue "Cassius with his father and siblings"; ch36 "Imperator Tiberius au Bellona". · LOW

### julia-bellona
- **julia-bellona** · firstAppearance · CURRENT: `3` → CORRECTED: `5` · Evidence: only named once in the novel, ch5: "his mother, Julia au Bellona, has sat at the long table". ch1 has only "The family wants my heart on a plate". · MED
- **julia-bellona** · progressiveInfo[ch3] chapter · CURRENT: `chapter: 3` (silver tray story) → CORRECTED: `chapter: 5` · Evidence: ch5 "semicircular lid of the silver tray". · MED
- **julia-bellona** · progressiveInfo[ch33] · CURRENT: `Breaks duel protocol to save Cassius during his fight with Darrow, triggering the Gala Massacre and the Martian Civil War.` → CORRECTED: chapter 12: `Present at the Sovereign's gala on Luna when Darrow duels Cassius. After Darrow severs Cassius's sword arm she screams for Darrow's death; it is the Sovereign who halts the duel, and the melee erupts when Cagney au Bellona steals a razor.` · Evidence: ch12 "the Sovereign raises a hand. 'Hold!'"; "'Kill him!' screams Cassius's mother"; "the razor Cagney stole". Julia did not intervene physically. · **HIGH**
- **julia-bellona** · progressiveInfo[ch51] · CURRENT: `One of only two Bellona survivors after Octavia orders the massacre of House Bellona.` / `Spared along with Cassius as part of the Sovereign's deal with the Jackal.` → CORRECTED: status `unknown`, description `Fate not stated. House Bellona is destroyed after Augustus's victory on Mars; Cassius accuses Darrow of killing his entire family.` · Evidence: ch51 "You killed my family, Darrow. All of them... But the children?"; heads on pikes at Augustus's Triumph. No Octavia-ordered massacre exists in the text; Julia's survival is a later-book detail. · **HIGH**

### octavia
- **octavia** · firstAppearance · CURRENT: `14` → acceptable for in-person appearance, but she is named "Octavia au Lune" in ch7 and referenced as "the Sovereign" from ch4. Suggest `7` if mentions count. · LOW
- **octavia** · progressiveInfo[ch33] · CURRENT: `Manipulates the conflict between Augustus and Bellona from behind the scenes. Orders the Gala Massacre.` → CORRECTED: chapter 12: `Presides over the Summit gala on Luna. Shows open favoritism to the Bellona by halting Darrow's duel with Cassius; the resulting brawl shatters the peace between the houses.` and chapter 18: `At a private dinner tries to force Darrow's hand by holding Augustus; Aja acts on her whispered orders and Darrow's party fights its way off Luna.` · Evidence: ch12 "The Sovereign reveals her favoritism"; "Shouts boom as the Sovereign calls for peace"; ch18 "The Sovereign is speaking in Aja's ear". She did not order a massacre. · **HIGH**
- **octavia** · progressiveInfo[ch51].description · CURRENT: `Makes a deal with the Jackal to eliminate both Augustus and Bellona threats. Orders the massacre of House Bellona except Cassius and Julia.` → CORRECTED: `Her secret alliance with the Jackal and Roque is revealed at Darrow's Triumph. Her Praetorians, Aja and Cassius seize Darrow alive under her orders ("Dissection"); she wanted Augustus taken alive too, but the Jackal shoots him.` · Evidence: ch51 "the Sovereign's orders were clear... Dissection"; Aja: "The Sovereign needed him to talk down the Outer Rim!" · **HIGH**
- **octavia** · aliases `Grandmother` — fine (Lysander, ch19). Verified.

### lysander
- **lysander** · progressiveInfo[ch14].description · CURRENT: `About 10 years old. Has extraordinarily bright golden eyes.` → CORRECTED: `No older than eight. His eyes are beyond gold, almost yellow crystal.` · Evidence: ch14 "No older than eight, but so very composed"; "eyes are beyond gold. Almost a yellow crystal". · MED
- **lysander** · progressiveInfo[ch14].additionalDetails · CURRENT: `Being groomed by Octavia. Taught the Mind's Eye technique. Observant and calculating beyond his years.` → CORRECTED: `Being groomed by Octavia and guarded by Aja. Observant and composed beyond his years; also the grandson of Lorn au Arcos.` · Evidence: "Mind's Eye" appears nowhere in the novel (invented); ch14 "I did not know the boy was Lorn's grandson". · **HIGH**
- **lysander** · aliases `The Heir` — not used in text; Dramatis calls him "heir to House Lune". LOW

### aja
- **aja** · aliases `The Fury` — fine. · progressiveInfo[ch14].description · CURRENT: `The Sovereign's chief bodyguard and Dux. Olympic Knight known as the Protean Knight. One of the three Furies.` → CORRECTED: `The Sovereign's favorite killer and bodyguard. Olympic Knight — the Protean Knight. One of the Furies, the sisters Octavia trusts above all others.` · Evidence: "Dux" never appears in the novel (invented); ch14 "the Protean Knight to be technic"; ch11 "Furies—sisters she trusts above all others". · MED
- **aja** · progressiveInfo[ch14].additionalDetails · CURRENT: `Largest and darkest of the Fury sisters. Extremely muscular - built like a tank. Former pupil of Lorn au Arcos.` → CORRECTED: `A powerful panther of a woman with skin duskier than her siblings' and slitted pupils. Lorn au Arcos's last student before Darrow.` · Evidence: ch14 "powerful panther of a woman with skin duskier than her siblings', and eyes with slitted pupils"; "She was Lorn's last student before me". "Largest"/"tank" unsupported. · LOW
- **aja** · progressiveInfo[ch33] · CURRENT: chapter 33 `Grievously wounds Quinn during the Gala Massacre` → CORRECTED: chapter 18: `At the Sovereign's dinner on Luna, seizes Quinn by the hair and smashes her skull with an armored fist as bait to draw Darrow out.` · Evidence: ch18 "She grabs Quinn's hair... Armored fist on bone. Four times"; "Quinn is bait. Aja is the hook." · **HIGH**
- **aja** · progressiveInfo[ch47] · CURRENT: chapter 47 `Defeats Darrow in combat during the Triumph betrayal, but Fitchner (Ares) rescues him before she can finish.` → CORRECTED: chapter 42: `Aboard the Sovereign's shuttle with the captured Darrow. Octavia orders his head taken; before Aja can act, Fitchner reveals himself as Ares and escapes with Darrow.` and add chapter 51: `Lands with Praetorians and Cassius at Darrow's Triumph, closes her mentor Lorn's eyes, and carries Darrow off alive on the Sovereign's orders.` · Evidence: ch42 "'Aja, cut off his head'"; "'Fitchner!' the Sovereign roars. 'TRAITOR!'"; ch51 "Aja bends over Lorn's body... closing her mentor's eyes". Aja never defeats Darrow in single combat in this book. · **HIGH**
- **aja** · missing ch29: `Leads the Sovereign's strike on Lorn's home on Europa in league with Pliny.` · Evidence: ch35 Pliny: "Aja said she would kill you on Europa". · MED

### moira
- **moira** · firstAppearance · CURRENT: `14` → CORRECTED: `35` · Evidence: "Moira" occurs only in ch35 (Teatime); she is not present or named in ch14. · **HIGH**
- **moira** · progressiveInfo[ch14] · CURRENT: chapter 14, `...Described as a "puffy pastry of a woman" - the smartest of the three sisters.` + additionalDetails `Oversees Society Intelligence Bureau databases. Manages psychological profiles on key individuals.` → CORRECTED: chapter 35: `The Sovereign's chief Politico and one of the Furies. Sits at Pliny's side negotiating for Octavia when Darrow storms the meeting. "A puffy pastry of a woman" next to Aja, but her sweet smile is "half again as sinister as her sister's razor."` additionalDetails: remove (invented). · Evidence: ch35 "the Politico, Moira... puffy pastry of a woman". No SIB/psych-profile text exists; "smartest" is unsupported. · **HIGH**
- **moira** · relationships octavia/aja `revealedAtChapter: 14` → `35`. · MED

### lorn
- **lorn** · firstAppearance · CURRENT: `20` → CORRECTED: `28` (in person; first named ch3, his training of Darrow explained ch6). · Evidence: ch20 contains zero mentions of Lorn; ch28 "I watch the former Rage Knight, Lorn au Arcos, lean over the..."; ch3 "In the words of Lorn au Arcos"; ch6 "his form of kravat, the Willow Way". · **HIGH**
- **lorn** · progressiveInfo[ch20] → move to chapter 28; description OK except `Lives in retirement on Europa` fine; additionalDetails `Grizzled older man with grey hair and beard. Thick hands marred with scars.` is unverified in text (LOW). Also change `Taught both Aja and Darrow the Willow Way` — fine (ch6, ch14). · MED (chapter)
- **lorn** · relationships darrow `mentor, revealedAtChapter: 20` → `6` (ch6 states Lorn trained Darrow); aja `mentor, revealedAtChapter: 20` → `14`; lysander `grandparent, revealedAtChapter: 20` → `14`. · Evidence: ch14 "the boy was Lorn's grandson. My teacher's..." · MED
- **lorn** · progressiveInfo[ch32] · CURRENT: chapter 32 `Executes Tactus au Rath for breaking his oath and attempting to rape a Pink.` → CORRECTED: chapter 29: `After Tactus (now fighting for the Bellona) holds Lorn's grandchildren hostage and then surrenders to Darrow, Lorn kills him with an ion-dagger once the children are gone: "Now that the children are gone, consequences."` · Evidence: ch29 "lurches forward four times into Tactus's armpit"; "an old man killing a young one". No rape attempt exists. · **HIGH**
- **lorn** · progressiveInfo[ch47] · CURRENT: chapter 47 → CORRECTED: chapter 51, description: `Murdered at Darrow's Triumph: Lilath, disguised as a Pink, cuts his throat from behind with a pulseDagger (he loses four fingers blocking it) and the Jackal finishes him with a blade to the belly. He never drew his razor.` · Evidence: ch51 "Four fingers fall to the ground"; "slowly puts a blade into his belly"; "He never even drew the weapon." · **HIGH** (chapter)

### kavax
- **kavax** · firstAppearance · CURRENT: `25` → CORRECTED: `12` · Evidence: ch12 "Kavax, Daxo's father, roars... stroking his forked red beard and the large pet fox". · **HIGH**
- **kavax** · progressiveInfo[ch25] → chapter 12 (or add a ch12 entry). `Wields a blade as big as Darrow` → `Wields a razor half the size of Darrow's body` (ch12 "razors half the size of my body"). Also add: bald head engraved with golden angels (ch12). · LOW
- **kavax** · relationships daxo/pax/mustang `revealedAtChapter: 25` → `12`. · MED

### daxo
- **daxo** · firstAppearance · CURRENT: `25` → CORRECTED: `12` · Evidence: ch12 "Daxo au Telemanus steps forward. Pax's elder brother, great boulder of a man". · **HIGH**
- **daxo** · progressiveInfo[ch25].description · CURRENT: `Heir and eldest son of Kavax. 7'4" tall but thinner than his brother Pax. Serves as Praetor for House Augustus.` → CORRECTED: `Heir and eldest son of Kavax. A great boulder of a man like his father, bald head engraved with golden angels, sleepy eyes under swirling eyebrows. A Praetor of House Augustus.` · Evidence: ch12 text above. The 7'4"/thinner detail is from the wiki (later books), not this novel; "thinner" contradicts "great boulder of a man". · MED
- **daxo** · progressiveInfo[ch25].additionalDetails · CURRENT: `Collects exotic weapons. Well-read in classical literature including Milton. More intellectual than his brother.` → CORRECTED: `Soft-voiced and always smiling; sucks on cinnamon sticks. Said to have bitten off two of his father's fingers as a child.` · Evidence: ch25 "his son, Daxo, bit them off as a child"; "Daxo sucks on a stick of cinnamon". No weapons collection; Milton is quoted by the Jackal (ch7, ch51), not Daxo. · **HIGH** (invented)
- **daxo** · relationships kavax/pax `revealedAtChapter: 25` → `12`. · MED

### victra
- **victra** · aliases `The Julii Lancer` → not a real alias; she is a "lancer of House Augustus" (Dramatis). Suggest remove or replace. · LOW
- **victra** · progressiveInfo[ch37] · CURRENT: `Convinces her mother Agrippina to switch sides during the Lion's Rain, becoming critical to victory against the Bellona.` → CORRECTED: remove; replace with chapter 51 text: `Has brought her mother and Antonia back into the Augustus fold after the war on Mars (Antonia helped take Thessalonica from the Bellona).` · Evidence: Agrippina is listed among the enemy in ch36 and never mentioned in ch37-50; ch51 "She's brought her mother into the Augustus fold, along with Antonia". Invented. · **HIGH**
- **victra** · progressiveInfo[ch47] · CURRENT: chapter 47, status `alive`, `Shot in the back by her half-sister Antonia during the Triumph betrayal.` / `Survives the assassination attempt despite severe injuries.` → CORRECTED: chapter 51, status `unknown`: `Shot twice in the spine by Antonia at Darrow's Triumph. Crawls to Darrow protesting "I didn't know"; her eyes close as he is carried away, and Cassius counts her among the dead.` Remove `Survives...` (Morning Star spoiler). · Evidence: ch51 "fires two rounds into Victra's spine"; "Her eyes have closed"; Cassius: "Lorn. Victra. They deserved better than to die". · **HIGH**
- **victra** · relationships sevro `friend, revealedAtChapter: 30` → `51` (or drop). · Evidence: neither Sevro nor Victra appears in ch30; the hint is ch51 "'You like her,' I tease." · MED

### agrippina
- **agrippina** · firstAppearance · CURRENT: `36` → CORRECTED: `15` (first named; she is waiting on the Sovereign, ch15). In person only ch51. · Evidence: ch15 "Agrippina au Julii has been kept waiting long enough." · MED
- **agrippina** · progressiveInfo[ch36].additionalDetails · CURRENT: `Taught Victra how to blockade a planet with asteroids and gravity haulers.` → CORRECTED: remove (invented); replace with `Her betrayal of Augustus early in the war depleted his fleet; by the eve of the Iron Rain she is counted among his enemies alongside Octavia and the Bellona.` · Evidence: ch25 "it was her betrayal that depleted Augustus's fleet"; ch36 list of enemies; no "blockade"/"hauler" text exists. · **HIGH**
- **agrippina** · progressiveInfo[ch37] · CURRENT: `Convinced by Victra to betray the Bellona during the Lion's Rain. Unloads 200+ leechCraft into the Bellona fleet's core.` → CORRECTED: remove. Replace with chapter 51: `Back in the Augustus fold by the time of the Triumph, brought over by Victra.` · Evidence: no such event; ch51 as above. · **HIGH** (invented)
- **agrippina** · progressiveInfo[ch47] · CURRENT: chapter 47 `Shot in the head by her own daughter Antonia` → CORRECTED: chapter 51 `Shot twice in the neck by her own daughter Antonia at Darrow's Triumph.` · Evidence: ch51 "Two more into her mother's neck". · **HIGH**

### pliny
- **pliny** · progressiveInfo[ch31].description · CURRENT: `Betrays Nero and Adrius to the Sovereign Octavia, helping arrange their capture at Ganymede.` → CORRECTED: `Launches a coup while Darrow is on Europa: arrests the Jackal, seizes control of the Augustus fleet, declares Darrow dead, and opens negotiations to hand Darrow to the Sovereign.` · Evidence: ch31 Mustang: "Pliny has begun a coup. He arrested my brother"; "Pliny wants me still, and he wants Darrow for the Sovereign"; ch35 "Aja said she would kill you on Europa." Nero is not captured at Ganymede. · MED
- **pliny** · progressiveInfo[ch47] · CURRENT: chapter 47 → CORRECTED: chapter 35: `Darrow crashes his peace talks with the Sovereign's envoys, slaps him twice, sets him back in the ArchGovernor's chair and walks away; the assembled Peerless cut him down before Darrow has left the room.` · Evidence: ch35 "slap him across the face"; "I know what razors sound like when they kill. They didn't even wait." · **HIGH**

### leto
- **leto** · progressiveInfo[ch33] · CURRENT: chapter 33 `Killed by Karnus au Bellona during the Gala Massacre. One of the first casualties of the civil war.` → CORRECTED: chapter 12: `At the Luna gala, intercepts Karnus in front of Augustus but freezes mid-swing — paralyzed by the Jackal's poisoned stylus — and Karnus beheads him. Augustus mourns him like a son.` · Evidence: ch12 "Karnus chops off his head"; "the Jackal tucking his silver stylus into his sleeve"; ch13 "the man he adopted to replace that son". Leto has no mentions after ch26 (all retrospective). · **HIGH**
- **leto** · relationships nero-augustus `type: 'ally'` → better as `parent`/ward relationship with description "Adopted ward"; text: "Augustus's ward"; "the man he adopted". · LOW

### theodora
- **theodora** · firstAppearance · CURRENT: `1` → CORRECTED: `2` · Evidence: first mention is ch2 (The Breach): "personal valet, Theodora... A former Rose courtesan well past prime age". · MED
- **theodora** · progressiveInfo[ch1] → chapter 2; `personal steward` → `personal valet`. · LOW

### darrow
- **darrow** · progressiveInfo[ch20] · CURRENT: chapter 20 `Seeks out Lorn au Arcos on Europa...` → CORRECTED: chapter 28. · Evidence: ch27 "I have Orion set a course for Europa"; ch28 arrival. · **HIGH**
- **darrow** · progressiveInfo[ch33] · CURRENT: chapter 33 `Duels Cassius at the Gala. The fight triggers the massacre and civil war when Julia Bellona intervenes.` → CORRECTED: chapter 12: `Duels Cassius at the Summit gala on Luna and severs his sword arm. The Sovereign's attempt to halt the duel and a stolen razor spark a bloody melee between the houses; Darrow flees Luna with Augustus.` · Evidence: ch12 "I claim the sword arm of Cassius au Bellona"; "'I said stop!' the Sovereign shouts". · **HIGH**
- **darrow** · progressiveInfo[ch42].description · CURRENT: `Kills Karnus au Bellona in single combat during the Lion's Rain.` → CORRECTED: `Captured aboard the Sovereign's shuttle after falling in the Iron Rain. Kills Karnus when he charges, then is saved from execution when Fitchner reveals himself as Ares.` · Evidence: ch42 as above; "Fitchner—Ares—terrorist lord". · MED
- **darrow** · progressiveInfo[ch47] · CURRENT: chapter 47 `Betrayed by the Jackal at his Triumph. Nearly killed by Aja but saved by Fitchner, who reveals himself as Ares.` → CORRECTED: split: the Fitchner/Ares rescue is chapter 42 (above); chapter 47 is actually `Returns to Lykos with Ragnar and confronts the Grays of the Pot.` · Evidence: ch47 opens "The Pot is a piece of shit... Lykos's Common". · **HIGH**
- **darrow** · progressiveInfo[ch51] · CURRENT: `Captured and enslaved in the deep mines. Stripped of everything but not his will to fight.` / `The book ends with Darrow as a slave, but his spirit remains unbroken.` → CORRECTED: `At his Triumph in Agea, Roque poisons him with a needle-ring; the Jackal, Roque, Antonia, Lilath and Vixus turn on the Augustans, Lorn and Nero are killed, and Darrow — paralyzed — is carried off alive by Aja and Cassius for "dissection." The box holds Fitchner's head.` · Evidence: ch51 "A needle from his ring pricks my wrist"; "Dissection"; "see Fitchner's head staring back at me". Nothing about enslavement in mines (that is Morning Star). · **HIGH**
- **darrow** · missing ch50: `Tells Mustang the truth — that he is a Red — in the mines of Lykos; she walks away from him.` · Evidence: ch50 "So yes. I'm a Red."; ch51 "she turned and walked away from me in the mines". · MED

### sevro
- **sevro** · firstAppearance · CURRENT: `0` → CORRECTED: `2` (mention) or `17` (in person). · Evidence: Prologue does not mention Sevro; ch2 "Sevro from Pluto"; ch17 "Sevro has come, and he's brought friends." · MED
- **sevro** · progressiveInfo[ch33] · CURRENT: chapter 33 `Devastated when Aja grievously wounds Quinn during the Gala Massacre.` → CORRECTED: chapter 18. · **HIGH**
- **sevro** · progressiveInfo[ch47] · CURRENT: chapter 47 `Witnesses his father Fitchner reveal himself as Ares before Fitchner is killed.` → CORRECTED: chapter 46: `Learns in Fitchner's hideout that his father is Ares.` and chapter 51: `Leaves the Triumph feast to look for the missing Fitchner minutes before the massacre; his fate is unknown at book's end.` · Evidence: ch46 "'So you're Ares.'"; ch51 "'He's still not here.'... 'Check.'" Fitchner is not killed in front of Sevro. · **HIGH**

### roque
- **roque** · progressiveInfo[ch33] · CURRENT: chapter 33 `Watches helplessly as Aja mortally wounds Quinn...` → CORRECTED: chapter 18 (wounding) and add chapter 22, `Carries the dead Quinn from the stork; blames Darrow for her death and grows cold toward him.` · Evidence: ch22 "Roque descends, carrying Quinn in his arms... peaceful in death". · **HIGH**
- **roque** · missing ch51 (critical) · Add: chapter 51, status `alive`: `Betrays Darrow at his Triumph: poisons him with a needle-ring, presents Fitchner's head in the "Mask" box, and stands with the Jackal, Cassius and the Sovereign. "You are a son of Red. I a son of Gold."` · Evidence: ch51 "And thus go liars, with a bloodydamn kiss." Also relationship darrow should flip to `enemy` at ch51. · **HIGH** (omission of the book's central betrayal)
- **roque** · relationships quinn `lover` → `friend` with description "Loves her (unspoken)". · Evidence: ch2 "Roque flushes in the cheeks at the mention of Quinn's name". · LOW

### tactus
- **tactus** · aliases `The Rake` → invented; not in text. Remove. · LOW
- **tactus** · progressiveInfo[ch1].additionalDetails · CURRENT: `Abandoned Darrow in the escape pod when Karnus rammed the ship.` → CORRECTED: remove or make chapter 2 and hedge: `Darrow's command escape pod launched without him during the ramming — "Either that or they left me behind."` · Evidence: ch2 text does not name Tactus as the one who left. · MED
- **tactus** · missing ch19/20: `Steals the captured Bellona ship out from under Darrow during the escape from Luna and defects to the Bellona.` · Evidence: ch20 "I should have known what Tactus would do... I thought he was my beast." · MED
- **tactus** · progressiveInfo[ch32] · CURRENT: chapter 32 `Breaks his oath to Darrow by attempting to rape a Pink. Executed by Lorn au Arcos as punishment.` → CORRECTED: chapter 29: `Fighting for the Bellona on Europa, takes Lorn's grandchildren hostage, then breaks down and surrenders to Darrow, begging to come home. Once the children are gone, Lorn kills him with an ion-dagger.` · Evidence: ch29 "'I want to come home,' Tactus murmurs"; "Now that the children are gone, consequences." · **HIGH**

### quinn
- **quinn** · firstAppearance · CURRENT: `1` → CORRECTED: `2` (mention) / `17` (in person). · Evidence: ch2 "Quinn from Ganymede?" · MED
- **quinn** · progressiveInfo[ch33] · CURRENT: chapter 33, status dead, `Mortally wounded by Aja au Grimmus during the Gala Massacre.` / `Aja's blade cuts through her with brutal efficiency.` → CORRECTED: chapter 18, status `alive`: `At the Sovereign's dinner on Luna, Aja seizes her by the hair and crushes her skull with an armored fist to bait Darrow.` and chapter 22, status `dead`: `Dies of her wounds despite the Yellows; Roque carries her body from the stork.` · Evidence: ch18 "Armored fist on bone. Four times"; ch22 "peaceful in death". No blade involved. · **HIGH**

### mustang
- **mustang** · progressiveInfo[ch0].additionalDetails · CURRENT: `Now at the Sovereign's court on Luna, away from her father.` → move to chapter 4. · Evidence: ch4 "Mustang is in court on Luna!" · LOW
- **mustang** · progressiveInfo[ch15] · CURRENT: `Reunites with Darrow at the Summit on Luna.` → CORRECTED: chapter 12: `Reunites with Darrow at the Summit gala on Luna and shields the wounded Cassius during the melee, ordering Darrow to protect her father.` (keep a ch15 "Truth" entry for their private confrontation). · Evidence: ch12 "Mustang in the chaos, covering Cassius's wounded body"; "Protect my father!" · MED
- **mustang** · missing ch50/51: `Learns Darrow is a Red in the Lykos mines and walks away; absent from his Triumph.` · Evidence: ch50 "'And my father killed your wife.'"; ch51 "Virginia?... Missing, I fear." · MED

### jackal
- **jackal** · progressiveInfo[ch4].description · CURRENT: `...Orchestrated Claudius's death through Karnus.` → CORRECTED: remove that sentence from ch4 (SPOILER); it is revealed only in ch51: `Reveals he paid Karnus au Bellona seven million credits and six Pinks to provoke the duel that killed Claudius.` · Evidence: ch51 "'Was he strong when I had Karnus put him in the ground?'" Augustus reacts: "'You killed Claudius.'" — new information to everyone. · **HIGH** (spoiler)
- **jackal** · missing ch8 & ch12: `Proposes a secret alliance with Darrow (ch8); paralyzes Leto with a poisoned stylus so Karnus can kill him (ch12).` · Evidence: ch12 "the one he spun on his fingers as he proposed our secret alliance." · MED
- **jackal** · progressiveInfo[ch47] · CURRENT: chapter 47 → CORRECTED: chapter 51: `Springs his trap at Darrow's Triumph with Roque, Antonia, Lilath and Vixus in Pink fleshMasks. Guts Lorn, then shoots his own father in the head against Aja's protests, and hands Darrow to the Sovereign.` · Evidence: ch51 "The Jackal shoots his father in the head." · **HIGH**
- **jackal** · relationships octavia `revealedAtChapter: 47` → `51`. · MED

### nero-augustus
- **nero-augustus** · progressiveInfo[ch47] · CURRENT: chapter 47, `Betrayed by his own son the Jackal. Captured and presumably killed in the aftermath.` / `The Lion of Mars falls to his own blood.` → CORRECTED: chapter 51: `At Darrow's Triumph — having just asked Darrow to become his heir and "Call me Father" — he is seized by the Jackal's disguised Golds. After spitting "You are not my son," he is shot in the head by Adrius.` status dead. · Evidence: ch51 "'Call me Father.'"; "The Jackal shoots his father in the head." Not "presumably" — explicit. · **HIGH**
- **nero-augustus** · aliases `The Lion of Mars` → not used in the text (his sigil is the lion; motto "Hic sunt leones"). LOW

### cassius
- **cassius** · progressiveInfo[ch33] · CURRENT: chapter 33 `Duels Darrow at the Gala. The fight is interrupted when his mother Julia breaks protocol to save him.` → CORRECTED: chapter 12: `Now the Sovereign's Morning Knight, duels Darrow at the Summit gala. Darrow severs his right sword arm; the Sovereign's intervention and the brawl that follows save his life.` · Evidence: ch12 "he wears the rising sun of the Morning Knight"; "I claim the sword arm"; "'Hold!' she..." · **HIGH**
- **cassius** · progressiveInfo[ch51] · CURRENT: `One of only two Bellona survivors after the Sovereign orders the massacre of his family.` / `Spared as part of the Jackal's deal with Octavia.` → CORRECTED: `Lands at Darrow's Triumph beside Aja with a new arm, blaming Darrow for his family's destruction ("You killed my family... the children"). Takes back the House Mars ring Darrow won by killing Julian and leaves him to the Sovereign.` · Evidence: ch51 "he steals the ring I earned. The iron wolf I killed his brother to possess"; "his new arm". · **HIGH**
- **cassius** · relationships karnus `sibling, revealedAtChapter: 0` → `1` (Karnus unnamed in Prologue). · LOW

### fitchner
- **fitchner** · firstAppearance · CURRENT: `0` → CORRECTED: `13` (in person; first mention ch10). · Evidence: Prologue has no Fitchner; ch13 "'Fitchner, you look uglier than I remember!'" · MED
- **fitchner** · progressiveInfo[ch0] · CURRENT: chapter 0 `Former Proctor Mars and father of Sevro. Now working in some capacity for the Society.` → CORRECTED: chapter 13: `Former Proctor Mars and father of Sevro. Now Octavia's new Rage Knight — an Olympic Knight in the Sovereign's own retinue on Luna.` · Evidence: ch13 "The Rage Knight falls from the sky"; ch15 "The Sovereign examines her Rage Knight"; ch19 "The Rage Knight's son? Nasty little man." · **HIGH**
- **fitchner** · progressiveInfo[ch47] · CURRENT: chapter 47, status dead, `Reveals himself as ARES... Saves Darrow from Aja but is killed in the escape.` → CORRECTED: chapter 42, status `alive`: `Ordered by Octavia to take Darrow's head aboard her shuttle, he instead reveals himself as Ares and escapes with him.` chapter 46, alive: `Explains the Sons of Ares to Darrow, Sevro and Dancer in his hideout: "the Golds made me Ares."` chapter 51, `dead`: `Fails to arrive at the Triumph; his eyeless head, mouth stuffed with grapes, is presented to Darrow in the Mask box.` · Evidence: ch42 "'Fitchner!' the Sovereign roars. 'TRAITOR!'"; ch46 "'So you're Ares.'"; ch51 "Fitchner's head staring back at me". · **HIGH**
- **fitchner** · relationships darrow `ally, revealedAtChapter: 47` → `42`; dancer `ally, revealedAtChapter: 47` → `46`. · MED

### antonia
- **antonia** · aliases `The Snake` → not an alias; Lorn's ch32 taunt "Snakes beget snakes" is about the Julii. Optional keep as nickname with LOW confidence. · LOW
- **antonia** · progressiveInfo[ch47] · CURRENT: chapter 47 `Shoots her own mother Agrippina in the head and her sister Victra in the back` → CORRECTED: chapter 51 `Shoots Victra twice in the spine and her mother twice in the neck with a scorcher at Darrow's Triumph, then directs the slaughter of the Augustan heirs.` · Evidence: ch51 "fires two rounds into Victra's spine. Two more into her mother's neck"; "Antonia directs the slaughter". · **HIGH**
- **antonia** · relationships jackal `revealedAtChapter: 47` → `51`. · MED

### dancer
- **dancer** · firstAppearance · CURRENT: `11` → CORRECTED: `1` (mention) / `23` (first contact, by holo) / `46` (in person). · Evidence: ch1 "Dancer said he would contact me once I graduated"; ch23 "Ares's helmet fades and Dancer smiles at me"; ch46 "I hug Dancer so hard his back cracks." · **HIGH**
- **dancer** · progressiveInfo[ch11] · CURRENT: `Darrow finally reconnects with Dancer after years of silence...` + additionalDetails `Lieutenant to Ares (Fitchner). The true identity of Ares has been kept from most Sons.` → CORRECTED: chapter 9, status `unknown`: `Harmony tells Darrow that Dancer is dead.` chapter 23, `alive`: `Revealed alive: he speaks to Darrow through Ares's channel and reaffirms his faith in him.` chapter 46: `Reunites with Darrow in person alongside Fitchner, who is Ares.` Remove "(Fitchner)" from any entry before ch46 — spoiler. · Evidence: ch9 "'Dancer is dead, Darrow.'"; ch23 "Dancer is still alive out there." · **HIGH** (spoiler + wrong chapter)
- **dancer** · relationships harmony `revealedAtChapter: 11` → `9`; fitchner `47` → `46`. · MED

### mickey
- **mickey** · firstAppearance · CURRENT: `11` → CORRECTED: `9` · Evidence: ch9 "Mickey's water pipe in the corner"; "'Shut up, Mickey.'" · MED
- **mickey** · progressiveInfo[ch11] → chapter 9; description `Still working with the Sons of Ares.` → `Kept by Harmony's cell of the Sons, carving Reds into Golds to build a new army — "Dancer's last wish."` · Evidence: ch9 "It was Dancer's last wish for Mickey to carve us a new army." · MED

### harmony
- **harmony** · firstAppearance · CURRENT: `11` → CORRECTED: `9` (first mention ch8). · Evidence: ch9 "Harmony at the door. Half her face still blasted with..." · MED
- **harmony** · progressiveInfo[ch11] → chapter 9; add `Runs the Sons of Ares cell Darrow visits; tells him Dancer is dead.` · MED

### eo
- **eo** · progressiveInfo[ch0].description `Executed two years ago` → `Executed more than two years ago` (LOW; ch1 "more than two years ago"). Otherwise verified ("Persephone" ch24; "live for more" ch35+).

### pax
- **pax** · firstAppearance · CURRENT: `0` → `1` (not in Prologue; first named ch1). · LOW
- **pax** · progressiveInfo[ch25] · CURRENT: chapter 25 `Revealed to be the son of Kavax and brother of Daxo.` → chapter 12. · Evidence: ch12 "Daxo au Telemanus... Pax's elder brother"; "Kavax, Daxo's father". · MED
- **pax** · relationships kavax/daxo `revealedAtChapter: 25` → `12`. · MED

### julian
- Verified: twin of Cassius (wiki: "twin brother of Julian"); GS Dramatis lists him only as Cassius's brother. Tray detail is ch5, not ch0 — additionalDetails `Julia Bellona demands Darrow's heart every night...` should move to a chapter 5 entry. · LOW

## Missing important characters
- **Ragnar Volarus** (Obsidian, Stained) — Darrow's bodyguard and one of the book's most important new characters; first appears ch21 ("Stains"), kills an Olympic Knight at the wall (ch39-40). 130+ mentions. **HIGH omission.**
- **Orion xe Aquarii** (Blue) — Darrow's ship captain; first ch22 ("Fire Blossom"). Augustus cites her in ch51 ("let a Blue run your ship"). MED.
- **Lilath au Faran** (Gold, the Jackal's lieutenant with bones in her hair) — ch13, ch19; kills Lorn in ch51. HIGH omission.
- **Evey** (Pink, Mickey's former slave) — ch8-9, ch17-18; with the Sons. MED.
- **The Howlers**: Pebble, Clown, Harpy, Thistle, Weed, Screwface, Rotback — recurring from ch17 on; Weed, Harpy, Rotback die in the Rain (Cassius's list, ch51). MED (could be one group entry).
- **Cagney au Bellona** — ch3 tormentor; cut in half by Tactus at the ch12 gala. MED.
- **Kellan au Bellona** — Bellona Praetor (Dramatis). LOW.
- **Vixus au Sarna** — Jackal's man at the Triumph (ch51). LOW.
- **Claudius au Augustus** — Nero's dead heir, referenced throughout and central to the ch51 reveal. LOW-MED (as "referenced").
- **Darrow's family**: Kieran, Uncle Narol, Dio, his mother — ch9 (holo) and ch47-49 in Lykos. MED.
- **Sophocles** (Kavax's fox) — fan favorite, ch12/25/27. LOW.
- **The Storm Knight**, **Scipia au Falthe**, **Regulus ag Sun (Quicksilver)**, **Timony cu Tromen** (ch48 Magistrate) — minor.

## Chapter title issues
- All 52 titles (Prologue + 1-51) match the novel's table of contents and body headings exactly, including "Scepter & Sword" and "Old Man's Wrath". Part boundaries (I: Bow 1-11, II: Break 12-24, III: Conquer 25-39, IV: Ruin 40-51) also match. No issues.

## Family group issues
- **howlers**: `roque` and `quinn` were never Howlers (Roque is a fleet commander/Praetor; Quinn a Gold of Ganymede). Tactus fights alongside them but is not a Howler either. Rename to "Darrow's Institute Friends" or restrict to `sevro` plus actual Howlers if added. LOW.
- **sons-of-ares**: including `fitchner` exposes the Ares reveal (ch42/46) from the start if group membership is visible early. Consider gating or noting. MED.
- **sovereign-court**: `fitchner` (Rage Knight, ch13+) and `cassius` (Morning Knight, ch12+) both serve at Octavia's court in this book; `moira` belongs but appears only ch35. LOW.
- **house-telemanus**: fine. `sophocles` optional.
- **darrow-household**: `eo` is odd here (dead wife, not household staff) but harmless. LOW.

## Verified-correct notes
- Darrow: age 20, "more than two years" since the Institute, 833 crew dead (ch2), hair sawn off by Cagney and beaten by seven Bellona at the hot spring (ch3), contract sold (ch5), aliases Reaper/Andromedus/"Praetor Darrow" (ch2) all check out.
- Karnus: call sign "Goliath", "Goliath the breaker", killed Claudius (ch3); beheaded by Darrow (ch42). Correct.
- Octavia: "A hundred years, or longer" via cellular rejuvenation (ch14); took her father's head (ch35, ch51); Furies are her trusted sisters. Correct.
- Aja: Protean Knight, Lorn's last student, dusky-skinned "panther" (ch14). Correct.
- Lorn: former Rage Knight for sixty years, "Sword of Mars", retired to Europa, taught Darrow the Willow Way (ch6, ch13), has grandchildren, Lysander is his grandson (ch14). Killed at the Triumph by Lilath and the Jackal, fingers severed by pulseDagger, never drew his razor (ch51). Correct apart from chapter.
- Kavax: forked red beard, pet fox Sophocles (named ch25), jelly beans (ch27). Correct.
- Victra: ch1 description (heavy deep-set eyes, wide sensual mouth, resembles Agrippina more than younger half-sister Antonia), lancer of House Augustus. Correct.
- Agrippina: "skeletal" (ch51). Correct.
- Pliny: no Peerless scar, never attended the Institute, muted lipstick, coiled scented hair, smooth Pink-like skin (ch4). Correct.
- Leto: ten years Darrow's senior, braided hair, half-moon grin, "a younger Lorn au Arcos", likely heir (ch4); Augustus's adopted ward. Correct.
- Theodora: former Rose courtesan, social advisor; leg shattered when Karnus rams the ship and Darrow carries her to a pod (ch2). Correct.
- Sevro: stationed on Pluto, perverted unicorn holos and pun videos (ch2). Correct.
- Roque: long hair, soft placid face, prodigy who finds poetry in ships (ch1). Correct.
- Tactus: demonDust and stimshots, "Live fast. Die young." (ch1). Correct.
- Quinn from Ganymede (ch2). Correct.
- Mustang: horse-crested gold ring / razor exchange (ch1); in court on Luna (ch4). Correct.
- Nero: motto "Hic sunt leones"; plans Red suicide bombers to poison the Sons' roots (ch4); sells Darrow's contract (ch5). Correct.
- Cassius: Morning Knight (ch7 posts open; ch12 wears the rising sun). Correct.
- Eo: "Persephone" (ch24, ch48), "live for more". Correct.
- Pax: killed by the Jackal (book 1); Kavax's son, Daxo's brother. Correct (chapter aside).
- Harmony: half her face blasted/scarred (ch9). Correct.
