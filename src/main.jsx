import React from "react";
import { Router } from "react-router-dom";
import styles from './main.module.scss';
import Hero from "./hero";
import Aboutme from "./aboutme";
import Skills from "./skills";

const Main = () => {


    return (
        <section className={`${styles.mainSection} screenPadding`}>
            <Hero />
            <Aboutme />
            <Skills />
        </section>

    );
}
export default Main