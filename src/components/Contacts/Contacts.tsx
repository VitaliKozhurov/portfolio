import style from './Contacts.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {Button} from '../UI/Button/Button';

export const Contacts = () => {

    const onButtonClickHandler = () => {
        alert('Привет Света!!!')
    }

    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={containerStyle.container}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contactForm}>
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

                </div>
            </div>

        </div>
    );
};
