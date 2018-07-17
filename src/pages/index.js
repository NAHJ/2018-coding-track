import React from "react";
import {
  Container,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row
} from "reactstrap";
import Link from "gatsby-link";
import graphql from "graphql";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(
    post =>
      !post.node.frontmatter.hidden &&
      post.node.frontmatter.contentType === "blog"
  );
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          {posts.map(({ node: post }) => (
            <Card style={{ marginBottom: 10 }} key={post.id}>
              <CardBody>
                <CardTitle>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </CardTitle>
                <CardSubtitle style={{ marginBottom: 10 }}>
                  {post.frontmatter.date}
                </CardSubtitle>
                <CardText>{post.excerpt}</CardText>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
