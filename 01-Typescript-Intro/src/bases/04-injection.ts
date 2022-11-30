import {HttpAdapter, PokeApiAxiosAdapter} from "../api/pokeApiAxiosAdapter";

export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // Dependencies Injection
    // Agregando la abstracion mediante la interfaz HttpAdapter
    // mi clase es capaz de recibir cualquier adaptador. Axios, Fetch, Request, Etc.
    // mediante esto mi clase implemente el PRINCIPIO DE SUSTITUCION DE LISKOV
    private readonly apiAdapter: HttpAdapter
  ) {
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<any []> {
    const data = await this.apiAdapter.get<any>("https://pokeapi.co/api/v2/pokemon/4")


    return data.moves;
  }

}

// Adapter instances
const axiosAdapter = new PokeApiAxiosAdapter();
const fetchAdapter = new PokeApiAxiosAdapter()

// El principio de sustitucion liskov menciona que nuestra clase pokemon deberia ser capaz de recibir
// cualquiera de estos dos adaptadores. Ya que resuelven lo mismo


// Con AXIOS
export const charmanderAxios = new Pokemon(4, 'Charmander', axiosAdapter);

// Con FETCH
export const charmanderFetch = new Pokemon(4, 'Charmander', fetchAdapter);

charmanderAxios.getMoves().then((data) => {
  console.log("charmanderAxios", data)
});

charmanderFetch.getMoves().then((data) => {
  console.log("charmanderFetch", data)
});