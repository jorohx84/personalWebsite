import styles from './header.module.scss'
import { useState } from "react";
import { useTranslation } from '../services/useTranslation';
import Regulator from './regulator';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const [burgerOpen, setburgerOpen] = useState(false);
    const { t, lang, setLang } = useTranslation("de");


    return (


        <section className={`${styles.headerSection} ${burgerOpen && window.innerWidth < 580 ? styles.whiteHeader : ''} `}>
            <div className={`${styles.content} screenPadding`}>
                <div className={styles.logo}>
                    <a href=""><img src="./logo/logo.svg" alt="" /></a>
                </div>
                <nav>
                    <HashLink smooth to="/#aboutme">{t('header.aboutme')}</HashLink>
                    <HashLink smooth to="/#skills">{t('header.skills')}</HashLink>
                    <HashLink smooth to="/#projects">{t('header.projects')}</HashLink>
                    <HashLink smooth to="/#contact">{t('header.contact')}</HashLink>

                    <Regulator />
                </nav>

                <div className={styles.respContainer}>
                    <div className={styles.respContact}>
                        <a href="tel:015141292919"><img src="./icons/phone_blue.svg" alt="" /></a>
                        <a href="mailto:kontakt@johannes-roth.de"><img src="./icons/mail_blue.svg" alt="" /></a>
                    </div>
                    <div className={styles.divider}></div>
                    <div onClick={() => setburgerOpen(!burgerOpen)} className={`${styles.burger} ${burgerOpen ? styles.transformBurger : styles.resetBurger} `}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>




            </div>


            <div className={`${styles.respMenu} ${burgerOpen ? styles.slide : ''} `} onClick={() => setburgerOpen(false)}>
                <div>
                    <HashLink smooth to="/#aboutme">{t('header.aboutme')}</HashLink>
                    <HashLink smooth to="/#skills">{t('header.skills')}</HashLink>
                    <HashLink smooth to="/#projects">{t('header.projects')}</HashLink>
                    <HashLink smooth to="/#contact">{t('header.contact')}</HashLink>
                    <Regulator />
                </div>

            </div>


        </section>
    );

}

export default Header