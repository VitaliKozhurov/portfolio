import { Navigate } from "../Navigate/Navigate";
import style from "./Header.module.css";

export const Header = () => {
    return (
        <div className={style.header}>
            <Navigate />
        </div>
    );
};
