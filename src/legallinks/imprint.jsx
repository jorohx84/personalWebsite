import React, { useEffect } from "react";
import styles from './legal.module.scss';
import { useTranslation } from "../services/useTranslation";
import Headline from "../shared/headline";

const Imprint = () => {
    const { t } = useTranslation('de');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className={`${styles.legalSection} screenPadding`}>
            <div className={styles.content}>
                <Headline label={t('imprint.h1')} />
                <div className={styles.textContainer}>

                    <div>
                        <h2>{t('imprint.responsible.h2')}</h2>
                        <p>{t('imprint.responsible.name')}</p>
                        <p>{t('imprint.responsible.address')}</p>

                        <a href='mailto:kontakt@johannes-roth.de'>
                            <img src="./icons/mail_blue.svg" alt="" />
                            <span>kontakt@johannes-roth.de</span>
                        </a>
                        <a href='tel:+4915141292919'>
                            <img src="./icons/phone_blue.svg" alt="" />
                            <span>+49 151 41292919</span></a>
                    </div>

                    <div>
                        <h2>{t('imprint.contentLiability.h2')}</h2>
                        <p>{t('imprint.contentLiability.responsibility')}</p>
                        <p>{t('imprint.contentLiability.noMonitoringObligation')}</p>
                        <p>{t('imprint.contentLiability.removalObligation')}</p>
                        <p>{t('imprint.contentLiability.liabilityStart')}</p>
                    </div>

                    <div>
                        <h2>{t('imprint.linksLiability.h2')}</h2>
                        <p>{t('imprint.linksLiability.externalLinks')}</p>
                        <p>{t('imprint.linksLiability.responsibilityThirdParties')}</p>
                        <p>{t('imprint.linksLiability.monitoringLinks')}</p>
                        <p>{t('imprint.linksLiability.removalLinks')}</p>
                    </div>

                    <div>
                        <h2>{t('imprint.copyright.h2')}</h2>
                        <p>{t('imprint.copyright.ownership')}</p>
                        <p>{t('imprint.copyright.usageRestriction')}</p>
                        <p>{t('imprint.copyright.personalUse')}</p>
                        <p>{t('imprint.copyright.thirdPartyContent')}</p>
                        <p>{t('imprint.copyright.infringementNotice')}</p>
                    </div>


                </div>
            </div>
        </section>
    );
}
export default Imprint