import { gql } from "@apollo/client";
export const TICKET_ADD = `
  mutation TicketsAdd(
    $name: String!
    $stageId: String
    $customFieldsData: JSON
  ) {
    ticketsAdd(
      name: $name
      stageId: $stageId
      customFieldsData: $customFieldsData
    ) {
      _id
      name
      stageId
      customFieldsData
    }
  }
`;

export const TICKET_ADD_ARDAA_ORXI = `
mutation TicketsAdd($name: String!, $stageId: String, $description: String) {
  ticketsAdd(name: $name, stageId: $stageId, description: $description ) {
    _id
    name
    description
    stageId
  }
}
`;
export const TICKET_EDIT_NAME_CHANGE = `
mutation TicketsEdit($id: String!, $name: String) {
  ticketsEdit(_id: $id, name: $name) {
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
