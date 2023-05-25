import style from "./Main.module.css";
import containerStyle from "../../common/style/containerStyle.module.css";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={containerStyle.container + " " + style.mainBody}>
                <div className={style.text}>
                    <span className={style.greeting}>Hi There</span>
                    <h1 className={style.username}>I'm Vitali Kazhurou</h1>
                    <p className={style.title}>Frontend Developer</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>
        </div>
    );
};
