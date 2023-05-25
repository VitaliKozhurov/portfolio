import { FC } from "react";
import style from "./Work.module.css";

type WorkPropsType = {
    title: string;
    description: string;
};

export const Work: FC<WorkPropsType> = ({ title, description }) => {
    return (
        <li className={style.item}>
            <div className={style.image}>
                <a className={style.link} href="#">
                    Смотреть
                </a>
            </div>
            <div>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
            </div>
        </li>
    );
};
