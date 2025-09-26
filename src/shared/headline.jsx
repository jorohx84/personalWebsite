import React from "react";
import styles from './headline.module.scss';

const Headline = ({ label }) => {
    return (
        <div className={styles.headlineContainer}>
            <p className={styles.backgroundText}>{label}</p>
            <div>
                
                <h1>{label}</h1>
                {/* <div className={styles.underline}>
                    <div className={styles.inline}></div>
                </div> */}
            </div>

        </div>
    );
}

export default Headline