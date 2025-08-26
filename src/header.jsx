import React, { useEffect } from "react";
import styles from './header.module.scss'
import { useState } from "react";


const Header = () => {
    const [burgerOpen, setburgerOpen] = useState(false);



    return (


        <section className={styles.headerSection}>
            <div className={`${styles.content} screenPadding`}>
                <div className={styles.logo}>
                    <a href=""><img src="./logo/logo.svg" alt="" /></a>
                </div>
                <nav>
                    <a href="">Home</a>
                    <a href="#aboutme">Über mich</a>
                    <a href="#skills">Fähigkeiten</a>
                    <a href="">Projekte</a>
                    <a href="">Kontakt</a>
                </nav>


                <div onClick={() => setburgerOpen(!burgerOpen)} className={`${styles.burger} ${burgerOpen ? styles.transformBurger : styles.resetBurger}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>



            </div>


            <div className={`${styles.respMenu} ${burgerOpen ? styles.slide : ''}`} onClick={() => setburgerOpen(false)}>
                <div>
                    <a href="">Home</a>
                    <a href="#aboutme">Über mich</a>
                    <a href="#skills">Fähigkeiten</a>
                    <a href="">Projekte</a>
                    <a href="">Kontakt</a>
                </div>

            </div>


        </section>
    );

}

export default Header