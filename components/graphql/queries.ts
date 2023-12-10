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
    createdUser {
      _id
      details {
        lastName
        fullName
        firstName
        avatar
        middleName
        position
        shortName
        description
      }
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
