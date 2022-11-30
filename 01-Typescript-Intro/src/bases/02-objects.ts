export interface Pokemon {
  id: number,
  name: string,
  img: string,
  details?: string
}

export const pikachu: Pokemon = {
  id: 1,
  name: "Pikachu",
  img: "https://...."
}

export const charmander: Pokemon = {
  id: 3,
  name: "Charmander",
  img: "https://....",
  details: "Fun pokemon"
}

console.log(pikachu, charmander)

