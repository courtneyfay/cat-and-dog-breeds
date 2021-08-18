import Question from '../reusable-components/Question';
import Button from '../reusable-components/Button';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 110px;
    justify-content: space-between;
`;

const PetType = () => {
    return (
        <div>
            <Question>Your pet is a?</Question>
            <ButtonWrapper>
                <Button>Dog</Button>
                <Button>Cat</Button>
            </ButtonWrapper>
        </div>
    )
}

export default PetType;