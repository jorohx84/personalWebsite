import React from "react";
import styles from './regulator.module.scss';
import { useTranslation } from '../services/useTranslation';

const Regulator = () => {
    const { t, lang, setLang } = useTranslation("de");
    return (
        <div className={styles.transContainer}>
            <div className={styles.langBtn} onClick={(e) =>{e.stopPropagation(); setLang('de')}}>
                <span>DE</span>
            </div>
            <div className={styles.regulator}>
                <div className={lang === "en" ? styles.moveRight : ''}></div>
            </div>
            <div className={styles.langBtn} onClick={(e) =>{e.stopPropagation(); setLang('en')}}>
                <span>EN</span>
            </div>
        </div>
    );
}
export default Regulator