import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {UpdateBrandDto} from './dto/update-brand.dto';
import {Brand} from "./entities/brand.entity";
import {v4 as uuid} from "uuid"
import {Car} from "../cars/interfaces/car.interface";

@Injectable()
export class BrandsService {

  private brands: Brand[] = []

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(brand)

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string): Brand {
    const brand: Brand = this.brands.find((data: Brand) => data.id === id);

    if (!brand) throw new NotFoundException(`Brand with id: ${id} not found`)

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);

    this.brands = this.brands.map((data: Brand) => {
      if (data.id === id) {
        brandDb.updatedAt = new Date().getTime();

        brandDb = {...brandDb, ...updateBrandDto};

        return brandDb;
      }

      return data;
    });

    return brandDb;
  }

  remove(id: string) {
    this.brands = this.brands.filter((data: Brand) => data.id !== id);

    return this.brands;
  }

  public fillBrandWithSeed(brand: Brand[]) {
    this.brands = brand;
  }
}
