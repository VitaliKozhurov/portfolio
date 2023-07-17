import style from './Skills.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {Skill} from './Skill/Skill';
import {TypeAnimation} from 'react-type-animation';
import {FaReact} from 'react-icons/fa';
import {ReactNode} from 'react';
import {RiJavascriptFill} from 'react-icons/ri';
import {BiLogoTypescript} from 'react-icons/bi';
import {SiAxios, SiCss3, SiJest, SiMui, SiReactrouter, SiRedux, SiStorybook, SiStyledcomponents} from 'react-icons/si';
import {AiOutlineCloudServer} from 'react-icons/ai';
import {FaFigma, FaGitAlt, FaHtml5, FaSass} from 'react-icons/fa6';
import figma from '../../common/image/figma.svg';
import {motion} from 'framer-motion';

const Figma = () => {
    return <div>
        <img src={figma} alt="Figma logo" />
    </div>
}


type SkillType = {
    id: number
    title: string
    icon: ReactNode
};

const list: Array<SkillType> = [
    {
        id: 1,
        title: 'Java Script',
        icon: <RiJavascriptFill color={'#FFCC33'} />,
    },
    {
        id: 2,
        title: 'React',
        icon: <FaReact color={'#149ECA'} />
    },
    {
        id: 3,
        title: 'Type Script',
        icon: <BiLogoTypescript color={'#3077C5'} />
    },
    {
        id: 4,
        title: 'Redux Toolkit',
        icon: <SiRedux color={'#764ABC'} />
    },
    {
        id: 5,
        title: 'Storybook',
        icon: <SiStorybook color={'#F1618C'} />
    },
    {
        id: 6,
        title: 'React Router',
        icon: <SiReactrouter color={'#F44250'} />
    },
    {
        id: 7,
        title: 'Axios',
        icon: <SiAxios color={'#5A29E4'} />
    },
    {
        id: 8,
        title: 'Rest API',
        icon: <AiOutlineCloudServer color={'#39A6DD'} />
    },
    {
        id: 9,
        title: 'Jest',
        icon: <SiJest color={'#C53D17'} />
    },
    {
        id: 10,
        title: 'Git',
        icon: <FaGitAlt color={'#F44C28'} />
    },
    {
        id: 11,
        title: 'HTML',
        icon: <FaHtml5 color={'#CC6633'} />
    },
    {
        id: 12,
        title: 'CSS',
        icon: <SiCss3 color={'#017DC8'} />
    },
    {
        id: 13,
        title: 'SASS',
        icon: <FaSass color={'#CC6699'} />
    },
    {
        id: 14,
        title: 'Styled Components',
        icon: <SiStyledcomponents color={'#FFD35B'} />
    },
    {
        id: 15,
        title: 'Figma',
        icon: <Figma />
    },
    {
        id: 16,
        title: 'MUI',
        icon: <SiMui color={'#0081CB'} />
    },

];
const animateList = list.slice(0, 6).map(elem => [elem.title, 2000]).flat()


const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2, duration: .5}
    })
}

export const Skills = () => {

    return (
        <motion.section
            id={'skills'}
            className={style.skillsBlock}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{amount: 0.2, once: true}}
        >
            <div className={containerStyle.container}>
                <motion.h2
                    className={style.title}
                    custom={1}
                    variants={textAnimation}
                >
                    My Skills <br />
                    <TypeAnimation
                        sequence={animateList}
                        speed={30}
                        wrapper={'span'}
                        repeat={Infinity}
                        style={{color: '#00abf0'}}
                    />

                </motion.h2>
                <motion.ul
                    className={style.cardsBody}
                    custom={2}
                    variants={textAnimation}
                >
                    {list.map((item) => (
                        <Skill
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
};


