type TypeOfPet = 0 | 1

type Breed = {
    id: number
    name: string
    mixed: boolean
    petType: TypeOfPet
}

export type {
    Breed,
    TypeOfPet,
}