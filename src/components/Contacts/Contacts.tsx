import style from "./Contacts.module.css";
import containerStyle from "../../common/style/containerStyle.module.css";
import { Span } from "../Span/Span";
import { Textarea } from "../Textarea/Textarea";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={containerStyle.container}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contactForm}>
                    <Span placeholder={"Enter your name..."} />
                    <Span placeholder={"Enter your email..."} />
                    <Textarea placeholder={"Enter your message..."} />
                </div>
            </div>
        </div>
    );
};
