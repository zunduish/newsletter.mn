import React from "react";
import Profile from "../components/Profile";

import { GET_TOPIC_DETAIL } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";
type Props = {
  id: any;
  art_data: any;
};

export default function ProfileContainer(props: Props) {
  const { id, art_data } = props;
  // console.log("list_data zzz", id);
  // console.log(cat_id, "car");
  const { loading, error, data } = useQuery(gql(GET_TOPIC_DETAIL), {
    variables: { id: id },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  // console.log("ProfileContainer >>> ", data?.knowledgeBaseTopicDetail);
  return <Profile data={data?.knowledgeBaseTopicDetail} art_data={art_data} />;
}
