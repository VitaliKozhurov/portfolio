import style from './Works.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {Work} from './Work/Work';
import social_network from '../../common/image/sn.webp';
import todo_list from '../../common/image/todo.webp';
import counter from '../../common/image/counter.webp';
import game from '../../common/image/game.webp';
import shop from '../../common/image/shop.webp';
import nft from '../../common/image/nft.webp';
import {textAnimation} from '../Skills/Skills';
import {motion} from 'framer-motion';


type WorkType = {
    id: number;
    title: string;
    image: string
    description: string;
    gitHubUrl:string;
    deployUrl:string
};
const list: Array<WorkType> = [
    {
        id: 1,
        title: 'Social Network',
        image: social_network,
        description:
            'React / Type Script / Redux / Redux Thunk / React Router / Formik / Axios / Hooks and Classes',
        gitHubUrl: 'https://github.com/VitaliKozhurov/social-network',
        deployUrl:'https://vitalikozhurov.github.io/social-network/'
    },
    {
        id: 2,
        title: 'Todo List',
        image: todo_list,
        description:
            'React / Type Script / Redux Toolkit / Redux Thunk / React Router / Storybook / Jest / Material UI / Formik / Axios / Hooks',
        gitHubUrl: 'https://github.com/VitaliKozhurov/todolists',
        deployUrl:'https://vitalikozhurov.github.io/todolists/'
    },
    {
        id: 3,
        title: 'Counter',
        image: counter,
        description:
            'React / Type Script / Redux  / Hooks',
        gitHubUrl: 'https://github.com/VitaliKozhurov/counter',
        deployUrl:'https://counter-seven-virid.vercel.app/'
    },
    {
        id: 4,
        title: 'Mini Game like Mario',
        image: game,
        description:
            'Native JS / CSS',
        gitHubUrl: 'https://github.com/VitaliKozhurov/kozhurov_game.github.io',
        deployUrl:'https://vitalikozhurov.github.io/kozhurov_game.github.io/'
    },
    {
        id: 5,
        title: 'SPA for presentations and promotion of NFT',
        image: nft,
        description:
            'React / Type Script / Hooks / Styled Components / Animation libraries',
        gitHubUrl: 'https://github.com/VitaliKozhurov/nft-art',
        deployUrl:'https://nft-art-tau.vercel.app/'
    },
    {
        id: 6,
        title: 'Website for a clothing store with adaptive layout',
        image: shop,
        description:
            'HTML / CSS /Native JS',
        gitHubUrl: 'https://github.com/VitaliKozhurov/mywebsite.io',
        deployUrl:'https://vitalikozhurov.github.io/mywebsite.io/'
    },
];

export const Works = () => {
    return (
        <motion.section
            id={'my works'}
            className={style.worksBlock}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{amount: 0.2, once: true}}
        >
            <div className={containerStyle.container}>
                <motion.h2
                    className={style.title}
                    custom={1}
                    variants={textAnimation}
                >My Works
                </motion.h2>
                <motion.ul
                    custom={2}
                    variants={textAnimation}
                    className={style.worksBody}
                >
                    {list.map((item) => (
                        <Work
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            gitHubUrl={item.gitHubUrl}
                            deployUrl={item.deployUrl}
                        />
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
};
