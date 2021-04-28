import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../components/button';
import { Joke } from '../../components/joke';
import { getAllFavJokes, removeFavJoke } from './helper';

import {Wrapper} from './styles';

export const Favorites = () => {
    const history = useHistory();
    const userId = localStorage.getItem("@joke-ui: user_id");
    if (!userId) {
        history.push('/');
    }

    const [jokes, setJokes] = React.useState<Ijoke[]>([]);

    async function getFavoriteJokes() {
        const response = await getAllFavJokes();
        setJokes(response || []);
    }

    function onRemoveFavorites(id: string) {
        const filteredJokes = jokes.filter(item => item.joke.id !== id);
        removeFavJoke(filteredJokes);
        setJokes(filteredJokes);
    }

    React.useEffect(() => {
        getFavoriteJokes();
    }, []);
    

    return (
        <Wrapper>
            <h1>Suas piadas favoritas</h1>
            {jokes.length === 0 ? 
                <h3>Você ainda não tem piadas favoritadas!</h3> 
            : (
                jokes.map(joke => (
                    <Joke 
                    {...joke}
                    key={joke.joke.id}
                    favorited
                    onRemoveJoke={() => onRemoveFavorites(joke.joke.id)}
                />
                ))
            )}
            <Link to="/dashboard">
                <Button
                    type="button"
                    theme="secondary"
                >VOLTAR</Button>
            </Link>
        </Wrapper>
    );
}