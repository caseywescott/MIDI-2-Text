/* 
  Map of velocitys to markings associated musical dynamics
  https://en.wikipedia.org/wiki/Dynamics_(music)
 */

export class Dynamic_Markings {
  pianississimo = {
    min: 0,
    max: 15,
    name: "pianississimo",
    description: "very very quiet",
  }
  pianissimo = {
    min: 16,
    max: 31,
    name: "pianissimo",
    description: "very quiet",
  }
  piano = {
    min: 32,
    max: 47,
    name: "piano",
    description: "quiet",
  }
  mezzopiano = {
    min: 48,
    max: 63,
    name: "mezzopiano",
    description: "moderately quiet",
  }
  mezzoforte = {
    min: 64,
    max: 79,
    name: "mezzoforte",
    description: "moderately loud",
  }
  forte = {
    min: 80,
    max: 95,
    name: "forte",
    description: "loud",
  }
  fortissimo = {
    min: 96,
    max: 111,
    name: "fortissimo",
    description: "very loud",
  }
  fortississimo = {
    min: 112,
    max: 127,
    name: "fortississimo",
    description: "very very loud",
  }

  markings = [
    this.pianississimo,
    this.pianissimo,
    this.piano,
    this.mezzopiano,
    this.mezzoforte,
    this.forte,
    this.fortissimo,
    this.fortississimo,
  ]

  getVelocityMarking(velocity: number) {
    for (var velocityMarking in this.markings) {
      if (
        velocity >= this.markings[velocityMarking].min &&
        velocity <= this.markings[velocityMarking].max
      ) {
        return this.markings[velocityMarking].description
      }
    }
  }

  getVelocityMarkingName(velocity: number) {
    for (var velocityMarking in this.markings) {
      if (
        velocity >= this.markings[velocityMarking].min &&
        velocity <= this.markings[velocityMarking].max
      ) {
        return this.markings[velocityMarking].name
      }
    }
  }
}

//console.log(getdynamicMarkingText(34));
