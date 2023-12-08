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
    forms {
      formId
      brandId
    }
  }
}
`;

export const GET_TOPIC_DETAIL = `
query KnowledgeBaseTopicDetail($id: String!) {
  knowledgeBaseTopicDetail(_id: $id) {
    title
    _id
    createdBy
    description
    backgroundImage
  }
}
`;

export const GET_INTEGRATIONS = `
query Integrations($brandId: String, $kind: String, $perPage: Int, $page: Int) {
  integrations(brandId: $brandId, kind: $kind, perPage: $perPage, page: $page) {
    form {
      code
    }
    brand {
      code
    }
  }
}
`;
