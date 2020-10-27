import React from 'react';

import styles from './main.module.css';
import Image from './image';

const Main = () => (
    <section className={styles.main}>
        <div className={styles.image}>
            <Image />
        </div>
        <div className={styles.description}>
            <div className={styles.title}>Hi, I'm Matheus Rabelo</div>
            <div className={styles.subtitle}>
                Software Engineer based in Rio de Janeiro
            </div>
        </div>
    </section>
);

export default Main;
