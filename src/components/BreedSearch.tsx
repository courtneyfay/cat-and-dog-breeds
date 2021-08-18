import { Breed } from '../types/Breed';
import Question from '../reusable-components/Question';
import PetImage from './PetImage';

interface Props {
    breedData?: Breed[]
    petType: 'cat' | 'dog'
 }

const BreedSearch = ({ breedData, petType }: Props) => {
    return (
        <div>
            <Question>Your pet's breed is?</Question>
            <select>
            {breedData && breedData.length > 0 && breedData?.map((breed: Breed) => {
                return (
                    <option key={breed.id}>Breed name: {breed.name}</option>
                ) 
            })}
            </select>
            <PetImage petType={petType} />
        </div>
        
    )
}

export default BreedSearch;