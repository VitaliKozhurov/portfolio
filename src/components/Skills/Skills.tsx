import style from "./Skills.module.css";
import containerStyle from "../../common/style/containerStyle.module.css";
import { Skill } from "./Skill/Skill";

type SkillType = {
    id: number;
    title: string;
    description: string;
};
const list: Array<SkillType> = [
    {
        id: 1,
        title: "HTML",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 2,
        title: "Java Script",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 3,
        title: "React",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 4,
        title: "Redux",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 5,
        title: "Type Script",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 6,
        title: "CSS",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
];

export const Skills = () => {
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={containerStyle.container}>
                <h2 className={style.title}>My Skills</h2>
                <ul className={style.cardsBody}>
                    {list.map((item) => (
                        <Skill
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};
