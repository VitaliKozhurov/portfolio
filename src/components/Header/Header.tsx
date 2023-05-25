import { Navigation } from "../Navigation/Navigation";
import style from "./Header.module.css";
import containerStyle from "../../common/style/containerStyle.module.css";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={containerStyle.container + " " + style.headerBody}>
                <Navigation />
            </div>
        </div>
    );
};
