import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import * as Style from '../components/Post/styled';
import RecommendedPosts from '../components/RecomendedPost';
import Comments from '../components/Comments';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />

      <Style.PostHeader>
        <Style.PostDate>
          {post.frontmatter.date} * {post.timeToRead} min de leitura
        </Style.PostDate>
        <Style.PostTitle>{post.frontmatter.title}</Style.PostTitle>
        <Style.PostDescription>
          {post.frontmatter.description}
        </Style.PostDescription>
      </Style.PostHeader>
      <Style.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Style.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image {
          publicURL
        }
      }
      timeToRead
      html
    }
  }
`;

export default BlogPost;
