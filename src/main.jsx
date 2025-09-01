import React from "react";
import { Router } from "react-router-dom";
import styles from './main.module.scss';
import Hero from "./hero/hero";
import Aboutme from "./aboutme/aboutme";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Testimonials from "./testimonials/testimonials";
import Contact from "./contact/contact";
const Main = () => {


    return (
        <section className={`${styles.mainSection} screenPadding`}>
            <Hero />
            <Aboutme />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
        </section>

    );
}
export default Main