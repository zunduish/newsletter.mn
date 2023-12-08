import React, { useState } from "react";
import CategoredNews from "../components/CategoredNews";
import CategoredNComingSoon from "../components/CategoredNComingSoon";
import CategoredNCooperation from "../components/CategoredNCooperation";

import { gql, useQuery } from "@apollo/client";
import { GET_KNOWLEDGE_BASE_TOPICS_M } from "../graphql/queries";
import { getErxesApolloClient } from "@/lib/initApollo";

export default function CategoredNewsContainer() {
  const { loading, error, data } = useQuery(gql(GET_KNOWLEDGE_BASE_TOPICS_M), {
    variables: { page: 1, perPage: 1000 },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });

  // console.log("data?.knowledgeBaseTopics >>> ", data?.knowledgeBaseTopics);
  // const [sendData, setSendData] = useState([
  //   { title: "Ер нь?", text: "asdasd", pic: "/images/card_pic1.svg" },
  //   {
  //     title: "The Future",
  //     text: "gfhdfhfghdfgdfg",
  //     pic: "/images/card_pic2.svg",
  //   },
  //   {
  //     title: "techworm weekly",
  //     text: "dfgdfgdfgdfg",
  //     pic: "/images/card_pic3.svg",
  //   },
  //   {
  //     title: "wheels on",
  //     text: "dfgfjmghgdsfgds ",
  //     pic: "/images/card_pic4.svg",
  //   },
  // ]);

  return (
    <div>
      <CategoredNews title="Технологи" listData={data?.knowledgeBaseTopics} />
      {/* <CategoredNews title="Үйл явдал" listData={sendData} />
      <CategoredNews title="Well-being" listData={sendData} />
      <CategoredNews title="Сонирхол" listData={sendData} />
      <CategoredNews title="Entertainment" listData={sendData} /> */}
      <CategoredNCooperation
        title="Хамтрал"
        listData={data?.knowledgeBaseTopics}
      />
      <CategoredNComingSoon
        title="Тун удахгүй"
        listData={data?.knowledgeBaseTopics}
      />
    </div>
  );
}
