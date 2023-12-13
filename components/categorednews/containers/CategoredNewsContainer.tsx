import React, { useState } from "react";
import CategoredNews from "../components/CategoredNews";
import CategoredNComingSoon from "../components/CategoredNComingSoon";
import CategoredNCooperation from "../components/CategoredNCooperation";

import { gql, useQuery } from "@apollo/client";
import { GET_KNOWLEDGE_BASE_TOPICS_M } from "../graphql/queries";
import { getErxesApolloClient } from "@/lib/initApollo";
import Loader from "@/components/common/Loader";

export default function CategoredNewsContainer() {
  const field_query = useQuery(gql(GET_KNOWLEDGE_BASE_TOPICS_M), {
    variables: { page: 1, perPage: 1000 },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  return (
    <div>
      {field_query.loading ? (
        <Loader type="CatogeredCard" />
      ) : (
        <CategoredNews
          title="Технологи"
          listData={field_query.data?.knowledgeBaseTopics}
        />
      )}

      {field_query.loading ? (
        <Loader type="CatogeredCard" />
      ) : (
        <CategoredNCooperation
          title="Хамтрал"
          listData={field_query.data?.knowledgeBaseTopics}
        />
      )}
      {field_query.loading ? (
        <Loader type="CatogeredCard" />
      ) : (
        <CategoredNComingSoon
          title="Тун удахгүй"
          listData={field_query.data?.knowledgeBaseTopics}
        />
      )}
    </div>
  );
}
