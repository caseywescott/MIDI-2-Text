# MIDI-2-Text
A Musical Prompt Generator and Re-Orchestrator for the MIDI Standard Specification.

MIDI-2-Text library enables the generation and musical variation of prompts derived from MIDI files.

Re-Orchestration is facilitated by switching instruments within the same General MIDI InstrumentGroups as well as modulating tempo and dynamics.
    
getSongPrompt has the following modes and parameters:

**1. Re-Orchestration Mode:** If == 1, then re-orchestrate the song's instruments to similar instruments.

**2. Tempo-Scalar:** Modulates the song prompt's tempo description.

**3. Dynamic-Scalar:** Modulates the description of the song's dynamics.

# Example:

let song = new MIDISongProperties("/url/Firelight.mid")

song.getSongPrompt(1,1,1)  ====>

**"A baroque forte song named 'Firelight' in the key of A major played by loud Shakuhachi, Violin and Acoustic Grand Piano at a moderate speed, 120 BPM in 4/4 time."**

songp.getSongPrompt(1, 0.31, 0.71)  ====>

**"A baroque mezzopiano song named 'Firelight' in the key of A major played by moderately quiet Whistle, Viola and Acoustic Grand Piano very slow and solemn at 37 BPM in 4/4 time."**

songp.getSongPrompt(1, 0.71, 0.21)  ====>

**"A baroque pianissimo song named 'Firelight in the key of A major played by very quiet Flute, Contrabass and Harpsichord at a walking pace, moderately slow at 97 BPM in 4/4 time."**
