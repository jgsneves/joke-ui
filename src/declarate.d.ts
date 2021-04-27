interface Users {
    id: number;
    name: string;
    email: string;
    password: string;
    favorites: Ijoke[];
}

interface Ijoke {
    category: string;
    title: string;
    description: string;
    background: string;
    date: string;
    joke: {
        title: string;
        length: string;
        clean: string;
        racial: string;
        date: string;
        id: string;
        text: string;
    }
    favorited?: boolean;
}

interface ILoginForm {
    loginEmail: string;
    loginPassword: string;
    singUpName: string;
    singUpEmail: string;
    signUpPassword: string;
}

interface IErrorMessage {
    code: number;
    message: string;
}


interface ILoginFetch {
    history: History<unknown>;
    loginFormData: ILoginForm; 
    setError: React.Dispatch<React.SetStateAction<IErrorMessage>>;
    setStage: React.Dispatch<React.SetStateAction<number>>;
}