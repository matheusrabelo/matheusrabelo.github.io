import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.css';

const Footer = ({ authorEmail }) => (
    <footer className={styles.footer}>
        <div>Thank you for visiting!</div>
        <div className={styles.contact}>contact: {authorEmail}</div>
    </footer>
);

Footer.propTypes = {
    authorEmail: PropTypes.string,
};

export default Footer;
