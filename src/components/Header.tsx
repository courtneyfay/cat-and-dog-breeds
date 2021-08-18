import styled from 'styled-components';
import Logo from '../Logo.svg';

const Wrapper = styled.header`
    background-color: white;
    padding: 27px 0px;
    display: flex;
    justify-content: center;
`;

const Header = () => {
    return (
        <Wrapper>
            <img src={Logo} alt="logo" />
        </Wrapper>
    )
}

export default Header;