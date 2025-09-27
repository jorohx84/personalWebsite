import React, { useEffect, useState } from "react";
import styles from './projects.module.scss';
import Headline from "../shared/headline";
import { useTranslation } from "../services/useTranslation";
import Divider from "../shared/divider";
const Projects = () => {
    const { t } = useTranslation('de');



    const projects = [
        {
            title: "JOIN Business",
            imagePath: "img/join.webp",
            stack: [
                "./icons/skills/html.svg",
                "./icons/skills/css.svg",
                "./icons/skills/javascript.svg",
                "./icons/skills/firebase.svg",
            ],
            description: t('projects.joinText'),
            link: "https://www.johannes-roth.de/join",
            duration: "3",
            show: true,
        },
        {
            title: "DABubble",
            imagePath: "/img/dabubble.webp",
            stack: [
                "./icons/skills/html.svg",
                "./icons/skills/css.svg",
                "./icons/skills/typescript.svg",
                "./icons/skills/angular.svg",
                "./icons/skills/firebase.svg",
            ],
            description: t('projects.dabubbleText'),

            link: "https://www.johannes-roth.de/dabubble",
            duration: "5",
            show: true,
        },
        {
            title: "Todo App",
            imagePath: "/img/todolist.webp",
            stack: [
                "./icons/skills/html.svg",
                "./icons/skills/css.svg",
                "./icons/skills/typescript.svg",
                "./icons/skills/react.svg",
            ],
            description: t('projects.todoappText'),

            link: "https://www.johannes-roth.de/todoapp",
            duration: "0.5",
            show: true,
        },
        {
            title: "Bewerbungs Manager",
            imagePath: "img/bewerbung_titelphoto.webp",
            stack: [
                "./icons/skills/html.svg",
                "./icons/skills/css.svg",
                "./icons/skills/typescript.svg",
                "./icons/skills/react.svg",
                "./icons/skills/firebase.svg",
            ],
            description: t('projects.applicationsText'),

            link: "https://www.johannes-roth.de/applications",
            duration: "2",
            show: true,
        },
        {
            title: 'Personal Website',
            imagePath: 'img/natalie.webp',
            stack: [
                "./icons/skills/html.svg",
                "./icons/skills/css.svg",
                "./icons/skills/javascript.svg",
            ],
            description: t('projects.personalWebsiteText'),
            link: 'https://www.natalie-schlindwein.com',
            duration: '2',
            show: true,
        },
       
        // {
        //     title: "Personal Website",
        //     imagePath: "img/johannes.webp",
        //     stack: [
        //         "icons/skills/html.svg",
        //         "icons/skills/css.svg",
        //         "icons/skills/typescript.svg",
        //         "icons/skills/angular.svg",
        //     ],
        //     description: t('projects.personalWebsiteText'),

        //     link: "https://www.johannes-roth.de",
        //     duration: "2 Wochen",
        //     show: true,
        // },

        // {},
        // {},
        // {},
        // {},
        // {},
        // {},

    ];

    const [projectIndex, setProjectIndex] = useState(0);
    const [currentProject, setcurrentProject] = useState(projects[0]);
    const [isOpen, setisOpen] = useState(false);

    // useEffect(() => {
    //     openProjectInfos(projectIndex);

    // }, []);

    const openProjectInfos = (index) => {
        setProjectIndex(index);
        setisOpen(true);
        console.log(isOpen);

        const projectInfo = projects[index];
        setcurrentProject(projectInfo)
    }


    const slideProject = (index, direction, event) => {
        const step = direction === "forward" ? 1 : -1;
        const currentIndex = (index + step + projects.length) % projects.length;
        console.log(currentIndex);
        openProjectInfos(currentIndex);
        event.stopPropagation();
    }





    return (
        <section className={styles.projectsSection} id="projects">
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('projects.headline')} />




                <div className={styles.projectContainer}>
                    {/* <div className={styles.projectsBarContainer}> */}
                        <div className={styles.projectsCards}>
                            {projects.map((project, index) => (
                                <div onClick={() => openProjectInfos(index)} className={styles.projectCard} key={index}>
                                    <img src={project.imagePath} alt="" />
                                </div>
                            ))}
                        </div>
                    {/* </div> */}
                    {/* <div className={styles.divider}></div> */}
                    {isOpen && (
                        <div className={`${styles.projectDetails}`} onClick={() => setisOpen(false)}>

                            <img onClick={() => setisOpen(false)} className={styles.closeBtn} src="./icons/close.svg" alt="" />



                            <div className={styles.projectsInfoContainer} >
                                <img src={currentProject.imagePath} alt="" />
                                <h3>{currentProject.title}</h3>
                                <p>{currentProject.description}</p>
                                <div className={styles.duration}>
                                    <p>{t('projects.duration')}</p>
                                    <p>{currentProject.duration}</p>
                                    <p>{t('projects.week')}</p>
                                </div>
                                <div className={styles.stack}>
                                    {currentProject.stack.map((stackImage, index) => (
                                        <div className={styles.stackImage} key={index}>
                                            <img src={stackImage} alt="" />
                                        </div>

                                    ))}
                                </div>

                                <div className={styles.projectsBtns}>

                                    <div className="btnBack">
                                        <button onClick={() => window.open(currentProject.link, "_blank")} >Live Test</button>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.divider}>
                                <div className={styles.leftLine}></div>
                                <div className={styles.navigation}>
                                    <div className={styles.slideBtn} onClick={(event) => slideProject(projectIndex, 'backward', event)}><img src="./icons/left_arrow.svg" alt="" /></div>
                                    <div className={styles.slideBtn} onClick={(event) => slideProject(projectIndex, 'forward', event)}><img src="./icons/right_arrow.svg" alt="" /></div>
                                </div>
                                <div className={styles.rightLine}></div>
                            </div>

                        </div>
                    )}
                </div>



            </div>
            {/* <Divider section="projects" left="166%" /> */}
            <Divider />
        </section>

    );
}

export default Projects