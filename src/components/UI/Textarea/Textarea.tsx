import { FC } from "react";
import style from "./Textarea.module.scss";

type TextareaPropsType = {
    placeholder: string;
};

export const Textarea: FC<TextareaPropsType> = ({ placeholder }) => {
    return (
        <>
            <textarea className={style.text} placeholder={placeholder} />
        </>
    );
};
