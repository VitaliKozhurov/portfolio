import React, {useContext, useEffect} from 'react';
import {Context} from "../../App";
import style from './MessageNotification.module.scss';

export const MessageNotification = () => {
    const context = useContext(Context);
    useEffect(() => {
        if(!context?.notificationStatus){
            return
        }
        const timerId = window.setTimeout(() => {
            context.changeNotificationStatus(false);
        }, 4000)

        return () => {
            clearInterval(timerId)
        }
    }, [context?.notificationStatus])

    if(!context?.notificationStatus){
        return null
    }
    return (
        <>
            <h2 className={style.message}>Your message has been sent</h2>
        </>
    );
}