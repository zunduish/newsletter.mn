import React, { useState } from "react";
import CategoredNews from "../components/CategoredNews";
import CategoredNComingSoon from "../components/CategoredNComingSoon";
import CategoredNCooperation from "../components/CategoredNCooperation";
import { gql, useQuery } from "@apollo/client";
import { GET_KNOWLEDGE_BASE_TOPICS_M } from "../graphql/queries";
import { getErxesApolloClient } from "@/lib/initApollo";
type Props = {
  brandId: string;
};
export default function CategoredNewsSubContainer(props: Props) {
  const { brandId } = props;
  console.log("brandId >>> ", brandId);
  const { loading, error, data } = useQuery(gql(GET_KNOWLEDGE_BASE_TOPICS_M), {
    variables: { page: 1, perPage: 1000, brandId: brandId },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });

  console.log("data?.knowledgeBaseTopics >>> ", data?.knowledgeBaseTopics);

  // const { loading, error, data } = useQuery(gql(GET_GGG), {
  //   variables: { page: 1, perPage: 1000, brandId: null },
  //   client: getErxesApolloClient(),
  //   fetchPolicy: "network-only",
  // });
  // console.log("data >>> ", data);

  const [sendDataaa, setSendData1] = useState(data?.knowledgeBaseTopics);
  // const [sendDataaa, setSendData1] = useState();

  // PdpPxWxEmgSkkloiGO21F
  // fI9cdcylfif736BdD_QSt
  // 5Dl50RWZuwU_rlfOAWzsf
  // KWN4uJ4SHINX5R-HE1xRg

  // data={data?.knowledgeBaseTopics}
  //   console.log("sendDataaa >>> ", sendDataaa);
  return (
    <div>
      {data?.knowledgeBaseTopics.map((element: any, index: number) => (
        <div key={index}>
          <CategoredNews title={element.title} listData={element.categories} />
        </div>
      ))}

      {/* <CategoredNews title="Үйл явдал" listData={sendData} /> */}
      {/*<CategoredNews title="Well-being" listData={sendData} />
      <CategoredNews title="Сонирхол" listData={sendData} />
      <CategoredNews title="Entertainment" listData={sendData} /> */}
      {/* <CategoredNCooperation title="Хамтрал" listData={sendData} />
      <CategoredNComingSoon title="Тун удахгүй" listData={sendData} /> */}
    </div>
  );
}
