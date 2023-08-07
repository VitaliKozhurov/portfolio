import style from './Contacts.module.scss';
import containerStyle from '../../common/style/containerStyle.module.css';
import {motion} from 'framer-motion';
import {textAnimation} from '../Skills/Skills';
import {useFormik} from "formik";
import axios from "axios";
import {Context} from "../../App";
import React, {useContext} from "react";

type InitialValueType = {
    name: string
    email: string
    message: string
}

const initialValues: InitialValueType = {
    name: '',
    email: '',
    message: ''
};

const validate = (values: InitialValueType) => {
    const errors: Partial<InitialValueType> = {};
    if (!values.name) {
        errors.name = 'This field is required';
    }
    if (!values.message) {
        errors.message = 'This field is required';
    }
    if (!values.email) {
        errors.email = 'This field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

export const Contacts = () => {
    const context = useContext(Context);

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: async (values) => {
            await axios.post('https://contact-form-backend.vercel.app/send-message', values).then((data) => context?.changeNotificationStatus(true))
        }
    })

    const isError = (touched: boolean | undefined, error: string | undefined) => {
        return touched && error
    }

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
                    <form onSubmit={formik.handleSubmit} className={style.form} noValidate>
                        <div className={style.inputBox}>
                            <input type="text" className={style.input} required {...formik.getFieldProps('name')}/>
                            <label>Your name</label>
                            {isError(formik.touched.name, formik.errors.name) &&
                                <div className={style.errorMessage}>{formik.errors.name}</div>}
                        </div>
                        <div className={style.inputBox}>
                            <input type="text" className={style.input} required {...formik.getFieldProps('email')}/>
                            <label>Your email</label>
                            {isError(formik.touched.email, formik.errors.email) &&
                                <div className={style.errorMessage}>{formik.errors.email}</div>}
                        </div>
                        <div className={style.inputBox}>
                            <textarea style={{resize: 'none'}} className={style.input}
                                      required {...formik.getFieldProps('message')}/>
                            <label>Your message</label>
                            {isError(formik.touched.message, formik.errors.message) &&
                                <div className={style.errorMessage}>{formik.errors.message}</div>}
                        </div>
                        <button type={'submit'} className={style.btn}>Send message</button>
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
