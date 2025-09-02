import React, { useState } from "react";
import styles from './contact.module.scss';
import Headline from "../shared/headline";
import { useTranslation } from "../services/useTranslation";
import Contactform from "./contactform";
import Linkbox from "../shared/linkbox";
const Contact = () => {
    const { t } = useTranslation('de');
    const [isSubmit, setisSubmit] = useState(false);

    const submit = () => {
        setisSubmit(true);
        console.log(isSubmit);
        
    }
    return (
        <section className={styles.contactSection} id="contact">
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('contact.headline')} />
                <div className={styles.contactContainer}>
                    <div className={styles.textContainer}>

                        <p>{t('contact.text')}</p>
                        <div className={styles.contactData}>
                            <div className={styles.adress}>
                                <p>Johannes Roth</p>
                                <p>Max-Seither-Ring 32</p>
                                <p>76863 Herxheim</p>
                            </div>

                            <div className={styles.dataContainer}>
                                <img src="./icons/mail_blue.svg" alt="" />
                                <a href="mailto:kontakt@johannes-roth.de">kontakt@johannes-roth.de</a>
                            </div>
                            <div className={styles.dataContainer}>
                                <img src="./icons/phone_blue.svg" alt="" />
                                <a href="tel:015141292919">0151 41292919</a>
                            </div>
                        </div>
                        <div className={styles.linkboxContainer}>
                            <Linkbox />
                        </div>


                    </div>
                    <div className={styles.formContainer}>
                        <Contactform setSlider={submit} />
                    </div>

                </div>


            </div>
            <div className={`${styles.response} ${isSubmit ? styles.slidin : ''}`}>
                <h2>{t('contact.response')}</h2>
            </div>
        </section>
    );
}
export default Contact