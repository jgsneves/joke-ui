import { isValidEmail } from '@brazilian-utils/brazilian-utils';

export async function tryToLogin({
    history, 
    loginFormData, 
    setError, 
    setStage
}:ILoginFetch) {
    try {
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
            localStorage.setItem("@joke-ui: user_id", JSON.stringify(user[0].id));
            localStorage.setItem("@joke-ui: username", JSON.stringify(user[0].name));
            localStorage.setItem("@joke-ui: user_body", JSON.stringify(user[0]));
            localStorage.setItem("@joke-ui: favs_jokes", JSON.stringify(user[0].favorites));
            history.push('/dashboard');
        }
       


    } catch (e) {
        setError({code: 1, message: "Erro ao enviar mensagem, tente novamente."});
        setStage(0);
    }
}

export async function tryToSignUp({
    history, 
    loginFormData, 
    setError, 
    setStage
}: ILoginFetch) {
    try {
        const response: Users[] = await fetch("http://localhost:8000/users").then(
            res => res.json()
        );
        const user = response.filter(user => 
            user.email === loginFormData.singUpEmail
        );
        if (
            loginFormData.singUpEmail === "" ||
            loginFormData.singUpName === "" ||
            loginFormData.signUpPassword === ""
        ) {
            setError({code: 2, message: "Forneça e-mail, nome e senha."});
            setStage(1);
        } else if (!isValidEmail(loginFormData.singUpEmail)) {
            setError({code: 3, message: "Forneça um e-mail válido."});
            setStage(1);
        } else if (user.length !== 0) {
            setError({code: 4, message: "E-mail já cadastrado na plataforma."});
            setStage(1);
        } else {
            let header = new Headers();
            header.append("Content-Type", "application/json");
            let postBody = {
                name: loginFormData.singUpName,
                email: loginFormData.singUpEmail,
                password: loginFormData.signUpPassword,
                favorites: []
            }
            const response: Users = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: header,
                body: JSON.stringify(postBody),
            }).then(res => res.json());
            localStorage.setItem("@joke-ui: user_id", JSON.stringify(response.id));
            history.push('/dashboard');
        }
    } catch (e) {
        setError({code: 1, message: e.message});
        setStage(1);
    }
}