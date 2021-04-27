import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { Joke } from '../../components/joke';

import {Wrapper} from './styles';

export const Favorites = () => {
    const [jokes, setJokes] = React.useState<Ijoke[]>([]);
    return (
        <Wrapper>
            <h1>Suas piadas favoritas</h1>
            {jokes.map(joke => (
                <Joke 
                    background={joke.background}
                    category={joke.category}
                    date={joke.date}
                    description={joke.description}
                    joke={joke.joke}
                    title={joke.title}
                    key={joke.joke.id}
                />
            ))}
            <Link to="/dashboard">
                <Button
                    type="button"
                    theme="secondary"
                >VOLTAR</Button>
            </Link>
        </Wrapper>
    );
}