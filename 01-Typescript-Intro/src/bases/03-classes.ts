export class Pokemon {
  // First form to create
  // public id: number;
  // public name: string;


  // constructor(
  //   id: number,
  //   name: string
  // ) {
  //   this.id = id
  //   this.name = name
  // };

  // Second form to create
  // constructor(
  //   public id: number,
  //   public name: string
  // ) {
  //   this.id = id
  //   this.name = name
  // };

  // Third form to create - More secure for not assign values
  constructor(
    public readonly id: number,
    public readonly name: string
  ) {
    this.id = id
    this.name = name
  };

//  Getter
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}`
  }

  public scream() {
    console.log("SCREAM")
  }

  public speak() {
    console.log("SPEAK")
  }

  async getPokemonMoves() {
    return 10
  }

}

export const pikachu = new Pokemon(1, "Pikachu");
pikachu.scream();
pikachu.speak();

console.log("Calling to promise", pikachu.getPokemonMoves())
pikachu.getPokemonMoves().then((data) => {

  console.log("Showing data of promise", data)

})
