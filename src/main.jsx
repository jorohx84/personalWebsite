import React from "react";
import { Router } from "react-router-dom";
import styles from './main.module.scss';
import Hero from "./hero";

const Main = () => {
    return (
        <section className={`${styles.mainSection} screenPadding`}>
            <Hero />
        </section>

    );
}
export default Main