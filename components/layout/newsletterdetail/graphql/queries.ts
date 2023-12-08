// knowledgeBaseArticles;

import { useQuery, gql } from "@apollo/client";
export const GET_KNOWLEDGE_BASE_ARTICLES = `
query KnowledgeBaseArticles($categoryIds: [String]) {
  knowledgeBaseArticles(categoryIds: $categoryIds) {
    _id
    title
    createdDate
    content
    categoryId
    attachments {
      url
      name
    }
    image {
      url
      name
    }
    topicId
  }
}
`;
