import { CarsService } from "./cars.service";
import { Car } from "./interfaces/car.interface";
import { CreateCarDto } from "./dto/create-car.dto";
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCard(): object[];
    getCarById(id: string): Car[];
    createCar(request: CreateCarDto): object;
    updateCar(id: string, request: {
        brand: string;
        model: string;
    }): Car[];
    deleteCar(id: string): object;
}
