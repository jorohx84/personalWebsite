import React from "react";
import styles from './footer.module.scss';
import Linkbox from "./linkbox";
import Divider from "./divider";
import { useTranslation } from "../services/useTranslation";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    const { t } = useTranslation('de');
    return (
        <section className={styles.footerSection}>
            <Divider section='footer' left='100%' right='5%' />
            <div className={`${styles.content} screenPadding`}>
                <div className={styles.personalData}>
                    <div className={styles.adressContainer}>
                        <p>© 2025 Johannes Roth</p>
                        <p>Frontend Developer</p>
                        <div className={styles.adress}>
                            <p>Max-Seither-Ring 32</p>
                            <span>-</span>
                            <p>76863 </p>
                            <span>-</span>
                            <p>Herxheim</p>
                        </div>


                    </div>
                    <div className={styles.linkbox}>
                        <Linkbox />
                    </div>

                </div>
                <div className={styles.navigations}>
                    <div className={styles.legalLinks}>
                        <HashLink smooth to="/imprint">{t('footer.legal')}</HashLink>
                        <HashLink smooth to="/privacy">{t('footer.privacy')}</HashLink>
                    </div>
                    <div className={styles.sitemap}>
                        <HashLink smooth to="/#aboutme">{t('header.aboutme')}</HashLink>
                        <HashLink smooth to="/#skills">{t('header.skills')}</HashLink>
                        <HashLink smooth to="/#projects">{t('header.projects')}</HashLink>
                        <HashLink smooth to="/#contact">{t('header.contact')}</HashLink>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Footer