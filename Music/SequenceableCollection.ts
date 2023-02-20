//Function to randomize a list of numbers
function randomizeList(list: number[]) {
  //Create a copy of the list
  let randomizedList = [...list]

  //Loop through the list and swap each element with a random element from the list
  for (let i = 0; i < randomizedList.length; i++) {
    let randomIndex = Math.floor(Math.random() * randomizedList.length)
    let temp = randomizedList[i]
    randomizedList[i] = randomizedList[randomIndex]
    randomizedList[randomIndex] = temp
  }

  return randomizedList
}

// Typescript code that implements an array of weights to set the chance for each element in input array to be chosen

function wChoose(list: number[], weights: number[]): number {
  // Check if the lists have the same length
  if (list.length !== weights.length) {
    throw new Error("List and Weights array must have the same length")
  }

  // Get the sum of weights
  let sumOfWeights = weights.reduce((a, b) => a + b, 0)

  // Generate a random number in range 0-1
  let randNum = Math.random()

  // Accumulated probability
  let accumProb = 0

  // Iterate over the weights
  for (let i = 0; i < weights.length; i++) {
    // Accumulate probability
    accumProb += weights[i] / sumOfWeights

    // If the random number is smaller than the accumulated probability
    // then return the current list element
    if (randNum < accumProb) {
      return list[i]
    }
  }

  // If none of the elements is chosen, then return -1
  return -1
}

console.log(wChoose([1, 2, 3, 4, 5], [0.1, 0.2, 0.5, 0.1, 0.1]))
/*
//typescript code that return a list of n random, non repeating numbers.
function getRandomNonRepeatingNumber(n: number): number[] {
  const result = [];
  let i = 0;
  while (i < n) {
      const value = Math.floor(Math.random() * n);
      if (!result.includes(value)) {
          result.push(value);
          ++i;
      }
  }
  return result;
}
console.log(getRandomNonRepeatingNumber(4))
*/

// Function to invert a list of melody keynums around the first note
function invertMelody(melody: number[]): number[] {
  // Get the first note of the melody
  const firstNote = melody[0]

  // Create an empty array to store the inverted melody
  let invertedMelody: number[] = []

  // Iterate through each note in the melody and calculate its inverted position relative to the first note
  for (let i = 0; i < melody.length; i++) {
    let invertedNote = 2 * firstNote - melody[i]

    // Push the inverted note into the invertedMelody array
    invertedMelody.push(invertedNote)
  }

  return invertedMelody
}
//console.log(invertMelody([43, 41, 49, 42, 48, 43, 47, 44, 46, 45, 41, 40], 3));

//Function to order array such that adjacent elements are maximally distant

function orderArrayMaxDist(arr: number[]) {
  //Sort the array in ascending order
  arr.sort((a, b) => a - b)

  //Create a new array to store the ordered elements
  let orderedArr: number[] = []

  //Loop through the sorted array and add elements to the new array such that adjacent elements are maximally distant
  let i = 0
  while (i < arr.length) {
    orderedArr.push(arr[i])

    if (i + 1 < arr.length) {
      orderedArr.push(arr[arr.length - 1 - i])
    }

    i++
  }

  return orderedArr
}

//Write a function in typescript that takes a list and an index, returning any permutation at the given index.

function permutationAtIndex(list: any[], index: number): any[] {
  let permutations = []
  let factorials = [1]

  // Calculate the factorials up to the length of the list
  for (let i = 1; i <= list.length; i++) {
    factorials[i] = factorials[i - 1] * i
  }

  // Iterate through each element in the list, finding the permutation at the given index
  for (let i = 0; i < list.length; i++) {
    let currentIndex = Math.floor(index / factorials[list.length - 1 - i])

    // Add the element at the current index to our permutation array and remove it from our list
    permutations.push(list[currentIndex])
    list.splice(currentIndex, 1)

    // Update our index to be relative to the remaining elements in our list
    index -= currentIndex * factorials[list.length - 1 - i]
  }

  return permutations
}

//Write a function in typescript that takes a melody and inserts new notes fractally into the melody.

function fractalMelody(melody: string[], newNotes: string[]) {
  let fractalMelody: string[] = []

  for (let i = 0; i < melody.length; i++) {
    fractalMelody.push(melody[i])

    if (i % 2 === 0) {
      fractalMelody.push(newNotes[0])
    } else {
      fractalMelody.push(newNotes[1])
    }
  }

  return fractalMelody
}

// Function to return the retrograde of a list of melody keynums
function retrogradeInversion(melody: number[]): number[] {
  // Create an empty array to store the inverted melody
  let invertedMelody: number[] = []

  // Iterate through the melody in reverse order and add each keynum to the invertedMelody array
  for (let i = melody.length - 1; i >= 0; i--) {
    invertedMelody.push(melody[i])
  }

  // Return the inverted melody
  return invertedMelody
}
