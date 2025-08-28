import React from "react";
import styles from './projects.module.scss';
import Headline from "./headline";
import { useTranslation } from "./useTranslation";
import Divider from "./divider";
const Projects = () => {
    const { t } = useTranslation('de');
    return (
        <section className={styles.projectsSection} id="projects">
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('projects.headline')} />
            </div>

            <Divider section="projects" left="166%" />
        </section>

    );
}

export default Projects