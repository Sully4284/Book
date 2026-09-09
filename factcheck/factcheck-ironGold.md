# Iron Gold — Fact-Check

Source of truth: `Iron Gold by Pierce Brown.txt` (chapter boundaries reconstructed from the 66 drop-cap chapter openings; Prologue = ch 0, body chapters 1–65 match the file's TOC POV sequence exactly). Wiki (red-rising.fandom.com) used as a secondary check where search snippets were available (fandom fetch returned 402/403).

## Summary

- Entries checked: **38 characters**, 66 chapter titles, 10 family groups.
- Errors found: **74** (HIGH 34 · MED 26 · LOW 14).
- Dominant error pattern: the data file's chapter numbers for almost every mid/late-book event are wrong — generally **too early by 10–20 chapters**. The real timeline: Wulfgar dies ch 21 (not 11); Apollonius freed ch 28–30 (not 21); the kidnapping happens ch 35/39 (not 23/24); Cassius's duels ch 40–41 and his fall ch 41/47 (not 36–38); Lysander reveals his name ch 41 (not 38); Ash Lord dies ch 60 (not 46); Romulus's trial ch 61 and execution ch 62 (not 33/40).
- Second pattern: invented details (Lyria's "Oracle creature"/"parasite", Theodora's "Oracle creatures", Lysander sent "to find Atlas au Raa", Lysander "meets Atalantia", Kavax "cut off Atalantia's leg", Daxo "7'4\"", Holiday "Dux of the Lionguard", Atlas "The Abomination").
- Third pattern: Lysander's alias is wrong — he is **Castor au Janus**; **Regulus au Janus is Cassius**.

Chapter map used (line → chapter): Part I ch 1–21, Part II ch 22–39, Part III ch 40–65. Key anchors verified in text: ch 10–11 Senate session; ch 16 Howler tower; ch 21 Silene Manor fight; ch 27–30 Deepgrave; ch 34 Nessus; ch 35 Quicksilver banquet + shuttle attack (Lyria POV); ch 39 shuttle boarding (Ephraim POV); ch 42 delivery to the Duke; ch 45–46 Venus/Tharsus; ch 52–54 assault on Ash Lord's fortress; ch 60 Ash Lord's death; ch 65 ending on Venus.

---

## Errors

### darrow
- **darrow** · aliases · `['The Reaper', 'ArchImperator']` → OK as-is (no error). (Verified-correct.)
- **darrow** · progressiveInfo[ch 3].description · CURRENT `Defies the Senate by continuing the Mercury campaign. The Republic grows tired of war.` → CORRECTED `Family dinner at Silene Manor. Learns Dancer has called an emergency Senate session over his conduct on Mercury.` · Evidence: ch 3 L1089 "Dancer's called an emergency session"; the defiance (launching the Iron Rain after the Senate requested an armistice) is backstory recounted in ch 1 L424 and litigated in ch 10 L3074–3076. · **MED**
- **darrow** · progressiveInfo[ch 16].description · CURRENT `Returns to Luna to face the Senate. Discovers the political situation has deteriorated.` → CORRECTED `Voted out of high command by the Senate (ch 11). Holed up in his Hyperion tower with the Howlers as an arrest warrant is prepared; Sefi and the Obsidians leave him; he plans to break Apollonius out of Deepgrave.` · Evidence: Darrow returns to Luna in ch 1 (the Triumph); the Senate vote is ch 11 L3152 "vote to remove Darrow of Lykos from high command"; ch 16 L4215 "Your arrest warrant will be issued within the hour"; L4495 "Howlers are without the Queen of the Valkyrie". · **HIGH**
- **darrow** · progressiveInfo[ch 21].description · CURRENT `Releases Apollonius au Valii-Rath from Deepgrave prison to use against the Ash Lord.` → CORRECTED `Wulfgar and the Wardens come to arrest him at Silene Manor. In the fight Darrow accidentally kills Wulfgar and flees Luna as a fugitive.` (move the Apollonius release to a new entry at **ch 28**: `Breaks into Deepgrave and frees Apollonius au Valii-Rath to use against the Ash Lord.`) · Evidence: ch 21 L6086–6094 Wulfgar dies on Darrow's blade; ch 27 L7649 Deepgrave; ch 28 L8079–8188 Apollonius's cell; ch 30 L8827 "extract our prizes from Deepgrave". · **HIGH**
- **darrow** · progressiveInfo[ch 21].additionalDetails · CURRENT `A desperate gambit that may cost him everything.` → CORRECTED `Wulfgar's death turns the Obsidians and much of the Republic against him.` · Evidence: ch 21 L6100–6108. · **MED**
- **darrow** · progressiveInfo[ch 45].description · CURRENT `Returns to Mercury with a small force. Discovers the Ash Lord is already dying from poison.` → CORRECTED `Lands on Venus with Apollonius and the Howlers and captures Tharsus au Valii-Rath at his island villa to get the codes to reach the Ash Lord.` · Evidence: ch 45 opens "Venus was the evil sister of Earth"; L13015 "Tharsus's island in Venus's equatorial seas"; the dying Ash Lord is ch 60. · **HIGH**
- **darrow** · progressiveInfo[ch 54].description · CURRENT `The peace talks were a trap. Atalantia has been commanding Society forces all along.` → CORRECTED `Leads the Howlers in the assault on the Ash Lord's Venus fortress through the aftermath of a nuclear strike.` (move the Atalantia revelation to a new entry at **ch 60**: `Reaches the Ash Lord — a dying husk. Learns Atalantia has commanded Society forces all along and that the peace talks were her ruse to ambush the Republic fleet over Mercury. The Ash Lord takes poison; Apollonius burns him.`) · Evidence: ch 54 L15369 "soar with the Howlers into the wake of the nuclear blast"; ch 60 L17250 "My last Fury", L17258 "The peace talks were her idea", L17265 "fall upon your fleet over Mercury". · **HIGH**
- **darrow** · progressiveInfo[ch 54].additionalDetails · CURRENT `The Republic fleet is ambushed. Massive casualties.` → CORRECTED (delete; no ambush is shown in ch 54 — it is only foretold in ch 60 and feared in ch 65). · **MED**
- **darrow** · progressiveInfo[ch 65].description · CURRENT `Trapped on Mercury as Atalantia springs her trap. The war has turned against the Republic.` → CORRECTED `Leaves the Ash Lord's fortress on Venus hollowed out. Sends Sevro home on the Nessus to find the children while he goes to Mercury to save his stranded army; releases Apollonius to take Venus.` · Evidence: ch 65 L17985 "Walking out of the Ash Lord's fortress"; L18045–18047 "Atalantia might already have destroyed the fleet... our men on Mercury are trapped"; L18063 "Take the Nessus. Reach Victra and Mustang"; L18093 "Venus is yours, if you can take her." · **HIGH**
- **darrow** · progressiveInfo[ch 65].additionalDetails · CURRENT `His son Pax has been kidnapped by the Syndicate.` → CORRECTED `The Ash Lord told him (ch 60) that Pax and Electra have been taken; Sevro leaves him in fury.` · Evidence: ch 60 L17292–17294 "Your daughter... And your son. They have been taken."; ch 65 L18051 "So you abandon your child instead?" · **LOW**

### lysander
- **lysander** · aliases · CURRENT `['The Heir of Silenius', 'Regulus au Janus']` → CORRECTED `['Heir of Silenius', 'Castor au Janus']` · Evidence: ch 9 L2552 "name is Castor au Janus"; ch 22 L6187–6188 "Castor au Janus, the persona... Cassius is Regulus au Janus"; ch 26 L7318 "Castor au Janus. This is my brother, Regulus." Wiki (Lysander page) confirms "Castor au Janus and Regulus au Janus" for Lysander and Cassius respectively. · **HIGH**
- **lysander** · progressiveNames[0] · CURRENT `{ chapter: 8, name: 'Regulus au Janus' }` → CORRECTED `{ chapter: 8, name: 'Castor au Janus' }` · Evidence: as above. · **HIGH**
- **lysander** · progressiveNames[1] · CURRENT `{ chapter: 38, name: 'Lysander au Lune' }` → CORRECTED `{ chapter: 41, name: 'Lysander au Lune' }` · Evidence: ch 41 L12202 "My name is Lysander au Lune," I bellow. · **HIGH**
- **lysander** · progressiveInfo[ch 8].description · CURRENT `...Uses the alias Regulus au Janus.` → CORRECTED `Living in exile for ten years with Cassius aboard the Archimedes under the alias Castor au Janus.` · **HIGH**
- **lysander** · progressiveInfo[ch 8].additionalDetails · CURRENT `Rescues Seraphina au Raa from Ascomanni raiders in the Gulf.` → CORRECTED `Finds a naked, tortured Gold woman aboard a derelict ship infested with Ascomanni; she is not named until ch 20.` · Evidence: ch 8 L2531; ch 20 L5558 "Father sent me, Seraphina." Naming her here is a spoiler. · **MED**
- **lysander** · progressiveInfo[ch 9].description · CURRENT `Taken to Io to meet Romulus au Raa, the Lord of the Dust and Sovereign of the Rim.` → CORRECTED `Fights his way off the Ascomanni-held ship with the rescued girl and Cassius.` (add new entries: **ch 20** `Captured by Rim commandos led by Diomedes and Seraphina au Raa; held for the voyage to Io.`; **ch 25** `Brought before Romulus au Raa, Sovereign of the Rim, at his Io fortress.`) · Evidence: ch 9 L2583–2733 escape fight; ch 15 L4096 "This is the Rim"; ch 20 L5542 "Diomedes"; ch 25 L6875–6926 Romulus. · **HIGH**
- **lysander** · progressiveInfo[ch 22].description · CURRENT `Seraphina reveals she has evidence that Darrow destroyed the Ganymede Docks.` → CORRECTED `Flown across Io after weeks of captivity; Pandora has been interrogating him about a datacube Seraphina supposedly carried.` (the docks evidence is first raised at **ch 25**: `Seraphina tells Romulus she went into the Gulf for "the truth of what happened to our docks."`) · Evidence: ch 22 L6180–6186; ch 25 L6990 "The truth of what happened to our docks." · **MED**
- **lysander** · progressiveInfo[ch 22].additionalDetails · CURRENT `The destruction killed thousands and debris fell on Ganymede cities.` → CORRECTED (move to ch 38/47; ch 38 L11271 "I saw Ganymede after the docks fell from orbit"). · **LOW**
- **lysander** · progressiveInfo[ch 32] · CURRENT `Romulus is put on trial for treason. Confesses he knew about the docks to prevent war.` → CORRECTED chapter **61**, description `At Romulus's trial before the Moon Lords, Dido charges him with negligence; Romulus confesses he knew Darrow destroyed the docks and is charged with arch treason.` · Evidence: ch 61 L17398 "your accuser, Dido au Raa", L17411 "You seek no charge of treason?", L17562 "one count of arch treason". Ch 32 is Sungrave arrival. · **HIGH**
- **lysander** · progressiveInfo[ch 37] · CURRENT `Cassius is challenged to a duel by Seraphina. He refuses to fight seriously.` → CORRECTED chapter **38**, description `Dido reveals the contents of the Archimedes' safe exposes Cassius as a Bellona; the Raa invoke a bloodfeud and Seraphina volunteers to fight him.` · Evidence: ch 37 L11115 (safe found); ch 38 L11308 "A bloodfeud needs", L11320 "It is his right to refuse. I will". · **HIGH**
- **lysander** · progressiveInfo[ch 38] · CURRENT `Cassius is killed by Seraphina when he refuses to defend himself. Sacrifices himself for Lysander.` → CORRECTED chapter **41**, description `After Cassius defeats a string of Raa duelists (ch 40), Seraphina disarms and mortally wounds him. Lysander stops the duel by revealing his true name.` · Evidence: ch 40 L12042–12089 Fabera/Bellagra duels; ch 41 L12161–12171 Seraphina beats him; L12202 name reveal. Cassius does fight back ("Cassius lunges" L12163) — he does not refuse to defend himself. · **HIGH**
- **lysander** · progressiveInfo[ch 38].additionalDetails · CURRENT `Lysander mourns his mentor and adoptive father figure.` → CORRECTED (move to a **ch 47** entry: `Cassius, dying, asks "what have you done?"; Lysander opens the safe and Seraphina's holo of Darrow destroying the docks is shown to the Rim.`) · Evidence: ch 47 L13371–13408, L13459. · **MED**
- **lysander** · progressiveInfo[ch 41] · CURRENT `Dido agrees to send Lysander to find Atlas au Raa and forge an alliance with the Rim.` → CORRECTED chapter **63**, description `After Romulus's execution, asks Dido to let him join her war and send him to the Core as her envoy.` · Evidence: ch 63 L17835 "I wish to join your war", L17872 "send me to the Core with"; the name Atlas au Raa appears in the whole novel only once (ch 38 L11331, as Bellerephon's father) — there is no mission to find Atlas. · **HIGH**
- **lysander** · progressiveInfo[ch 63].description · CURRENT `Returns to the Core. Meets Atalantia and begins his path back to Gold politics.` → CORRECTED `Dido accepts his offer to go to the Core on the Rim's behalf. He has not yet left Io; he meets no one from the Society in this book.` · Evidence: ch 63 ends on Io (L17879); Atalantia never appears in person in Iron Gold. · **HIGH**
- **lysander** · relationships[cassius].type · CURRENT `ally` → CORRECTED `mentor` · Evidence: Dramatis "guardian to Lysander"; ch 38 additionalDetails already calls him "mentor". · **LOW**
- **lysander** · relationships[seraphina].revealedAtChapter · CURRENT `22` → CORRECTED `20` (first named/identified) · Evidence: ch 20 L5558. · **LOW**

### lyria
- **lyria** · progressiveInfo[ch 4].description · CURRENT `A Gamma Red living in Camp 121 on Mars. Her family was killed by Red Hand terrorists.` → CORRECTED `A Gamma Red from the mine of Lagalos living in Assimilation Camp 121 on Mars with her father, sister and nephews. Resented as a "pet of the Golds."` · Evidence: ch 4 L1160, L1188; family alive through ch 5; the Red Hand massacre is ch 12–13 (L3212 "It's the Red Hand", ch 13 L3583 "Camp 121 is burning"). Early spoiler. · **HIGH**
- **lyria** · progressiveInfo[ch 4].additionalDetails · CURRENT `Only she and her nephew Liam survived the massacre. Liam is blind.` → CORRECTED `Her nephew Liam was born blind.` (move survival to a **ch 13** entry: `The Red Hand massacres Camp 121; Lyria escapes with only her blind nephew Liam.`) · Evidence: ch 5 L1275 "blind from birth"; ch 12 L3196 "I flee the gunfire that killed my brother". · **HIGH**
- **lyria** · progressiveInfo[ch 12] · CURRENT `Offered a job by the Telemanus family in Hyperion. Becomes caretaker to their fox Sophocles.` → CORRECTED chapter **17**, description `Kavax au Telemanus arrives with relief; his fox Sophocles "chooses" her and Kavax takes her and Liam to Luna.` · Evidence: ch 17 L4790 "Sophocles has given Lyria his blessing", L4802 "Sophocles has chosen". Ch 12 is the massacre. · **HIGH**
- **lyria** · progressiveInfo[ch 23] · CURRENT `Witnesses the kidnapping of Pax Augustus and Electra Barca from the Telemanus estate.` → CORRECTED chapter **35**, description `Aboard the Telemanus shuttle after Quicksilver's banquet when it is gassed and brought down — the kidnapping of Pax and Electra.` (ch 23 becomes: `Working as Sophocles's keeper in the Telemanus household on Luna; Liam is at the Citadel school.`) · Evidence: ch 35 L10748 "Gas"; L10763 ff. ship plummets, "A teardrop in the door begins to glow" (wiki names ch 35 "Teardrop In The Door"); ch 23 L6327–6418 is a quiet day with Sophocles. The kidnapping is not "from the estate." · **HIGH**
- **lyria** · progressiveInfo[ch 23].additionalDetails · CURRENT `Knocked unconscious during the attack.` → CORRECTED `Paralyzed by anacene gas; Ephraim finds her among the servants in the wreck.` · Evidence: ch 39 L11453. · **LOW**
- **lyria** · progressiveInfo[ch 35] · CURRENT `Interrogated by the Sovereign's agents. Proves her innocence using an Oracle creature.` → CORRECTED chapter **44**, description `Flees after being blamed for the attack and is arrested by Holiday ti Nakamura as a witness; Victra tries to seize her.` · Evidence: ch 43 L12570 "They killed Kavax"; ch 44 L12774 "Holiday ti Nakamura, special envoy of the Sovereign", L12849 "Victra, the witness is under arrest". No "Oracle" exists anywhere in the text. · **HIGH**
- **lyria** · progressiveInfo[ch 50] · CURRENT `Discovers she was implanted with a parasite that allowed the Syndicate to spy through her.` → CORRECTED `Questioned by Daxo, Theodora and Holiday (ch 49), then by the Sovereign herself; identifies "Philippe," the man who befriended her, revealing the kidnapper is Ephraim — Holiday's brother-in-law.` · Evidence: ch 50 L14105 "Philippe", L14308 "He's my brother-in-law"; the word "parasite" never appears; Lyria's implant is a Dark Age plot point, not Iron Gold. · **HIGH**
- **lyria** · progressiveInfo[ch 50].additionalDetails · CURRENT `She was an unwitting tool of the kidnappers.` → keep (accurate: ch 42 L12466 Cyra used her). · (no change)
- **lyria** · progressiveInfo[ch 59] · CURRENT `The parasite reveals visions of the Syndicate Queen. Lyria begins to understand the conspiracy.` → CORRECTED `The children are recovered. Lyria bargains with the Sovereign for Liam's care and the restoration of his eyesight.` · Evidence: ch 59 L16921 "The children are safe", L17044 "Liam will be looked after, and his eyesight given". · **HIGH**
- **lyria** · relationships[liam].type · CURRENT `ally` → CORRECTED (no 'aunt/nephew' type exists; closest is `parent`-style family — recommend `friend` or leave and add a note). · **LOW**

### ephraim
- **ephraim** · progressiveInfo[ch 6].additionalDetails · CURRENT `His husband Trigg was killed during the Rising. He never recovered.` → CORRECTED `His fiancé was killed during the Rising (named as Trigg in ch 14). He never recovered.` · Evidence: ch 6 L1479 "a gift from my late fiancé"; ch 14 L3778 "After Trigg died on that Martian peak". They were never married. · **MED**
- **ephraim** · progressiveInfo[ch 14] · CURRENT `Hired by the Duke of Hands for a job. The Syndicate wants him to kidnap children.` → CORRECTED chapter **18**, description `Summoned by the Duke of Hands, a Syndicate lord, who offers him the Queen's Kiss and a job he cannot refuse.` (ch 14 becomes: `Holiday visits on Trigg's birthday; the two trade bitter words about the Republic.`) · Evidence: ch 18 L4956 "You're the Duke of Hands", L5130 "the Queen's Kiss"; ch 14 L3659, L3713. · **HIGH**
- **ephraim** · progressiveInfo[ch 24] · CURRENT `Leads the kidnapping of Pax Augustus and Electra Barca from the Telemanus estate.` → CORRECTED chapter **39**, description `His crew downs the Telemanus shuttle over Hyperion with gas and a gravity trap and takes Pax and Electra; Dano is killed.` · Evidence: ch 39 L11346 "Gold shuttle in the center of our trap", L11429; ch 42 L12302 "Dano's death". Ch 24 is planning in Hyperion. · **HIGH**
- **ephraim** · progressiveInfo[ch 39] · CURRENT `Delivers the children to the Syndicate. The Duke has his team member Cyra killed.` → CORRECTED chapter **42** (same text). · Evidence: ch 42 L12289 "A debt is paid!", L12496 Gorgo drags Cyra to the edge. · **HIGH**
- **ephraim** · progressiveInfo[ch 51].description · CURRENT `Volga confronts him about selling children. She leaves him in disgust.` → CORRECTED `Volga confronts him over his drug use and callousness; Holiday and the Republic then capture him. The Sovereign makes him a deal: lead them to the Syndicate base or Volga dies.` · Evidence: ch 51 L14409–14458 Volga's outburst; L14579 "Sit down, Ephraim," Holiday says; end of ch 51 "your friend will die." Volga does not walk out on him. · **HIGH**
- **ephraim** · progressiveInfo[ch 64].description · CURRENT `Realizes the full horror of what he has done. The children will be used to break the Republic.` → CORRECTED `Wounded and flying Pax and Electra to safety after freeing them from the Syndicate (ch 57–58). The Syndicate Queen seizes remote control of the ship; he blows the engines to crash it rather than be taken back.` · Evidence: ch 58 L16630 "I rush to the children's cage"; ch 64 L17915 "disembodied head of the Syndicate Queen", ch 64 end (grenades, "one-way ticket"). · **HIGH**
- **ephraim** · progressiveInfo[ch 64].additionalDetails · CURRENT `Holiday is his sister-in-law (Trigg's sister). Agrees to help rescue the children.` → CORRECTED (delete — both facts belong to ch 14/51; the rescue is already done by ch 58). · **MED**
- **ephraim** · relationships[trigg] · CURRENT `{ type: 'spouse', revealedAtChapter: 7 }` → CORRECTED `{ type: 'lover', revealedAtChapter: 14 }` · Evidence: fiancé (ch 6); Trigg is not named until ch 14 (zero hits in ch 7). · **MED**
- **ephraim** · relationships[volga].revealedAtChapter · CURRENT `19` → CORRECTED `6` · Evidence: ch 6 L1546 "Evening, Volga". · **MED**
- **ephraim** · relationships[holiday].revealedAtChapter · CURRENT `44` → CORRECTED `14` · Evidence: ch 14 L3659. · **MED**

### mustang
- **mustang** · firstAppearance · CURRENT `0` → CORRECTED `1` · Evidence: prologue only mentions "his Golden wife" (L253); she first appears ch 1 L464 "'Lo, husband. Welcome home." · **LOW**
- **mustang** · progressiveInfo[ch 16].description · CURRENT `Faces opposition from the Senate. The Vox Populi faction demands Darrow be recalled.` → CORRECTED chapter **11**: `Loses the Senate vote as the Vox Populi strips Darrow of command; later (ch 21) she orders Wulfgar to arrest her own husband.` · Evidence: ch 11 L3152; ch 21 L5917 "Wulfgar." · **MED**
- **mustang** · progressiveInfo[ch 23] · CURRENT chapter `23` → CORRECTED `35` (description otherwise fine; "from the Telemanus estate" → "from the Telemanus shuttle over Hyperion"). · **HIGH**

### sevro
- **sevro** · progressiveInfo[ch 23] · CURRENT chapter `23` `His daughter Electra is kidnapped along with Pax. Sevro is devastated.` → CORRECTED chapter **60**: `Learns from the dying Ash Lord that Electra and Pax have been taken; he is with Darrow on Venus and cannot reach her.` · Evidence: ch 60 L17288–17294. Sevro is off-world for the kidnapping (ch 35) and only hears of it in ch 60. · **HIGH**

### victra
- **victra** · aliases · CURRENT `['The Julii Fury']` → CORRECTED `['Lady Julii']` · Evidence: ch 51 L14740 "The Lady Julii is on the hunt"; "Julii Fury" never appears. · **LOW**
- **victra** · firstAppearance · CURRENT `0` → CORRECTED `2` · Evidence: ch 2 L500. · **LOW**
- **victra** · progressiveInfo[ch 23] · CURRENT `Shot during the kidnapping of the children. Fights to the last despite the sedative gas.` → CORRECTED chapter **35**: `Present, pregnant, at Quicksilver's banquet the night of the kidnapping; afterwards hunts Lyria and the kidnappers in fury, clashing with Holiday and Virginia.` · Evidence: ch 35 L10416 "A pregnant Gold with jagged whiteblonde hair"; ch 44 L12862–12868 Victra demands the witness; ch 50 L14198 the shooter of Kavax is a big white-haired woman (Volga), not Victra. No text shows Victra shot. · **HIGH**
- **victra** · progressiveInfo[ch 23].additionalDetails · CURRENT `Survives but is severely wounded.` → CORRECTED (delete). · **MED**

### pax-augustus
- **pax-augustus** · aliases · CURRENT `['The Heir']` → CORRECTED `[]` · Evidence: never used in text. · **LOW**
- **pax-augustus** · firstAppearance · CURRENT `0` → CORRECTED `2` · Evidence: ch 2 L542. · **LOW**
- **pax-augustus** · progressiveInfo[ch 23] · CURRENT chapter `23` → CORRECTED `35`; description `Kidnapped with Electra when the Telemanus shuttle is downed over Hyperion by Ephraim's Syndicate-hired crew.` · **HIGH**

### electra
- **electra** · firstAppearance · CURRENT `0` → CORRECTED `2` · Evidence: ch 2 L540 "The girl is nine". · **LOW**
- **electra** · progressiveInfo[ch 23] · CURRENT chapter `23` → CORRECTED `35`. · **HIGH**

### dancer
- **dancer** · firstAppearance · CURRENT `16` → CORRECTED `2` · Evidence: ch 2 L669 "'Lo, Dancer". · **MED**
- **dancer** · progressiveInfo[ch 16].description · CURRENT `Now a Senator in the Republic. Tribune of the Red bloc. Former Sons of Ares leader.` → CORRECTED chapter **2**: `Senator O'Faran, leader of the Vox Populi bloc in the Senate. Darrow's old mentor and former Sons of Ares leader; now his chief political opponent.` · Evidence: ch 10 L2831 "Dancer's Vox Populi"; the only Tribune named is Publius cu Caraval, "the Copper Tribune" (L2815). · **MED**

### kavax
- **kavax** · firstAppearance · CURRENT `12` → CORRECTED `2` · Evidence: ch 2 L564. · **MED**
- **kavax** · progressiveInfo[ch 12].additionalDetails · CURRENT `Known for cutting off Atalantia au Grimmus's leg in battle.` → CORRECTED `His daughter Thraxa lost her left arm to Atalantia au Grimmus's razor.` · Evidence: ch 1 L358–359; no leg-severing anywhere. · **HIGH**
- **kavax** · progressiveInfo[ch 12].description · CURRENT `Patriarch of House Telemanus. His estate is where the children are kidnapped from.` → CORRECTED chapter **2**: `Patriarch of House Telemanus; Praetor, "Eaglebreaker." Hosts Darrow's family at Silene Manor.` · Evidence: ch 17 L4620; the kidnapping is from a shuttle, not his estate. · **MED**
- **kavax** · progressiveInfo[ch 23] · CURRENT chapter `23` `Shot during the kidnapping. His family guards are overwhelmed by the attack.` → CORRECTED chapter **35**: `Aboard the downed shuttle, fights the gas drone until he is the last to fall; shot by Volga during the boarding.` · Evidence: ch 35 end "Kavax swings wildly at the disk"; ch 50 L14198 "She... shot Kavax". · **HIGH**
- **kavax** · progressiveInfo[ch 23].additionalDetails · CURRENT `Lyria believes he was killed, but he survives.` → OK but at ch 43 (L12570 "They killed Kavax"); ch 49 L13797 "Is Kavax alive?" · **LOW**

### daxo
- **daxo** · firstAppearance · CURRENT `16` → CORRECTED `3` · Evidence: ch 3 L861. · **MED**
- **daxo** · progressiveInfo[ch 16].description · CURRENT `Senator in the Republic. Still 7'4" tall. A voice of moderation in political debates.` → CORRECTED chapter **3**: `Senator and Mustang's closest political ally; bald, with golden angels tattooed on his scalp; sketches angels at dinner.` · Evidence: ch 3 L936–942; ch 49 L13759. No height figure appears in the text. · **MED**

### holiday
- **holiday** · aliases · CURRENT `['The Gray']` → CORRECTED `[]` (or `['The Howler']`, ch 14 L3659). · **LOW**
- **holiday** · firstAppearance · CURRENT `44` → CORRECTED `1` · Evidence: ch 1 L392 "Stalwart Holiday walks at their center". · **HIGH**
- **holiday** · progressiveInfo[ch 44].description · CURRENT `Dux of the Sovereign's Lionguard. Her brother Trigg was married to Ephraim.` → CORRECTED (split): ch **1** `Howler and head of Darrow's bodyguard on Mercury.`; ch **14** `Visits Ephraim, her dead brother Trigg's fiancé, on Trigg's birthday.`; ch **44** `Now "special envoy of the Sovereign"; arrests Lyria as a witness.` · Evidence: ch 14 L3659, L3713; ch 44 L12774. "Dux" never appears. · **HIGH**
- **holiday** · progressiveInfo[ch 44].additionalDetails · CURRENT `Discovers her brother-in-law is the man who kidnapped the children.` → CORRECTED chapter **50** (L14308). · **MED**
- **holiday** · relationships[trigg].revealedAtChapter `44` → `14`; relationships[ephraim].revealedAtChapter `44` → `14`; relationships[mustang].revealedAtChapter `44` → `1`. · **MED**

### theodora
- **theodora** · firstAppearance · CURRENT `35` → CORRECTED `49` (first on-page; first mention ch 27) · Evidence: ch 49 L13889 "My name is Theodora," the Pink tells me. · **MED**
- **theodora** · progressiveInfo[ch 35] · CURRENT chapter `35`, additionalDetails `Preserved Oracle creatures against orders to protect the Sovereign's family.` → CORRECTED chapter **49**; additionalDetails `Elderly Pink; sits on Lyria's interrogation with Daxo and Holiday.` · Evidence: ch 49 L13766, L14026 "my spymaster"; ch 27 L7599 back door into Deepgrave (keep that clause). "Oracle creatures" is invented. · **HIGH**

### wulfgar
- **wulfgar** · firstAppearance · CURRENT `3` → CORRECTED `1` · Evidence: ch 1 L373. · **MED**
- **wulfgar** · progressiveInfo[ch 3] chapter → `1`. · **LOW**
- **wulfgar** · progressiveInfo[ch 11] · CURRENT chapter `11` (death) → CORRECTED `21` · Evidence: ch 21 L6086–6094; ch 11 he merely escorts Darrow out and warns him not to leave the city (L3168). Description text is otherwise accurate (stun round pushes him into the blade). · **HIGH**

### romulus
- **romulus** · firstAppearance · CURRENT `9` → CORRECTED `25` · Evidence: ch 25 L6875 ff. · **HIGH**
- **romulus** · progressiveInfo[ch 9] · CURRENT chapter `9`, description `...Lost his right arm, son Aeneas, and one eye at the Battle of Ilium.` → CORRECTED chapter **25**: `Sovereign of the Rim Dominion. Lost his right arm and a son at the Battle of Ilium; his left eye is missing.` · Evidence: ch 25 L6875 "right arm was lost in the Battle of Ilium", L6890 "gave an arm and a son", L6910 "The left eye is missing." The name "Aeneas" never appears in Iron Gold. · **MED**
- **romulus** · progressiveInfo[ch 9].additionalDetails · CURRENT `Commands profound respect. Brother to Atlas au Raa (the Fear Knight).` → CORRECTED `Commands profound respect even from his captors.` · Evidence: Atlas is never identified as Romulus's brother in this book (single mention, ch 38, as Bellerephon's father). · **MED**
- **romulus** · relationships[atlas] `{ sibling, revealedAtChapter: 9 }` → delete (or revealedAtChapter 38 with a note that the sibling link is not stated in this book). · **MED**
- **romulus** · relationships[dido/seraphina/diomedes/marius].revealedAtChapter `9` → `25` (Dido: `26`). · **MED**
- **romulus** · progressiveInfo[ch 33] · CURRENT chapter `33` → CORRECTED `61`. · Evidence: ch 61. Also note ch **26** entry missing: `Deposed and seized in a coup led by his wife Dido, who wants war with the Republic.` (ch 26 L7225 "Bellerephon, seize"). · **HIGH**
- **romulus** · progressiveInfo[ch 40] · CURRENT chapter `40` → CORRECTED `62` · Evidence: ch 62 L17758–17766 "naked and pale there on the frozen sulfur... eighty steps to reach... the Dragon Tomb... Only four have ever made it". Description/additionalDetails otherwise accurate. · **HIGH**

### dido
- **dido** · firstAppearance · CURRENT `9` → CORRECTED `26` · Evidence: ch 26 L7100. · **HIGH**
- **dido** · progressiveInfo[ch 9] · CURRENT chapter `9` → CORRECTED `26`; description `Wife of Romulus, born Dido au Saud of Venus, mother of seven. Leads a coup against her husband to drag the Rim into war with the Republic.` · Evidence: ch 26 L7100 "mother to his seven children", L7121. · **HIGH**
- **dido** · progressiveInfo[ch 9].additionalDetails · CURRENT `Venusian by birth. Mother to Seraphina, Diomedes, and Marius.` → CORRECTED `Venusian by birth. Seven children, including Seraphina, Diomedes and Marius.` · **LOW**
- **dido** · progressiveInfo[ch 33] · CURRENT chapter `33` → CORRECTED `61` · Evidence: ch 61 L17405 "She brings no charge of treason" — she sought only negligence; Romulus's confession forces the capital charge. · **HIGH**
- **dido** · progressiveInfo[ch 41] · CURRENT `Accepts Lysander's offer to send him to find Atlas au Raa and forge an alliance.` → CORRECTED chapter **63**: `Grieving Romulus, accepts Lysander's offer to serve as her envoy to the Core.` · Evidence: ch 63; no Atlas. · **HIGH**

### seraphina
- **seraphina** · relationships[romulus/dido/diomedes].revealedAtChapter `8` → `20` (diomedes), `25` (romulus), `26` (dido); relationships[marius] `9` → `20`. · Evidence: she is unnamed and un-housed in ch 8–9. · **MED**
- **seraphina** · progressiveInfo[ch 8].description · CURRENT `Daughter of Romulus and Dido. Found near death after Ascomanni attack. Was gathering evidence about the docks.` → CORRECTED `A Gold woman found naked and tortured on an Ascomanni-held derelict; refuses to give her name.` (identity → ch 20; docks mission → ch 25). Spoiler. · **MED**
- **seraphina** · progressiveInfo[ch 26] · CURRENT `Shares holographic evidence proving Darrow destroyed the Ganymede Docks.` → CORRECTED chapter **47**: `Her holodrop, recovered from the Archimedes' safe, is played for the Rim: proof the Reaper destroyed the Ganymede Docks.` (also shown at trial ch 61 L17416). · Evidence: ch 47 L13418–13459. In ch 26 the evidence is still missing. · **HIGH**
- **seraphina** · progressiveInfo[ch 37] · CURRENT `Ordered by Dido to duel Cassius after he defeats other Raa relatives.` → CORRECTED chapter **41**: `Volunteers (ch 38) and then duels the exhausted Cassius, disarming and mortally wounding him before Lysander's revelation halts the fight.` · Evidence: ch 38 L11320 "I will"; ch 41 L12144–12171. Not "ordered". · **HIGH**
- **seraphina** · progressiveInfo[ch 37].additionalDetails · CURRENT `A Shadowfall shade, she is smoother than even Darrow or Aja.` → CORRECTED `Fights in the Rim's Shadowfall style: "Not as fast as Darrow, not as strong as Aja, but smoother than either."` · Evidence: ch 41 L12161, L12165. · **LOW**
- **seraphina** · aliases `['Little Hawk']` → OK (ch 20 L5551). Add age note "Barely twenty" (ch 32 L9410). · (verified)

### diomedes
- **diomedes** · firstAppearance · CURRENT `9` → CORRECTED `20` · Evidence: ch 20 L5542. · **HIGH**
- **diomedes** · progressiveInfo[ch 9] · CURRENT chapter `9`, description `Olympic Knight and blademaster. Studied under Lorn au Arcos. Known as a stormson of Arcos.` → CORRECTED chapter **20**: `The Rim's Storm Knight, an Olympic Knight; "the Sword of Io," one of six blademasters left in the Rim. Trained with the Arcos on Europa and became a "stormson."` · Evidence: ch 20 L5512; ch 36 L10953–10955. "Studied under Lorn" is an over-read: he says Lorn taught him to fish (L10957). · **MED**
- **diomedes** · progressiveInfo[ch 33] · CURRENT chapter `33` → CORRECTED `61`/`62` (`Watches his father sentenced (61) and walk to the Dragon Tomb (62)`). · **HIGH**
- **diomedes** · progressiveInfo[ch 36] · CURRENT `Tries to stop Dido's bloodfeud duels against Cassius, defending his cousin Bellerephon.` → CORRECTED chapter **26**: `Draws on his cousin Bellerephon and Dido's men to defend his father during the coup, until Dido calls a halt.` (In ch 40 he presides over the duels and does *not* help Dido; ch 47 he takes custody of the wounded Cassius.) · Evidence: ch 26 L7227–7270; ch 40 L11875–11876; ch 47 L13391. · **HIGH**

### marius
- **marius** · firstAppearance · CURRENT `9` → CORRECTED `20` (mention) / `25` (appearance) · Evidence: ch 20 L5510 "subQuaestor Marius"; ch 25 L6897. · **HIGH**
- **marius** · progressiveInfo[ch 9] · CURRENT chapter `9` → CORRECTED `25` (description/additionalDetails are accurate: ch 25 L6897–6900 "anemic quality... small brown splotches... Politico Academy on Luna as a hostage"; ch 61 L17370 "misshapen Marius"). · **HIGH**

### cassius
- **cassius** · progressiveInfo[ch 36] · CURRENT chapter `36`, description `...Defeats Bellerephon (son of Atlas au Raa) and multiple other Raa cousins.` → CORRECTED chapter **40**: `Fights the Raa bloodfeud duels before the Moon Lords: defeats Bellerephon (son of Atlas au Raa, a Shadowfall "shade"), Fabera and Bellagra despite mounting wounds.` · Evidence: ch 40 L11881–12116; ch 38 L11331. · **HIGH**
- **cassius** · progressiveInfo[ch 37] · CURRENT chapter `37` `Seraphina is ordered to duel him...` → CORRECTED chapter **41** (and "ordered" → "steps forward"). · **HIGH**
- **cassius** · progressiveInfo[ch 38] · CURRENT chapter `38`, description `Lysander reveals his true identity to stop the duel before Seraphina can kill Cassius. Cassius dies from his wounds.`, status `dead` → CORRECTED chapter **47**, description `Collapses from his wounds after Lysander's revelation; asks "what have you done?" and is carried off by Diomedes's Olympic Knights. Lysander later speaks of him as dead.`, status `unknown` (recommended) or `dead` with note "presumed" · Evidence: ch 47 L13371–13397 "He will survive. He has to."; ch 55 L15635 "While Cassius may be gone"; ch 56 L16073 "Cassius died for his honor." No death is shown on page (and he is later revealed alive in Dark Age). · **HIGH**
- **cassius** · relationships[lysander].type `ally` → `mentor`. · **LOW**

### ash-lord
- **ash-lord** · relationships[lysander] · CURRENT `{ type: 'ally', revealedAtChapter: 8 }` → CORRECTED `{ type: 'mentor', revealedAtChapter: 8 }` (he is Lysander's godfather; ch 8 L2430). · **LOW**
- **ash-lord** · progressiveInfo[ch 45] · CURRENT chapter `45` → CORRECTED `60` · Evidence: ch 60 L17136–17137 "Barely a third of the man remains... emaciated and skeletal"; L17250; L17292 taunt about the children. · **HIGH**
- **ash-lord** · progressiveInfo[ch 46] · CURRENT chapter `46` → CORRECTED `60` · Evidence: ch 60 L17323 "Poison.", L17342 "Burn him.", L17345–17350 antibacterial spray and candle. · **HIGH**

### atalantia
- **atalantia** · firstAppearance · CURRENT `34` → CORRECTED `1` (mention only — she never appears on page in this book) · Evidence: ch 1 L359. · **MED**
- **atalantia** · progressiveInfo[ch 34] · CURRENT chapter `34` `Revealed to be the true commander...` → CORRECTED chapter **60** · Evidence: ch 60 L17250–17265. Ch 34 only mentions her assassins (L10207). Add a **ch 1** entry: `Daughter of the Ash Lord, "the Last Fury." Took Thraxa au Telemanus's arm.` (ch 5 L1340; ch 1 L358). · **HIGH**
- **atalantia** · progressiveInfo[ch 54] · CURRENT chapter `54` `Springs her trap on the Republic fleet. The peace talks were her deception.` → CORRECTED chapter **65**: `Her fleet is believed to be falling on the half-strength Republic fleet over Mercury; the attack itself is not shown.` · Evidence: ch 65 L18045–18047. · **MED**
- **atalantia** · relationships[ash-lord].revealedAtChapter `34` → `5` (ch 5 L1340 "the Ash Lord and his daughter"). · **LOW**

### apollonius
- **apollonius** · firstAppearance · CURRENT `21` → CORRECTED `28` (first mention ch 2 L546; ch 16 L4197) · Evidence: ch 28 L8079 ff. · **HIGH**
- **apollonius** · progressiveInfo[ch 21] · CURRENT chapter `21` → CORRECTED `28` · Evidence: ch 28 L8126 "eating algae for the last six years"; bomb in his head ch 27 L7552 / ch 45 L12986. · **HIGH**
- **apollonius** · progressiveInfo[ch 46] · CURRENT chapter `46`, description `Burns the Ash Lord alive...` → CORRECTED chapter **60** · Evidence: ch 60 L17345–17350. · **HIGH**
- **apollonius** · progressiveInfo[ch 46].additionalDetails · CURRENT `Brother Tharsus now controls their house and provides intelligence to Darrow.` → CORRECTED (as a **ch 46** entry): `Learns his brother Tharsus sold him out; cuts off Tharsus's ear when they capture him on Venus.` · Evidence: ch 34 L10127 "Tharsus sold"; ch 46 L13249–13250. · **MED**
- **apollonius** · relationships[darrow].revealedAtChapter `21` → `28`; relationships[tharsus].revealedAtChapter `21` → `28` (targetId `tharsus` has no entry in this file — add Tharsus or drop). · **MED**

### atlas
- **atlas** · aliases · CURRENT `['The Fear Knight', 'The Abomination']` → CORRECTED `['The Fear Knight']` · Evidence: "Abomination" never appears. · **MED**
- **atlas** · firstAppearance · CURRENT `9` → CORRECTED `38` (mention only) · Evidence: ch 38 L11331 "son of Atlas au Raa"; "Fear Knight" quip ch 11 L3100. · **HIGH**
- **atlas** · progressiveInfo[ch 9] · CURRENT `Romulus's exiled brother. Known as the Fear Knight. Father of Bellerephon.` + additionalDetails `Left the Rim under mysterious circumstances. Now in the Core with the Society.` → CORRECTED chapter **38**: `Father of Bellerephon au Raa. Named only in passing in this book.`; additionalDetails `The "Fear Knight" is invoked as a bogeyman in the Senate (ch 11). His history is not given in Iron Gold.` · Evidence: those are the only two references. Consider removing Atlas from this book's roster entirely. · **HIGH**
- **atlas** · relationships[romulus] `{ sibling, 9 }` → delete for this book. · **MED**

### duke-of-hands
- **duke-of-hands** · firstAppearance · CURRENT `14` → CORRECTED `18` · Evidence: ch 18 L4877–4879 ivory cane with onyx octopus handle; L4956. Ch 14 has no Duke. · **HIGH**
- **duke-of-hands** · progressiveInfo[ch 14] chapter → `18`. Description's "white cane topped with an octopus head" → `ivory cane with an onyx octopus handle` (L4878). · **MED**
- **duke-of-hands** · relationships[ephraim].revealedAtChapter `14` → `18`. · **MED**

### syndicate-queen
- **syndicate-queen** · firstAppearance · CURRENT `39` → CORRECTED `18` (first mention, "a crime against the Queen herself" L5039; the Queen's Kiss L5130). First on-page: **ch 64** as a distorted holo. · **MED**
- **syndicate-queen** · color · CURRENT `Pink` → CORRECTED `Unknown` (or omit) · Evidence: only a "shadowy face" formed of swarming particles (ch 64 L17913–17927); her Color is never stated in Iron Gold. · **MED**
- **syndicate-queen** · progressiveInfo[ch 39] → chapter **18**; add ch **50** `The Sovereign explains the Syndicate: a woman who united and purged Luna's gangs after the fall; the octopus is her symbol.` (L14225–14236) and ch **64** `Speaks to Ephraim as a rasping disembodied head and seizes control of his ship.` · **MED**

### volga
- **volga** · firstAppearance · CURRENT `19` → CORRECTED `6` · Evidence: ch 6 L1546. · **HIGH**
- **volga** · progressiveInfo[ch 19] chapter → `6` (additionalDetails is right: ch 6 L1553 "courtesy of a Society breeding program. Poor kid didn't measure up"). · **MED**
- **volga** · progressiveInfo[ch 24] `Participates in the kidnapping despite her moral qualms.` → chapter **39**. Add **ch 42**: `Wrestled down by Syndicate Obsidians at the hand-off but released; watches Cyra murdered.` · **HIGH**
- **volga** · progressiveInfo[ch 51].description · CURRENT `Confronts Ephraim about his callousness. Leaves him in disgust.` → CORRECTED `Confronts Ephraim about his zoladone and his cruelty ("If I was not a weapon..."); she is then taken by the Republic as the hostage guaranteeing Ephraim's cooperation.` · Evidence: ch 51 L14409–14458; end of ch 51 "your friend will die." · **HIGH**
- **volga** · progressiveInfo[ch 51].additionalDetails · CURRENT `"I did it for you... You're my family." She calls him a monster.` → CORRECTED `Tells him she did the job to have his back, "like you have mine."` · Evidence: ch 51 L14430–14431; the quoted lines and "monster" do not appear in ch 51. · **MED**
- **volga** · relationships[ephraim].revealedAtChapter `19` → `6`. · **MED**

### liam
- **liam** · firstAppearance · CURRENT `4` → CORRECTED `5` · Evidence: ch 5 L1270 first named ("Liam's at the infirmary"); ch 4 L1136 only "my nephew's baby teeth". · **LOW**
- **liam** · progressiveInfo[ch 4].description · CURRENT `Lyria's young nephew, the only other survivor of their family's massacre. Born blind.` → CORRECTED chapter **5**: `Lyria's little nephew, blind from birth and her favorite.` (survivor status → ch 13) · Evidence: ch 5 L1275. Spoiler. · **HIGH**
- **liam** · progressiveInfo[ch 4].additionalDetails · CURRENT `Kavax declares him a knight for his bravery.` → CORRECTED chapter **17** · Evidence: ch 17 L4631–4638 "You are a knight." Spoiler by 13 chapters. · **HIGH**
- **liam** · progressiveInfo[ch 35] · CURRENT chapter `35` `Lyria negotiates to have his eyesight restored in exchange for her testimony.` → CORRECTED chapter **59**; description `Lyria bargains with the Sovereign for Liam's care and the restoration of his eyesight.` Add **ch 23**: `Enrolled at the Citadel school on Luna by Kavax.` (L6349). · Evidence: ch 59 L17044. · **HIGH**

### trigg
- **trigg** · firstAppearance · CURRENT `7` → CORRECTED `14` · Evidence: ch 14 L3713 first mention by name; none in ch 7. · **MED**
- **trigg** · progressiveInfo[ch 7] · CURRENT chapter `7`, description `Ephraim's deceased husband. Died during the Rising. His death broke Ephraim.` → CORRECTED chapter **14**: `Ephraim's late fiancé, killed on a Martian peak during the Rising (Morning Star). His death broke Ephraim.` · Evidence: ch 6 L1479 "late fiancé"; ch 14 L3778. · **MED**
- **trigg** · relationships[ephraim] `{ spouse, 7 }` → `{ lover, 14 }`; relationships[holiday].revealedAtChapter `44` → `14`. · **MED**

### quicksilver
- **quicksilver** · firstAppearance · CURRENT `17` → CORRECTED `16` (first mention ch 3 L901) · Evidence: ch 16 L4264 "the drone behind Quicksilver" — he is at Darrow's tower meeting. · **MED**
- **quicksilver** · progressiveInfo[ch 17] · CURRENT chapter `17` `The wealthiest man in the Republic. Hosts extravagant parties for the elite.` → CORRECTED chapter **16**: `Richest man in the Republic; backs Darrow's Deepgrave plan at the Howler tower.` Add **ch 35**: `Hosts the banquet the Telemanus party attends the night of the kidnapping.` · Evidence: ch 16; ch 35 L10391 ff. Ch 17 is a Lyria chapter on Mars with no Quicksilver. · **MED**

### alexandar
- **alexandar** · aliases · CURRENT `['The Griffin']` → CORRECTED `[]` (griffin is the Arcos sigil; Apollonius's "A griffin in the flesh" ch 34 L10165 is not a nickname). · **LOW**
- **alexandar** · firstAppearance · CURRENT `1` → CORRECTED `16` · Evidence: ch 16 L4256 "My archLancer, Alexandar". Description text is accurate to ch 16 L4258. · **MED**
- **alexandar** · progressiveInfo[ch 1] chapter → `16`; relationships[darrow].revealedAtChapter `1` → `16`. · **MED**

### rhonna
- **rhonna** · firstAppearance · CURRENT `1` → CORRECTED `3` (mention ch 2 L701) · Evidence: ch 3 L863 "my brother Kieran and niece, Rhonna". · **LOW**
- **rhonna** · progressiveInfo[ch 1] · CURRENT chapter `1`, description `Niece of Darrow. Serves as one of his lancers in the Mercury campaign.` → CORRECTED chapter **16**: `Darrow's niece, Kieran's eldest daughter, twenty, buzzed head; a lancer for one year and eager to match Alexandar.` · Evidence: ch 16 L4259–4262. · **LOW**

### thraxa
- **thraxa** · firstAppearance · CURRENT `0` → CORRECTED `1` · Evidence: ch 1 L358. · **LOW**
- **thraxa** · progressiveInfo[ch 0] · CURRENT chapter `0`, description `Daughter of Kavax and Niobe au Telemanus.` → CORRECTED chapter **1**: `"The Hammer." Daughter of Kavax and Niobe; lost her left arm to Atalantia au Grimmus's razor and wears a Sun Industries metal prosthetic. Leads the Seventh Legion remnant at the Triumph.` · Evidence: ch 1 L355–359. · **MED**
- **thraxa** · relationships[*].revealedAtChapter `0` → `1`/`2`. · **LOW**

### niobe
- **niobe** · firstAppearance `0` → `2`; progressiveInfo chapter `0` → `2`; relationships revealedAtChapter `0` → `2` · Evidence: ch 2 L564–566 (description text is accurate). · **LOW**

### sefi
- **sefi** · firstAppearance · CURRENT `0` → CORRECTED `1` · Evidence: ch 1 L383 "Sefi Volarus"; prologue does not name her. · **LOW**
- **sefi** · progressiveInfo · add **ch 16**: `Withdraws the Obsidians from Darrow's cause after the Senate vote and Wulfgar's fate looms; "I will save a seat for you in the mead hall."` · Evidence: ch 16 L4490–4497. · **MED**

### kavax / daxo / sevro etc. relationships
- **kavax** · relationships[niobe/thraxa].revealedAtChapter `0` → `2`/`1`; relationships[daxo/mustang] `12` → `2`. · **LOW**
- **daxo** · relationships[*] `16` → `3`. · **LOW**
- **darrow/mustang/sevro/victra** · relationships with children use `type: 'parent'` in both directions (e.g. darrow→pax `parent` and pax→darrow `parent`). Since the type list includes `child`, one direction should be `child` for consistency with how the UI reads it. · **LOW**

---

## Missing important characters

Recurring/major figures in Iron Gold with no entry:
- **Tharsus au Valii-Rath** (Gold, Valii-Rath) — Apollonius's brother, captured on Venus ch 45–46; referenced as a `targetId` by apollonius but has no entry (broken link). Dramatis Personae lists him.
- **Publius cu Caraval** (Copper) — the Copper Tribune whose bloc decides the Senate vote (ch 10–11); Dramatis Personae lists him.
- **Gorgo** (Obsidian) — the Duke of Hands' enforcer; murders Cyra (ch 42), recurring ch 18/42/57–58.
- **Cyra si Lamensis** (Green) — Ephraim's locksmith, Syndicate informant, killed ch 42; Dramatis Personae lists her.
- **Dano** (Red) — Ephraim's crewman, killed in the shuttle boarding (ch 39); Dramatis Personae lists him.
- **Kieran of Lykos** (Red) — Darrow's brother, in the Howler support crew (ch 3, 27, 30).
- **Bellerephon au Raa** (Gold) — Dido's enforcer, Atlas's son, Shadowfall shade; fights Diomedes (ch 26), duels Cassius (ch 40).
- **Helios au Lux** (Gold) — ArchKnight of the Rim; presides over Romulus's trial (ch 61).
- **Gaia au Raa** (Gold) — Romulus's mother, schemer (ch 55–56).
- **Pandora** (Gold) — Rim officer who interrogates Lysander (ch 20, 22, 55).
- **Kobachi** (Green? fence) — Ephraim's contact (ch 6, 31).
- **Orion xe Aquarii** (Blue) — Imperator of the First Fleet, left at Mercury (ch 1, 10, 60, 65).
- **Colloway xe Char** (Blue) — Howler pilot (ch 5, 53, 65).
- **Min-Min, Pebble, Clown, Screwface, Winkle** — Howlers (ch 16 onward); Clown, Pebble listed in Dramatis Personae.
- **Tongueless** (Obsidian) — freed from Deepgrave, joins the Howlers (ch 28–65).
- **Ava** (Red) — Lyria's sister; **Tiran, Aengus, Conn, Varon** — Lyria's brothers/brother-in-law (ch 4–5, 12–13).
- **Aurae** (Pink) — Raa household Pink who draws Diomedes's eye (ch 36; major in later books).
- **Vela au Raa** — Romulus loyalist (ch 25, 37).

## Chapter title issues

- The text file's TOC lists only `Chapter N: <POV>` and the body text has no headings, so the data file's `title: 'Darrow'|'Lyria'|'Ephraim'|'Lysander'` labels **match the TOC POV sequence exactly** (all 65 verified against the reconstructed chapter starts — e.g. ch 10–11 Senate = Darrow, ch 35 shuttle attack = Lyria, ch 39 boarding = Ephraim, ch 40–41 duels = Lysander).
- However, the published novel gives each chapter a **descriptive title** in addition to the POV name (the wiki confirms e.g. Chapter 35 = "Teardrop In The Door", matching the ch 35 closing line "A teardrop in the door begins to glow"). Those titles are not present in the source text and could not be verified from the wiki (fandom fetch blocked). If the app wants real titles, they must be sourced from a print/ebook TOC; otherwise consider labelling as `'Darrow (POV)'` to make clear these are narrators, not titles. · **LOW**
- Prologue title `'Prologue: The Fury'` — the body heading is "THE FURY" (L160) and the TOC calls it "The Fall of Mercury". Either is defensible; `'Prologue: The Fury'` is fine. · (verified)

## Verified-correct notes (brief)

- Prologue: Darrow launches in the Iron Rain on Mercury, "tenth year of war and the thirty-third of his life" (L266). Sevro ("the Goblin") and the Ash Lord are mentioned there.
- Darrow: Gold/Augustus, 33, ArchImperator; Wulfgar's death mechanics (stun round pushes him into the thrust) correct, just wrong chapter.
- Lysander: exile with Cassius on the *Archimedes* (ch 8 L2071); "Heir of Silenius" (ch 62 L17699); Ash Lord is his godfather (ch 8 L2430).
- Cassius: Regulus au Janus alias correct; Bellerephon is Atlas's son and a Shadowfall shade (ch 38 L11331); opponents Fabera and Bellagra correct (ch 40).
- Lyria: Gamma of Lagalos, Assimilation Camp 121, Red Hand massacre (ch 12–13), Sophocles bond (ch 17), Liam blind from birth.
- Ephraim: Gray, zoladone addict, freelancer; kidnaps Pax and Electra; Cyra betrayed him to the Syndicate and Gorgo throws her off the highrise (ch 42); Republic pardon deal (ch 51/59).
- Volga: Obsidian, product of a Society breeding program, deemed defective (ch 6).
- Electra: nine years old, Pax's best friend and sparring partner (ch 2). Victra is pregnant (ch 35).
- Kavax: Praetor, "Eaglebreaker," slew Tiberius au Bellona (ch 17); Sophocles is a fox.
- Niobe: cherrywood skin, Pacific Islander tattoos, untamable graying hair (ch 2 L565–566).
- Thraxa: left arm lost to Atalantia, metal prosthetic (ch 1).
- Romulus: right arm lost at Ilium, left eye missing, dies walking naked to the Dragon Tomb; "Only four have ever made it" (ch 62).
- Dido: née Saud, Venusian, seven children (ch 26).
- Marius: Quaestor/subQuaestor, anemic look, brown neck splotches, Politico Academy hostage (ch 25), "misshapen" (ch 61).
- Ash Lord: Magnus au Grimmus, former ArchImperator to Octavia, "Barely a third of the man remains," poisons himself, burned with antibacterial spray and a candle (ch 60).
- Apollonius: six years in Deepgrave solitary, bomb in his head, "The Minotaur"; Tharsus sold him out.
- Duke of Hands: Pink, ivory cane with onyx octopus handle; the octopus is the Syndicate's symbol (ch 18, 50).
- Dancer: Senator O'Faran, leads the Vox Populi; Publius cu Caraval is the Copper Tribune.
- Theodora: Pink, the Sovereign's spymaster, prepared Darrow's back door into Deepgrave (ch 27).
- Family groups: memberships are reasonable; consider adding Tharsus to Society Remnant, Gorgo to Syndicate, Cyra/Dano to Ephraim's Crew, and Kieran/Min-Min/Pebble/Clown to Howlers. Cassius/Pytha under "House Lune (Exiles)" is acceptable given the label.
