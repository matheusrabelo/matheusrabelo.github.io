require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'Matheus Rabelo',
        description: 'Personal website',
        author: '@matheusrabelo',
        email: 'matheusfreirerabelo[@]gmail[.]com',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `matheusrabelo.github.io`,
                short_name: `matheusrabelo`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `GitHub`,
                fieldName: `github`,
                url: `https://api.github.com/graphql`,
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: `GTM-K8ZN59C`,
                includeInDevelopment: true,
                defaultDataLayer: {
                    platform: `gatsby`
                },
                enableWebVitalsTracking: true,
            },
        },
    ],
};
