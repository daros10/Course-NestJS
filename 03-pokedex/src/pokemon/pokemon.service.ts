import {BadRequestException, Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import {CreatePokemonDto} from './dto/create-pokemon.dto';
import {UpdatePokemonDto} from './dto/update-pokemon.dto';
import {Model} from "mongoose";
import {Pokemon} from "./entities/pokemon.entity";
import {InjectModel} from "@nestjs/mongoose";
import {isMongoId, isString} from "class-validator";

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModelGateway: Model<Pokemon>
  ) {
  }

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    try {
      return await this.pokemonModelGateway.create(createPokemonDto);
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  findAll() {
    return this.pokemonModelGateway.find();
  }

  async findOne(searchTerm: string) {
    let pokemon: Pokemon;

    if (!isNaN(+searchTerm)) {
      pokemon = await this.pokemonModelGateway.findOne({no: searchTerm});
    }

    if (!pokemon && isString(searchTerm)) {
      pokemon = await this.pokemonModelGateway.findOne({name: searchTerm.toLowerCase().trim()})
    }

    if (isMongoId(searchTerm)) {
      pokemon = await this.pokemonModelGateway.findById(searchTerm)
    }

    if (!pokemon) throw new NotFoundException(`Pokemon [${searchTerm}] not found`)

    return pokemon;
  }

  async update(searchTerm: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(searchTerm);
    if (updatePokemonDto.name)
      updatePokemonDto.name = updatePokemonDto.name.toLowerCase();

    try {
      await pokemon.updateOne(updatePokemonDto);
      return {...pokemon.toJSON(), ...updatePokemonDto};

    } catch (error) {

      this.handleExceptions(error)
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.pokemonModelGateway.deleteOne({ _id: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`Pokemon with id "${ id }" not found`);

    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`);
    }

    throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`);
  }
}
