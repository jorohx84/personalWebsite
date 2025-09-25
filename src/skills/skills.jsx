import React, { useState, useEffect } from "react";
import styles from './skills.module.scss';
import { useTranslation } from "../services/useTranslation";
import Headline from "../shared/headline";

import Divider from "../shared/divider";

const Skills = () => {
    const { t } = useTranslation('de');
    const skills = t('skills.skillcards');
    const skillImages = [
        './icons/projects.svg',
        './icons/requirement.svg',
        './icons/stakeholder.svg',
        './icons/reporting.svg',
        './icons/process.svg',
        './icons/teamwork.svg',
    ];
    const [inView, setinView] = useState(false);
    const giveCardsHighlight = () => {
        const ref = document.getElementById('skillcontent')
        const refRect = ref.getBoundingClientRect();
        const trigger = window.innerHeight * 0.5
        const view = trigger > refRect.top ? true : false;
        setinView(view);
    }

    useEffect(() => {
        const onScroll = () => {
            giveCardsHighlight();
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);

        };
    }, []);

    return (
        <div className={styles.skillSection} id="skills">
            <div className={`${styles.content} screenMargin`} id="skillcontent">
                {/* <h1>{t('skills.headline')}</h1> */}
                <Headline label={t('skills.headline')} />
                <div className={styles.skillContainer}>
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className={`${styles.skillCard} ${inView ? styles.scaleCard : ''}`}>
                                <img src={skillImages[index]} alt="" />
                                <h3>{skill.skillname}</h3>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Divider />

        </div>

    )
}

export default Skills