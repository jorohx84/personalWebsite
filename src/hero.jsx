import React from "react";
import styles from './hero.module.scss'
import { useState } from "react";
import { useTranslation } from './useTranslation';

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
        <section className={styles.heroSection}>
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
                        <button onClick={()=>window.location.href='#aboutme'}>{t('hero.button')}</button>
                    </div>

                </div>

            </div>
            <img className={styles.portrait} src="./img/portrait2.webp" alt="portraitfoto" />

            <div className={styles.links}>
                <div className={styles.leftLine}></div>
                <div className={styles.linkBox}>
                    {/* <div className={styles.dot}></div> */}
                    <a href="https://www.linkedin.com/in/johannes-roth-b0833334b" target="_blank"><img src="./icons/linkedin_dark.svg" alt="linkedin" /></a>
                    {/* <div className={styles.dot}></div> */}
                    <a href="https://github.com/jorohx84" target="_blank"><img src="./icons/github_dark.svg" alt="github" /></a>
                    {/* <div className={styles.dot}></div> */}
                    <a href="mailto:kontakt@johannes-roth.de"><img src="./icons/mail_dark.svg" alt="mail" /></a>
                    {/* <div className={styles.dot}></div> */}
                </div>
                <div className={styles.rightLine}></div>
            </div>
        </section>

    );
}
export default Hero