import React from 'react';
import classnames from 'classnames';
import { useSendEvent } from '../hooks';

import styles from './socialMedias.module.css';

const SocialMedias = () => {
    const sendEvent = useSendEvent();

    return (
        <div className={styles.socialMedias}>
            <div className={classnames(styles.socialMedia, styles.linkedinIcon)}>
                <a
                    href="https://www.linkedin.com/in/mtheusrabelo"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sendEvent({
                        category: 'SocialMedia',
                        action: 'click',
                        label: 'LinkedIn'
                    })}
                >
                    LinkedIn
                </a>
            </div>
            <div className={classnames(styles.socialMedia, styles.githubIcon)}>
                <a
                    href="https://github.com/mtheusrabelo"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sendEvent({
                        category: 'SocialMedia',
                        action: 'click',
                        label: 'GitHub'
                    })}
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default SocialMedias;
