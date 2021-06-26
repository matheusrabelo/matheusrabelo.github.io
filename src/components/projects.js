import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './projects.module.css';
import Project from './project';
import { useAB } from '../hooks';

const Projects = () => {
    const data = useStaticQuery(graphql`
        {
            github {
                viewer {
                    repositories(
                        first: 100
                        orderBy: { field: PUSHED_AT, direction: DESC }
                    ) {
                        nodes {
                            name
                            url
                            shortDescriptionHTML
                            repositoryTopics(first: 10) {
                                edges {
                                    node {
                                        topic {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const repositories = data?.github?.viewer?.repositories?.nodes || [];
    let projects = repositories.map(
        ({ name, url, repositoryTopics, shortDescriptionHTML }) => ({
            name,
            url,
            description: shortDescriptionHTML,
            topics: (repositoryTopics?.edges || []).map(repositoryTopic => {
                return repositoryTopic?.node?.topic?.name;
            }),
        })
    );

    const backwards = useAB('backwards');
    if (backwards) {
        projects = projects.reverse();
    }

    return (
        <section className={styles.section}>
            <div className={styles.projects}>
                {projects.map((project, i) => (
                    <Project {...project} key={i} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
