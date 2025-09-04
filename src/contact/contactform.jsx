import React, { useState } from "react";
import styles from './contactform.module.scss';
import { useForm } from "react-hook-form";
import { useTranslation } from "../services/useTranslation";
import { HashLink } from "react-router-hash-link";

const Contactform = ({ setSlider }) => {
    const { t } = useTranslation('de');
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [privacy, setprivacy] = useState(false);
    const [isSubmit, setisSubmit] = useState(false);

    const togglePrivacy = () => {
        const newValue = !privacy;
        console.log(newValue);

        setprivacy(newValue)
    }
    const onSubmit = async (data) => {

        setisSubmit(true)
        if (!privacy) { return }

        const response = await fetch('https://www.johannes-roth.de/send.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message

            }),
        });

        const result = await response.text();
        console.log(result);
        setisSubmit(false);
        setprivacy(false);
        setSlider();
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

            <div className={styles.inputContainer}>
                {/* <label>Name:</label> */}
                <input type="text" placeholder={t('contactform.name')} {...register("name", { required: t('contactform.emptyfields.name') })} />
                {errors.name && (
                    <p>{errors.name.message}</p>
                )}
            </div>

            <div className={styles.inputContainer}>
                {/* <label>E-Mail:</label> */}
                <input type="email" placeholder={t('contactform.email')} {...register("email", {
                    required: t('contactform.emptyfields.email'),
                    pattern: {
                        value: /\S+@\S+\.\S+/, message: t('contactform.errormessages.email'),
                    }
                })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className={styles.inputContainer}>
                {/* <label>Telefon:</label> */}
                <input type="tel" placeholder={t('contactform.phone')} {...register("phone", {
                    required: t('contactform.emptyfields.phone'), pattern: {
                        value: /^[0-9+\s()-]{6,}$/,
                        message: t('contactform.errormessages.phone'),
                    },
                })} />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div className={`${styles.inputContainer} ${styles.textfield}`}>
                {/* <label>Nachricht:</label> */}
                <textarea placeholder={t('contactform.message')} {...register("message", {
                    required: t('contactform.emptyfields.message'),
                    minLength: { value: 10, message: t('contactform.errormessages.message') },
                })}>

                </textarea>
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <div className={styles.privacy}>
                <div className={styles.privacyContainer}>
                    <div className={styles.checkbox} onClick={togglePrivacy}>
                        {privacy && (
                            <img src="./icons/check.svg" alt="" />
                        )}
                    </div>
                    <p>{t('contactform.privacy1')} <HashLink smooth to="/privacy">{t('contactform.link')}</HashLink>{t('contactform.privacy2')}</p>
                </div>
                {(!privacy && isSubmit) && <span>{t('contactform.emptyfields.privacy')}</span>}
            </div>

            <div className={styles.btnContainer}>
                <div className="btnBack">
                    <button type="submit">Absenden</button>
                </div>

            </div>

        </form>
    );
}

export default Contactform