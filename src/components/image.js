import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "matheus.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Image not found</div>;
    }

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;
