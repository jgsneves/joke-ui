import styled from 'styled-components';

export const Wrapper = styled.main`
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 32px;
    & > h1 {
        margin-top: 32px;
    }

    & > p {
        margin-top: 8px;
        margin-bottom: 32px;
    }

    & > form {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 32px;
    }

    & > ul > li {
        list-style: none;
    }

    & > a > button {
        margin-top: 32px;
    }

    & > a {
        text-decoration: none;
        width: fit-content;
    }
`;