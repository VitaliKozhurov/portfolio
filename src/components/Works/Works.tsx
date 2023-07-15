import style from "./Works.module.css";
import containerStyle from "../../common/style/containerStyle.module.css";
import { Work } from "./Work/Work";

type WorkType = {
    id: number;
    title: string;
    description: string;
};
const list: Array<WorkType> = [
    {
        id: 1,
        title: "Social Network",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        id: 2,
        title: "Todo List",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
];

export const Works = () => {
    return (
        <div id={'my works'} className={ style.worksBlock}>
            <div className={containerStyle.container}>
                <h2 className={style.title}>My Works</h2>
                <ul className={style.worksBody}>
                    {list.map((item) => (
                        <Work
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
