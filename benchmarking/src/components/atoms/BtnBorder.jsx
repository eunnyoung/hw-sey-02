import styled, { css } from 'styled-components';



const BtnBorder = styled.div`
    z-index: 1;
    padding: 10px;
    padding-inline: 30px;
    border: solid;
    border-radius: 5px;
    border-color: rgb(255, 122, 144);
    color:rgb(255, 86, 114);
`;

const Btn = ({ border-color, text-color}) => (
    <div style={ border-color: "{border-color}", color: "{text-color}"}
)