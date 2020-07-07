let movieTitles = [
  "mission impossible",
  "reservoir dogs",
  "pulp fiction",
  "saving private ryan",
  "forgetting sarah marshall",
  "zoolander",
  "zoro",
  "300",
  "the notebook",
  "fight club",
  "cats",
  "dr horribles sing along blog",
  "rocky",
  "braveheart",
  "inglourious basterds",
  "brokeback mountain",
  "a river runs through it",
  "blazing saddles",
  "the assassination of jesse james",
  "gladiator",
  "pirates of the carribean",
  "the big lebowski",
  "kick ass",
  "jurassic park",
  "jurassic park 2",
  "jurassic park 3",
  "jurassic world",
  "borat",
  "cabin in the woods",
  "saving ryans privates",
  "toy story",
  "psycho",
  "silence of the lambs",
  "ferris buellers day off" 
]

function randomWord() {
  return movieTitles[Math.floor(Math.random() * movieTitles.length)]
}

export { randomWord } 