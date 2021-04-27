import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #FFF;
        padding: 32px 32px;
        width: 314px;
        height: 222px;
        border: 1px solid;
        box-shadow: 5px 10px;
    }
    `;

export const LoginForm = styled.form`
    background-color: #FFF;
    padding: 16px 32px;
    border: 1px solid;
    box-shadow: 5px 10px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50px 25px 45px 25px 45px 50px;
    & > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const SignUpForm = styled.form`
    background-color: #FFF;
    padding: 16px 32px;
    border: 1px solid;
    box-shadow: 5px 10px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50px 25px 45px 25px 45px 25px 45px 50px;
    & > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const ErrorMessage = styled.p`
    background-color: #F5EDEB;
    border-style: solid;
    border-color: #E44131;
    border-width: 1px 1px 1px 7px;
    border-radius: 3px;
    height: 50px;
    color: #ED4433;
    padding: 16px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    
    & > svg {
        margin-right: 5px;
    }
`;