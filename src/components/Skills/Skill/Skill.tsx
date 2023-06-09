import { FC } from "react";
import style from "./Skill.module.css";

type SkillPropsType = {
    title: string;
    description: string;
};

export const Skill: FC<SkillPropsType> = ({ title, description }) => {
    return (
        <li className={style.item}>
            <div className={style.image}>Skill image</div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>{description}</span>
        </li>
    );
};
