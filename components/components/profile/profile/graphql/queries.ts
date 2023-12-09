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
    _id
    form {
      code
    }
    formId
    brand {
      code
    }
  }
}
`;

export const GET_FORM_DETAIL = `
query FormDetail($id: String!) {
  formDetail(_id: $id) {
    _id
    description
    type
    title
    fields {
      field
      _id
      code
      text
      type
    }
  }
}
`;
export const GET_USER_DETAIL = `
query UserDetail($id: String) {
  userDetail(_id: $id) {
    username
    _id
    details {
      avatar
      position
      shortName
      middleName
      fullName
      firstName
      description
    }
  }
}
`;
