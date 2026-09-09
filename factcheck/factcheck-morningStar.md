# Morning Star — Fact-Check

Source of truth: full novel text (`Morning Star Book III Red Rising.txt`). Chapter boundaries were reconstructed from the ebook's page breaks (chapter-opening pages are ~23 lines; the four Part openers use double form-feeds) and validated against known events (ch 21 opens with the "A Son of Ares?" Quicksilver reveal, ch 40 opens on the Yellow Sea of Io, ch 42 opens on Roque in the orchard, ch 55 is the wedding, etc.). Line numbers below (L####) refer to the novel text file. Chapter 0 = Prologue. The novel also has an **Epilogue** after ch 65, which the data file does not model.

## Summary

- Entries checked: **31 characters**, 12 family groups, 66 chapter titles.
- Errors found: **~70** distinct issues (many characters have several).
- Severity: **HIGH 27** (wrong death chapter/killer, invented events, spoilers revealed early), **MED 26** (wrong reveal chapter by several chapters, wrong first appearance, mis-described events), **LOW ~17** (invented/unsupported aliases, minor chapter drift, cosmetic).
- The single biggest systemic problem: the Part structure and several climactic chapter numbers are off. Ragnar dies in ch 29–30 (file: 33), Roque in ch 48 (file: 49), Octavia is stabbed in ch 61 and dies in ch 62 (file: 60, and by the wrong person), Aja dies in ch 62 (file: 60), Sevro's fake death is ch 58 (file: 54), Trigg dies ch 6 (file: 7), Antonia is strangled by Aja in ch 60 (file: "captured ch 50, executed ch 64").

## Errors

