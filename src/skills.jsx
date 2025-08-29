import React, { useEffect, useState } from "react";
import styles from './skills.module.scss';
import Headline from "./headline";
import { useTranslation } from "./useTranslation";
import Divider from "./divider";
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

    const skills2 = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    const [inView, setinView] = useState(false);
    const changePosition = () => {
        const ref = document.getElementById('flow');
        const rect = ref.getBoundingClientRect();
        const viewState = rect.top < window.innerHeight * 0.4 ? true : false;
        setinView(viewState)

    }



    useEffect(() => {
        window.addEventListener('scroll', changePosition);
        return () => {
            window.removeEventListener('scroll', changePosition);
        };
    }, []);

    const methods = [
        {
            path: '',
            name: 'GIT',

        },
        {
            path: '',
            name: 'SCRUM',

        },
        {
            path: '',
            name: 'KANBAN',

        },
    ]

    return (
        <section className={styles.skillsSection} id="skills">
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('skills.headline')} />
                {/* <div className={styles.skillContainer}> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor, sunt expedita, dolorem dolorum dicta, officiis sit ut possimus sed harum praesentium.</p> */}
                <div className={styles.skillContainer}>


                    <div className={styles.skillIconsContainer}>

                        <div className={styles.textContainer}>
                            <h2>{t('skills.textHeadline')}</h2>
                            <p>{t('skills.text')}</p>
                        </div>

                    </div>










                    <div className={styles.skillIconsContainer}>





                        {/* <div className={styles.methodContainer}>
                            <h2>Softskills</h2>
                            <div className={styles.methodCards}>
                                {methods.map((method, index) => (
                                    <div key={index}>
                                        <div className={styles.methodCard}>
                                            <p>{method.name}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div> */}

                        <div className={styles.skillIcons}>
                            {skills.map((icon, index) => (
                                <div key={index}>
                                    <div className={styles.flipCard} id="skillIcon${index}">
                                        <div className={styles.flipCardInner}>
                                            <div className={styles.flipCardFront}>
                                                <img src={icon.path} alt="" />
                                            </div>
                                            <div className={styles.flipCardBack}>
                                                <span>{icon.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>




                        <div className={styles.learningProgress}>
                            <div className={styles.learningProgressContainer}>
                                <h2>{t('skills.subHeadline')}</h2>
                                <div className={styles.learningProgressInner}>
                                    {/* Erster Ring */}
                                    <div className={styles.progressContainer}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 50} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">50%</text>
                                        </svg>
                                        <span>Python</span>
                                    </div>
                                    {/* Zweiter Ring */}
                                    <div className={styles.progressContainer}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                                            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--main)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - 30} transform="rotate(-90 60 60)" />
                                            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#111827">30%</text>
                                        </svg>

                                        <span>Django</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.skillflowContainer} id="flow">
                        <h1 className={`${styles.skillTitle} ${inView ? styles.movetitle : ''}`}>Skills</h1>
                        {skills2.map((skills, index) => (
                            <div className={`${styles.skilldot} ${inView ? styles[`move${index + 1}`] : ''}`} key={index}>
                                <p>Hallo</p>
                            </div>
                        ))}
                    </div>


                </div>



                {/* <div className={styles.stackContainer}>
                     
                        <div className={styles.skillsOverview}>


                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className={styles.skill}>
                                        <img src={skill.path} alt="" />
                                        <div className={styles.beamContainer}>
                                            <div className={styles.skillInfos}>
                                                <p>{skill.name}</p>
                                                <span>{skill.exp}</span>
                                            </div>

                                            <div className={styles.skillBeam}>
                                                <div style={{ width: skill.exp }}></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}


                {/* </div> */}
            </div>
            <Divider section="skills" left="66%" />
        </section>


    )
}
export default Skills