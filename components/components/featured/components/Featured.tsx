import React, { useState } from "react";
import CardsLarge from "./CardsLarge";

import { GET_KNOWLEDGE_BASE_ARTICLES } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";

export default function Featured() {
  const { loading, error, data } = useQuery(gql(GET_KNOWLEDGE_BASE_ARTICLES), {
    variables: { categoryIds: null },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });

  // console.log("data?.knowledgeBaseArticles >>> ", data?.knowledgeBaseArticles);
  return (
    <div className="w-full m-auto  py-[15px]">
      <p className="subheading text-orange-500 px-[24px] mb-[10px]">
        Онцлох дугаарууд
      </p>
      {/* end cards duudna */}
      <CardsLarge fdata={data?.knowledgeBaseArticles} />
    </div>
  );
}
