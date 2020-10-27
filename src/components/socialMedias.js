import React from 'react';
import classnames from 'classnames';

import styles from './socialMedias.module.css';

const SocialMedias = () => (
    <div className={styles.socialMedias}>
        <div className={classnames(styles.socialMedia, styles.linkedinIcon)}>
            <a
                href="https://www.linkedin.com/in/matheusfreirerabelo"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn
            </a>
        </div>
        <div className={classnames(styles.socialMedia, styles.githubIcon)}>
            <a
                href="https://github.com/matheusrabelo"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
        </div>
    </div>
);

export default SocialMedias;
