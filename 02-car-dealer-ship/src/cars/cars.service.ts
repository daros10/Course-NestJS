import {Injectable} from '@nestjs/common';
import {Car} from "./interfaces/car.interface";
import {v4 as uuid} from "uuid";

@Injectable()
export class CarsService {
  private cars: Car[] = []

  public findAll(): object[] {
    return this.cars
  }

  public findById(id: string): Car[] {
    return this.cars.filter((data: object) => data['id'] === id)
  }

  public addCar(car: { brand: string, model: string }): object {
    this.cars.push({
      ...car,
      id: uuid(),
    })

    return {
      response: "Car added successful"
    }
  }

  public updateCar(
    id: string,
    car: { brand: string, model: string }
  ): Car[] {
    return this.cars.map((data: Car) => (data['id'] === id ? {...data, ...car} : data));
  }

  public deleteCar(id: string): object {
    this.cars = this.cars.filter((data) => data.id !== id)

    return {
      response: "Car deleted successful"
    }
  }

  public fillCardWithSeed(cars: Car[]) {
    this.cars = cars
  }
}
