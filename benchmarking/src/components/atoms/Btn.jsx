import styled, { css } from 'styled-components';

const BtnBorder = styled.div`
  border-color: ${({borderColor}) => borderColor};
    color: ${({color}) => color};
    padding: 10px;
    padding-inline: 30px;
    border: solid;
    border-radius: 5px;
`;

export default function Btn ( { children, borderColor, color} ) {
    return <BtnBorder border-color={borderColor} color={color}>{children}</BtnBorder>;
};
