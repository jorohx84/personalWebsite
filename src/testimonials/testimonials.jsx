import React, { useEffect, useState } from "react";
import styles from './testimonials.module.scss';
import def from "ajv/dist/vocabularies/discriminator";
import { useTranslation } from "../services/useTranslation";
import Headline from "../shared/headline";
import { use } from "react";
import Divider from "../shared/divider";

const Testimonials = () => {
    const { t } = useTranslation('de');
    const [isView, setisView] = useState(null);

    const changeImage = () => {
        console.log('Hallo');

        const cards = document.getElementsByClassName('card');
        console.log(cards);
        for (let index = 0; index < cards.length; index++) {
            const card = cards[index];
            const trigger = window.innerHeight * 0.5;
            const cardRect = card.getBoundingClientRect();
            const firstCardRect = cards[0].getBoundingClientRect();
            if (cardRect.top < trigger) {
                setisView(index);
                console.log(index);

            } else if (firstCardRect.top > trigger) {
                setisView(null)
            }
        }


    }

    useEffect(() => {
        window.addEventListener('scroll', changeImage);

    }, [])


    const testimonials = [
        {
            name: 'Ramona',
            memoji: './memojis/ramona.svg',
            memojiTwink: './memojis/ramona_twink.svg',
            job: 'Business Development',
            comment: t('testimonials.commentRamona')
        },
        {
            name: 'Nadine',
            memoji: './memojis/nadine.svg',
            memojiTwink: './memojis/nadine_twink.svg',
            job: 'Sales Administrative',
            comment: t('testimonials.commentNadine')
        },
        {
            name: 'Volker',
            memoji: './memojis/volker.svg',
            memojiTwink: './memojis/volker_twink.svg',
            job: 'IT Director',
            comment: t('testimonials.commentVolker')
        },

    ];




    return (
        <section className={styles.testimonialsSection}>

            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('testimonials.headline')} />
                <div className={styles.testimonialContainer}>
                    {testimonials.map((testimonial, index) => (
                        <div className={`${styles.testimonialCard} card`} key={index} onMouseOver={() => setisView(index)}>
                            {(isView === index) ? (
                                <img src={testimonial.memojiTwink} alt={`${testimonial.name}`} />
                            ) : (
                                <img src={testimonial.memoji} alt={testimonial.name} />
                            )}
                            {/* <img className={`${styles[`memoji${index}`]}  ${isView === index && window.innerWidth < 750 ? styles.inView : ''}`} src={testimonial.memoji} alt="" /> */}
                            <div>
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.comment}</p>
                            </div>

                            <span>{testimonial.job}</span>
                        </div>
                    ))}

                </div>

            </div>
            <Divider />
        </section>
    );
}
export default Testimonials