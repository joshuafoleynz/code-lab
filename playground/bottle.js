// Create drink bottle object
export const drinkBottle = {
  colour: 'Stone',
  size: '750ml',
  contents: 'Water'
}

// Create function to fill 
export function fillDrinkBottleWithSparkling(sparkling) {
  const sparklingBottle = {
    ...sparkling,
    contents: 'Sparkling'
  }
  return sparklingBottle
}

// Call drink bottle object
console.log(drinkBottle)

// 
export const sparklingBottle = fillDrinkBottleWithSparkling(drinkBottle)

//
console.log(drinkBottle)
console.log(sparklingBottle)


