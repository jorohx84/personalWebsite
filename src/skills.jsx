import React from "react";
import styles from './skills.module.scss';
import Headline from "./headline";
import { useTranslation } from "./useTranslation";

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

    return (
        <section className={styles.skillsSection} id="skills">
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('skills.headline')} />
                <div className={styles.skillContainer}>
                    <div className={styles.skillIconsContainer}>

                        <div className={styles.textContainer}>
                            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. at.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis natus aliquid nihil accusantium in iusto maxime, magni illo recusandae quaerat eum dolores quas qui quasi repellat velit. Repellendus, quo!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, optio ipsam quam vel commodi ad facilis animi quasi quod accusantium aliquid placeat odit mollitia eos quia voluptate ea ex saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quidem eveniet delectus accusamus vero minima consectetur ipsa optio, nobis quos repellendus id atque, officia obcaecati labore aliquid exercitationem nam dolorem!</p>
                        </div>

                        {/* <div className={styles.skillIcons}>
                            {skills.map((icon, index) => (
                                <div key={index}>
                                    <div class={styles.flipCard} id="skillIcon${index}">
                                        <div class={styles.flipCardInner}>
                                            <div class={styles.flipCardFront}>
                                                <img src={icon.path} alt="" />
                                            </div>
                                            <div class={styles.flipCardBack}>
                                                <span>{icon.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div> */}



                    </div>

                    <div className={styles.stackContainer}>
                        {/* <div className={styles.stackHeadline}>
                            <div></div>
                            <h3>Techstack</h3>
                            <div></div>
                        </div> */}
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
                    </div>
                </div>
            </div>

        </section>


    )
}
export default Skills