### darrow
- **darrow** · `progressiveInfo[ch 7].description` · CURRENT "Rescued by Sevro and the Sons of Ares. Escapes from Attica with the help of Holiday and Trigg." → CORRECTED "Rescued when Ragnar, Sevro and the Howlers arrive at Attica. Escapes with Holiday and Victra; Trigg was killed on the bridge the chapter before." · Evidence: Trigg is speared by Aja in ch 6 (L1515); Ragnar arrives ch 7 (L1670 "Ragnar Volarus, prince of the Valkyrie Spires"). · Severity MED
- **darrow** · `progressiveInfo[ch 33]` · CURRENT `chapter: 33` "Fights Aja alongside Ragnar. Ragnar is killed in the battle." → CORRECTED `chapter: 29` "Ambushed on the ice by Aja and Cassius. Fights Aja alongside Ragnar; Aja mortally wounds Ragnar with a razor-whip trick." (and Ragnar's actual death occurs at the start of ch 30) · Evidence: ch 29 L7148–7160 Aja "stabs Ragnar twice more in the stomach"; ch 30 L7336 "Ragnar Volarus has left this world"; ch 35 opens "For seven days after the death of Ragnar". · Severity HIGH
- **darrow** · `progressiveInfo[ch 49]` · CURRENT `chapter: 49` "Defeats Roque and captures the Colossus. Commits..." → CORRECTED `chapter: 48` "Boards the Colossus and confronts Roque on the bridge; Roque takes his own life rather than surrender. Darrow mourns him." · Evidence: ch 48 L11594–11602 Roque wraps his razor around his throat; "the Poet of Deimos takes his own life"; ch 49 opens on "Roque's corpse". · Severity HIGH
- **darrow** · `progressiveInfo[ch 60]` · CURRENT `chapter: 60` "Kills Aja alongside Sevro, Cassius, and Mustang in the Sovereign's bunker." → CORRECTED `chapter: 62` (same text). Add a ch 61 entry: "Cassius frees Darrow and Mustang during the broadcast execution; Darrow stabs Octavia in the gut seven times." · Evidence: ch 61 L14642 "I jam the blade through her black jacket into the softness of her lower belly"; ch 62 L14878–14895 Sevro, Cassius, Mustang and Darrow each cut Aja; Sevro delivers the killing blow. · Severity HIGH
- **darrow** · `progressiveInfo[ch 65].description` · CURRENT "Meets his son Pax for the first time on Earth. Reunites with his family." → CORRECTED "Recovering on Luna (Mickey and Virany reattach the hand the Jackal cut off). Says farewell to Cassius. Weeks later, on a beach on Earth, Mustang reveals their son, Pax." · Evidence: ch 65 L15450 "Mickey and Virany reattached my hand"; L15574 "That is our son. His name is Pax." · Severity LOW
- **darrow** · `progressiveInfo[ch 65].additionalDetails` · CURRENT "Virginia reveals she was pregnant during the Triumph. Their son is named after Pax au Telemanus." → CORRECTED "Pax was born nine months after the Lion's Rain (Epilogue). Named after Pax au Telemanus." · Evidence: Epilogue L15577 "Pax was born nine months after the Lion's Rain". Note: the pregnancy detail is in the Epilogue, not ch 65. · Severity LOW
- **darrow** · `progressiveNames[ch 65]` · CURRENT `{ chapter: 65, name: 'Darrow / The Morning Star' }` → CORRECTED `{ chapter: 35, name: 'Darrow / The Morning Star' }` · Evidence: ch 35 L8263 Sefi's people name him "the Morning Star. That star by which griffin-riders and travelers..." · Severity MED
- **darrow** · `progressiveNames[ch 0]` · CURRENT `{ chapter: 0, name: 'Prisoner L17L6363' }` → CORRECTED `{ chapter: 2, name: 'Prisoner L17L6363' }` · Evidence: the number is first spoken in ch 2 L440 "May I present prisoner L17L6363." · Severity LOW
- **darrow** · `progressiveInfo[ch 63].description` · CURRENT "Rips out the Jackal's tongue to stop the nuclear detonations. Captures him." → fine, but add: the Jackal has just cut off Darrow's right hand (ch 59) and the Ash Lord destroys the Lion of Mars in ch 64. Optional. · Severity LOW

### sevro
- **sevro** · `relationships[victra].revealedAtChapter` · CURRENT `12` → CORRECTED `36` · Evidence: nothing romantic in ch 12–13. First hint ch 36 (Victra "moves past me to join Sevro", L8573); "Victra stands closely with Sevro" ch 39 L9258; engagement ch 54–55. · Severity MED
- **sevro** · `progressiveInfo[ch 12]` · CURRENT `chapter: 12` "His relationship with Victra deepens. They become lovers." → CORRECTED `chapter: 36` "Now clearly a couple with Victra (she spends her nights with him after Ragnar's death)." · Evidence: as above. · Severity MED
- **sevro** · `progressiveInfo[ch 54]` · CURRENT "Fakes his own death as part of the plan to infiltrate Luna. His 'execution' is broadcast across the system." → CORRECTED `chapter: 54` "Publicly reveals himself as Ares to the crowd on the Morning Star, then stages a hanging stunt with Cassius to shame the mob ('I am Ares!')." AND new entry `chapter: 58` "Appears to be shot dead by Cassius aboard the shuttle; his 'corpse' is delivered to the Jackal and Sovereign as part of the plan." · Evidence: ch 54 L12952 "My name is Sevro au Barca... I am Ares!"; ch 58 L13735 "Blood erupts from Sevro's chest"; ch 62 L14850 "Barca's alive!" · Severity HIGH
- **sevro** · `progressiveInfo[ch 54].additionalDetails` · CURRENT "His fake death deeply affects Cassius and begins to turn him against the Sovereign." → CORRECTED delete; Cassius is turned by Darrow in ch 56 ("In Time") and is a knowing participant in the fake death. · Evidence: ch 56 L13342; ch 58 Cassius fires the shot. · Severity HIGH
- **sevro** · `progressiveInfo[ch 60]` · CURRENT `chapter: 60` "Helps kill Aja in the Sovereign's bunker. Nearly dies in the fight." → CORRECTED `chapter: 62` "Wakes from his drug-induced 'death', savages the Jackal and delivers the killing blows to Aja ('Omnis vir lupus')." · Evidence: ch 62 L14888–14893. · Severity HIGH

### mustang
- **mustang** · `aliases` · CURRENT `['Mustang', 'The Lioness']` → CORRECTED `['Mustang']` · Evidence: "Lioness" never appears in the novel (0 hits). · Severity LOW
- **mustang** · `progressiveInfo[ch 0].description` · CURRENT "Separated from Darrow since the Triumph betrayal. Leading her own faction against the Sovereign." → CORRECTED "Separated from Darrow since the Triumph. Fled to the Rim with her fleet after the Jackal seized Mars; the Jackal claims she does not care about Darrow." · Evidence: ch 10 L2340, L2391 "continued out to the Rim, following Mustang". · Severity LOW
- **mustang** · missing entry · ADD `chapter: 17` "First seen in person: present at Quicksilver's tower with Kavax, Daxo and Cassius negotiating peace; flees when Darrow's Howlers attack." · Evidence: ch 17 L4025 "Kavax, Mustang, stop. It's me"; L4188 "I have the Pax. Orion is alive." · Severity MED
- **mustang** · `progressiveInfo[ch 23]` · CURRENT `chapter: 23` "Reunites with Darrow and the Rising. Brings her forces to join the rebellion." → CORRECTED `chapter: 24` "Finds Darrow in the Phobos hangar. Reveals she came to Phobos to make peace with the Sovereign, not to surrender; agrees to join his quest to the Valkyrie Spires." · Evidence: ch 24 L5871 "Mustang stands in front of the ship"; L5905 "I wasn't surrendering. I was making peace." · Severity MED
- **mustang** · `progressiveInfo[ch 60]` · CURRENT `chapter: 60` → CORRECTED `chapter: 61` "Freed by Cassius; shoots Aja across the room and fights her alongside Darrow and Cassius; in ch 62 takes Aja's arm off at the elbow." · Evidence: ch 61 L14648; ch 62 L14885. · Severity HIGH
- **mustang** · `progressiveInfo[ch 64].description` · CURRENT "Executes her brother the Jackal by hanging. Shows him mercy by pulling his feet to break his neck quickly." → CORRECTED "Proclaimed Sovereign in the Sovereign's forum ('Hail, Sovereign'). A week later watches the Jackal hanged in a Luna square by a White hangwoman, and pulls his feet to break his neck." · Evidence: ch 64 L15391–15395; L15398 "A week after Mustang's ascension"; L15423 "grip her twin brother's feet". · Severity MED
- **mustang** · `progressiveInfo[ch 65].description` · CURRENT "Becomes the new Sovereign of the Republic. Reveals to Darrow that she was pregnant during the Triumph..." → CORRECTED "Ruling as Sovereign amid Luna's devastation. Takes Darrow to a beach on Earth and reveals their son Pax." · Evidence: ascension is ch 63–64 (Lysander hands her the scepter L15215; "Hail, Sovereign" L15391). "Republic" is not used in this book. · Severity MED
- **mustang** · `progressiveNames[ch 64]` · CURRENT `{ chapter: 64, name: 'Virginia / Sovereign' }` → acceptable (proclaimed ch 64; scepter handed ch 63). · Severity LOW

### victra
- **victra** · `aliases` · CURRENT `['The Julii Fury']` → CORRECTED `[]` · Evidence: "Julii Fury" never appears (0 hits); "Fury" in this book refers to Aja's sisters (Moira, ch 16 L3960). · Severity LOW
- **victra** · `firstAppearance` · CURRENT `12` → acceptable for in-person (ch 12 opens with Darrow visiting her); she is referenced ch 1–2. · Severity LOW
- **victra** · `progressiveInfo[ch 65]` · CURRENT "Pregnant with Sevro's child. They will raise their family in the new world they helped create." → CORRECTED "Commands part of the Rising fleet in the aftermath; comes with Sevro to the beach on Earth for Darrow's reunion." · Evidence: no pregnancy for Victra anywhere in this book ("pregnan" hits only ch 28 Ragnar's mother and the Epilogue re: Mustang). Her pregnancy is an Iron Gold detail. · Severity HIGH
- **victra** · `progressiveNames[ch 55]` · CURRENT `{ chapter: 55, name: 'Victra au Barca' }` → CORRECTED remove · Evidence: "au Barca" applied to Victra never appears (0 hits). · Severity LOW

### ragnar
- **ragnar** · `relationships[sefi].revealedAtChapter` · CURRENT `26` → CORRECTED `11` (Ragnar speaks of his sister Sefi by name in ch 11 L2581); in person ch 30. · Severity LOW
- **ragnar** · `relationships[alia].revealedAtChapter` · CURRENT `26` → CORRECTED `24` ("beseech Ragnar's mother to provide an army", L5944); named "Alia Volarus, the Snowsparrow" ch 28 L6799. · Severity LOW
- **ragnar** · `progressiveInfo[ch 26]` · CURRENT "Returns to his homeland with Darrow to recruit the Obsidians. Reunites with his sister Sefi." → CORRECTED "Crash-lands in the polar sea with Darrow, Mustang, Holiday and Cassius; begins the trek across the ice to the Valkyrie Spires." (Reunion with Sefi happens in ch 30 as he dies.) · Evidence: ch 26 opens "All is dark and cold as we sink into the sea"; Sefi arrives ch 30 L7211–7247. · Severity HIGH
- **ragnar** · `progressiveInfo[ch 31]` · CURRENT "Confronts his mother Alia, the Pale Queen, who refuses to believe the gods are false." → CORRECTED delete (he is dead). Alia receives his corpse: "mother who sits with her own son dead in her lap" (L7514). · Severity HIGH
- **ragnar** · `progressiveInfo[ch 33]` · CURRENT `chapter: 33, status: dead` → CORRECTED `chapter: 29` (mortally wounded by Aja, "Hunters") with `status: 'dead'` at `chapter: 30` ("The Quiet") — "Killed by Aja on the ice after being tricked by her razor-whip. Dies in Darrow's arms as Sefi's Valkyrie arrive." · Evidence: ch 29 L7148–7160; ch 30 L7336. · Severity HIGH
- **ragnar** · `progressiveInfo[ch 33].additionalDetails` · CURRENT "His death inspires Sefi to kill their mother and lead the Obsidians to freedom." → CORRECTED "Sefi later beheads their mother (ch 34) after Darrow shows her the truth about the 'gods'." · Evidence: ch 34 L8152 "lifts the razor I gave her, and decapitates her mother". · Severity LOW

### jackal
- **jackal** · `progressiveInfo[ch 51]` · CURRENT "Reveals he has hidden nuclear bombs throughout Luna. Uses them to blackmail the Sovereign." → CORRECTED `chapter: 38` "Sevro learns from Cassius that the Jackal has stolen the Sovereign's cache of five hundred nuclear warheads" (Evidence L8944, L8911–8917) and MOVE the Luna reveal to `chapter: 63` "Reveals he has planted the stolen warheads across Luna's cities. Begins detonating them via Lilath and demands Darrow kill himself on camera." (Evidence L15059, L15112 "Kill yourself. Here."). The Sovereign was never blackmailed; she was colluding with him ("Strange, the Sovereign's deference", ch 61 L14534). · Severity HIGH
- **jackal** · `progressiveInfo[ch 51].additionalDetails` · CURRENT "Plans to become Sovereign himself by holding three billion lives hostage." → CORRECTED (at ch 63) "Plans to be crowned Sovereign once Darrow is dead and the Rising broken." Evidence L15114 "You die, and I will be crowned Sovereign." No "three billion" figure appears. · Severity MED
- **jackal** · `progressiveInfo[ch 62]` · CURRENT "Detonates several nuclear bombs on Luna, killing millions. Demands Darrow kill himself in exchange for stopping." → CORRECTED `chapter: 62` "The first nuclear blast lights up the Sovereign's bunker as Octavia dies." and move "Demands Darrow kill himself" to ch 63. · Evidence: ch 62 L14967 "As the nuclear fire blazes in the Sovereign's eyes"; demands ch 63 L15112. · Severity MED
- **jackal** · missing entry · ADD `chapter: 59` "Cuts off Darrow's right hand with Darrow's own heated slingBlade aboard the Lion of Mars." · Evidence: ch 59 L13947 "Is he right or left handed?"; L14074. · Severity MED
- **jackal** · `progressiveInfo[ch 64].additionalDetails` · CURRENT "His nuclear attack killed over twelve million people before being stopped." → CORRECTED "His bombs killed millions on Luna (six million in the first city alone)." · Evidence: "twelve million" never appears; ch 63 L15120 "You just killed six million people". · Severity MED
- **jackal** · `progressiveInfo[ch 64].description` · CURRENT "Executed by hanging in a public square on Luna. Mustang pulls his feet..." → fine; add "a week after Mustang's ascension" (L15398). · Severity LOW

### octavia
- **octavia** · `firstAppearance` · CURRENT `2` → CORRECTED `1` (named "Octavia" ch 1; in person only from ch 60). · Severity LOW
- **octavia** · `aliases` · CURRENT includes 'Grandmother' → CORRECTED remove; it is only Lysander's relationship, not an alias. · Severity LOW
- **octavia** · `progressiveInfo[ch 51]` · CURRENT "Under blackmail by the Jackal who has hidden nuclear weapons throughout Luna. Forced to cooperate with his demands." → CORRECTED delete. She is not blackmailed; ch 51 is Darrow interrogating Antonia/Thistle about whether she and the Jackal are "colluding" (L12315). Replace with `chapter: 60` "Receives Cassius and the 'dead' Sevro in her bunker; has Aja strangle Antonia for cowardice." · Severity HIGH
- **octavia** · `progressiveInfo[ch 60]` · CURRENT `chapter: 60` "Killed by Cassius in the Sovereign's bunker after Cassius turns against her. He stabs her through the heart." → CORRECTED `chapter: 61` "Stabbed repeatedly in the gut by Darrow after Cassius kills her guards and releases the prisoners mid-broadcast." (status alive, dying) and `chapter: 62, status: 'dead'` "Dies on the floor of her bunker as the first nuclear blast lights the room; her last words are to Darrow." · Evidence: ch 61 L14642–14647; ch 62 L14994 "The Sovereign of the Society, who has ruled for sixty years, is dead." · Severity HIGH
- **octavia** · `progressiveInfo[ch 60].additionalDetails` · CURRENT "Cassius kills her as revenge for ordering the massacre of House Bellona..." → CORRECTED "Cassius turned on her after Darrow showed him proof (holocubes) that she and the Jackal conspired in the Bellona massacre and the murder of Nero au Augustus." · Evidence: ch 62 L14929–14942 ("Why?" Octavia asks Cassius; "the Sovereign's cooperation and silence"). · Severity HIGH

### aja
- **aja** · `aliases` · CURRENT `['The Protean Knight', 'The Fury']` → acceptable; Holiday calls her "the Fury" (ch 4 L1062). OK.
- **aja** · `progressiveInfo[ch 33]` · CURRENT `chapter: 33` "Kills Ragnar Volarus in combat in the Obsidian lands..." → CORRECTED `chapter: 29` "Ambushes Darrow's party on the ice with Cassius; kills Trigg's avenger Ragnar by baiting him into a razor-whip trick." · Evidence: ch 29 L7134–7160. · Severity HIGH
- **aja** · missing entry · ADD `chapter: 6` "Spears Trigg through the chest on the bridge outside Attica and throws his body off the edge." · Evidence: L1515, L1535. · Severity MED
- **aja** · `progressiveInfo[ch 60]` · CURRENT `chapter: 60, status: dead` → CORRECTED `chapter: 62` "Killed in the Sovereign's bunker: Cassius and Sevro cut her tendons, Mustang takes her arm at the elbow, and Sevro drives two razors into her chest." · Evidence: ch 62 L14878–14895. · Severity HIGH

### cassius
- **cassius** · `progressiveInfo[ch 54]` · CURRENT `chapter: 54` "Deeply troubled by Sevro's apparent execution. Begins to question his loyalty to the Sovereign." → CORRECTED `chapter: 54` "Dragged before the mob on the Morning Star by Sevro; nearly hanged in Sevro's stunt." and `chapter: 56` "In a private talk with Darrow ('In Time') begins to accept the truth about Octavia and agrees to help." · Evidence: ch 54 L12930 "The crowd roars for Cassius's life"; ch 56 L13342. · Severity HIGH
- **cassius** · `progressiveInfo[ch 60]` · CURRENT "Turns against the Sovereign and kills Octavia au Lune. Helps Darrow and the others fight Aja." → CORRECTED `chapter: 61` "Turns on the Sovereign during the live execution: kills her Praetorian guards and unlocks Darrow's and Mustang's restraints so Darrow can stab Octavia. Fights Aja beside Mustang." · Evidence: ch 61 L14631–14642. Cassius does not kill Octavia. · Severity HIGH
- **cassius** · `progressiveInfo[ch 64].description` · CURRENT "Kneels before Mustang as the new Sovereign. Helps legitimize her claim." → acceptable (the Praetors and others kneel, L15394); LOW.
- **cassius** · `progressiveInfo[ch 65].additionalDetails` · CURRENT "Returns Julian's ring that Darrow gave him. They part as friends after six years of conflict." → CORRECTED "Offers to return the ring he took from Darrow the night Lorn and Fitchner died; Darrow tells him to keep it ('That belongs to Julian'). They shake hands almost six years after first meeting." · Evidence: L15490–15497. · Severity LOW
- **cassius** · `progressiveNames[ch 60]` · CURRENT `{ chapter: 60, name: 'Cassius' }` → CORRECTED `chapter: 61`. · Severity LOW

### antonia
- **antonia** · `aliases` · CURRENT `['The Snake']` → CORRECTED `[]` · Evidence: never called "the Snake" (0 hits). · Severity LOW
- **antonia** · `progressiveInfo[ch 50]` · CURRENT "Captured by the Rising forces during the assault on Luna." → CORRECTED `chapter: 48` "Commands a flagship in Roque's fleet at Ilium; escapes the battle and flees to the Core." · Evidence: ch 48 L11455 "Antonia's flagship"; ch 60 L14393 "I only barely managed to escape the battle". There is no Luna assault in ch 50 and she is never captured. · Severity HIGH
- **antonia** · `progressiveInfo[ch 64]` · CURRENT `chapter: 64` "Executed for her crimes against House Julii and the Rising." → CORRECTED `chapter: 60` "Strangled to death by Aja on the Sovereign's order for cowardice at Ilium, in front of Darrow and Mustang." · Evidence: ch 60 L14464–14469 "begins to strangle her to death... 'What an odious creature,' the Sovereign says". · Severity HIGH
- **antonia** · `progressiveInfo[ch 2].additionalDetails` · CURRENT "Shot her own mother and sister during the Triumph betrayal." → fine ("Put a bullet in her own mother's head, and then two more into her sister Victra's spine", L538). OK.

### lysander
- **lysander** · `firstAppearance` · CURRENT `57` → CORRECTED `20` (mentioned) or `60` (first in person). · Evidence: ch 20 L4727 "Last time we had Lysander"; ch 60 L14211 "Ten years of age now". He does not appear in ch 57. · Severity MED
- **lysander** · `relationships[octavia].revealedAtChapter` · CURRENT `57` → CORRECTED `60`. · Severity LOW
- **lysander** · `progressiveInfo[ch 57]` · CURRENT `chapter: 57` "Present on Luna during the final assault. Young heir to House Lune." → CORRECTED `chapter: 60` "Ten years old, sits at his grandmother's side in the bunker as Cassius arrives with the 'dead' Sevro." · Severity MED
- **lysander** · `progressiveInfo[ch 60]` · CURRENT "Witnesses his grandmother's death at Cassius's hands. Suggests calling the Ash Lord..." → CORRECTED split: `chapter: 61` "Rushes to hold his dying grandmother together after Darrow stabs her; Aja will not leave her." and `chapter: 63` "Suggests calling his godfather the Ash Lord to stop the Jackal, then hands Mustang the Dawn Scepter: 'She is our conqueror.'" · Evidence: ch 61 L14699; ch 63 L15183 "Call my godfather... Call the Ash Lord"; L15215. · Severity HIGH
- **lysander** · `progressiveInfo[ch 64]` · CURRENT "Hands the Dawn Scepter to Mustang... Kneels before her." → CORRECTED move scepter to ch 63 (above); ch 64 can read "Attends Mustang's proclamation in the forum." · Severity MED

### sefi
- **sefi** · `firstAppearance` · CURRENT `26` → CORRECTED `30` (in person; named in ch 11). · Evidence: ch 30 L7211 "'Sefi...' Ragnar points"; ch 11 L2581. · Severity MED
- **sefi** · `relationships[*].revealedAtChapter` · CURRENT `26` → CORRECTED `30`. · Severity LOW
- **sefi** · `progressiveInfo[ch 26]` · CURRENT `chapter: 26` "Ragnar's sister and a warlord of the Valkyrie tribe..." → CORRECTED `chapter: 30` "Arrives with her Valkyrie moments before Ragnar dies; gives him her axe so he can die a warrior." · Evidence: ch 30 L7324. · Severity HIGH
- **sefi** · `progressiveInfo[ch 31]` · CURRENT `chapter: 31` "Skeptical of Darrow... Questions whether the Golds are truly false gods." → CORRECTED `chapter: 32` "Darrow shows her the truth about the 'gods' after Alia has him and Mustang thrown out; she begins to believe." · Evidence: ch 32 L7792–7799. · Severity MED
- **sefi** · `progressiveInfo[ch 34]` · CURRENT "After Ragnar's death, kills her mother Alia and takes leadership..." → fine; specify "decapitates her mother with the razor Darrow gave her" (L8152). OK.
- **sefi** · `progressiveInfo[ch 65]` · CURRENT "Leading the Obsidian migration to Mars..." → CORRECTED "Under Holiday's supervision, has gone to Mars to free the rest of her people at the poles with medicine instead of weapons." · Evidence: L15460. · Severity LOW

### holiday
- **holiday** · `firstAppearance` · CURRENT `2` → CORRECTED `3` · Evidence: no "Holiday" in ch 2; first named ch 3 L820 "Thanks, Holi." · Severity MED
- **holiday** · `relationships[*].revealedAtChapter` · CURRENT `2` → CORRECTED `3`. · Severity LOW
- **holiday** · `progressiveInfo[ch 2]` · CURRENT `chapter: 2` → CORRECTED `chapter: 3`. Description "posing as a member of the Thirteenth Legion (Aja's dragoons)" → "posing as a Gray in the Praetorian detail escorting Darrow for Aja". · Evidence: ch 3 L806. · Severity MED
- **holiday** · `progressiveInfo[ch 2].additionalDetails` · CURRENT "Nutcracker jaw, ashen Mohawk hair. Has a bionic eye. From South Pacifica on Earth." → CORRECTED "Nutcracker jaw, Mohawk, freckled face, one bionic eye. From Earth." · Evidence: L814–816, L990, L1020 "We're from Earth." "South Pacifica" never appears. · Severity LOW
- **holiday** · `progressiveInfo[ch 7]` · CURRENT `chapter: 7` "Her brother Trigg is killed during the escape from Attica..." → CORRECTED `chapter: 6`. · Evidence: L1515–1535. · Severity HIGH

### trigg
- **trigg** · `firstAppearance` · CURRENT `2` → CORRECTED `3` (ch 2 "Trigg" hit is the word "trigger"). · Evidence: ch 3 L872 "That's Trigg, my baby brother." · Severity MED
- **trigg** · `relationships[*].revealedAtChapter` · CURRENT `2` → CORRECTED `3`. · Severity LOW
- **trigg** · `progressiveInfo[ch 2]` · CURRENT `chapter: 2` → CORRECTED `chapter: 3`. additionalDetails "Carries Darrow's razor" → fine (L905–912, he hands Darrow the razor). · Severity MED
- **trigg** · `progressiveInfo[ch 7]` · CURRENT `chapter: 7` "Killed during the escape from Attica... fighting Aja and her soldiers." → CORRECTED `chapter: 6` "Speared through by Aja on the ice-slicked bridge while covering the retreat; she throws his body over the side." · Evidence: ch 6 L1509–1535. · Severity HIGH

### roque
- **roque** · `progressiveInfo[ch 42].description` · CURRENT "Commands the Society fleet against the Rising at Jupiter. A brilliant naval tactician." → CORRECTED "Meets Darrow and Mustang face to face in Romulus's orchard on Io, arguing for the Rim to stay loyal." · Evidence: ch 42 opens "Roque au Fabii sits at a stone table in an orchard". · Severity MED
- **roque** · `progressiveInfo[ch 49]` · CURRENT `chapter: 49` "Defeated in battle when Darrow captures the Colossus. Commits suicide on the bridge rather than surrender." → CORRECTED `chapter: 48` "Out-maneuvered at Ilium; on the bridge of the Colossus he refuses Darrow's plea and takes his own life with his razor: 'I will not be a prisoner.'" · Evidence: ch 48 L11594–11602. · Severity HIGH
- **roque** · `progressiveInfo[ch 49].additionalDetails` · CURRENT "Gives him a funeral fit for a Roman emperor." → CORRECTED "Darrow holds a funeral for him (ch 50) and later attends Roque's burial with Mustang." · Evidence: ch 50 L11918, L12053; ch 64 L15403. "Roman emperor" is not in the text. · Severity LOW
- **roque** · `progressiveNames[ch 42]` · CURRENT `{ chapter: 42, name: 'Roque / Imperator' }` → CORRECTED `chapter: 0` (he is "Imperator of the Sword Armada" from the Dramatis Personae and referenced as such from ch 0–1). · Severity LOW

### alia
- **alia** · `firstAppearance` · CURRENT `31` → CORRECTED `28` (named "Alia Volarus, the Snowsparrow" L6799; referenced as Ragnar's mother ch 24). · Severity LOW
- **alia** · `progressiveInfo[ch 31].description` · CURRENT "Queen of the Valkyrie Obsidians. Ragnar and Sefi's mother. Rules the south pole of Mars." → add "Receives her son's corpse and, after hearing Darrow, has him and Mustang cast out into No Man's Land rather than defy the 'gods'." · Evidence: L7514, L7662, ch 32 L7679. · Severity LOW
- **alia** · `progressiveInfo[ch 34]` · CURRENT "Killed by her daughter Sefi after refusing to join the Rising." → fine ("decapitates her mother", L8152). OK.

### romulus
- **romulus** · `progressiveInfo[ch 45]` · CURRENT `chapter: 45` "Allies with Darrow against the Sovereign. The Moon Lords bring their considerable fleet..." → CORRECTED `chapter: 43` "Swears the alliance with the Rising after Mustang's blood oath before two hundred Praetors; helps devise the battle plan." Keep a ch 45 note that his ships fight at Ilium. · Evidence: ch 43 opens "Blood drips from Mustang's hand"; L10342, L10390. · Severity MED
- **romulus** · `firstAppearance` · CURRENT `41` → fine in person; first named ch 37. LOW.

### dancer
- **dancer** · `firstAppearance` · CURRENT `8` → CORRECTED `0` (named in the Prologue L209 "In Ragnar and Dancer"). · Severity LOW
- Other Dancer entries verified.

### kavax
- **kavax** · `aliases` · CURRENT `['The Giant']` → CORRECTED `[]` · Evidence: "Moderately Friendly Giant" is Ragnar (ch 9 L2073); Kavax is never called "the Giant". · Severity LOW
- **kavax** · `firstAppearance` · CURRENT `24` → CORRECTED `16` (in person; referenced ch 4 L1068 "Kavax's wife"). · Evidence: ch 16 L3961. · Severity MED
- **kavax** · `relationships[*].revealedAtChapter` · CURRENT `24` → CORRECTED `16`. · Severity LOW
- **kavax** · `progressiveInfo[ch 24]` · CURRENT "Patriarch of House Telemanus. Captured by the Rising but released by Ragnar's decision to show good faith." → CORRECTED `chapter: 17` "Captured by the Howlers at Quicksilver's tower after a duel of titans with Ragnar." + `chapter: 20` "Interrogated by Darrow; reveals Mustang's peace plan with Quicksilver and that Orion and the Pax are alive." + `chapter: 25` "Ragnar secretly let him out of the cell and told him where to find Darrow; he brings Mustang." · Evidence: ch 17 L4114–4118; ch 20 L4595–4661; ch 23 L5497 "someone let him out"; ch 25 L6002 "You had no right to let Kavax go" (to Ragnar). · Severity MED
- **kavax** · `progressiveInfo[ch 24].additionalDetails` · CURRENT "His pet fox Sophocles accompanies him. Massive red-bearded Gold." → CORRECTED "His pet fox Sophocles accompanies him." · Evidence: no beard description for Kavax in this book (only Narol's white beard, L2109). · Severity LOW
- **kavax** · `progressiveInfo[ch 35]` · CURRENT `chapter: 35` → CORRECTED `chapter: 36` "At Tinos with Daxo; declares Darrow 'family' and stands with Mustang." · Evidence: ch 36 L8579, L8689. · Severity LOW
- **kavax** · `progressiveInfo[ch 65].description` · CURRENT "Kavax's wife guarded baby Pax in the asteroid belt during the war. Present at Earth for the reunion." → fine (Epilogue L15580 "guarded by Kavax's wife in the asteroid belt"), but note the wife detail is in the Epilogue. LOW.

### daxo
- **daxo** · `firstAppearance` / relationship · CURRENT `24` → CORRECTED `16`. · Evidence: ch 16 L3961. · Severity MED
- **daxo** · `progressiveInfo[ch 24]` → `chapter: 16/17` "Captured with his father at Quicksilver's tower after fighting Ragnar." · Severity MED
- **daxo** · `progressiveInfo[ch 35]` → `chapter: 36`. · Severity LOW

### lilath
- **lilath** · `aliases` · CURRENT `['The Bonerider Captain']` → CORRECTED `['Leader of the Boneriders', 'Praetor']` (she is "Her captain" in ch 2 and "His Praetor, Lilath" in ch 63). · Severity LOW
- **lilath** · `progressiveInfo[ch 2].description` · CURRENT "Bald-headed with eel-like eyes." → CORRECTED "Bald-headed." ("eel-like" not in text; L543–544). · Severity LOW
- **lilath** · `progressiveInfo[ch 62]` · CURRENT `chapter: 62` "Controls the nuclear detonation triggers for the Jackal. On the Lion of Mars ship." → CORRECTED `chapter: 63`; add `chapter: 59` "Supervises the amputation of Darrow's hand aboard the Lion of Mars." · Evidence: ch 59 L13947–13949; ch 63 L15117, L15207. · Severity MED
- **lilath** · `progressiveInfo[ch 63]` · CURRENT `chapter: 63, status: dead` "Killed when the Lion of Mars is destroyed..." → CORRECTED `chapter: 64` · Evidence: ch 64 opens "The Lion of Mars dies an ignoble death, fired upon from all sides". · Severity HIGH

### ash-lord
- **ash-lord** · `firstAppearance` · CURRENT `2` → CORRECTED `1` (L359). · Severity LOW
- **ash-lord** · `progressiveInfo[ch 2].description` · CURRENT "Destroyed Rhea - responsible for billions of deaths." → CORRECTED "Burned Rhea sixty years ago; the Sovereign keeps five hundred warheads 'in case the Ash Lord ever had to repeat Rhea'." · Evidence: ch 10 L2369; ch 37 L8917. "Billions" not stated. · Severity LOW
- **ash-lord** · `progressiveInfo[ch 63]` · CURRENT "Lysander suggests calling him... He orders his fleet to destroy the Lion of Mars." → correct chapter; the ship's destruction is shown in ch 64. OK.

### orion
- **orion** · `firstAppearance` · CURRENT `13` → CORRECTED `10` (presumed dead, L2446); revealed alive ch 17–18; rejoins the fleet ch 38–40. · Severity MED
- **orion** · `progressiveInfo[ch 13]` · CURRENT `chapter: 13` "Blue ship captain serving the Rising..." → CORRECTED `chapter: 10` "Believed dead with the Pax after the Triumph." + `chapter: 18` "Mustang reveals Orion and the Pax survived." · Evidence: L2446, L4188, L4192. · Severity MED

### quicksilver
- **quicksilver** · `firstAppearance` · CURRENT `21` → CORRECTED `13` (named as "the Jackal's silent partner", L3164); in person ch 16. · Severity MED
- **quicksilver** · `progressiveInfo[ch 21].description` · CURRENT "Richest man in the Society. A Silver who secretly supports the Rising..." → CORRECTED "Revealed to be a Son of Ares — Fitchner's secret partner and financier — after the Howlers kidnap him from his Phobos tower." · Evidence: ch 21 opens "'A Son of Ares?' Sevro repeats"; kidnapping ch 15–17. · Severity LOW

### mickey / theodora / deanna / kieran / eo / fitchner / pax-telemanus / pax-son
- **mickey** · `progressiveInfo[ch 65].description` · CURRENT "Reattaches Darrow's hand (which was cut off during the fighting). Works with Virany." → CORRECTED "With Virany, reattaches the hand the Jackal cut off in ch 59, recovered from the Jackal's shuttle." · Evidence: L15450–15451. · Severity LOW
- **theodora** · `progressiveInfo[ch 8].description` · CURRENT "Now helps manage communications for the Rising." → CORRECTED "Now works for the Sons; she designed the operation that freed Darrow's family." · Evidence: ch 8 L1934 "Theodora designed an operation." · Severity LOW
- **deanna** · `progressiveInfo[ch 8].description` · CURRENT "Rescued from Lykos by Sevro before the Jackal could capture her." → CORRECTED "Brought to Tinos with the Lykos clan by the Sons (Theodora's operation). Has had a stroke; grieved Darrow for nine months." · Evidence: L1763 "since her stroke"; L1947. Sevro's role in ch 8 is that he never stopped searching for Darrow (L1925–1928). · Severity LOW
- **deanna** · `progressiveInfo[ch 65].description` · CURRENT "Carries the child to him." → fine (L15571–15572).
- **kieran** · `firstAppearance` · CURRENT `8` → CORRECTED `1` (named L292-ish area; ch 1 hits) — LOW.
- **eo** · `aliases` · `['Persephone']` verified (L947). OK.
- **fitchner** · `progressiveInfo[ch 0].description` · "killed during the Triumph betrayal" → acceptable ("the night Lorn and Fitchner died", L15491). OK.
- **pax-son** · `firstAppearance: 65` · acceptable (revealed in the last lines of ch 65). Details ("nine months", "asteroid belt", "Dejah Thoris") come from the Epilogue, which the chapters array lacks. LOW.

## Missing important characters

Recurring characters with substantial page-time in this book that have no entry:
- **Narol** (Darrow's uncle) — 69 hits, present from ch 8 through the Luna assault (ch 59–63); he is a Howler/Son and leads the Lykos contingent. Major omission.
- **Thistle / Cyriana au Tanus** — former Howler turned Bonerider (Dramatis Personae); appears ch 2, 8, 25, 43, 51–53, 60. Important betrayal arc.
- **Vixus au Sarna** — Bonerider lieutenant (Dramatis Personae); ch 4–5, 8, 41, 50, 62.
- **Pebble, Clown, Screwface** — Howlers with dozens of appearances each (Pebble 53 hits, Clown 55, Screwface 21).
- **Rollo** — Red foreman who leads the Phobos uprising (ch 14–25, 35, 46).
- **Moira au Grimmus** — Aja's sister, a Fury, killed at Quicksilver's tower (ch 16–17); referenced later.
- **Vela au Raa** — Romulus's sister (ch 40–42).
- **Matteo** — Darrow's old Pink tutor, found working for Quicksilver (ch 16–23, 36, 38).
- **Virany** (Yellow doctor), **Sophocles** (Kavax's fox), **Harmony**, **Evey** — minor but recurring.
- **Quinn, Lorn, Tactus, Julian, Nero au Augustus** — deceased, frequently referenced (Quinn 26 hits, Lorn 44); Lorn's grandson Lysander is a plot point. Consider "Referenced/Deceased" entries at least for Lorn and Quinn.

## Chapter title issues

- **Part structure is wrong.** The novel has four parts: Part I: Thorns (ch 1–12), Part II: Rage (ch 13–34), Part III: Glory (ch 35–49), Part IV: Stars (ch 50–65). The file's comments give five invented parts ("Prisoner", "Reborn", "Children of the Spires", "Deep Grave", "Morning Star") with wrong boundaries (Part II at ch 8, Part III at 26, Part IV at 40, Part V at 57). Evidence: TOC L29–105; double form-feed Part openers at L219, L2917, L8232, L11793.
- **Chapter 48** · CURRENT `'Roque'` → CORRECTED `'Imperator'` (TOC L86 "Chapter 48: Imperator").
- **Missing Epilogue** · ADD `{ number: 66, title: 'Epilogue' }` (TOC L108; text at L15577). Several data points (Pax's birth timing, Kavax's wife in the asteroid belt, Mustang's Dejah Thoris pregnancy) come from it.
- All other 65 titles match the TOC exactly (including the duplicate "Silence" at ch 53 and ch 63, and "Dragon's Maw"/"No Man's Land" apostrophes).

## Verified-correct notes (brief)

- Colors/houses: all 31 entries correct (Darrow listed as Gold/Augustus is a defensible display choice; the Dramatis Personae lists him as "a Red").
- Verified aliases: Reaper, Goblin, Ares (Sevro), Mustang, Stained, Shield of Tinos (ch 9), Jackal, Sovereign, Protean Knight, Morning Knight, The Poet (Poet of Deimos), Moon Lord, Quicksilver, Persephone, Holi (ch 3), Snowsparrow/Pale Queen, Sefi the Quiet, Arch Imperator, Ash Lord.
- Verified events/chapters: Darrow in the Jackal's table (ch 2); Cassius gives Darrow his cloak (ch 2, L573); Victra's spine shot by Antonia (ch 2); Howler initiation with Victra and Holiday (ch 13); Quicksilver reveal (ch 21); Mustang lets herself be found at Phobos (ch 24); polar crash (ch 26); Alia refuses (ch 31); Sefi kills Alia (ch 34); 500 warheads (ch 37–38); Romulus in person (ch 41); Battle of Ilium (ch 45); Sevro–Victra wedding officiated by Darrow (ch 55); Darrow rips out the Jackal's tongue (ch 63); Lysander hands Mustang the Dawn Scepter (ch 63); Mustang hailed Sovereign and Jackal hanged with Mustang pulling his feet (ch 64); Ash Lord retreats to Mercury and Cassius leaves with Lysander (ch 65); Pax revealed with golden hair (ch 65); Sefi to Mars under Holiday (ch 65); Darrow to help Dancer lead Red migration (ch 65).
- Family groups: memberships are broadly correct. Suggest adding `cassius` to "The Sovereign's Court" (he is her Morning Knight for most of the book) and `narol`/`kieran` to Sons of Ares/Howlers if Narol is added. `antonia` in "The Boneriders" is loose (she is a Jackal ally and Praetor, not a Bonerider) — LOW.
