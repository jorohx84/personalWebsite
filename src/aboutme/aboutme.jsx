import React, { useState, useEffect } from "react";
import styles from "./aboutme.module.scss";
import Headline from "../shared/headline";
import { useTranslation } from '../services/useTranslation';
import Divider from "../shared/divider";
const Aboutme = () => {
    const [inView, setinView] = useState(false);
    const { t } = useTranslation('de');
    const softskills = t('about.softskills');
    const softskillsImages = [
        '/icons/analytical.svg',
        '/icons/communication.svg',
        '/icons/structure.svg',
        '/icons/solution.svg',
    ];


    const giveHghlights = () => {
        const headline = document.getElementById('aboutme');
        const headlineRect = headline.getBoundingClientRect();
        const view = window.innerHeight * 0.1 > headlineRect.top ? true : false;
        setinView(view);

    }

    useEffect(() => {
        window.addEventListener("scroll", giveHghlights);
        window.addEventListener("load", giveHghlights);

        return () => {
            window.removeEventListener("scroll", giveHghlights);
            window.removeEventListener("load", giveHghlights);
        };
    }, []);


    return (
        <section className={styles.aboutmeSection} id="aboutme">

            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('about.headline')} />
                <div className={styles.subContent}>
                    <div className={styles.textContainer}>
                        <div className={styles.aboutText}>
                            <h2>{t('about.textHeadline')}</h2>
                            <p>{t('about.text')}</p>
                        </div>

                        {/* <div className={styles.btnContainer}>
                            <div className="btnBack">
                                <button onClick={() => window.location.href = '#contact'}>{t('about.button')}</button>
                            </div>

                        </div> */}
                    </div>
                    <div className={styles.softskills} >
                        {softskills.map((skill, index) => (
                            <div key={index}>
                                <div className={`${styles.softskillsCard} ${inView ? styles.scaleCard : ''}`}>
                                    <div className={styles.softskillsCardTitle}>
                                        <img src={softskillsImages[index]} alt={skill.title} />
                                        <h3>{skill.title}</h3>
                                    </div>
                                    <span>{skill.description}</span>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

                <div className={styles.btnContainer}>
                    <div className="btnBack">
                        <button onClick={() => window.location.href = '#contact'}>{t('about.button')}</button>
                    </div>

                </div>
            </div>
            <Divider />
        </section>
    );
}

export default Aboutme