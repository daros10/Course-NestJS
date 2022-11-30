import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>
}


export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url)
    const data: T = await response.json();

    return data
  }
}

export class PokeApiAxiosAdapter implements HttpAdapter {

  private readonly axios = axios

  async get<T>(url: string): Promise<T> {
    const {data} = await this.axios.get<T>(url)

    return data
  }

  async post(_url: string, _body: object) {
    return;
  }

  async patch(_url: string, _body: object) {
    return;
  }

  async delete(_url: string, _id: string) {
    return;
  }
}