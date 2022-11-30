class SecondPokemonClass {
  constructor(
    public readonly id: number,
    public name: string
  ) {
  }

  scream() {
    console.log(`NO QUIERO GRITAR`)
  }

  speak() {
    console.log(`NO QUIERO HABLAR`)
  }
}


// Un decorador no es mas que una funcion
const MyFirstDecorator = () => {
  return (_target: Function) => {
    // El decorador hereda toda la definicion de la clase Pokeon, constructor, metodos, etc.

    // El beneficio de usar decoradores a funciones, es que este puede extender, modificar, elimiar
    // los metodos que hereda de la definicion de la clase
    // console.log("Target: ", target)

    // En este caso la clase pokemon que usa el decorador MyFirstDecorator, indirectamente usa ya toda la definicion ahora de SecondPokemonClass
    return SecondPokemonClass
  }
}

@MyFirstDecorator()
export class Pokemon {

  constructor(
    public readonly id: number,
    public name: string
  ) {
  }

  scream() {
    console.log(`${this.name.toUpperCase()} !!`)
  }

  speak() {
    console.log(`${this.name} - ${this.name}`)
  }

}

export const charmander = new Pokemon(10, "charmander");

charmander.scream();
charmander.speak();