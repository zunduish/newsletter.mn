// knowledgeBaseArticles;

import { useQuery, gql } from "@apollo/client";
export const GET_KNOWLEDGE_BASE_ARTICLE_DETAIL = `
query KnowledgeBaseArticleDetail($id: String!) {
  knowledgeBaseArticleDetail(_id: $id) {
    title
    status
    image {
      url
      name
    }
    content
    _id
    createdBy
    attachments {
      url
      name
    }
  }
}
`;
