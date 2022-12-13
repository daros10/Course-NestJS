import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus} from '@nestjs/common';
import {PokemonService} from './pokemon.service';
import {CreatePokemonDto} from './dto/create-pokemon.dto';
import {UpdatePokemonDto} from './dto/update-pokemon.dto';
import {ParseMongoIdPipe} from "../common/pipe/parse-mongo-id/parse-mongo-id.pipe";

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {
  }

  @Post()
  // Este decorador permite personalizar
  // el http code que se desea retornar
  // @HttpCode(HttpStatus.OK)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':searchTerm')
  findOne(@Param('searchTerm') searchTerm: string) {
    return this.pokemonService.findOne(searchTerm);
  }

  @Patch(':searchTerm')
  update(@Param('searchTerm') searchTerm: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(searchTerm, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
