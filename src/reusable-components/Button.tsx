import styled from 'styled-components';

const Button = styled.button`
    background-color: #FFFFFF;
    color: #064574;
    border-radius: 100px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border: unset;
    cursor: pointer;
`

const PrimaryButton = styled(Button)`
    width: 196px;
    height: 45px;
    font-size: 11px;
    text-transform: uppercase;
    line-height: 17px;
    letter-spacing: 0.2em;
    font-weight: 700;
`;

const CircleButton = styled(Button)`
    height: 40px;
    width: 40px;
    font-size: 34px;
`;

export {
    PrimaryButton,
    CircleButton,
}