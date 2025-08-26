import React from "react";
import styles from './footer.module.scss';
const Footer = () => {
    return (
        <section className={styles.footerSection}>
            <div className={`${styles.content} screenPadding`}>
                <p></p>
                <div className={styles.legalLinks}>
                    <a href="">Impressum</a>
                    <a href="">Datenschutz</a>
                </div>
            </div>
        </section>

    );
}

export default Footer