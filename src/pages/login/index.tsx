import React, { ChangeEvent, FormEvent } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import {FiAlertTriangle} from 'react-icons/fi';
import {ErrorMessage, LoginForm, SignUpForm, Wrapper} from './styles';
import { Spinner } from '../../components/spinner';
import { useHistory } from 'react-router';
import { tryToLogin } from './helper';


export const Login = () => {
    const [stage, setStage] = React.useState<number>(0);
    const [error, setError] = React.useState<IErrorMessage>({
        code: 0, 
        message: "Sem erro."
    });
    const [loginFormData, setLoginFormData] = React.useState<ILoginForm>({
        loginEmail: "",
        loginPassword: "",
        singUpEmail: "",
        signUpPassword: "",
        singUpName: ""
    });

    const history = useHistory();

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target;
        setLoginFormData({...loginFormData, [id]: value});
        console.log(loginFormData);
    }
    
    function loginSubmit(e: FormEvent) {
        e.preventDefault();
        setStage(2);
        tryToLogin({history, loginFormData, setError, setStage});
    }

    function signUpSubmit(e: FormEvent) {
        e.preventDefault();
    }

    function handleSignUpButtonPress() {
        setStage(1);
    }

    return (
        <Wrapper>
            {error.code === 0 ? null : (
                <ErrorMessage>
                    <FiAlertTriangle />
                    {error.message}
                </ErrorMessage>
            )}
            {stage === 0 ? (
                <LoginForm onSubmit={loginSubmit}>
                    <h1>Faça login</h1>
                    <p><b>E-mail</b></p>
                    <Input 
                        onChange={handleInputChange} 
                        inputSize="large" 
                        id="loginEmail" 
                        type="email"
                        testId="login"
                    />
                    <p><b>Senha</b></p>
                    <Input 
                        onChange={handleInputChange} 
                        inputSize="large" 
                        id="loginPassword" 
                        type="password"
                        testId="password"
                    />
                    <div>
                        <Button 
                            type="submit" 
                            theme="primary"
                        >Entrar</Button>
                        <Button 
                            type="button" 
                            theme="secondary" 
                            onClick={handleSignUpButtonPress}
                        >Cadastrar</Button>
                    </div>
                </LoginForm>
            ) : null}

            {stage === 1 ? (
                <SignUpForm onSubmit={signUpSubmit}>
                    <h1>Cadastre-se</h1>
                    <p><b>Nome:</b></p>
                    <Input 
                        onChange={handleInputChange} 
                        inputSize="large" 
                        id="singUpName" 
                        type="text"
                    />
                    <p><b>E-mail</b></p>
                    <Input 
                        onChange={handleInputChange} 
                        inputSize="large" 
                        id="singUpEmail" 
                        type="email" 
                    />
                    <p><b>Senha</b></p>
                    <Input 
                        onChange={handleInputChange} 
                        inputSize="large" 
                        id="signUpPassword" 
                        type="password"
                    />
                    <div>
                        <Button 
                            type="submit"
                            theme="primary"
                        >Registrar</Button>
                        <Button 
                            type="reset" 
                            theme="secondary" 
                            onClick={() => setStage(0)}
                        >Voltar</Button>
                    </div>
                </SignUpForm>
            ): null}

            {stage === 2 ? (
                <div>
                    <Spinner />
                    <h1>Carregando...</h1>
                </div>
            ): null}
        </Wrapper>
    );
}