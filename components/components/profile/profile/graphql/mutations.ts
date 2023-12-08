export const FORM_SUBMIT_MUTATION = `
    mutation widgetsSaveLead(
        $integrationId: String!
        $formId: String!
        $submissions: [FieldValueInput]
        $browserInfo: JSON!
        $cachedCustomerId: String
        $userId: String
    ) {
        widgetsSaveLead(
        integrationId: $integrationId
        formId: $formId
        submissions: $submissions
        browserInfo: $browserInfo
        cachedCustomerId: $cachedCustomerId
        userId: $userId
        ) {
        status
        conversationId
        customerId
        errors {
            fieldId
            code
            text   
            }
        }
    }
`;
