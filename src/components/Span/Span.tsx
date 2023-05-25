import { FC } from "react";
import style from "./Span.module.css";

type SpanPropsType = {
    placeholder: string;
};

export const Span: FC<SpanPropsType> = ({ placeholder }) => {
    return (
        <>
            <input
                className={style.input}
                type="text"
                placeholder={placeholder}
            />
        </>
    );
};
