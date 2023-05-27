import {FC} from 'react';
import style from './Input.module.css';

type InputPropsType = {
    type: string
    placeholder?: string;
};

export const Input: FC<InputPropsType> = ({type, placeholder}) => {
    return (
        <>
            <input
                className={style.input}
                type={type}
                placeholder={placeholder}
            />
        </>
    );
};
