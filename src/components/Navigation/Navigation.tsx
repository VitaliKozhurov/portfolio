import style from "./Navigate.module.css";

type NavListType = {
    id: number;
    title: string;
};
const list: Array<NavListType> = [
    { id: 1, title: "Main" },
    { id: 2, title: "Skills" },
    { id: 3, title: "Works" },
    { id: 4, title: "Contacts" },
];

export const Navigation = () => {
    return (
        <ul className={style.listBody}>
            {list.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};
