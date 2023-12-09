// knowledgeBaseArticles;
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
