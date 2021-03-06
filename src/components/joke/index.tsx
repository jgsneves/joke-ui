import React from 'react';
import { addNewJokeToFavs } from '../../pages/favorites/helper';
import { StarIcon } from '../starIcon';
import {Wrapper, JokeHeader, JokeMain} from './styles';

export const Joke = ({
    joke, 
    date, 
    description, 
    background, 
    category,
    title,
    favorited,
    onRemoveJoke
}: IJokeProps) => {
    
    const questionSlicer = joke.text.indexOf("\r");
    const question = joke.text.slice(2, questionSlicer);

    const answerSlicer = joke.text.indexOf("\n") + 1;
    const answer = joke.text.slice(answerSlicer, -1).replace("A.", "");

    return (
        <Wrapper>
            <JokeHeader>
                <h2>{joke.title}</h2>
                <p>{description}</p>
                <h3>{date}</h3>
                <StarIcon 
                    favorited={favorited}
                    setFavorite={() => addNewJokeToFavs({description, date, joke, background, category, title})}
                    removeFavorite={() => {
                        if (onRemoveJoke) {
                            onRemoveJoke(joke.id);
                        }
                    }}
                />
            </JokeHeader>
            <JokeMain>
                <hr/>
                <p><b>Pergunta:</b></p>
                <p>{question}</p>
                <p><b>Resposta:</b></p>
                <p>{answer}</p>
            </JokeMain>
        </Wrapper>
    );
}