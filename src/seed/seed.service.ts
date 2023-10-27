import { Injectable } from '@nestjs/common';
//import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {


  constructor(

    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter

  ) { }

  async executeSeed() {
    // //1ra forma vista.-------------------------------------------------------------------------------
    // const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=5')
    // data.results.forEach(async ({ name, url }) => {
    //   const segments = url.split('/');
    //   const no = +segments[segments.length - 2];
    //   const pokemon = await this.pokemonModel.create({ name, no });
    // })
    // return 'gato executado';

    // //2da. forma vista.-------------------------------------------------------------------------------
    // await this.pokemonModel.deleteMany({});
    // const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=15')
    // const insertPromisesArray = [];
    // data.results.forEach(({ name, url }) => {
    //   const segments = url.split('/');
    //   const no = +segments[segments.length - 2];
    //   insertPromisesArray.push(this.pokemonModel.create({ name, no }));
    // });
    // await Promise.all(insertPromisesArray);
    // return 'gato executado';


    //3ra. forma RECOMENDADA vista.-------------------------------------------------------------------------------
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemonToInsert: { name: string, no: number }[] = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);
    console.log('gato semillero callejero creado')
    return 'gato executado 3er. forma';


  }



}