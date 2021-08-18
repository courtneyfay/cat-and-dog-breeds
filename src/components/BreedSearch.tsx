import { Breed } from '../types/Breed';
import { StringTypeOfPet } from '../types/TypeOfPet';
import Question from '../reusable-components/Question';
import SectionWrapper from '../reusable-components/SectionWrapper';
import PetImage from './PetImage';
import BreedDropdown from './BreedDropdown';

interface Props {
    breedData?: Breed[]
    petType: StringTypeOfPet
    isLoading: boolean
 }

const BreedSearch = ({
        breedData,
        petType,
        isLoading,
    }: Props) => {
    return (
        <div>
            <Question>Your pet's breed is?</Question>
            <SectionWrapper>
                <BreedDropdown breedData={breedData} isLoading={isLoading} />
            </SectionWrapper>
            <PetImage petType={petType} />
        </div>
        
    )
}

export default BreedSearch;