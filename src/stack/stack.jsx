import React, { useEffect, useState } from "react";
import styles from './stack.module.scss';
import Headline from "../shared/headline";
import { useTranslation } from "../services/useTranslation";
import Divider from "../shared/divider";

const Stack = () => {
    const { t } = useTranslation('de');

    const stack = [
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
        './icons/git_blue.svg',
        './icons/kanban_blue.svg',
        './icons/scrum_blue.svg',
    ]


    const [inView, setinView] = useState(false);
    const changePosition = () => {
        const ref = document.getElementById('flow');
        const rect = ref.getBoundingClientRect();
        const trigger = window.innerWidth < 750 ? 0.6 : 0.4;
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

    const methods = t('stack.methods');

    return (
        <section className={styles.stackSection} id="stack">
            <div className={`${styles.content} screenMargin`}>

                <div className={styles.skillContainer}>

                    <div className={styles.skillIconsContainer}>
                        <div className={styles.textContainer}>
                            {/* <h2>{t('skills.textHeadline')}</h2> */}
                            {/* <Headline label={t('skills.headline')} /> */}
                            <h1>{t('stack.headline')}</h1>
                            <p>{t('stack.frontendText')}</p>


                        </div>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillflowContainer} id="flow">
                                {stack.map((stack, index) => (
                                    <div className={`${styles.flipCard} ${inView ? styles[`move${index + 1}`] : ''}`} key={index}>
                                        <div className={styles.flipCardInner}>
                                            <div className={styles.flipCardFront}>
                                                <img src={stack.path} alt="" />
                                            </div>
                                            <div className={styles.flipCardBack}>
                                                <span>{stack.name}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>



                    {/* <div className={styles.backendSkillsContainer}>
                       
                        <div className={styles.learningProgress}>
                            <div className={styles.learningProgressContainer}>

                                <div className={styles.learningProgressInner}>

                                    <div className={styles.progressContainer}>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 50} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">50%</text>
                                        </svg>

                                        <div className={styles.skillName}>
                                            <img src="./icons/python.svg" alt="" />
                                            <span>Python</span>
                                        </div>
                                    </div>

                                    <div className={styles.progressContainer}>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 30} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">30%</text>
                                        </svg>

                                      
                                        <div className={styles.skillName}>
                                            <img src="./icons/django.svg" alt="" />
                                            <span>Django</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                         <div className={styles.textContainer}>
                            <h2>{t('skills.subHeadline')}</h2>
                          
                            <p>{t('skills.backendText')}</p>
                        </div>
                    </div> */}



                    {/* <div className={styles.methodsContainer}>
                        <h1>{t('skills.methodsHeadline')}</h1>
                        <div className={styles.methodsContent}>
                            {methods.map((method, index) => (
                                <div key={index}>
                                    <div className={styles.methodCard}>
                                        <img src={methodicons[index]} alt="" />
                                        <h2>{method.name}</h2>
                                        <p>{method.text}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div> */}



                </div>

            </div>
            <Divider section="stack" />
        </section>


    )
}
export default Stack