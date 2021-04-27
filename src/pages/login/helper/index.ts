import { isValidEmail } from '@brazilian-utils/brazilian-utils';

export async function tryToLogin({history ,loginFormData ,setError, setStage}:ILoginFetch) {
    try {
        let header = new Headers();
        header.append("Content-Type", "application/json");
        const response: Users[] = await fetch("http://localhost:8000/users").then(
            res => res.json()
        );
        const user = response.filter(user => 
            user.email === loginFormData.loginEmail && 
            user.password === loginFormData.loginPassword
        );

        if (
            loginFormData.loginEmail === "" || 
            loginFormData.loginPassword === ""
        ) {
            setError({code: 2, message: "Forneça seu e-mail e senha."});
            setStage(0);
        } else if (!isValidEmail(loginFormData.loginEmail)) {
            setError({code: 3, message: "Forneça um e-mail válido."});
            setStage(0);
        } else if (user.length === 0) {
            setError({code: 4, message: "E-mail ou senha não encontrados"});
            setStage(0);
        } else {
            history.push('/dashboard');
        }
       


    } catch (e) {
        setError({code: 1, message: "Erro ao enviar mensagem, tente novamente."});
        setStage(0);
    }
}