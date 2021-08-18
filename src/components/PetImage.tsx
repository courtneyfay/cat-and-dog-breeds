import styled from 'styled-components';
import Dog from '../images/dog_jumping.svg';

const ImageWrapper = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
`;

interface Props {
    petType: 'cat' | 'dog'
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