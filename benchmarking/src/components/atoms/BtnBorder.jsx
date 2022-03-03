import styled, { css } from 'styled-components';



// const BtnBorder = styled.div`
//     z-index: 1;
//     padding: 10px;
//     padding-inline: 30px;
//     border: solid;
//     border-radius: 5px;
//     border-color: rgb(255, 122, 144);
//     color:rgb(255, 86, 114);
// `;


const BtnBorderStyle = styled.div`
    border-color: ${(props) => props.borderColor};
    color: ${(props) => props.color};
    padding: 10px;
    padding-inline: 30px;
    border: solid;
    border-radius: 5px;
`;

export default function BtnBorder = ( { children, borderColor, color}: Props ) => {
    return <BtnBorder border-color={borderColor} color={color}>{children}</BtnBorder>;
};
