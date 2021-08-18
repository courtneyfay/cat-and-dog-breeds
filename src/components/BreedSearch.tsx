import { Breed } from '../types/Breed';
import Question from '../reusable-components/Question';
import SectionWrapper from '../reusable-components/SectionWrapper';
import PetImage from './PetImage';
import BreedDropdown from './BreedDropdown';

interface Props {
    breedData?: Breed[]
    petType: 'cat' | 'dog'
 }

const BreedSearch = ({ breedData, petType }: Props) => {
    return (
        <div>
            <Question>Your pet's breed is?</Question>
            <SectionWrapper>
                <BreedDropdown breedData={breedData} />
            </SectionWrapper>
            <PetImage petType={petType} />
        </div>
        
    )
}

export default BreedSearch;