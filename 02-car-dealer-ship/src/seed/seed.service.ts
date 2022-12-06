import {Injectable} from '@nestjs/common';
import {CarsService} from "../cars/cars.service";
import {BrandsService} from "../brands/brands.service";
import {CARS_SEED} from "./data/cars.seed";
import {BRANDS_SEED} from "./data/brands.seed";


@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {
  }

  public populateDb() {
    this.carsService.fillCardWithSeed(CARS_SEED);
    this.brandsService.fillBrandWithSeed(BRANDS_SEED);

    return "Seed run successful"
  }

}
