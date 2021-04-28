import React from 'react';
import {ButtonWrapper} from './styles';


interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme: "primary" | "secondary" | "danger";
    type: "button" | "submit" | "reset" | undefined;
    selected?: boolean;
}

export const Button = ({id, selected, theme, type, children, onClick}:IButtonProps) => {
    return (
        <ButtonWrapper 
            theme={theme}
            onClick={onClick}
            type={type}
            id={id}
            selected={selected}
        >{children}</ButtonWrapper>
    );
}