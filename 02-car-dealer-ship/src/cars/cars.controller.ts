import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {CarsService} from './cars.service';
import {Car} from "./interfaces/car.interface";
import {CreateCarDto} from "./dto/create-car.dto";

@Controller('cars')
// El use UsePipes puede ser usado aquí
// Sin embargo ya que es usado por casí
// todos los endpoints debe funcionar como
// un provider y es optimo colocarlo en el
// nivel mas alto de la aplicacion
// @UsePipes(ValidationPipe)
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
