import React from "react";
import styles from './divider.module.scss';

const Divider = ({ section, left, right }) => {

    return (
        <div className={styles.divider}>
            <div className={styles.leftLine} style={{ width: left }}></div>
            {(section === 'aboutme' || section === 'skills') && (

                <div className={styles.dot}></div>


            )}

            {section === 'hero' && (
                <div className={styles.linkBox}>
                    {/* <div className={styles.dot}></div> */}
                    <a href="https://www.linkedin.com/in/johannes-roth-b0833334b" target="_blank"><img src="./icons/linkedin_dark.svg" alt="linkedin" /></a>
                    {/* <div className={styles.dot}></div> */}
                    <a href="https://github.com/jorohx84" target="_blank"><img src="./icons/github_dark.svg" alt="github" /></a>
                    {/* <div className={styles.dot}></div> */}
                    <a href="mailto:kontakt@johannes-roth.de"><img src="./icons/mail_dark.svg" alt="mail" /></a>
                    {/* <div className={styles.dot}></div> */}

                    <a href="tel:015141202010"><img src="./icons/call.svg" alt="" /></a>


                </div>
            )}

            {section === 'projects' && (
                <div className={styles.navigation}>
                    <div className={styles.slideBtn}><img src="./icons/left_arrow.svg" alt="" /></div>
                    <div className={styles.slideBtn}><img src="./icons/right_arrow.svg" alt="" /></div>
                </div>

            )}


            <div className={styles.rightLine} style={{ width: right }}></div>
        </div>


    );
}

export default Divider