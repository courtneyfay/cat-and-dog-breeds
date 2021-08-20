import styled from 'styled-components';
import { CircleButton } from '../reusable-components/Button';

const Wrapper = styled.div`
    position: fixed;
    bottom: 40px;
    right: 20px;
`;

const Icon = styled.span`
    position: relative;
    font-weight: 700;
    bottom: 6px;
`;

const ScrollButton = () => {
    return (
        <Wrapper>
            <CircleButton>
                <Icon>
                    &#8964;
                </Icon>
            </CircleButton>
        </Wrapper>
    )
}

export default ScrollButton;