import {FC} from 'react';
import style from './Work.module.scss';

type WorkPropsType = {
    title: string;
    image: string
    description: string;
};

export const Work: FC<WorkPropsType> = ({title, image, description}) => {
    return (
        <li className={style.item}>
            <div className={style.bg}>
                <img src={image} alt="Work example" />
            </div>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
            <div className={style.links}>
                <a href="#"> <span>Git Hub</span><i></i></a>
                <a href="#"><span>Live Demo</span><i></i></a>
            </div>
        </li>
    );
};
