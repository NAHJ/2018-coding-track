import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  CardGroup,
  CardBody
} from "reactstrap";
import Helmet from "react-helmet";
import graphql from "graphql";
import { basename } from "path";
import Link from "gatsby-link";

// find a post title by path
const findNode = (path, data) =>
  data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter)
    .filter(r => r.path === path)
    .pop();

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
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

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }

    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
