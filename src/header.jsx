import styles from './header.module.scss'
import { useState } from "react";
import { useTranslation } from './useTranslation';
import Regulator from './regulator';
const Header = () => {
    const [burgerOpen, setburgerOpen] = useState(false);
    const { t, lang, setLang } = useTranslation("de");


    return (


        <section className={styles.headerSection}>
            <div className={`${styles.content} screenPadding`}>
                <div className={styles.logo}>
                    <a href=""><img src="./logo/logo.svg" alt="" /></a>
                </div>
                <nav>
                    <a href="#aboutme">{t('header.aboutme')}</a>
                    <a href="#skills">{t('header.skills')}</a>
                    <a href="">{t('header.projects')}</a>
                    <a href="">{t('header.contact')}</a>
                    <Regulator />
                </nav>


                <div onClick={() => setburgerOpen(!burgerOpen)} className={`${styles.burger} ${burgerOpen ? styles.transformBurger : styles.resetBurger}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>



            </div>


            <div className={`${styles.respMenu} ${burgerOpen ? styles.slide : ''}`} onClick={() => setburgerOpen(false)}>
                <div>
                    <a href="#aboutme">{t('header.aboutme')}</a>
                    <a href="#skills">{t('header.skills')}</a>
                    <a href="">{t('header.projects')}</a>
                    <a href="">{t('header.contact')}</a>
                    <Regulator />
                </div>

            </div>


        </section>
    );

}

export default Header