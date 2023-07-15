import style from './Main.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {BiLogoGmail, BiLogoLinkedin} from 'react-icons/bi';
import {SlSocialVkontakte} from 'react-icons/sl';
import ava from '../../common/image/ava.png'
import {LuGithub} from 'react-icons/lu';
import {FaTelegramPlane} from 'react-icons/fa';


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
                    <div className={style.socials}>
                        <a href="#"><BiLogoLinkedin /></a>
                        <a href="#"><LuGithub /></a>
                        <a href="#"><FaTelegramPlane /></a>
                        <a href="#"><BiLogoGmail /></a>
                        <a href="#"><SlSocialVkontakte strokeWidth={'20'} /></a>
                    </div>
                </div>
            </div>

        </section>
    );
};
