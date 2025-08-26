import React from "react";
import styles from './header.module.scss'

const Header = () => {
    return (
         

        <section className={styles.headerSection}>
            <div className={`${styles.content} screenPadding`}>
                <div className={styles.logo}>
                    <img src="./logo/logo.svg" alt="" />
                </div>
                <nav>
                    <a href="">Home</a>
                    <a href="">Über mich</a>
                    <a href="">Fähigkeiten</a>
                    <a href="">Projekte</a>
                    <a href="">Kontakt</a>
                </nav>
            </div>
        </section>
    );

}

export default Header