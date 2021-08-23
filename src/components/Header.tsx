import styled from 'styled-components';
import logo from '../logo.svg';

const Wrapper = styled.header`
    background-color: white;
    padding: 27px 0px;
    display: flex;
    justify-content: center;
`;

const Header = () => {
    return (
        <Wrapper>
            <img src={logo} alt="logo" />
        </Wrapper>
    )
}

export default Header;