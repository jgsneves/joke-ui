import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: fit-content;
    padding: 8px;
    border: 1px solid #000;
    box-shadow: 5px 10px #000;

    &:hover {
        background-color: #6071F7;
        color: #ffffff;
    }
`;

export const JokeHeader = styled.header`
    display: grid;
    grid-template-columns: 400px 120px;
    grid-template-rows: auto auto;
    align-items: center;

    & > p {
        grid-column-start: 1;
        margin-top: 16px;
    }

    & > h3 {
        grid-row-start: 1;
        grid-column-start: 2;
        justify-self: flex-end;
    }

    & > svg {
        justify-self: flex-end;
    }
`;

export const JokeMain = styled.main`
    display: flex;
    flex-direction: column;

    & > hr {
        width: 80%;
        align-self: center;
        margin: 16px 0;
    }

    & > p + p {
        margin-top: 8px;
    }
`;