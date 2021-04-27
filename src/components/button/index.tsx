import React from 'react';
import {ButtonWrapper} from './styles';


interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme: "primary" | "secondary" | "danger";
    type: "button" | "submit" | "reset" | undefined;
}

export const Button = ({theme, type, children, onClick}:IButtonProps) => {
    return (
        <ButtonWrapper 
            theme={theme}
            onClick={onClick}
            type={type}
        >{children}</ButtonWrapper>
    );
}