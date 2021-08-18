import styled from 'styled-components';
import Question from '../reusable-components/Question';
import Button from '../reusable-components/Button';
import SectionWrapper from '../reusable-components/SectionWrapper';
import { Breed, TypeOfPet } from '../types/Breed';

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 110px;
    justify-content: space-between;
`;

interface Props {
    setBreedData: (arg0: Breed[] | undefined) => void;
    setPetType: (arg0: 'cat' | 'dog') => void;
}

const filterByType = (results: Breed[], type: TypeOfPet) => {
    return results?.reduce<Breed[]>(
        (accumulator: any, result: any) => {
            //filter by dog or cat type, 0 = dog, 1 = cat
            if (result.petType === type) {
                return [
                    ...accumulator,
                    result,
                ];
            }
            return accumulator;
        },
        [] // initial value
    );
}

const PetType = ({ setBreedData, setPetType } : Props) => {

    const handleClick = async (type: TypeOfPet) => {
        const typeInWords = type === 1 ? 'cat' : 'dog';
        setPetType(typeInWords);
        const response = await fetch('api/1.0/breeds');

        if (response.status === 200) {
            const results = await response.json();
            const filteredResults = filterByType(results, type);
            setBreedData(filteredResults);
        }
    }

    return (
        <div>
            <Question>Your pet is a?</Question>
            <SectionWrapper>
                <ButtonWrapper>
                    <Button onClick={() => handleClick(0)}>
                        Dog
                    </Button>
                    <Button onClick={() => handleClick(1)}>
                        Cat
                    </Button>
                </ButtonWrapper>
            </SectionWrapper>
        </div>
    )
}

export default PetType;