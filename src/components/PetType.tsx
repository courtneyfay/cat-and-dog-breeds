import styled from 'styled-components';
import Question from '../reusable-components/Question';
import Button from '../reusable-components/Button';
import { Breed } from '../types/Breed';

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 110px;
    justify-content: space-between;
`;

interface Props {
    setBreedData: (arg0: Breed[] | undefined) => void;
}

type DogOrCat = 0 | 1;

const filterByType = (results: Breed[], type: DogOrCat) => {
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

const PetType = ({ setBreedData } : Props) => {

    const handleClick = async (type: DogOrCat) => {
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
            <ButtonWrapper>
                <Button onClick={() => handleClick(0)}>
                    Dog
                </Button>
                <Button onClick={() => handleClick(1)}>
                    Cat
                </Button>
            </ButtonWrapper>
        </div>
    )
}

export default PetType;