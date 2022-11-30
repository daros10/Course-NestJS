import { Car } from "./interfaces/car.interface";
export declare class CarsService {
    private cars;
    findAll(): object[];
    findById(id: string): Car[];
    addCar(car: {
        brand: string;
        model: string;
    }): object;
    updateCar(id: string, car: {
        brand: string;
        model: string;
    }): Car[];
    deleteCar(_id: string): object;
}
