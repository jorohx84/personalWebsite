import React from "react";
import styles from './skills.module.scss';
import Headline from "./headline";

const Skills = () => {


    return (
        <section className={styles.skillsSection} id="skills">
            <div className={`${styles.content} screenMargin`}>
                <Headline label='FÄHIGKEITEN' />
            </div>

        </section>


    )
}
export default Skills