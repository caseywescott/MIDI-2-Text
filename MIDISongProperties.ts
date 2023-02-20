/*
  MIDI-2-Text
  
  A Musical Prompt Generator and Re-Orchestrator for the MIDI Standard Specification.

  MIDI-2-Text library enables the generation and musical variation of prompts derived from MIDI files.

  Re-Orchestration is facilitated by switching instruments within the same General MIDI InstrumentGroups as well as modulating tempo and dynamics.

  getSongPrompt has the following modes and parameters:

  1. Re-Orchestration Mode: If == 1, then re-orchestrate the song's instruments to similar instruments.

  2. Tempo-Scalar: Modulates the song prompt's tempo description.

  3. Dynamic-Scalar: Modulates the description of the song's dynamics.

*/

import { GeneralMIDIInstruments } from "./MIDI_Instruments"
import { Dynamic_Markings } from "./Music/DynamicMarking"
import { note_keys } from "./Music/Modes"
import { PitchClass } from "./Music/PitchClass"
import { Tempo_Markings } from "./Music/TempoMarking"
import {
  DEFAULTBEATDIVISION,
  DEFAULTKEY,
  DEFAULTNUMBEATS,
  DEFAULTQUALITY,
  DEFAULTSONGADDRESS,
  DEFAULTTEMPO,
  DEFAULTVELOCITY,
  DOWNTRANS,
  MAXTEMPO,
  MINTEMPO,
  UPTRANS,
} from "./Consts"

export class MIDISongProperties {
  address: string
  name: string
  tonic: PitchClass //key might end up stored as MIDI or JSON instead of tonic+ quality
  quality: number
  minTempo: number
  maxTempo: number
  downTrans: number
  upTrans: number
  defaulttempo: number
  defaultbeatdivision: number
  defaultnumberofbeats: number
  defaultvelocity: number
  textdescription: string
  instruments: string[]

  constructor(
    address?: string,
    name?: string,
    tonic?: PitchClass,
    quality?: number,
    minTempo?: number,
    maxTempo?: number,
    downTrans?: number,
    defaulttempo?: number,
    defaultbeatdivision?: number,
    defaultnumberofbeats?: number,
    defaultvelocity?: number,
    upTrans?: number,
    textdescription?: string,
    instruments?: string[]
  ) {
    this.address = address || DEFAULTSONGADDRESS
    this.name = name || "FireLily"
    this.tonic = tonic || DEFAULTKEY //key might end up stored as MIDI or JSON instead of tonic + quality
    this.quality = quality || DEFAULTQUALITY
    this.minTempo = minTempo || MINTEMPO
    this.maxTempo = maxTempo || MAXTEMPO
    this.downTrans = downTrans || DOWNTRANS
    this.upTrans = upTrans || UPTRANS
    this.defaulttempo = defaulttempo || DEFAULTTEMPO
    this.defaultnumberofbeats = defaultnumberofbeats || DEFAULTNUMBEATS
    this.defaultbeatdivision = defaultbeatdivision || DEFAULTBEATDIVISION
    this.defaultvelocity = defaultvelocity || DEFAULTVELOCITY
    this.textdescription = textdescription || "baroque"
    this.instruments = instruments || ["Flute", "Contrabass", "Harpsichord"]
  }

  reorchestrateInstruments() {
    let outlist: string[] = []
    let insts = new GeneralMIDIInstruments()
    for (let i = 0; i < this.instruments.length; i++) {
      outlist.push(insts.getAnotherInstrumentInCategory(this.instruments[i]))
    }
    return outlist
  }

  /*
    console.log(getInstrumentPrompt(["Flute", "Acoustic Guitar", "Violin"])) ->
    " Flute, Acoustic Guitar, & Violin." 
    if mode = 1, reorchestrate Instruments
  */

  getInstrumentPrompt(reorchestrate_mode: number) {
    let intlist: string[] = []
    if (reorchestrate_mode == 1) {
      intlist = this.reorchestrateInstruments()
    } else {
      intlist = this.instruments
    }
    let prompt = ""
    for (let i = 0; i < intlist.length; i++) {
      if (i == intlist.length - 1) {
        if (intlist.length > 1) {
          prompt += " and "
        }
        prompt += intlist[i] //+ "."
      } else {
        prompt += " " + intlist[i]
        if (i < intlist.length - 2) {
          prompt += ","
        }
      }
    }
    return prompt
  }

  // mode - If == 1, Reorchestrate instruments
  // Tempo/Dynamic Scale
  getSongPrompt(
    reorchestrate_mode: number,
    temposcale: number,
    dynamicscale: number
  ) {
    let updatedtempo = Math.trunc(this.defaulttempo * temposcale)
    let updatedvelocity = Math.trunc(this.defaultvelocity * dynamicscale)

    let tempomarking = new Tempo_Markings()
    let dynamicmarking = new Dynamic_Markings()
    let instp: string
    if (reorchestrate_mode == 1) {
      instp = this.getInstrumentPrompt(reorchestrate_mode)
    } else {
      instp = this.getInstrumentPrompt(reorchestrate_mode)
    }
    // let tempo_marker = getTempoMarkingText(this.defaulttempo)
    let dynamic_marker = dynamicmarking.getVelocityMarkingName(updatedvelocity)

    let key = note_keys[this.tonic.note]
    let mode: string = ""
    if (this.quality == 0) {
      mode = "major"
    } else {
      mode = "minor"
    }
    let quality = note_keys[this.tonic.note]

    return (
      "A " +
      this.textdescription +
      " " +
      dynamic_marker +
      " song named " +
      this.name +
      " in the key of " +
      key +
      " " +
      mode +
      " played by " +
      dynamicmarking.getVelocityMarking(updatedvelocity) +
      instp +
      // tempomarking.getTempoMarkingName(this.defaulttempo) +
      " " +
      tempomarking.getTempoMarking(updatedtempo) +
      ", " +
      updatedtempo +
      " BPM" +
      " in " +
      this.defaultnumberofbeats +
      "/" +
      this.defaultbeatdivision +
      " time" +
      "."
    )
  }
}
