import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { Joke } from '../../components/joke';
import { getAllFavJokes } from './helper';

import {Wrapper} from './styles';

export const Favorites = () => {
    const [jokes, setJokes] = React.useState<Ijoke[]>([]);
    React.useEffect(() => {
        getAllFavJokes().then(res => {
            if (res) {
                setJokes(res);
            }
        });
    },[jokes]);

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