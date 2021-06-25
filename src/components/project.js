import React from 'react';
import PropTypes from 'prop-types';
import { useSendEvent } from '../hooks';

import styles from './project.module.css';

const Topic = ({ name }) => <div className={styles.topic}>{name}</div>;

Topic.propTypes = {
    name: PropTypes.string.isRequired,
};

const Project = ({ name, url, topics, description }) => {
    const sendEvent = useSendEvent();
    const sendProjectEvent = () => sendEvent({
        category: 'Project',
        action: 'view',
        label: url
    });

    return (
        <div className={styles.project}>
            <a href={url} target="_blank" rel="noreferrer" onClick={sendProjectEvent}>
                <div className={styles.name}>{name}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.topics}>
                    {topics.map((topic, i) => (
                        <Topic name={topic} key={i} />
                    ))}
                </div>
            </a>
        </div>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    topics: PropTypes.array,
    description: PropTypes.string,
};

Project.defaultProps = {
    topics: [],
    description: '',
};

export default Project;
