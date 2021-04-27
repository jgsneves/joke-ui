import React from 'react';
import {InputWrapper} from './styles';

interface IPropsInput extends React.HTMLProps<HTMLInputElement> {
    inputSize: "large" | "medium";
    id: string;
    testId?: string;
}

export const Input = ({inputSize, testId, id, type, onChange}:IPropsInput) => {
    return (
        <label htmlFor={id}>
            <InputWrapper 
                id={id} 
                inputSize={inputSize}
                type={type}
                onChange={onChange}
                data-testid={testId}
            />
        </label>
    );
}