export interface ICharacter {
  id: number;
  name: string;
  image: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
  affiliation: string;
  description: string;
  transformations: ITransformation[];
}

export interface ITransformation {
  name: string;
}
