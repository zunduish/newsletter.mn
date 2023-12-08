import { gql, useQuery } from "@apollo/client";
import Register from "../component/Register";
import { useRouter } from "next/router";
import { GET_INTEGRATIONS } from "../../profile/profile/graphql/queries";
import { getErxesApolloClient } from "@/lib/initApollo";

export default function RegisterContainer() {
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

  return <Register integration={integration} />;
}
