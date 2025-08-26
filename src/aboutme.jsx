import React, { useState } from "react";
import styles from "./aboutme.module.scss";
import Headline from "./headline";

const Aboutme = () => {
    const [inView, setinView] = useState(false);
    const softskills = [
        {
            path: '/icons/analytical.svg',
            title: 'Analytisch',
            description: 'Ich erfasse komplexe Anforderungen schnell, analysiere sie präzise und übersetze sie in durchdachte und nachhaltige Lösungen.',
        },
        {
            path: '/icons/communication.svg',
            title: 'Kommunikativ',
            description: 'Ich lege großen Wert auf klare und offene Kommunikation, um gemeinsam Ideen gezielt zu entwickeln und erfolgreich umzusetzen.',
        },
        {
            path: '/icons/structure.svg',
            title: 'Strukturiert',
            description: 'Ich arbeite fokussiert und effizient. Ich behalte auch bei komplexen Projekten stets den Überblick und das Ziel im Blick',
        },
        {
            path: './icons/solution.svg',
            title: 'Lösungsorientiert',
            description: 'Ich entwickle pragmatische und nachhaltige Lösungen, die den Projekterfolg sicherstellen und langfristig Mehrwert bieten.',
        },
    ];

    const giveHghlights = () => {
        const headline = document.getElementById('aboutme');
        const headlineRect = headline.getBoundingClientRect();
        const view = window.innerHeight * 0.1 > headlineRect.top ? true : false;
        setinView(view);
        console.log(inView);

    }

    window.addEventListener('scroll', () => giveHghlights())
    return (
        <section className={styles.aboutmeSection} id="aboutme">

            <div className={`${styles.content} screenMargin`}>
                {/* <div className="headlineContainer">
                    <h1>ÜBER MICH</h1>
                    <div className="underline">
                        <div className="inline"></div>
                    </div>
                </div> */}
                <Headline label='ÜBER MICH' />
                <div className={styles.subContent}>
                    <div className={styles.textContainer}>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                        <p>  Als Frontend-Entwickler liegt meine Leidenschaft darin, Webseiten und Webanwendungen zu
                            gestalten, die nicht nur funktional, sondern auch benutzerfreundlich sind. Es ist die Freude
                            daran, mit Code zu arbeiten, Lösungen zu erschaffen und komplexe
                            Herausforderungen anzugehen, die mich in der Softwareentwicklung antreiben. Besonders die enge
                            Zusammenarbeit mit Webdesignern, um ihre Designs in eine nahtlose Benutzererfahrung zu
                            verwandeln, motiviert mich. Der kontinuierliche Lernprozess und die Möglichkeit, echten Mehrwert
                            zu schaffen, treiben mich an, immer weiter zu wachsen und neue Herausforderungen zu meistern.
                        </p>
                    </div>
                    <div className={styles.softskills} >
                        {softskills.map((skill, index) => (
                            <div key={index}>
                                <div className={`${styles.softskillsCard} ${inView ? styles.scaleCard : ''}`}>
                                    <div className={styles.softskillsCardTitle}>
                                        <img src={skill.path} alt={skill.title} />
                                        <h3>{skill.title}</h3>
                                    </div>
                                    <span>{skill.description}</span>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
        </section>
    );
}

export default Aboutme