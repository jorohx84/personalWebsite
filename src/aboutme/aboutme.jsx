import React, { useState, useEffect } from "react";
import styles from "./aboutme.module.scss";
import Headline from "../shared/headline";
import { useTranslation } from '../services/useTranslation';
import Divider from "../shared/divider";
const Aboutme = () => {
    const [inView, setinView] = useState(false);
    const [flip, setflip] = useState(null);
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


    const flipCards = () => {

        const flipCards = document.getElementsByClassName('flip');
        console.log(flipCards);
        const trigger = window.innerHeight * 0.5;
        for (let index = 0; index < flipCards.length; index++) {
            const flipCard = flipCards[index];
            const rect = flipCard.getBoundingClientRect();
            if (rect.top < trigger) {
                setflip(index);
            }

        }
    }

    useEffect(() => {
        const onScroll = () => {
            giveHghlights();
            flipCards();
        };

        window.addEventListener("scroll", onScroll);
        window.addEventListener("load", giveHghlights);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("load", giveHghlights);
        };
    }, []);


    return (
        <section className={styles.aboutmeSection} id="aboutme">
            {/* 
                    <img src="./img/0A30DE46-5422-4547-B70A-F5ACBE16F88B.png" alt="" /> */}
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('about.headline')} />
                <div className={styles.subContent}>

                    {/* <div className={styles.photo}>
                        <img src="./img/portrait1_background.webp" alt="" />
                    </div> */}
               
                    <div className={styles.textContainer}>
                        <div className={styles.aboutText}>
                            {/* <h2>{t('about.textHeadline')}</h2> */}
                            <div className={styles.textHeadline}>
                                <h1>{t('about.subline')}</h1>
                                <h2>Frontend Developer</h2>
                            </div>

                            <p>{t('about.text')}</p>
                        </div>

                        <div className={styles.factsheet}>
                            <div className={styles.fact}>
                                <p>{t('about.fact1.fieldname')}</p>
                                <span>:</span>
                                <span>{t('about.fact1.fieldvalue')}</span>
                            </div>
                            <div className={styles.fact}>
                                <p>{t('about.fact2.fieldname')}</p>
                                <span>:</span>
                                <span>{t('about.fact2.fieldvalue')}</span>
                            </div>
                            <div className={styles.fact}>
                                <p>{t('about.fact3.fieldname')}</p>
                                <span>:</span>
                                <span>{t('about.fact3.fieldvalue')}</span>
                            </div>
                            <div className={styles.fact}>
                                <p>{t('about.fact4.fieldname')}</p>
                                <span>:</span>
                                <span>{t('about.fact4.fieldvalue')}</span>
                            </div>

                        </div>



                        {window.innerWidth >= 1360 && (
                            <div className={styles.btnContainer}>
                                <div className="btnBack">
                                    <button onClick={() => window.location.href = '#contact'}>{t('about.button')}</button>
                                </div>

                            </div>
                        )}
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





                    {/* {window.innerWidth >= 700 && (
                        <div className={styles.softskills}>
                            {softskills.map((skill, index) => (
                                <div className={`${styles.flipCard} flip `} key={index} >
                                    <div className={`${styles.flipCardInner} ${(index === flip && window.innerWidth < 500) ? styles.cardflip : ''} `}>
                                        <div className={styles.flipCardFront}>
                                            <img src={softskillsImages[index]} alt={skill.title} />
                                            <h3>{skill.title}</h3>

                                        </div>
                                        <div className={styles.flipCardBack}>
                                             <img src={softskillsImages[index]} alt={skill.title} />
                                            <span>{skill.description}</span>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>


                    )} */}

                </div>


                {window.innerWidth <= 1360 && (
                    <div className={styles.btnContainer}>
                        <div className="btnBack">
                            <button onClick={() => window.location.href = '#contact'}>{t('about.button')}</button>
                        </div>

                    </div>
                )}

            </div>
            <Divider section="aboutme" />
        </section>
    );
}

export default Aboutme