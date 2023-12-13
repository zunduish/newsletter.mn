import { useQuery, gql } from "@apollo/client";

// export const GET_KNOWLEDGE_BASE_ARTICLES = `
// query KnowledgeBaseArticles($categoryIds: [String]) {
//   knowledgeBaseArticles(categoryIds: $categoryIds) {
//     _id
//     title
//     createdBy
//     content
//     categoryId
//     attachments {
//       url
//       name
//     }
//     image {
//       url
//       name
//     }
//     topicId
//   }
// }
// `;

// export const GET_KNOWLEDGE_BASE_TOPICS = `
// query knowledgeBaseTopics($page: Int, $perPage: Int) {
//   knowledgeBaseTopics(page: $page, perPage: $perPage) {
//     _id
//     title
//     description
//     brand {
//       _id
//       name
//     }
//     categories {
//       _id
//       title
//       description
//       icon
//     }
//     color
//     backgroundImage
//     languageCode
//     createdBy
//     createdDate
//     modifiedBy
//     modifiedDate
//     notificationSegmentId
//     parentCategories {
//       title
//       description
//       icon
//     }
//   }
// }
// `;

export const IMAP_GET_INTEGRATION = `
query imapGetIntegrations {
  imapGetIntegrations {
    mainUser
    user
    host
  }
}
`;

export const TICKETS = `
query tickets($pipelineId: String, $stageId: String, $date: ItemDate, $skip: Int, $limit: Int, $search: String, $companyIds: [String], $parentId: String, $customerIds: [String], $assignedUserIds: [String], $closeDateType: String, $priority: [String], $source: [String], $labelIds: [String], $sortField: String, $sortDirection: Int, $userIds: [String], $segment: String, $segmentData: String, $assignedToMe: String, $startDate: String, $endDate: String, $noSkipArchive: Boolean, $branchIds: [String], $departmentIds: [String], $mainType: String, $mainTypeId: String, $relType: String, $isRelated: Boolean, $isSaved: Boolean, $createdStartDate: Date, $createdEndDate: Date, $stateChangedStartDate: Date, $stateChangedEndDate: Date, $startDateStartDate: Date, $startDateEndDate: Date, $closeDateStartDate: Date, $closeDateEndDate: Date) {
  tickets(
    pipelineId: $pipelineId
    stageId: $stageId
    date: $date
    skip: $skip
    limit: $limit
    search: $search
    companyIds: $companyIds
    customerIds: $customerIds
    parentId: $parentId
    assignedUserIds: $assignedUserIds
    closeDateType: $closeDateType
    priority: $priority
    source: $source
    labelIds: $labelIds
    sortField: $sortField
    sortDirection: $sortDirection
    userIds: $userIds
    segment: $segment
    segmentData: $segmentData
    assignedToMe: $assignedToMe
    startDate: $startDate
    endDate: $endDate
    noSkipArchive: $noSkipArchive
    branchIds: $branchIds
    departmentIds: $departmentIds
    conformityMainType: $mainType
    conformityMainTypeId: $mainTypeId
    conformityRelType: $relType
    conformityIsRelated: $isRelated
    conformityIsSaved: $isSaved
    createdStartDate: $createdStartDate
    createdEndDate: $createdEndDate
    stateChangedStartDate: $stateChangedStartDate
    stateChangedEndDate: $stateChangedEndDate
    startDateStartDate: $startDateStartDate
    startDateEndDate: $startDateEndDate
    closeDateStartDate: $closeDateStartDate
    closeDateEndDate: $closeDateEndDate
  ) {
    _id
    name
    companies
    customers
    assignedUsers
    labels
    stage
    isComplete
    isWatched
    relations
    startDate
    closeDate
    createdAt
    modifiedAt
    priority
    hasNotified
    score
    number
    tagIds
    customProperties
    status
    __typename
  }
}
`;

export const FIELD_GROUPS = `
query fieldsGroups(
  $contentType: String!
  ) {
  fieldsGroups(
    contentType: $contentType
  ) {
    name
    _id
    description
    code
    order
    isVisible
    isVisibleInDetail
    contentType
    isDefinedByErxes
    logicAction
    logics {
      fieldId
      logicOperator
      logicValue
      __typename
    }
    isMultiple
    alwaysOpen
    parentId
    config
    lastUpdatedUser {
      details {
        fullName
        __typename
      }
      __typename
    }
    fields {
      type
      text
      canHide
      validation
      options
      isVisibleToCreate
      locationOptions {
        lat
        lng
        description
        __typename
      }
      objectListConfigs {
        key
        label
        type
        __typename
      }
      groupId
      searchable
      showInCard
      isRequired
      _id
      description
      code
      order
      isVisible
      isVisibleInDetail
      contentType
      isDefinedByErxes
      logicAction
      logics {
        fieldId
        logicOperator
        logicValue
        __typename
      }
      lastUpdatedUser {
        details {
          fullName
          __typename
        }
        __typename
      }
      logicAction
      logics {
        fieldId
        logicOperator
        logicValue
        __typename
      }
      relationType
      __typename
    }
    __typename
  }
}
`;

export const TicketsDetail = `
query TicketDetail($id: String!) {
  ticketDetail(_id: $id) {
    customFieldsData
  }
}
`;
export const TICKET_EXIST_CHECK = `
query TicketDetail($id: String!) {
  ticketDetail(_id: $id) {
    _id
    name
    customFieldsData
    description
    stage {
      _id
      status
      name
    }
  }
}
`;

export const GET_KNOWLEDGE_BASE_TOPICS_M = `
query KnowledgeBaseTopics($page: Int, $perPage: Int) {
  knowledgeBaseTopics(page: $page, perPage: $perPage) {
    title
    description
    backgroundImage
    brand {
      userId
      name
      description
      
      _id
    }
    _id
    createdDate
    categories {
      _id
      title
      icon
    }
    categories {
      title
      _id
      icon
      parentCategoryId
      authors {
        username
        status
        email
        brands {
          userId
          name
          description
          _id
        }
        customFieldsData
      }
    }
  }
}`;

export const GET_BRAND = `
query brands($page: Int, $perPage: Int, $searchValue: String) {
  brands(page: $page, perPage: $perPage, searchValue: $searchValue) {
    _id
    code
    name
    createdAt
    description
    emailConfig
    __typename
  }
}
`;
