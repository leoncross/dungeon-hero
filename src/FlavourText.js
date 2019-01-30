function FlavourText () {
  this.airCurrents = ['slight breeze', 'damp breeze', 'gustling breeze', 'cold current' ,'slight down draft', 'strong down draft', 'slight updraft', 'strong updraft', 'strong wind', 'gusting wind']
  this.smells = ['urine smell', 'sulphurous smell', 'stale, fetid smell', 'smoky smell', 'salty, wet smell', 'rotting vegetation smell', 'putrid smell', 'ozone smell', 'metallic smell', 'manure smell', 'earthy smell', 'dank, mouldy smell', 'chlorine smell', 'acrid smell']
  this.air = ['clear', 'foggy', 'hazy', 'misted']
  this.noises = [ 'slam', 'bellowing', 'buzzing', 'chanting', 'chiming', 'chirping', 'clanking', 'clashing', 'clicking', 'coughing', 'creaking', 'drumming', 'footsteps ahead', 'approaching footsteps', 'faint giggling', 'grating', 'groaning', 'grunting', 'hissing', 'hooting', 'howling', 'humming', 'jingling', 'knocking', 'laughter', 'moaning', 'murmuring', 'music', 'rattling', 'ringing', 'roaring', 'rustling', 'scratching', 'scrabbling', 'screaming', 'scuttling', 'shuffling', 'slithering', 'snapping', 'sneezing', 'sobbing', 'splashing', 'splintering', 'squeaking', 'squealing', 'tapping', 'thud', 'thumping', 'tinkling', 'twanging', 'whining', 'whispering', 'whistling' ]
  this.furnishings = [ 'altar', 'armchair', 'armoire', 'bag', 'barrel', 'bed', 'bench', 'blanket', 'large box', 'brazier', 'bucket', 'buffet', 'bunks', 'cabinet', 'candelabrum', 'large carpet', 'cask', 'chair', 'chandelier', 'charcoal', 'chest of drawers', 'coal', 'crate', 'cupboard', 'desk', 'fireplace with mantle', 'firkin', 'fountain', 'fresco', 'grindstone', 'hamper', 'hassock', 'hogshead', 'large idol', 'keg', 'fur bits', 'hammer head, cracked', 'badly dented helmet', 'bent iron bar', 'rusted javelin head','loom', 'mat', 'mattress', 'pail', 'painting', 'pallet', 'pedestal', 'pegs', 'pillow', 'large cask', 'pick handle', 'broken pole', 'pottery shards', 'rags', 'rope', 'broken arrow head', 'ashes','bones', 'broken bottle', 'corroded chain', 'splintered club', 'cobwebs', 'bent copper coin','rubble & dirt', 'torn sack','quilt', 'rug', 'rushe', 'sack', 'screen', 'sheet', 'shelf', 'shrine', 'sideboard', 'staff', 'stand', 'statue', 'stool', 'round table', 'small table', 'trestle table', 'tapestry', 'throne', 'trunk', 'tub', 'urn', 'wall basin and font', 'wood billets', 'workbench' ]
}

// console.log('you feel a ' + airCurrents[4])
// console.log('you smell something that you can only describe as a ' + smells[8])
// console.log('the air is ' + air[3])
// console.log('in the room, you see a ' + generalFeatures[3])
// console.log('you hear a distant ' + noises[0])
// console.log('you see a ' + furnishings[9])

// console.log('You approach the room, and feel a ' + this.messageFinder(this.airCurrents) + '. You suddenly become alarmed by a ' + this.messageFinder(this.noises) + '. As your eyes adjust to the darkness, you see a strange assortment of ' + this.messageFinder(this.generalFeatures) + 's and ' + this.messageFinder(this.generalFeatures) + 's. Something starts to rush towards you...')


FlavourText.prototype.messageFinder = function (array) {
  // console.log(array.length)
  return array[Math.floor((Math.random() * array.length))]
}

FlavourText.prototype.startSentences = function () {
  sentence = ['You see a flickering light in the distance', 'You rush into the ' + this.messageFinder(this.air) + ' cave', 'You cautiously approach a small opening in the cave system', 'Hesitantly, you peak around the corner', 'You continue further down the cave wishing this was a dream']
  return sentence[Math.floor((Math.random() * sentence.length))]
}

FlavourText.prototype.noiseSentences = function () {
  sentence = [', but stop suddenly when you hear tremendously loud ', ' and you can faintly make out a quiet ', ' and hear a startling rumble, followed by a ']
  return sentence[Math.floor((Math.random() * sentence.length))] + this.messageFinder(this.noises)
}

// fortuitous

// surprising, startling, astonishing


FlavourText.prototype.airCurrentSentences = function () {
  sentence = ['. This is quickly followed by a ' + this.messageFinder(this.airCurrents), '. You suddenly become startled by a ' + this.messageFinder(this.airCurrents) + ' that almost knocks you off your feet', '. You feel a sudden ' + this.messageFinder(this.airCurrents) + ' but find this strangely comforting']
  return sentence[Math.floor((Math.random() * sentence.length))]
}

FlavourText.prototype.smellSentences = function () {
  sentence = ['. You become overwhelmed by a oddly sweet ' + this.messageFinder(this.smells), '. You remember this ' + this.messageFinder(this.smells) + ' as a child and you become fearful', '. Out of no where, you become dazed by a ' + this.messageFinder(this.smells)]
  return sentence[Math.floor((Math.random() * sentence.length))]
}

FlavourText.prototype.furnishingsSentences = function () {
  sentence = ['. As your eyes continue to adjust, you see a pile of ' + this.messageFinder(this.furnishings) + 's with a misplaced ' + this.messageFinder(this.furnishings), '. You become transfixed by a bunch of strangely placed ' + this.messageFinder(this.furnishings) + 's with a broken ' + this.messageFinder(this.furnishings), '. Without warning, a ' + this.messageFinder(this.furnishings) + ' is thrown towards you, and you stumble to the ground' ]
  return sentence[Math.floor((Math.random() * sentence.length))]
}



// FlavourText.prototype.airCurrentSentences = function () {
//   sentence = ['and feel a ' + this.messageFinder(this.airCurrents), 'and become overwhelmed by a ' + this.messageFinder(this.airCurrents), ]
//   return sentence[Math.floor((Math.random() * sentence.length))]
// }

FlavourText.prototype.combined = function () {
  console.log(text.startSentences() + text.noiseSentences() + text.airCurrentSentences())
  console.log(text.smellSentences() + text.furnishingsSentences())
}





// array = string.split('.')
// console.log(array)
module.exports = FlavourText

text = new FlavourText

text.combined()
