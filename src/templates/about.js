import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "react-helmet";
import graphql from "graphql";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1 className="display-3">{post.frontmatter.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col
            sm="12"
            md={{ size: 8, offset: 2 }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Row>
      </Container>
    </div>
  );
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
