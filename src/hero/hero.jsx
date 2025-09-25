import React from "react";
import styles from './hero.module.scss'
import { useState } from "react";
import { useTranslation } from '../services/useTranslation';
import Divider from "../shared/divider";
const Hero = () => {
    const firstLetters = ['F', 'R', 'O', 'N', 'T', 'E', 'N', 'D'];
    const secondLetters = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];

    const { t } = useTranslation('de');

    const initState = (letters) => {
        const obj = {};
        for (let i = 0; i < letters.length; i++) {
            obj[i] = false;
        }
        return obj;
    };

    const [firstWordState, setFirstWordState] = useState(initState(firstLetters));
    const [secondWordState, setSecondWordState] = useState(initState(secondLetters));

    const toggleLetter = (index, arrayKey) => {
        if (arrayKey === "first") {
            setFirstWordState((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        } else {
            setSecondWordState((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        }
    };

    return (
        <section className={styles.heroSection} id="hero">
            <div className={styles.heroContainer}>
                <div className={styles.heroContainerInner}>


                    <div className={styles.title}>
                        <p>Johannes Roth</p>
                        <div className={styles.word}>

                            {firstLetters.map((letter, index) => (
                                <div key={index}>
                                    <span onMouseOver={() => toggleLetter(index, 'first')}>{firstWordState[index] ? letter.toLocaleLowerCase() : letter.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>

                        <div className={`${styles.word} ${styles.margin}`}>
                            {secondLetters.map((letter, index) => (
                                <div key={index}>
                                    <span onMouseOver={() => toggleLetter(index, 'second')}>{secondWordState[index] ? letter.toLocaleLowerCase() : letter.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.btnContainer}>
                            <div className="btnBack">
                                <button onClick={() => window.location.href = '#aboutme'}>{t('hero.button')}</button>
                            </div>

                        </div>

                    </div>
                    <img className={styles.portrait} src="./img/portrait2.webp" alt="portraitfoto" />
                </div>
                <div className={styles.divider}>
                    <Divider section="hero" />
                </div>
            </div>



        </section>

    );
}
export default Hero