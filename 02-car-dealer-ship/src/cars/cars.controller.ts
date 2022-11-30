import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {CarsService} from './cars.service';
import {Car} from "./interfaces/car.interface";
import {CreateCarDto} from "./dto/create-car.dto";

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {
  }

  @Get()
  getAllCard(): object[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string): Car[] {
    return this.carsService.findById(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() request: CreateCarDto): object {
    return this.carsService.addCar(request);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: { brand: string, model: string }
  ): Car[] {
    return this.carsService.updateCar(id, request);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string): object {
    return this.carsService.deleteCar(id)
  }

}
