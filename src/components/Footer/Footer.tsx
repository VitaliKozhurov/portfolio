import React from 'react';
import style from './Footer.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {BiLogoGmail, BiLogoLinkedin} from 'react-icons/bi';
import {LuGithub} from 'react-icons/lu';
import {FaTelegramPlane} from 'react-icons/fa';
import {SlSocialVkontakte} from 'react-icons/sl';
import {FaPhone} from 'react-icons/fa6';
import {motion} from 'framer-motion';
import {textAnimation} from '../Skills/Skills';


export const Footer = () => {
    return (
        <>
            <motion.div
                className={style.footer}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{amount: 0.2, once: true}}
            >
                <div className={containerStyle.container + ' ' + style.footerBody}>
                    <h3 className={style.name}>Vitali Kazhurou</h3>
                    <ul className={style.socials}>
                        <motion.li
                            custom={1}
                            variants={textAnimation} className={style.item}>
                            <a href="#"><BiLogoLinkedin /></a>
                        </motion.li>
                        <motion.li
                            custom={2}
                            variants={textAnimation}
                            className={style.item}>
                            <a href="#"><LuGithub /></a>
                        </motion.li>
                        <motion.li
                            custom={3}
                            variants={textAnimation}
                            className={style.item}>
                            <a href="https://telegram.me/vitalik_kazhurou"><FaTelegramPlane /></a>
                        </motion.li>
                        <motion.li
                            custom={4}
                            variants={textAnimation}
                            className={style.item}>
                            <a href="#"><BiLogoGmail /></a>
                        </motion.li>
                        <motion.li
                            custom={5}
                            variants={textAnimation}
                            className={style.item}
                        >
                            <a href="#"><SlSocialVkontakte strokeWidth={'20'} /></a>
                        </motion.li>
                        <motion.li
                            custom={6}
                            variants={textAnimation}
                            className={style.item}>
                            <a href={'#'}><FaPhone /></a>
                        </motion.li>
                    </ul>
                    <p>&copy; {`${(new Date()).getFullYear()} All rights reserved`}</p>
                </div>
            </motion.div>
        </>
    )
};
{/*<div className={style.socials}>*/
}