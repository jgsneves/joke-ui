import React, { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../components/button';
import { Joke } from '../../components/joke';
import { getCategories, getJodByCategory } from './helper';

import {Wrapper} from './styles';

export const Dashboard = () => {
    const history = useHistory();
    const userId = localStorage.getItem("@joke-ui: user_id");
    if (!userId) {
        history.push('/');
    }

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
    const [category, setCategory] = React.useState<string>("jod");
    const [categoriesList, setCategoriesList] = React.useState<string[]>([]);
    React.useEffect(() => {
        getCategories(setCategoriesList);
        getJodByCategory({category, setJoke});
    }, [category]);

    function handleButtonPress(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        const {id} = e.currentTarget;
        setCategory(id);
    }

    return (
        <Wrapper>
            <h1>Bem vindo, {localStorage.getItem("@joke-ui: username")?.replaceAll(`"`, "")}!</h1>
            <p>As piadas do dia são segmentadas por categorias! <br/> Escolha uma categoria abaixo:</p>
            <form>
                {categoriesList.map(item => (
                    <Button 
                        type="button" 
                        theme="secondary"
                        id={item}
                        onClick={handleButtonPress}
                        key={item}
                        selected={category === item}
                    >{item}</Button>
                ))}                
            </form>
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