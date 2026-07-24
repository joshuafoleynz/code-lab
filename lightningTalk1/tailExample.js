// Create drink bottle object
export const drinkBottle = {
  colour: 'Silver',
  size: '750ml',
  contents: 'Water'
}

// Create function to fill drink bottle with sparkling water
export function fillDrinkBottleWithSparkling(sparkling) {
  const sparklingBottle = {
    ...sparkling,
    contents: 'Sparkling water'
  }
  return sparklingBottle
}

// Fill drink bottle with sparkling water
export const sparklingBottle = fillDrinkBottleWithSparkling(drinkBottle)

// Create function to fill drink bottle with tonic water
export function fillDrinkBottleWithTonic(tonic) {
  const tonicBottle = {
    ...tonic,
    contents: 'Tonic water'
  }
  return tonicBottle
}

// Fill drink bottle with tonic water
export const tonicBottle = fillDrinkBottleWithTonic(drinkBottle)

// Conole.log results
console.log(drinkBottle)
console.log(sparklingBottle)
console.log(tonicBottle)


