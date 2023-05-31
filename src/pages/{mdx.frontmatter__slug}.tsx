import { graphql } from 'gatsby';
import {  getImage } from 'gatsby-plugin-image';
import type { ImageDataLike } from 'gatsby-plugin-image/dist/src/components/hooks';
import * as React from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';


export const query = graphql`
  query GetDocs($id: String) {
    allMdx(sort: { frontmatter: { title: ASC } }) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
      }
    }
    mdx(id: { eq: $id }) {
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

interface BlogPostProps {
  data: Queries.GetDocsQuery;
}

const BlogPost: FunctionComponent<PropsWithChildren<BlogPostProps>> = ({ children }) => {

  return (
      <div className="mdx-prose">
        {children}
      </div>
  );
};

export default BlogPost;

