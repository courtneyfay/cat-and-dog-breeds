import { TypeOfPet } from './TypeOfPet';

type Breed = {
    id: number
    name: string
    mixed: boolean
    petType: TypeOfPet
}

export type {
    Breed,
}