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

type SkillType = {
    id: number
    title: string
    icon: ReactNode

};
const list: Array<SkillType> = [
    {
        id: 1,
        title: 'Java Script',
        icon: <RiJavascriptFill />
    },
    {
        id: 2,
        title: 'React',
        icon: <FaReact />
    },
    {
        id: 3,
        title: 'Type Script',
        icon: <BiLogoTypescript />
    },
    {
        id: 4,
        title: 'Redux / Redux Toolkit',
        icon: <SiRedux />
    },
    {
        id: 5,
        title: 'Storybook',
        icon: <SiStorybook />
    },
    {
        id: 6,
        title: 'React Router',
        icon: <SiReactrouter />
    },
    {
        id: 7,
        title: 'Axios',
        icon: <SiAxios />
    },
    {
        id: 8,
        title: 'Rest API',
        icon: <AiOutlineCloudServer />
    },
    {
        id: 9,
        title: 'Jest',
        icon: <SiJest />
    },
    {
        id: 10,
        title: 'Git',
        icon: <FaGitAlt />
    },
    {
        id: 11,
        title: 'HTML',
        icon: <FaHtml5 />
    },
    {
        id: 12,
        title: 'CSS',
        icon: <SiCss3 />
    },
    {
        id: 13,
        title: 'SASS',
        icon: <FaSass />
    },
    {
        id: 14,
        title: 'Styled Components',
        icon: <SiStyledcomponents />
    },
    {
        id: 15,
        title: 'Figma',
        icon: <FaFigma />
    },
    {
        id: 16,
        title: 'MUI',
        icon: <SiMui />
    },

];
const animateList = list.slice(0, 6).map(elem => [elem.title, 2000]).flat()

export const Skills = () => {

    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={containerStyle.container}>
                <h2 className={style.title}>My Skills <TypeAnimation
                    sequence={animateList}
                    speed={30}
                    wrapper={'span'}
                    repeat={Infinity}
                    style={{color: '#00abf0'}}
                />

                </h2>
                <ul className={style.cardsBody}>
                    {list.map((item) => (
                        <Skill
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};
