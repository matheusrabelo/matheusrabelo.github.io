import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Main from '../components/main';
import Projects from '../components/projects';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Main />
        <Projects />
    </Layout>
);

export default IndexPage;
