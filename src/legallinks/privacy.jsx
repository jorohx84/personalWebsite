import React, { useEffect } from "react";
import styles from './legal.module.scss';
import { useTranslation } from "../services/useTranslation";
import Headline from "../shared/headline";

const Privacy = () => {
    const { t } = useTranslation('de');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className={`${styles.legalSection} screenPadding`}>
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('privacy.h1')} />
                <div className={styles.textContainer}>


                    <div>
                        <h2>{t('privacy.general.h2')}</h2>
                        <p>{t('privacy.general.intro')}</p>
                        <p>{t('privacy.general.scope')}</p>
                    </div>

                    <div>
                        <h2>{t('privacy.dataCollection.h2')}</h2>
                        <p>{t('privacy.dataCollection.automaticData')}</p>
                        <p>{t('privacy.dataCollection.contactData')}</p>
                    </div>

                    <div>
                        <h2>{t('privacy.usage.h2')}</h2>
                        <p>{t('privacy.usage.purpose')}</p>
                        <p>{t('privacy.usage.noProfiling')}</p>
                    </div>

                    <div>
                        <h2>{t('privacy.rights.h2')}</h2>
                        <p>{t('privacy.rights.information')}</p>
                        <p>{t('privacy.rights.correction')}</p>
                        <p>{t('privacy.rights.deletion')}</p>
                        <p>{t('privacy.rights.objection')}</p>
                    </div>

                    <div>
                        <h2>{t('privacy.contact.h2')}</h2>
                        <p>{t('privacy.contact.info')}</p>
                        <p>{t('privacy.contact.name')}</p>
                        <a href='mailto:kontakt@johannes-roth.de'>
                            <img src="./icons/mail_blue.svg" alt="" />
                            <span>kontakt@johannes-roth.de</span>
                        </a>
                        <a href='tel:+4915141292919'>
                            <img src="./icons/phone_blue.svg" alt="" />
                            <span>+49 151 41292919</span></a>
                    </div>


                </div>
            </div>
        </section>
    );
}
export default Privacy