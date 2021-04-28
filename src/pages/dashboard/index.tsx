import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { Joke } from '../../components/joke';

import {Wrapper} from './styles';

export const Dashboard = () => {
    const [joke, setJoke] = React.useState<Ijoke>({
        category: "",
        title: "",
        description: "",
        background: "",
        date: "",
        joke: {
            title: "",
            length: "",
            clean: "",
            racial: "",
            date: "",
            id: "",
            text: "",
        }
    });
    React.useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch("http://localhost:8000/users/1").then(res => res.json());
        setJoke(response.favorites[0]);
    }

    console.log(joke);
    return (
        <Wrapper>
            <h1>Bem vindo, {localStorage.getItem("joke-ui: username")?.replaceAll(`"`, "")}!</h1>
            <p>Desfrute da piada do dia!</p>
            <Joke 
                background={joke.background}
                category={joke.category}
                date={joke.date}
                description={joke.description}
                joke={joke.joke}
                title={joke.title}
                key={joke.joke.id}
            />
            <Link to="/favorites">
                <Button
                    theme="primary"
                    type="button"
                >CLIQUE AQUI PARA VER SUAS PIADAS FAVORITAS</Button>
            </Link>
        </Wrapper>
    );
}