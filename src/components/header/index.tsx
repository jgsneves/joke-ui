import React from 'react';
import { Logo } from '../logo';

import {Wrapper} from './styles';

export const Header = () => {
    return (
        <Wrapper>
            {Logo()}
            <h1>Espalhando o riso</h1>
        </Wrapper>
    );
}