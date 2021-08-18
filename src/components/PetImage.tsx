import styled from 'styled-components';
import Dog from '../images/dog_jumping.svg';
import { StringTypeOfPet } from '../types/TypeOfPet';

const ImageWrapper = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
`;

interface Props {
    petType: StringTypeOfPet
}

const PetImage = ({ petType }: Props) => {
    return (
        <ImageWrapper>
        {petType === 'dog'
            ? <img src={Dog} alt="dog" />
            : <div>cat image here</div>
        }
        </ImageWrapper>
    )
}

export default PetImage;