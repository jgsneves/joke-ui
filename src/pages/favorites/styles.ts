import styled from 'styled-components';

export const Wrapper = styled.main`
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 20px;
    & > h1 {
        margin: 32px 0;
    }

    & > p {
        margin-top: 8px;
        margin-bottom: 32px;
    }

    & > a > button {
        margin-top: 32px;
    }

    & > a {
        text-decoration: none;
    }
`;