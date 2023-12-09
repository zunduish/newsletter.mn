import React from "react";
import TheFutureText from "../components/TheFutureText";
import { GET_TOPIC_DETAIL } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";
import Loader from "@/components/common/Loader";
type Props = {
  id: string;
};
export default function TheFutureTextContiner(props: Props) {
  const { id } = props;
  const field_query = useQuery(gql(GET_TOPIC_DETAIL), {
    variables: { id: id },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  return field_query.loading ? (
    <div />
  ) : (
    <TheFutureText data={field_query.data?.knowledgeBaseTopicDetail} />
  );
}
