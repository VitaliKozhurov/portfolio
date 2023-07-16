import React from 'react';
import style from './Footer.module.css';
import containerStyle from '../../common/style/containerStyle.module.css';
import vk from '../../common/image/vk.svg';
import telegram from '../../common/image/telegram.svg';
import linkedin from '../../common/image/linkedin.svg';


export const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div className={containerStyle.container + ' ' + style.footerBody}>
                    <h3 className={style.name}>Vitali Kazhurou</h3>
                    <ul className={style.list}>
                        <li className={style.item}><a href="#"><img src={vk} alt="Social" /></a></li>
                        <li className={style.item}><a href="#"><img src={telegram} alt="Social" /></a></li>
                        <li className={style.item}><a href="#"><img src={linkedin} alt="Social" /></a></li>
                        {/*<div className={style.socials}>*/}
                        {/*    <a href="#"><BiLogoLinkedin /></a>*/}
                        {/*    <a href="#"><LuGithub /></a>*/}
                        {/*    <a href="https://telegram.me/vitalik_kazhurou"><FaTelegramPlane /></a>*/}
                        {/*    <a href="#"><BiLogoGmail /></a>*/}
                        {/*    <a href="#"><SlSocialVkontakte strokeWidth={'20'} /></a>*/}
                        {/*</div>*/}
                    </ul>
                    <p>&copy; {`${(new Date).getFullYear()} All rights reserved`}</p>
                </div>
            </div>
        </>
    )
};