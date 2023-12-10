import { gql, useMutation, useQuery } from "@apollo/client";
import Register from "../component/Register";
import { useRouter } from "next/router";
import {
  GET_FORM_DETAIL,
  GET_INTEGRATIONS,
} from "../../profile/profile/graphql/queries";
import { getErxesApolloClient } from "@/lib/initApollo";
import { FORM_SUBMIT_MUTATION } from "../../profile/profile/graphql/mutations";
import { useState } from "react";

export default function RegisterContainer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();
  const { data } = useQuery(gql(GET_INTEGRATIONS), {
    variables: {
      brandId: "fI9cdcylfif736BdD_QSt" || "", //router.query.brandId
      kind: "lead",
      page: 1,
      perPage: 5,
    },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  const integration = data?.integrations[0] || {};
  const formId = integration?.formId || "";
  const { data: formData } = useQuery(gql(GET_FORM_DETAIL), {
    variables: {
      id: formId,
    },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
    skip: !formId,
  });
  const formDetail = formData?.formDetail || {};

  const [formSubmit, { data: formSubmitData }] = useMutation(
    gql(FORM_SUBMIT_MUTATION),
    {
      client: getErxesApolloClient(),
      onCompleted: () => {
        setFormSubmitted(true);
      },
    }
  );

  const getFormValues = (name: string, email: string) => {
    console.log(name, email, "-container");
    formSubmit({
      variables: {
        integrationId: integration._id,
        browserInfo: {
          url: "",
        },
        formId: formId,
        submissions: formDetail?.fields?.map((field: any, i: number) => {
          return {
            _id: field._id,
            value: i === 0 ? name : email,
            text: field.text,
          };
        }),
      },
    });
  };
  const props = {
    getFormValues,
    integration,
    formDetail,
    formSubmitted,
  };

  return <Register {...props} />;
}
