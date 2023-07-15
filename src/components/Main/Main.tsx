import style from './Main.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {FaGithub} from 'react-icons/fa6';
import {BsLinkedin, BsTelegram} from 'react-icons/bs';
import {BiLogoGmail} from 'react-icons/bi';
import {SlSocialVkontakte} from 'react-icons/sl';
import ava from '../../common/image/ava.png'

export const Main = () => {
    return (
        <section id={'home'} className={style.mainBlock}>
            <div className={containerStyle.container + ' ' + style.mainBody}>
                <div className={style.text}>
                    <h3 className={style.greeting}>Hello, It's me</h3>
                    <h1 className={style.username}>Vitali Kazhurou</h1>
                    <h3 className={style.title}>And I'm a passionate <span>Frontend Developer</span></h3>
                    <p>with a strong desire to learn and grow within a collaborative team, and I'm open to your
                        suggestions.</p>
                    <div className={style.socials}>
                        <a href="#"><BsLinkedin /></a>
                        <a href="#"><FaGithub /></a>
                        <a href="#"><BsTelegram /></a>
                        <a href="#"><BiLogoGmail /></a>
                        <a href="#"><SlSocialVkontakte /></a>
                    </div>

                </div>
                <div className={style.photo}>
                    <img src={ava} alt="Avatar" />
                    <span></span>
                </div>
            </div>

        </section>
    );
};
