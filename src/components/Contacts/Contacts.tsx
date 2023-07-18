import style from './Contacts.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {motion} from 'framer-motion';
import {textAnimation} from '../Skills/Skills';

export const Contacts = () => {
    return (
        <motion.section
            id={'contacts'}
            className={style.contactsBlock}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{amount: 0.2, once: true}}
        >
            <div className={containerStyle.container}>
                <motion.h2
                    className={style.title}
                    custom={1}
                    variants={textAnimation}
                >
                    Contacts
                </motion.h2>
                <motion.div
                    className={style.contactForm}
                    custom={2}
                    variants={textAnimation}
                >
                    <span className={style.backGround}></span>
                    <form className={style.form}>
                        <div className={style.inputBox}>
                            <input type="text" className={style.input} required />
                            <label>Your name</label>
                        </div>
                        <div className={style.inputBox}>
                            <input type="text" className={style.input} required />
                            <label>Your email</label>
                        </div>
                        <div className={style.inputBox}>
                            <textarea style={{resize: 'none'}} className={style.input} required />
                            <label>Your message</label>
                        </div>
                        <button className={style.btn}>Send message</button>
                    </form>
                    <div className={style.info}>
                        <h3 className={style.titleInfo}>
                            Interested in working with me?
                        </h3>
                        <p className={style.hireMe}>Hire me!</p>
                    </div>

                </motion.div>
            </div>
        </motion.section>
    );
};
