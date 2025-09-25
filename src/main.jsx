import React from "react";
import { Router } from "react-router-dom";
import styles from './main.module.scss';
import Hero from "./hero/hero";
import Aboutme from "./aboutme/aboutme";
import Projects from "./projects/projects";
import Testimonials from "./testimonials/testimonials";
import Contact from "./contact/contact";
import Sidebar from "./sidebar";
import Stack from "./stack/stack";
import Skills from "./skills/skills";
const Main = () => {


    return (
        <section className={`${styles.mainSection} screenPadding`}>
            <Hero />
            <Aboutme />
            <Stack />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
            {/* <Sidebar /> */}
        </section>

    );
}
export default Main