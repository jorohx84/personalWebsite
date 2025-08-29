import React from "react";
import styles from './testimonials.module.scss';
import def from "ajv/dist/vocabularies/discriminator";
import { useTranslation } from "./useTranslation";
import Headline from "./headline";
const Testimonials = () => {
    const { t } = useTranslation('de');
    const testimonials = [
        {
            name: 'Ramona',
            memoji: './memojis/ramona.svg',
            job: 'Business Development',
            comment: t('testimonials.commentRamona')
        },
        {
            name: 'Nadine',
            memoji: './memojis/nadine.svg',
            job: 'Sales Administrative',
            comment: t('testimonials.commentNadine')
        },
        {
            name: 'Volker',
            memoji: './memojis/volker.svg',
            job: 'IT Director',
            comment: t('testimonials.commentVolker')
        },

    ];


    return (
        <section className={styles.testimonialsSection}>

            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('TESTIMONIALS')} />
                <div className={styles.testimonialContainer}>
                    {testimonials.map((testimonial, index) => (
                        <div className={styles.testimonialCard} key={index}>
                            <img className={styles[`memoji${index}`]} src={testimonial.memoji} alt="" />
                            <div>
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.comment}</p>
                            </div>

                            <span>{testimonial.job}</span>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
export default Testimonials