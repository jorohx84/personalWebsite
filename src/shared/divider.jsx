import React from "react";
import styles from './divider.module.scss';
import Linkbox from "./linkbox";
const Divider = ({ section, left, right }) => {

    return (
        <div className={styles.divider}>
            <div className={styles.leftLine} style={{ width: left }}></div>
            {(section === 'aboutme' || section === 'skills') && (

                <div className={styles.dot}></div>


            )}

            {section === 'hero' && (
                <Linkbox />
            )}

            {section === 'projects' && (
                <div className={styles.navigation}>
                    <div className={styles.slideBtn}><img src="./icons/left_arrow.svg" alt="" /></div>
                    <div className={styles.slideBtn}><img src="./icons/right_arrow.svg" alt="" /></div>
                </div>

            )}

            {section === 'footer' && (
                <div className={styles.arrowup} onClick={() => window.scrollTo(0, 0)}>
                    <img src="./icons/right_arrow.svg" alt="" />
                </div>

            )}


            <div className={styles.rightLine} style={{ width: right }}></div>
        </div>


    );
}

export default Divider