import TheFutureTextContainer from "../../components/profile/thefuturetext/containers/TheFutureTextContainer";
import NewContainer from "../../components/profile/new/containers/NewContainer";
import ListContainer from "../../components/profile/lists/containers/ListContainer";
import ProfileContainer from "../../components/profile/profile/containers/ProfileContainer";

import { GET_KNOWLEDGE_BASE_ARTICLES } from "./graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";
type Props = {
  cat_id: any;
};

export default function NewsletterProfile(props: Props) {
  const { cat_id } = props;
  const { loading, error, data } = useQuery(gql(GET_KNOWLEDGE_BASE_ARTICLES), {
    variables: { categoryIds: cat_id },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  console.log("NewsletterProfile >>> ", data?.knowledgeBaseArticles);
  return (
    <div className="container_custom lg:container mx-auto py-[24px] mb-[24px] ">
      <TheFutureTextContainer />

      <div className="block lg:hidden">
        <NewContainer list_data={data?.knowledgeBaseArticles} />
      </div>
      <div className="w-full grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="hidden lg:block ">
            <NewContainer list_data={data?.knowledgeBaseArticles} />
          </div>
          <ListContainer list_data={data?.knowledgeBaseArticles} />
        </div>

        {/* THIRTH DIV */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 my-[24px]">
          <ProfileContainer />
        </div>
      </div>
    </div>
  );
}
