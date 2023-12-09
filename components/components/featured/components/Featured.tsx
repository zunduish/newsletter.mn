import React, { useState } from "react";
import CardsLarge from "./CardsLarge";

import { GET_KNOWLEDGE_BASE_ARTICLES } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";
import Loader from "@/components/common/Loader";

export default function Featured() {
  const field_query = useQuery(gql(GET_KNOWLEDGE_BASE_ARTICLES), {
    variables: { categoryIds: null },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  return (
    <div className="w-full m-auto  py-[15px]">
      <p className="subheading text-orange-500 px-[24px] mb-[10px]">
        Онцлох дугаарууд
      </p>
      {field_query.loading ? (
        <Loader type="card" />
      ) : (
        <CardsLarge fdata={field_query.data?.knowledgeBaseArticles} />
      )}
    </div>
  );
}
