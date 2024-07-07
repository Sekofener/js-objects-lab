const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  console.dir(pokemon, { maxArrayLength: null })
  console.log(game)
game.difficulty = "Hard"
game.party.push(pokemon[0])

console.dir(pokemon, { maxArrayLth: null })eng




console.log(game)


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Medium";



/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[4],pokemon[8],pokemon[9])
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
game.gyms.forEach((gym) => {
    if(gym.difficulty <3){
        gym.completed = true
    }
})

    /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
function evolvePokemon(party, currentId) {
  const evolutionMap = {
    1: { id: 2, name: "Ivysaur" },
    4: { id: 5, name: "Charmeleon" },
    7: { id: 8, name: "Wartortle" },
    25: { id: 26, name: "Raichu" }
  };
  const index = party.findIndex(pokemon => pokemon.id === currentId);
  if (index !== -1 && evolutionMap[currentId]) {
    party.splice(index, 1, evolutionMap[currentId]);
  }
}
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach((member)=>{
    console.log(member.name)
})
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
pokemon.forEach((starter)=>{
    console.log(starter.name)
})

// /*

/*
Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon[0]);

console.log(123)

/*
xercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?
Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
Solve Exercise 11 here:
*/
function catchPokemon(pokemon) {
  console.log(`Trying to catch ${pokemon.name}`);
  // Decrease pokeball quantity
  game.items.find(item => item.name === 'pokeball').quantity -= 1;
  console.log(`Caught ${pokemon.name}!`);
}
// Example Pokemon object
//let pokemon = { name: 'Pikachu' };
// Call the modified method
catchPokemon(pokemon);
// Log the game.items array to confirm the decrement
console.log(game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
let gyms = [
  { difficulty: 6, completed: true },
  { difficulty: 5, completed: true },
  { difficulty: 4, completed: true },
  { difficulty: 3, completed: true },
  { difficulty: 2, completed: true },
  { difficulty: 1, completed: true }
];

function completeGyms(gyms) {
  gyms.forEach(gym => {
    if (gym.difficulty < 6) {
      gym.complete = true;
    }
  });
}
completeGyms(gyms);

console.log(gyms);
/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.
This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the
    properties on `gymTally` as follows:
    - `completed` should count how many gyms in the array have a value of `true`
      for their `completed` property.
    - `incomplete` should count how many gyms in the array have a value of
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.
For example, if five gym objects have a value of `true` on their `completed` property and
three gym objects have a value of `false` on their `completed` property, the logged value would be:
`{ completed: 5, incomplete: 3 }`.
Solve Exercise 13 here:
*/
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
  console.log(gymTally);
};
/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.
This method should:
- Not accept any arguments.
- Count the number of Pokemon in the party.
- return the found number of Pokemon in the party.
Solve Exercise 14 here:
*/
party: [
  { id: 1, name: "Bulbasaur" },
  { id: 4, name: "Charmander" },
  { id: 7, name: "Squirtle" },
  { id: 25, name: "Pikachu" }
],
partyCount: function() {
  return this.party.length;
}
console.log(game.partyCount());
/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).
Solve Exercise 15 here:
*/
let game.gyms = [
  { difficulty: 8, completed: true },
  { difficulty: 7, completed: true },
  { difficulty: 6, completed: true },
  { difficulty: 5, completed: true },
  { difficulty: 4, completed: true },
  { difficulty: 3, completed: true },
  { difficulty: 2, completed: true },
  { difficulty: 1, completed: true }
];
const game.gyms(gyms) {
  gyms.forEach(gym => {
    if (gym.difficulty < 8) {
      gym.complete = true;
    }
  });
}

console.log(gyms);
/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.
Solve Exercise 16 here:
*/
console.log(game);
/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/function sortPartyByHP(party) {
  party.sort((a, b) => b.hp - a.hp);
}

// Sort the party
sortPartyByHP(game.party);

// Print the sorted party
console.log(game.party);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/
let game = {
  party: [],
  collection: [],
}