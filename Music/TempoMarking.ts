/* 
  Map of tempos to markings associated descriptions
  https://en.wikipedia.org/wiki/Tempo
 */

export class Tempo_Markings {
  Larghissimo = {
    min: 0,
    max: 24,
    name: "Larghissimo",
    description: "very, very slow",
  }
  Grave = {
    min: 25,
    max: 45,
    name: "Grave",
    description: "very slow and solemn",
  }
  Largo = {
    min: 46,
    max: 55,
    name: "Largo",
    description: "slow and broad",
  }

  Larghetto = {
    min: 56,
    max: 66,
    name: "Larghetto",
    description: "rather slow and broad",
  }
  Adagio = {
    min: 67,
    max: 75,
    name: "Adagio",
    description: "slow with great expression",
  }
  MarciaModerato = {
    min: 76,
    max: 80,
    name: "Marcia Moderato",
    description: "moderately, in the manner of a march",
  }
  Lento = {
    min: 81,
    max: 89,
    name: "Lento",
    description: "slow",
  }
  Andante = {
    min: 90,
    max: 99,
    name: "Andante",
    description: "at a walking pace, moderately slow",
  }
  Andantino = {
    min: 100,
    max: 108,
    name: "Andantino",
    description:
      "slightly faster than andante (although it can be taken to mean slightly slower than andante)",
  }
  AndanteModerato = {
    min: 109,
    max: 119,
    name: "Andante Moderato",
    description: "between andante and moderato (at a moderate walking speed)",
  }
  Moderato = {
    min: 120,
    max: 126,
    name: "Moderato",
    description: "at a moderate speed",
  }
  Allegretto = {
    min: 127,
    max: 134,
    name: "Allegretto",
    description: "moderately fast",
  }
  AllegroModerato = {
    min: 135,
    max: 139,
    name: "Allegro Moderato",
    description: "close to, but not quite allegro",
  }
  Allegro = {
    min: 140,
    max: 155,
    name: "Allegro",
    description: "fast, quickly and bright",
  }
  Vivace = {
    min: 156,
    max: 159,
    name: "Vivace",
    description: "lively and fast",
  }
  Vivacissimo = {
    min: 160,
    max: 167,
    name: "Vivacissimo",
    description: "very fast and lively",
  }
  Allegrissimo = {
    min: 168,
    max: 174,
    name: "Allegrissimo",
    description: "very fast and bright",
  }
  Presto = {
    min: 175,
    max: 200,
    name: "Presto",
    description: "very fast",
  }
  Prestissimo = {
    min: 201,
    max: 9999,
    name: "Prestissimo",
    description: "extremely fast",
  }

  markings = [
    this.Larghissimo,
    this.Grave,
    this.Lento,
    this.Largo,
    this.Larghetto,
    this.Adagio,
    this.AndanteModerato,
    this.Andante,
    this.Andantino,
    this.MarciaModerato,
    this.Moderato,
    this.Allegretto,
    this.AllegroModerato,
    this.Allegro,
    this.Vivace,
    this.Vivacissimo,
    this.Allegrissimo,
    this.Presto,
    this.Prestissimo,
  ]

  getTempoMarking(tempo: number) {
    for (var tempoMarking in this.markings) {
      if (
        tempo >= this.markings[tempoMarking].min &&
        tempo <= this.markings[tempoMarking].max
      ) {
        return this.markings[tempoMarking].description
      }
    }
  }

  getTempoMarkingName(tempo: number) {
    for (var tempoMarking in this.markings) {
      if (
        tempo >= this.markings[tempoMarking].min &&
        tempo <= this.markings[tempoMarking].max
      ) {
        return this.markings[tempoMarking].name
      }
    }
  }
}

//console.log(getTempoMarkingText(34));
