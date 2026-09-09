# Dark Age — Fact-Check

Source audited: `book-character-app/src/data/darkAge.ts` (26 character entries, 10 family groups, 93-entry chapters array)
Primary source: "Dark Age by Pierce Brown.txt" (full novel text, 26,495 lines). Chapter boundaries were established from the book's Contents page plus the drop-cap chapter openers in the body (Prologue = L254, Ch 1 = L322 … Ch 92 = L26167). Every claim below was checked by grep against the novel; chapter numbers cited are the book's own.

Structure confirmed: the book HAS a Prologue (Virginia's broadcast to the Republic, Virginia POV) → Chapter 0 = Prologue is valid. The book has FOUR parts, not five: Part I "Mischief" (ch 1–17), Part II "Craft" (ch 18–41), Part III "Treason" (ch 42–77), Part IV "Pride" (ch 78–92).

## Summary

- Entries checked: 26 characters (all fields), 10 family groups, 93 chapter titles.
- Errors found: 71 (HIGH 42 · MED 21 · LOW 8) plus 3 chapter-title errors and wrong part names/boundaries.
- Big picture: the file's plot skeleton for the Mercury storyline is largely invented. The most damaging recurring mistakes are (1) **Sevro is placed on Mercury and "captured/tortured by Atlas"** — in the book he is on Luna and is captured by the Abomination (Jackal clone) in ch 55; (2) **Alexandar's death is put at ch 60 as a "duel"** — he survives ch 60 and is shot in the head by Lysander in ch 80; (3) **Sefi's murder is placed at ch 41** — it happens in ch 76; (4) **Kalindora is given a romance with Lysander** — she is dying and confesses she helped murder his parents; his lover is Atalantia; (5) **Orion "dies in the evacuation ch 86"** — Darrow kills her via the Storm God override in ch 15; (6) **Harmony/Ulysses events are 7–8 chapters early and inverted**; (7) **Apollonius is given a deal with Darrow in ch 33** — the Devil's Deal is a parley with Atalantia; Apollonius appears only in ch 39 and ch 92 (allying with Lysander); (8) **Atlas is given the alias "The Abomination"**, which belongs to the Adrius clone. Several `firstAppearance` values are off by 20–60 chapters (Diomedes 78→2, Pax/Electra 65→23, Victra 53→51, Sevro 0→26, Atlas 24→6, Apollonius 33→39).

## Errors

### darrow
- **darrow** · aliases · `'ArchImperator'` → `'Former ArchImperator'` (or drop) · Dramatis Personae lists him "Former ArchImperator"; Zan is ArchImperator · LOW
- **darrow** · progressiveInfo[ch 17].description · `Besieged in Heliopolis. His army is slowly being destroyed by Atalantia's forces.` → `Marches on Heliopolis after Orion's storm wrecks Ajax's army; the Free Legions take the city. Thraxa dumps a pile of captured Gold standards at his feet and declares "Victory."` · ch 17 opens with Darrow heading for Heliopolis and ends with Thraxa's "Victory"; the siege comes later (Part III–IV) · HIGH
- **darrow** · progressiveInfo[ch 33].description · `Makes a devil's deal with Apollonius to survive. The Republic forces face annihilation.` → `Parleys by holo with Atalantia (the "Devil's Deal") from occupied Heliopolis; she relays the Senate's demand that he surrender. Apollonius is not on Mercury.` · ch 33 opens "…I say to Atalantia"; Apollonius has zero mentions in ch 33 · HIGH
- **darrow** · progressiveInfo[ch 58].description + additionalDetails · `Sevro is captured and tortured by Atlas and the Fear Knight's Gorgons.` / `Darrow is devastated by his friend's capture.` → `Puts Glirastes the Master Maker to work and sets up in Sevro's old Heliopolis quarters and armory ("Sevro's Palace"). Sevro himself is far away on Luna.` · Sevro is not on Mercury at any point; ch 58 = Sevro's abandoned rooms/armory; Sevro is captured on Luna in ch 55 by Lilath and the Abomination · HIGH
- **darrow** · progressiveInfo[ch 81].description · `Launches a desperate attempt to rescue Sevro and break out of Mercury.` → `Finds Alexandar shot dead at Glirastes' villa and realizes "Cato" was Lysander au Lune; hunts Lune through Heliopolis as the trap closes.` · ch 81 "Rhonna, where is Lune?"; Alexandar's body · HIGH
- **darrow** · progressiveInfo[ch 86].description + additionalDetails · `The evacuation fails. Most of the Free Legions are destroyed. Darrow escapes with survivors.` → `The Free Legions are routed in the Long Night. Darrow, run through the chest by Kalindora's razor (thrown by Lysander in ch 85), waits to die in a tower — until Cassius au Bellona, sent by Kavax, arrives to pull him out.` (additionalDetails: `Darrow, Harnassus, Thraxa and the core Howlers slip Mercury; the army is captured. Sevro is not with them.`) · ch 85 razor "protruding through his chest"; ch 86 ends "Cassius?… Kavax said you might need a hand."; ch 87 "Darrow has slipped the noose"; ch 89 · MED
- **darrow** · relationships · missing `alexandar` (archLancer, ch 0/1), `rhonna` (niece), `cassius` (friend/rescuer, revealedAtChapter 86) · MED

### lysander
- **lysander** · aliases / progressiveNames · `'The Mind's Eye'` and `{ chapter: 39, name: "Lysander / The Mind's Eye" }` → remove; the Mind's Eye is a mental technique Octavia taught him, not a name · ch 2 "Grandmother chose me to be the sole inheritor of the Mind's Eye" · LOW
- **lysander** · progressiveInfo[ch 39].description · `Develops the Mind's Eye technique - using his grandmother's teachings to achieve combat clarity.` → `Abandoned in the desert after Ajax's betrayal, he is hunted by Seneca's killsquad (sent by Ajax) and destroys them using the Mind's Eye; then encounters Apollonius au Valii-Rath.` · He already has the technique (ch 2, 8, 10); ch 39 "Ajax has sent his boar of a bodyguard to finish the task" · MED
- **lysander** · progressiveInfo[ch 60].description + additionalDetails · `Kills Alexandar au Arcos in single combat. Stabs him through the heart during their duel.` / `A pivotal moment in his transformation…` → `Posing as the loyalist "Cato," he escapes the Gorgon prison alongside Alexandar and the Arcosian knights, choking out and dragging along the captive Fear Knight; the fugitives are scooped up by Darrow himself.` · ch 60: "Alexandar sprints ahead… Drusilla shoves the Fear Knight through to Alexandar… standing over me, roaring for retreat, is the Reaper himself." Alexandar is alive in ch 61–79 · HIGH
- **lysander** · progressiveInfo[ch 80].description · `Defeats Darrow's niece Rhonna in combat. Beats her face in brutally.` → `Drops the "Cato" mask at Glirastes' villa: shatters Rhonna's jaw with one jab, knocks her out, and shoots his cousin Alexandar au Arcos in the head.` · ch 80 ends "I shoot Alexandar in the head." · HIGH
- **lysander** · progressiveInfo[ch 89].description · `Commands the Society forces in the Triumph of the Long Night. Mercury has fallen.` → `Feted as the hero of Heliopolis at Atalantia's triumph. Learns Cassius is alive and helped Darrow escape; keeps that secret from Atalantia.` · ch 89: "Cassius is alive… He is my enemy"; Atalantia still Dictator · MED
- **lysander** · progressiveInfo[ch 90].description · `Kalindora, the Love Knight, reveals her feelings for him. They begin a relationship.` → `The dying Kalindora confesses that she and Atalantia planted the bomb that killed his parents on Octavia's orders, and that Octavia erased his mother's face from his memory with the Pandemonium Chair. She begs him to take the Morning Chair and deny it to Atalantia — his lover.` · ch 90: "Because Atalantia and I planted the bomb on their shuttle."; "my lover, the killer of my mother" · HIGH
- **lysander** · progressiveInfo[ch 92].description · `Stands in the graveyard of tyrants. The heir has become a monster.` → `Betrothed to Atalantia, he secretly meets Apollonius au Valii-Rath in the desert and wins him as an ally; among the re-erected statues of Mercury's old tyrants they point toward Mars.` · ch 92: "Until the wedding…"; "To the trembling of the worlds"; "They point toward Mars." · MED
- **lysander** · relationships[kalindora] · `type: 'ally', revealedAtChapter: 90` → `type: 'ally' (mentor), revealedAtChapter: 4` · She rides with him from ch 4/6 onward · MED
- **lysander** · relationships · missing `atalantia` `lover` (ch 90 explicit), `ajax` shifts to `enemy` (ch 39 assassination via Seneca; ch 42 assassins), `alexandar` `family` (cousins; ch 43 "my estranged cousin"), `apollonius` `ally` (ch 92) · HIGH (Atalantia lover / Ajax enemy are central)

### mustang
- **mustang** · progressiveInfo[ch 53].description · `Mars faces invasion from multiple fronts. Virginia leads the defense.` → `A prisoner of the Vox Populi on Luna after the Day of Red Doves; strapped into the Pandemonium Chair while Greens mine her memories for Howler hideouts.` · ch 53 opens with the Pandemonium Chair interrogation · HIGH
- **mustang** · progressiveInfo[ch 57].description · `Discovers the conspiracy runs deeper than she imagined. The Syndicate and Society work together.` → `Escapes Luna. Having learned (ch 54–55) that Lilath au Faran lives as Queen of the Syndicate and that a clone of her brother Adrius — the Abomination — rules the Vox, and that Sevro, Clown and Pebble are his prisoners, she resolves to abandon Luna and Earth and regroup on Mars. Kavax reveals he sent a man to Mercury for Darrow.` · ch 55 "That is a clone of my brother"; ch 57 "Then we go to Mars… I sent a man to Mercury to bring Darrow home" · HIGH
- **mustang** · progressiveInfo[ch 91].description · fine, but add: arrives at Mars (Phobos Command), reunites with Pax and Electra; Sevro, Clown, Pebble remain the Abomination's captives; Darrow "missing with Cassius" · LOW
- **mustang** · relationships · missing `kavax` (ally, ch 19), `dancer`/`daxo` (allies, ch 19), `lilath`/`abomination` (enemy, ch 31/55) · MED

### ephraim
- **ephraim** · progressiveInfo[ch 21].description · `Tries to rescue the kidnapped children from the Obsidian Ascomanni.` → `Wakes maimed after his shuttle crash — right leg replaced with synthetic tissue — kept alive on Sefi's orders. Believes Volga is dead; deep in Z withdrawal. Pax has kept his engagement ring safe.` · ch 21 "Keep him alive… Your Queen wills it"; "Volga'll be dead by now" · HIGH
- **ephraim** · progressiveInfo[ch 37].description · `Infiltrates Volsung Fá's camp to find Pax and Electra.` → `Serving Sefi aboard her flagship, the Heart of Venus, training the skuggi; Pax and Electra live among the Obsidians. First hears the name Volsung Fá.` · ch 37 "Welcome to the Heart of Venus"; Fá first named here · HIGH
- **ephraim** · progressiveInfo[ch 41].description + additionalDetails · `Witnesses the Obsidian Rising - Sefi's murder by Volsung Fá.` / `Fá is revealed to be Ragnar and Sefi's father.` → `Leads the skuggi vanguard as Sefi's Obsidians seize Mars's helium mines — the "Obsidian Rising."` (drop additionalDetails) · Sefi dies in ch 76; Fá's paternity is announced in ch 76 · HIGH (35-chapter-early spoiler)
- **ephraim** · progressiveInfo[ch 52].description · `Leads the children through the pale rain of burning ships as Mars is invaded.` → `In rebuilt Olympia, learns Victra's ship Pandora has been shot down by ships flying Alltribe colors; flees with Pax and Electra to hunt for Victra and Volga among the debris.` · ch 52 "The Pandora fell to ships bearing Alltribe colors"; "If they're alive, we're going to find them" · MED
- **ephraim** · progressiveInfo[ch 71].description · `Cornered by Fá's forces. Makes a last stand to protect the children.` → `Two weeks of fruitless searching through orbital debris aboard the Snowball with Pax and Electra.` · ch 71 opening · HIGH
- **ephraim** · progressiveInfo[ch 77].description + additionalDetails · `Killed by Volsung Fá while protecting Pax, Electra, and Volga…` / `His sacrifice saves the children…` → `Having sent Pax and Electra away, he walks into Griffinhold to get Volga out. After Fá kills Sefi, Ephraim triggers the bomb Pax hid in his heartspike, killing Xenophon (Fá's mole) and maiming Fá — but Fá survives, tears out Ephraim's heart and bites it: "Worthy."` · ch 77; ch 88 "She still has not forgiven Pax for asking Ephraim to go" · MED
- **ephraim** · relationships[pax-augustus] / [electra] · `revealedAtChapter: 65` → `23` · He watches them train with the Obsidians in ch 23; ch 65 is a Lyria chapter he is not in · MED

### lyria
- **lyria** · progressiveInfo[ch 36].description · `Captured by Harmony and the Red Hand on Mars.` → `Held in a sensory-torture cell as Victra au Barca's personal prisoner — revenge for Pax's kidnapping. Discovers Volga is imprisoned beside her and begins exchanging notes written in blood.` · ch 36 "the Julii cow… This is revenge"; "My name is Volga. I am a prisoner." · HIGH
- **lyria** · progressiveInfo[ch 50].description + additionalDetails · `The parasite in her head activates. She sees through the eyes of others.` / `The parasite was implanted by Figment to spy on the Telemanus family.` → `Aboard the Pandora under Ascomanni attack, the dying Brown freelancer Figment forces her parasite — a tiny metal squid — up Lyria's nostril into her brain. It grants thermal/skeletal sight and reads emotions; a voice declares "You are Figment."` · ch 50 ending; no Telemanus spying anywhere · HIGH
- **lyria** · progressiveInfo[ch 65].description · `Meets Victra's son Ulysses. Discovers the Red Hand killed him.` → `Hiding in the Cimmerian snow with Victra and Volga, Lyria helps the overdue Victra give birth to Ulysses.` · ch 65 ends with the naming "Forever our Ulysses"; the death is ch 66–67 · HIGH (spoiler early)
- **lyria** · progressiveInfo[ch 66].description · `Victra arrives with the Julii fleet. Harmony's forces are destroyed.` → `The Red Hand raid their shelter; Victra and newborn Ulysses are taken. (Ch 67: Lyria finds the infant dead and sees Harmony load Victra and Volga onto her ships.)` · ch 66 "They've got her. They've got her and Ulysses."; ch 67 "Ulysses is dead." · HIGH
- **lyria** · progressiveInfo[ch 73].description · `Escapes the Red Hand with Victra's help. Volga saves them.` → `Having sold herself into the Red Hand mine to reach Victra, Lyria frees her; Victra hurls Harmony into a pit of pitvipers. Volga rallies the freed slaves; Lyria's distress signal is answered by Ephraim's ragtag Martian fleet (ch 74).` · ch 72–74 · MED
- **lyria** · progressiveInfo[ch 88].description · `Witnesses Mercury's fall from orbit.` → `On Mars for the burial of Ulysses and Ephraim; word arrives that Mercury has fallen. Volga is told she is Ragnar's daughter and Fá's granddaughter.` · ch 88 · MED
- **lyria** · relationships[victra] · `revealedAtChapter: 66` → `36` (captor) or `51` (uneasy ally) · MED
- **lyria** · relationships[volga] · `revealedAtChapter: 88` → `36` (fellow prisoners) / `47` ("Your friend, Volga" letters) · MED

### sevro
- **sevro** · firstAppearance · `0` → `26` (first in-person scene, Virginia POV on Luna; named only in Darrow's memories before that) · MED
- **sevro** · progressiveInfo[ch 0].description · `Fighting alongside Darrow on Mercury. Still the most loyal Howler.` → `Not on Mercury: he split from Darrow after Venus and has snuck onto Luna to hunt the Syndicate for his kidnapped daughter Electra.` · ch 1 "my choice to join you when Sevro bailed"; ch 25 "Since he snuck onto this moon" · HIGH
- **sevro** · progressiveInfo[ch 58].description + additionalDetails · `Captured by Atlas au Raa's Gorgons. Tortured for information.` → (move to chapter 55) `Captured on Luna with Clown and Pebble by Lilath au Faran and the Abomination — the clone of Adrius au Augustus — and dragged off by Boneriders.` · ch 55 · HIGH
- **sevro** · progressiveInfo[ch 86].description · `Rescued during the evacuation. Traumatized but alive.` → (chapter 91) `Still a prisoner of the Abomination when Virginia reaches Mars.` · ch 91 "The Abomination has Sevro… I left Sevro and Clown and Pebble." · HIGH

### victra
- **victra** · aliases · `'The Julii Fury'` → remove (no such epithet; "the Fury" is Atalantia) · LOW
- **victra** · firstAppearance · `53` → `51` (in person, Lyria POV; mentioned from ch 1) · MED
- **victra** · progressiveInfo[ch 53].description · `Leads the Julii fleet to Mars to rescue her children.` → (chapter 51) `Moving her household from Luna to Mars aboard the Pandora while hunting Electra's kidnappers, she is shot down by ships flying Alltribe colors; heavily pregnant, she crash-lands in Cimmeria with her prisoners Lyria and Volga.` · ch 50–52 · HIGH
- **victra** · progressiveInfo[ch 66].description + additionalDetails · `Destroys Harmony and the Red Hand. Kills Harmony personally.` → (ch 66) `Captured by the Red Hand along with her newborn son Ulysses.` and (ch 73) `Freed by Lyria; kills Harmony by throwing her into a pit of pitvipers — vengeance for Ulysses, whom the Red Hand murdered.` · ch 66; ch 73 "Bye, bitch" · HIGH
- **victra** · relationships[lyria] · `revealedAtChapter: 66` → `36`/`51` · MED

### atalantia
- **atalantia** · aliases · `'The Last Fury'` → `'The Fury'` · text uses "the Fury" · LOW
- **atalantia** · relationships · missing `lysander` `lover` (ch 90; wedding planned ch 92), `ajax` should be `family` (aunt — Ajax is Aja's son) · MED
- **atalantia** · progressiveInfo · missing ch 90 reveal: she and Kalindora bombed Lysander's parents' shuttle on Octavia's orders · MED

### ajax
- **ajax** · relationships[atalantia] · `type: 'ally'` → `'family'` (aunt/nephew) · Dramatis: son of Aja · LOW
- **ajax** · relationships · missing `lysander` `enemy` (revealedAtChapter 39: sends Seneca to murder him) · MED
- **ajax** · progressiveInfo · missing: ch 34 his army is destroyed by Orion's storm ("So Ajax lost"); ch 39 betrays Lysander; ch 92 on Earth · LOW

### atlas
- **atlas** · aliases · `'The Abomination'` → remove · "The Abomination" is the clone of Adrius au Augustus (ch 54–55, 91) · HIGH
- **atlas** · firstAppearance · `24` → `6` (in person at Atalantia's dinner; heard over coms in ch 1). Ch 24 is an Ephraim chapter with no Atlas · MED
- **atlas** · progressiveInfo[ch 24] · move to ch 6; description acceptable · MED
- **atlas** · progressiveInfo[ch 58].description · `Captures and tortures Sevro. Uses skuggi techniques to break his mind.` → (ch 60–61) `Captured during the Gorgon-prison breakout — choked out by "Cato" (Lysander) and hauled off by Alexandar's knights — and held in a cell in Heliopolis by Darrow ("Fear stares at me through the glass," ch 79). Free again by ch 89.` · HIGH
- **atlas** · relationships[atalantia] · `revealedAtChapter: 24` → `1` · LOW
- **atlas** · relationships · missing `diomedes` `family` (uncle), `lysander` (protector; ch 90 "Keep Rhone and Atlas close") · LOW

### apollonius
- **apollonius** · firstAppearance · `33` → `39` · Zero mentions in ch 33; enters in the desert in ch 39 · HIGH
- **apollonius** · relationships[darrow] · `type: 'ally', revealedAtChapter: 33` → remove or `enemy` (ch 92 "Darrow. My ultimate prey.") · HIGH
- **apollonius** · progressiveInfo[ch 33] · `Darrow makes a deal with the Minotaur…` → (ch 39) `Finds the exhausted Lysander in the desert after Seneca's ambush and invites him to join his cause; Lysander declines.` · HIGH
- **apollonius** · progressiveInfo[ch 62] · `Proves his worth in battle…` → (ch 92) `Meets Lysander at a feast in the desert and swears to stand beside him "against the worlds."` · Not in ch 62 · HIGH
- **apollonius** · family group `society-command` → he is not Society command; independent warlord allied to Lysander only from ch 92 · MED

### alexandar
- **alexandar** · aliases · `'The Griffin'` → remove (unsupported) · LOW
- **alexandar** · progressiveInfo[ch 60] · `Killed by Lysander au Lune in single combat…` / status `dead` → status `alive`; `Rescued from the Gorgon prison after volunteering to save Tyche's civilians (ch 15): tortured — ears and fingers cut off, skin stripped — and shot twice in the chest during the breakout, but alive.` · ch 61 medBay scene; alive ch 62–79 · HIGH
- **alexandar** · progressiveInfo · add ch 80 · `Shot in the head by his cousin Lysander (unmasked as "Cato") at Glirastes' villa, the Lady Beatrice, after Lysander knocks Rhonna out.` status `dead` · ch 80 last line; ch 81 body · HIGH
- **alexandar** · relationships · missing `lysander` `family` (cousins, ch 43), `kalindora` `family` (aunt) · LOW

### rhonna
- **rhonna** · progressiveInfo[ch 80].description + additionalDetails · `Defeated by Lysander. Her face beaten in brutally after Alexandar's death.` / `Lost in the fall of Heliopolis.` → `Lysander shatters her jaw with a single jab and knocks her unconscious before shooting Alexandar. She survives (limping, ch 81); her fate after the Long Night is unknown — Darrow wonders if she reached the Morning Star (ch 86).` · MED
- **rhonna** · relationships[darrow] · `type: 'ally'` → `'family'` (niece) · LOW

### thraxa
- **thraxa** · aliases · `'The Hammer'` → remove (she wields a warhammer but the epithet is not used) · LOW

### kalindora
- **kalindora** · relationships[lysander] · `type: 'lover', revealedAtChapter: 90` → `type: 'ally' (mentor), revealedAtChapter: 4` · No romance; ch 90 is a deathbed confession · HIGH
- **kalindora** · relationships[alexandar] · `type: 'ally'` → `'family'` (aunt; they fight on opposite sides) · MED
- **kalindora** · progressiveInfo[ch 60].description · `Present when Lysander kills her nephew Alexandar…` → remove (she is not in ch 60; Alexandar does not die there) · HIGH
- **kalindora** · progressiveInfo[ch 90] · `Reveals her feelings for Lysander. They begin a relationship.` / `Wounded by Darrow's poisoned blade. Her fate uncertain.` / status `alive` → `Dying of wounds Darrow gave her in the street battle (ch 85), she confesses that she and Atalantia bombed Lysander's parents' shuttle on Octavia's orders and urges Lysander to claim the Morning Chair. She dies before the chapter ends; sunburial on the Annihilo.` status `dead` · ch 90 "We receive word that Kalindora has died." · HIGH

### sefi
- **sefi** · relationships[valdir] · `targetId: 'valdir'` → no such character id in the file (dangling link); add a Valdir entry or remove · MED
- **sefi** · relationships[volsung-fa] · `revealedAtChapter: 41` → `76` · HIGH
- **sefi** · progressiveInfo[ch 41] · `Murdered by Volsung Fá, who is revealed to be her father…` status `dead` → status `alive`; `Launches the "Obsidian Rising": her Obsidians seize Mars's helium mines.` · HIGH
- **sefi** · progressiveInfo · add ch 46 `Declares ashvar on Volsung Fá and the Ascomanni; reveals to Ephraim that Volga is Ragnar's daughter and her intended heir.`; add ch 76 `Volsung Fá unmasks himself before the jarls as Vagnar Hefga, father of Ragnar and Sefi. She fights him barefoot in Griffinhold's hall and is cut down in under a minute; the Valkyrie are slaughtered.` status `dead` · HIGH
- **sefi** · firstAppearance · `23` → `22` (voice/orders in ch 21; on page ch 22) · LOW

### volsung-fa
- **volsung-fa** · firstAppearance · `40` → `45` (Ephraim meets the giant in the ruins during the nightgaze hunt; first named ch 37) · MED
- **volsung-fa** · progressiveInfo[ch 40].description + additionalDetails · `…Father of Ragnar and Sefi.` / `Volga is his granddaughter…` → (ch 45) `A monstrous Obsidian king of the Ascomanni raiders from the Kuiper Belt, thought a myth by most Obsidians. Kills Freihild.` (drop paternity — revealed ch 76; granddaughter link ch 77/88) · HIGH (spoiler 36 chapters early)
- **volsung-fa** · progressiveInfo[ch 41] · `Kills his daughter Sefi…` → move to ch 76 with the Vagnar Hefga / "Pale Horse" reveal · HIGH
- **volsung-fa** · progressiveInfo[ch 77] · add: badly burned by Ephraim's bomb (half his face melted), names Volga his heir, eats Ephraim's heart · LOW
- **volsung-fa** · relationships[sefi] `41` → `76`; relationships[volga] `40` → `77` (or 88) · MED
- **volsung-fa** · progressiveNames suggestion · add `{ chapter: 76, name: 'Volsung Fá / Vagnar Hefga ("Pale Horse")' }` · LOW

### volga
- **volga** · aliases · `'The Pale Daughter'` → remove (unsupported) · LOW
- **volga** · firstAppearance · `21` → `36` (note passed to Lyria) or `49` (on page) · MED
- **volga** · progressiveInfo[ch 21] · `Reunites with Ephraim to rescue the children…` → (ch 36) `Held prisoner by Victra au Barca after Iron Gold; Ephraim believes her dead. Begins trading blood-written notes with Lyria in the next cell.` · HIGH
- **volga** · progressiveInfo[ch 40] · `Discovers she is the daughter of Ragnar…` → Volga is not in ch 40. Move: (ch 46) `Sefi tells Ephraim that Victra's DNA test proved Volga is Ragnar's daughter; Sefi means to make her heir.` (ch 88) `Told openly that she is Ragnar's daughter and Fá's granddaughter.` · HIGH
- **volga** · progressiveInfo[ch 73] · `Saves Lyria and Victra…` → `A fellow captive of the Red Hand; rallies the freed slaves while Lyria frees Victra. Reunited with Ephraim when his fleet arrives (ch 74).` · MED
- **volga** · relationships[sefi] · `type: 'ally', revealedAtChapter: 40` → `'family'` (aunt), `46` · MED
- **volga** · relationships · missing `lyria` `friend` (36/47), `victra` (captor → ally) · LOW
- **volga** · family group `rescue-team` → she was never part of Ephraim's rescue party (prisoner of Victra, then Red Hand) · MED

### dancer
- **dancer** · progressiveInfo[ch 31].description · `Killed in the Day of Red Doves terrorist attack.` → `Poisoned mid-speech on the Senate floor — coughing up blood and lung tissue — as Publius cu Caraval's Vox Populi coup begins.` · LOW (refinement)
- **dancer** · firstAppearance · `20` → `19` (holo call with Virginia) · LOW

### daxo
- **daxo** · firstAppearance · `20` → `19` · LOW
- verified: beheaded with a hatchet by Lilath au Faran (disguised as a Red sanitation worker) in ch 31 · OK

### harmony
- **harmony** · aliases · `'The Red Hand'` → `'Leader of the Red Hand'` · LOW
- **harmony** · progressiveInfo[ch 65] · `Killed Ulysses…` → Ulysses is born in ch 65 and killed by the Red Hand in ch 66 (found nailed to a tree, ch 67). Move to ch 67: `Her Red Hand murder newborn Ulysses and seize Victra and Volga; she carries Victra's razor. She also killed Lyria's brother.` · HIGH
- **harmony** · progressiveInfo[ch 66] · `Killed by Victra…` status `dead` → status `alive` at 66; add ch 73 `Cornered in the mine tunnels; Victra throws her into a pit of egg-laying pitvipers — "Bye, bitch."` status `dead` · HIGH

### orion
- **orion** · progressiveInfo[ch 86] · `Killed during Operation Tartarus - the final evacuation of Mercury.` → (ch 15) `Lost in the neural sync with the Storm Gods after drowning Tyche and hundreds of thousands of civilians; Darrow initiates the override, and "Orion's body seizes and goes limp."` status `dead` · ch 15 "Orion is dead."; body recovered ch 32 · HIGH
- **orion** · additionalDetails · `Operation Tartarus` is Darrow's Part I storm plan ("Initiate Operation Tartarus. Give me a storm," ch 7), not an evacuation · MED
- **orion** · progressiveInfo · add ch 3 (commands the Storm God project) · LOW

### harnassus
- **harnassus** · progressiveInfo · only ch 0; add ch 86 `Organizes survivors in the Long Night and escapes Mercury with Darrow.` — he lives · ch 89 "Darrow, Harnassus, Telemanus, and the core of the Howlers managed to either hide on Mercury or slip out" · LOW
- **harnassus** · firstAppearance `0` → `3` (mentioned in prologue only as "Imperator"? no — prologue names Aquarii, not Harnassus) · LOW

### pax-augustus
- **pax-augustus** · firstAppearance · `65` → `23` (training with the Obsidians under Sefi; Ephraim POV) · MED
- **pax-augustus** · progressiveInfo[ch 65] · `Still held captive by the Obsidians. Ephraim works to free him.` → Pax is not in ch 65; by then he is aboard the Snowball with Ephraim and Electra searching for Victra/Volga (ch 52, 71) · HIGH
- **pax-augustus** · progressiveInfo[ch 77] · `Saved by Ephraim's sacrifice. Escapes with Volga and Electra.` → `Already away from Griffinhold; it was Pax who asked Ephraim to go back for Volga, and Pax who built the bomb Ephraim uses. Electra has not forgiven him (ch 88).` · MED
- **pax-augustus** · progressiveInfo · add ch 74 (co-commands the ragtag Martian fleet against the Red Hand torchShip), ch 91 (reunited with Virginia on Mars) · LOW
- **pax-augustus** · relationships[ephraim] · `65` → `23` · MED

### electra
- **electra** · firstAppearance · `65` → `23` · MED
- **electra** · progressiveInfo[ch 65] · `Captive with Pax…` → not in ch 65; with Ephraim and Pax on the Snowball · HIGH
- **electra** · progressiveInfo[ch 77] · as Pax; also ch 88 "buries two today" (Ulysses and Ephraim), ch 91 thanked by Virginia · MED
- **electra** · relationships[pax-augustus] `65` → `23` · LOW

### diomedes
- **diomedes** · firstAppearance · `78` → `2` (arrives at Mercury aboard the Annihilo with Lysander as the Rim deputation; present ch 2, 4, 6) · HIGH
- **diomedes** · progressiveInfo[ch 78] · `Arrives at Mercury with the Rim fleet. The alliance with the Society is sealed.` → Diomedes has no presence in ch 78. Replace with ch 2 `Leads the Rim deputation to Atalantia alongside Lysander.` and ch 89 `Long since departed Mercury to prepare the Rim's entry into the war; he lied to Lysander that Cassius was dead and appears to have spared him.` · ch 87 "Diomedes lied. Cassius is alive."; ch 89 · HIGH
- **diomedes** · aliases · `'Diomedes the Stoic'` → unsupported; keep 'The Storm Knight' (Dramatis) · LOW
- **diomedes** · relationships[atlas] · `type: 'ally', revealedAtChapter: 78` → `'family'` (uncle), `2` · MED

### Family groups
- **society-command** · remove `apollonius` (see above); consider adding `kalindora` · MED
- **rescue-team** · remove `volga` · MED
- **house-telemanus** · add `kavax` once created · LOW
- **rim-forces** · `atlas` is a Society (Grimmus) client though Raa by blood — acceptable, note only · LOW

## Missing important characters

Major/recurring figures with no entry (mention counts across the book in parentheses):
- **Cassius au Bellona** — believed dead; reappears ch 86 to rescue Darrow (sent by Kavax); drives the ending and Virginia's ch 91.
- **The Abomination (clone of Adrius au Augustus)** — the true power behind the Vox coup; captures Sevro, Clown, Pebble; holds Luna (ch 54–57, 91). The file's Atlas entry wrongly absorbs this name.
- **Lilath au Faran** — alive as Queen of the Syndicate; decapitates Daxo (ch 31); Virginia's jailer (ch 53–57) (~90 mentions).
- **Glirastes the Master Maker** — Orange architect; Darrow's coerced ally then Lysander's convert; builds the machines that decide Heliopolis (100+ mentions).
- **Kavax au Telemanus** — with Virginia through the coup and on Mars; sends Cassius for Darrow.
- **Publius cu Caraval** — Copper tribune who leads the Vox Populi coup (Day of Red Doves).
- **Holiday ti Nakamura** — Dux of the Lionguard, with Virginia throughout.
- **Xenophon** — Sefi's White advisor, secretly Fá's mole; killed by Ephraim's bomb ch 77 (~100 mentions).
- **Valdir the Unshorn** — Sefi's warlord/consort; referenced by a dangling `valdir` id.
- **Ozgard** (shaman, prophecy of Fá), **Freihild** (skuggi; killed by Fá ch 45), **Gudkind**.
- **Colloway xe Char** — Howler ace pilot on Mercury; **Screwface**; **Clown** and **Pebble** (captured with Sevro).
- **Rhone ti Flavinius** — Praetorian who rallies to Lysander (ch 82–92); **Cicero au Votum**; **Seneca au Cern** (Ajax's dux, killed by Lysander ch 39); **Pytha**.
- **Figment** — Brown freelancer whose parasite passes to Lyria (dies ch 50).
- **Ulysses au Barca** — Victra's newborn son (born ch 65, murdered ch 66).
- **The Duke of Hands**, **Quicksilver**, **Liam**, **Seraphina au Raa** (present ch 2–16; dead by ch 39).

## Chapter title issues

- Part headings (comments in the array): book uses **Part I: Mischief (1–17), Part II: Craft (18–41), Part III: Treason (42–77), Part IV: Pride (78–92)**. File has five invented parts "Tyrants / Wolves / Shadows / Darkness / Brothers" with boundaries at 1/18/32/47/78. → replace with the four real parts.
- Ch 21 · `'Ephraim: Mauler, Brawler'` → `'Ephraim: Mauler, Brawler, Legacy Hauler'`
- Ch 45 · `'Ephraim: Fall of Mars'` → `'Ephraim: Nightgaze'`
- Ch 74 · `'Ephraim: Ash Rain'` → `'Ephraim: Son of the Rising'`
- Ch 0 · `'Prologue'` — correct; the book has a Prologue (Virginia's broadcast). Optionally `'Prologue: Virginia'`.
- All other 88 titles match the Contents page exactly (including POV labels).

## Verified-correct notes (brief)

- Colors/houses: all 26 entries correct (Darrow Gold/Augustus by marriage is acceptable; Ephraim Gray; Lyria Red; Orion Blue; Harnassus Orange; Sefi/Volga/Fá Obsidian).
- Darrow: aliases "The Reaper" ✓; ch 0 Mercury situation ✓; spouse/friend/parent relationships ✓.
- Lysander: "Heir of Silenius" ✓; ch 2 return from Rim with Atalantia's campaign ✓; house Lune ✓.
- Virginia: "Mustang", "The Sovereign" ✓; ch 18 first POV ✓; ch 31 Day of Red Doves with Dancer killed ✓.
- Ajax: son of Aja and Atlas, Legate of the Iron Leopards, "Storm Knight" ✓; first appearance ch 4 ✓.
- Kalindora: Olympic Knight, aunt to Alexandar ✓ (Dramatis).
- Thraxa: Praetor of the Free Legions, Kavax's daughter, warhammer ✓.
- Rhonna: "Pup Two", Darrow's niece ✓. Alexandar: "Pup One", Lorn's grandson, archLancer ✓.
- Dancer: Senator O'Faran, Tribune of the Red bloc ✓; dies ch 31 ✓. Daxo: killed by Lilath ch 31 ✓.
- Orion: Navarch ✓. Harnassus: Imperator, second-in-command, Orange ✓.
- Sefi: Queen of the Obsidian ✓; Valdir is her royal concubine (type 'lover' is right; only the id is dangling).
- Volsung Fá: kills Ephraim ch 77 ✓; "beyond the Kuiper Belt"/Ascomanni ✓; Ragnar & Sefi's father (true in-book claim, but revealed ch 76 not 40/41).
- Ephraim: dies ch 77 ✓ (status). Volga Fjorgan, "Daughter of Ragnar" ✓ (as fact).
- Harmony: leader of the Red Hand ✓; killed by Victra ✓ (chapter wrong).
- Atalantia: Dictator of the Society, House Grimmus, first appears ch 2 ✓.
- Diomedes: nephew of Atlas ✓ (son of Romulus).
- Family groups house-augustus, house-barca, howlers, lyrias-allies ✓.
