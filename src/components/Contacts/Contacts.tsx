import style from './Contacts.module.css';
import containerStyle from '../../common/style/containerStyle.module.css';
import {Input} from '../UI/Input/Input';
import {Textarea} from '../UI/Textarea/Textarea';
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
                    <form>
                        <Input type={'text'} placeholder={'Enter your name...'} />
                        <Input type={'text'} placeholder={'Enter your email...'} />
                        <Textarea placeholder={'Enter your message...'} />
                    </form>
                    <Button title={'Send'} callback={onButtonClickHandler} />
                </div>
            </div>

        </div>
    );
};
