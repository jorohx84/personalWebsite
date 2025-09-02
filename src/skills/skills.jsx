import React, { useEffect, useState } from "react";
import styles from './skills.module.scss';
import Headline from "../shared/headline";
import { useTranslation } from "../services/useTranslation";
import Divider from "../shared/divider";
const Skills = () => {
    const { t } = useTranslation('de');

    const skills = [
        {
            path: "./icons/skills/html.svg",
            name: "HTML 5",
            description: "Sauberes, semantisches HTML als stabiles Fundament für jede moderne Website.",
            exp: '100%'
        },
        {
            path: "./icons/skills/css.svg",
            name: "CSS 3",
            description: "Responsives, pixelgenaues Styling – von Flexbox bis Animationen.",
            exp: '95%'
        },
        {
            path: "./icons/skills/javascript.svg",
            name: "JavaScript",
            description: "Interaktive Web-Erlebnisse durch performanten und wartbaren JavaScript-Code.",
            exp: '90%'
        },
        {
            path: "./icons/skills/angular.svg",
            name: "Angular",
            description: "Strukturierte Webanwendungen mit Angular – skalierbar, robust und zukunftssicher.",
            exp: '80%'
        },
        {
            path: "./icons/skills/react.svg",
            name: "React",
            description: "Strukturierte Webanwendungen mit Angular – skalierbar, robust und zukunftssicher.",
            exp: '70%'
        },
        {
            path: "./icons/skills/typescript.svg",
            name: "TypeScript",
            description: "Typsicherheit und saubere Architektur dank TypeScript – für langfristige Codequalität.",
            exp: '85%'
        },
        {
            path: "./icons/skills/firebase.svg",
            name: "Rest-API",
            description: "Echtzeitdaten, Authentifizierung und Hosting – direkt aus der Cloud mit Firebase.",
            exp: '40%'
        },
        // {
        //   path: "./icons/php.svg",
        //   name: "PHP",
        //   description:
        //     "Solide Backend-Entwicklung mit PHP – von APIs bis zu CMS-Anbindungen.",
        // },
        // {
        //   path: "icons/mysql.svg",
        //   name: "mySQL",
        //   description:
        //     "Zuverlässige Datenbanklösungen mit mySQL – sicher, performant, skalierbar.",
        // },
        {
            path: "./icons/skills/figma.svg",
            name: "Figma",
            description: "Nahtlose Zusammenarbeit mit Designern durch Figma – vom Konzept bis zum finalen Pixel.",
            exp: '80%'
        },
        // {
        //     path: 'icons/materialdesign.svg',
        //     name: 'Material Design',
        //     description: 'Konsistente UI-Erlebnisse mit Googles Designsystem – modern, zugänglich und intuitiv umgesetzt.'
        // },
    ];

    const methodicons = [
        './icons/git.svg',
        './icons/kanban.svg',
        './icons/scrum.svg',
    ]


    const [inView, setinView] = useState(false);
    const changePosition = () => {
        const ref = document.getElementById('flow');
        const rect = ref.getBoundingClientRect();
        const trigger = window.innerWidth < 750 ? 0.6 : 0.3;
        const windowHeight = window.innerHeight * trigger;
        const viewState = rect.top < windowHeight ? true : false;
        console.log(windowHeight);
        console.log(rect.top);

        setinView(viewState)

    }

    useEffect(() => {
        window.addEventListener('scroll', changePosition);
        return () => {
            window.removeEventListener('scroll', changePosition);
        };
    }, []);

    const methods = t('skills.methods');

    return (
        <section className={styles.skillsSection} id="skills">
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('skills.headline')} />
                <div className={styles.skillContainer}>



                    <div className={styles.skillIconsContainer}>
                        <div className={styles.textContainer}>
                            <h2>{t('skills.textHeadline')}</h2>
                            <p>{t('skills.frontendText')}</p>


                        </div>

                        <div className={styles.skillflowContainer} id="flow">



                            {skills.map((skill, index) => (
                                <div className={`${styles.flipCard} ${inView ? styles[`move${index + 1}`] : ''}`} key={index}>
                                    <div className={styles.flipCardInner}>
                                        <div className={styles.flipCardFront}>
                                            <img src={skill.path} alt="" />
                                        </div>
                                        <div className={styles.flipCardBack}>
                                            <span>{skill.name}</span>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>






                    <div className={`${styles.skillIconsContainer} ${styles.reverse}`}>
                        <div className={styles.learningProgress}>
                            <div className={styles.learningProgressContainer}>

                                <div className={styles.learningProgressInner}>

                                    <div className={styles.progressContainer}>
                                          <img src="./icons/python.svg" alt="" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 50} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">50%</text>
                                        </svg>
                                        <span>Python</span>
                                    </div>

                                    <div className={styles.progressContainer}>
                                           <img src="./icons/django.svg" alt="" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 30} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">30%</text>
                                        </svg>

                                        <span>Django</span>
                                    </div>
                                    <div className={styles.progressContainer}>
                                        <img src="./icons/database.svg" alt="" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 15} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">15%</text>
                                        </svg>

                                        <span>SQLite</span>
                                    </div>
                                    <div className={styles.progressContainer}>
                                         <img src="./icons/docker.svg" alt="" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 5} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">5%</text>
                                        </svg>

                                        <span>Docker</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={styles.textContainer}>
                            <h2>{t('skills.subHeadline')}</h2>
                            <p>{t('skills.backendText')}</p>


                        </div>

                    </div>
                    <div className={styles.skillIconsContainer}>

                        <div className={styles.methodsContainer}>
                            <h1>{t('skills.methodsHeadline')}</h1>
                            <div className={styles.methodsContent}>
                                {methods.map((method, index) => (
                                    <div key={index}>
                                        <div className={styles.methodCard}>
                                            <img src={methodicons[index]} alt="" />
                                            <h3>{method.name}</h3>
                                            <p>{method.text}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <Divider />
        </section>


    )
}
export default Skills