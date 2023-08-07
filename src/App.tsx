import React, {useState} from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {Works} from './components/Works/Works';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {MessageNotification} from "./components/MessageNotification/MessageNotification";

export type MyContextType = {
    notificationStatus: boolean;
    changeNotificationStatus: (value: boolean) => void;
}
export const Context = React.createContext<null | MyContextType>(null);

function App() {
    const [notificationStatus, setNotificationStatus] = useState<boolean>(false);
    const changeNotificationStatus = (value: boolean) => {
        setNotificationStatus(value)
    }
    return (
        <Context.Provider value={{notificationStatus, changeNotificationStatus}}>
            <div className="App">
                <Header/>
                <Main/>
                <Skills/>
                <Works/>
                <Contacts/>
                <Footer/>
                <MessageNotification/>
            </div>
        </Context.Provider>
    );
}

export default App;
