import style from './Main.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import ava from '../../common/image/ava.png'


export const Main = () => {
    return (
        <section id={'home'} className={style.mainBlock}>
            <div className={containerStyle.container}>
                <div className={style.mainBody}>
                    <h3>Hello, It's me</h3>
                    <h1 className={style.username}>Vitali Kazhurou</h1>
                    <div className={style.photo}>
                        <img src={ava} alt="Avatar" />
                        <span></span>
                    </div>
                    <h3>And I'm a <span>Frontend Developer</span></h3>
                    <p>with a strong desire to learn and grow within a collaborative team<br />Open to your suggestions.
                    </p>
                </div>
            </div>

        </section>
    );
};
