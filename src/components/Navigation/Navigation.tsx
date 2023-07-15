import style from './Navigate.module.scss';
import {Link} from 'react-scroll';
import {FC, ReactNode, useState} from 'react';
import {BiHomeAlt} from 'react-icons/bi';
import {BsBriefcase, BsChatSquareText, BsClipboardData} from 'react-icons/bs';

export const Navigation = () => {
    const [isActiveLink, setIsActiveLink] = useState('');
    const setActiveLink = (linkTitle: string) => {
        setIsActiveLink(linkTitle)
    }
    return (
        <nav>
            <ul className={style.listBody}>
                < LinkToSection
                    active={isActiveLink}
                    title={'Home'}
                    icon={<BiHomeAlt />}
                    callback={setActiveLink}
                />
                < LinkToSection
                    active={isActiveLink}
                    title={'Skills'}
                    icon={<BsClipboardData />}
                    callback={setActiveLink}
                />
                < LinkToSection
                    active={isActiveLink}
                    title={'My works'}
                    icon={<BsBriefcase />}
                    callback={setActiveLink}
                />
                < LinkToSection
                    active={isActiveLink}
                    title={'Contacts'}
                    icon={<BsChatSquareText />}
                    callback={setActiveLink}
                />
            </ul>
        </nav>
    )
}

type LinkToSectionPropsType = {
    active: string
    title: string
    icon: ReactNode
    callback: (linkTitle: string) => void
}
const LinkToSection: FC<LinkToSectionPropsType> = ({active, title, icon, callback}) => {
    const linkStyle = active === title ? style.link + ' ' + style.active : style.link;
    const onClickHandler = () => {
        callback(title)
    }

    return (
        <li>
            <Link smooth={true} className={linkStyle} to={title.toLowerCase()} onClick={onClickHandler}>
                {icon}
                <span>{title}</span>
            </Link>
        </li>
    )
}