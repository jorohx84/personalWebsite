import React from "react";
import styles from './linkbox.module.scss';
import def from "ajv/dist/vocabularies/discriminator";

const Linkbox = () => {
    return (
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
    );
}
export default Linkbox