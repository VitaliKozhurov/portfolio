import {FC} from 'react';
import style from './Work.module.scss';

type WorkPropsType = {
    title: string;
    image: string
    description: string;
    gitHubUrl:string;
    deployUrl:string
};

export const Work: FC<WorkPropsType> = ({title, image, description, gitHubUrl, deployUrl}) => {
    return (
        <li className={style.item}>
            <div className={style.bg}>
                <img src={image} alt="Work example" />
            </div>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
            <div className={style.links}>
                <a href={gitHubUrl} target={'_blank'}> <span>Git Hub</span><i></i></a>
                <a href={deployUrl} target={'_blank'}><span>Live Demo</span><i></i></a>
            </div>
        </li>
    );
};
