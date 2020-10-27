import 'normalize.css';
import './layout.css';

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    email
                }
            }
        }
    `);

    return (
        <>
            <Header
                siteTitle={data.site.siteMetadata?.title || `Matheus Rabelo`}
            />
            {children}
            <Footer authorEmail={data.site.siteMetadata?.email} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
