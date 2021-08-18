import { Breed } from '../types/Breed';

interface Props {
    breedData: Breed[]
}

const BreedSearch = ({ breedData }: Props) => {
    return (
        <>
            {breedData.length > 0 && breedData.map((breed: Breed) => {
                return (
                    <div key={breed.id}>Breed name: {breed.name}</div>
                ) 
            })}
        </>
    )
}

export default BreedSearch;