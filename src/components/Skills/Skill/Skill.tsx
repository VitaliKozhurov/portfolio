import {FC, ReactNode} from 'react';
import style from './Skill.module.scss';

type SkillPropsType = {
    title: string
    icon: ReactNode
};

export const Skill: FC<SkillPropsType> = ({title, icon}) => {
    return (
        <li className={style.item}>
            <div className={style.image}>{icon}</div>
            <h3 className={style.title}>{title}</h3>
        </li>
    );
};
