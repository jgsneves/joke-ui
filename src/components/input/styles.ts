import styled from 'styled-components';

interface IPropsInput {
    inputSize: "large" | "medium";
}

export const InputWrapper = styled.input<IPropsInput>`
    width: ${props => props.inputSize === "large" ? "250px" : "100px"};
    border-radius: 4px;
    border: 1px solid #c3c3c3;
    height: 32px;
    padding: 0px 16px;
    font-size: 16px;
    &:focus {
        border: 2px solid #6071F7;
    } 
`;