import { Navigation } from "../Navigation/Navigation";
import style from "./Header.module.scss";
import containerStyle from "../../common/style/containerStyle.module.css";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={containerStyle.container + " " + style.headerBody}>
                <Navigation />
            </div>
        </header>
    );
};
