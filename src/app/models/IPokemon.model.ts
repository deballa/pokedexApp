import { IType } from './IType.model';
/* eslint-disable @typescript-eslint/naming-convention */
export interface IPokemon {
  id: number;
  name: string;
  abilities: any[];
  base_experience: number;
  forms: any[];
  height: number;
  held_itens: any[];
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  order: number;
  past_types: any[];
  species: any;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
    };
  };
  stats: any[];
  types: IType[];
  weight: number;
}
