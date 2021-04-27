import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react';
import {Router} from '../../router/index';

describe('login page test', () => {
    it('random user should not login into dashboard', () => {
        render(<Router />);
        const userInput = screen.getByTestId("login");
        fireEvent.keyPress(userInput, {key: 'A', code: 'KeyA'});
        const passwordInput = screen.getByTestId("password");
        fireEvent.keyPress(passwordInput, {key: 'A', code: 'KeyA'});
        const loginButton = screen.getByText("Entrar");
        fireEvent.click(loginButton);
        const errorMessage = screen.getByText("Usuário ou senha não encontrados");
        expect(errorMessage).toBeInTheDocument();
    });

    it('should not create new user without valid e-mail', () => {
        render(<Router />);
        const signupButton = screen.getByText("Cadastrar");
        fireEvent.click(signupButton);
        const name = screen.getByText("Nome");
        const password = screen.getByText("Senha");
        const email = screen.getByText("E-mail");
        expect(name).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        const emailInput = screen.getByTestId("email-input");
        fireEvent.keyPress(emailInput, {key: 'A', code: 'KeyA'});
        const doneButton = screen.getByText("Cadastrar");
        fireEvent.click(doneButton);
        const errorMessage = screen.getByText("Insira um email válido");
        expect(errorMessage).toBeInTheDocument();
    });
});