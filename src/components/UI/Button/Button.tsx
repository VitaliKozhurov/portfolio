import React, {FC, FormEvent} from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
    title: string
    callback: () => void
}

export const Button: FC<ButtonPropsType> = ({title, callback}) => {

    return (
        <>
            <button className={style.button} onClick={callback}>{title}</button>
        </>
    )
};