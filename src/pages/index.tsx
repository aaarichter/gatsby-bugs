import type {  PageProps } from 'gatsby';
import { Link, graphql } from 'gatsby';
import type { FunctionComponent } from 'react';
import React from 'react';

export const query = graphql`
  query MDX_DOCS {
    allMdx(sort: { frontmatter: { title: ASC } }) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        tableOfContents(maxDepth: 3)
        id
      }
    }
  }
`;

const IndexPage: FunctionComponent<PageProps<Queries.MDX_DOCSQuery>> = ({ data }) => (
    <div>
      {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/${node.frontmatter?.slug}`}>{node.frontmatter?.title}</Link>
            </h2>
            <p>
              Posted:
              {node.frontmatter?.date}
            </p>
          </article>
      ))}
    </div>
);

export default IndexPage;
