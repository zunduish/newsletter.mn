import React from "react";
import Profile from "../components/Profile";
import { GET_TOPIC_DETAIL, GET_USER_DETAIL } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";
type Props = {
  id: any;
  uid: any;
};
export default function ProfileContainer(props: Props) {
  const { id, uid } = props;
  const { loading, error, data } = useQuery(gql(GET_TOPIC_DETAIL), {
    variables: { id: id },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });

  return (
    <Profile cat_data={data?.knowledgeBaseTopicDetail} id={id} uid={uid} />
  );
}
