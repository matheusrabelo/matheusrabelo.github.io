import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.css';
import SocialMedias from './socialMedias';

const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <div className={styles.brand}>{siteTitle}</div>
        <SocialMedias />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: `Matheus Rabelo`,
};

export default Header;
