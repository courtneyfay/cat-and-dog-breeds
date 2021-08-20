import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircleButton } from '../reusable-components/Button';
import { StringTypeOfPet } from '../types/TypeOfPet';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 40px;
    right: 20px;
`;

const Icon = styled.span`
    position: relative;
    font-weight: 700;
    bottom: 6px;
`;

const Alert = styled.div`
    background-color: grey;
    color: white;
    padding: 10px;
    border-radius: 4px;
`;

interface Props {
    petType?: StringTypeOfPet 
}

const ScrollButton = ({
    petType,
}: Props) => {
    const [alert, setAlert] = useState<string | undefined>();

    useEffect(() => {
        if (petType) {
            setAlert(undefined);
        }
    }, [petType]);

    const handleClick = () => {
        if (!petType) {
            setAlert('Please choose a Dog or Cat pet type');
        } else {
            console.log('hitting else - do the autoscroll thing here')
        }
    };

    return (
        <Wrapper>
            <ButtonWrapper>
                <CircleButton onClick={handleClick}>
                    <Icon>
                        &#8964;
                    </Icon>
                </CircleButton>
            </ButtonWrapper>
            {alert && (
                <Alert>{alert}</Alert>
            )}
        </Wrapper>
    )
}

export default ScrollButton;