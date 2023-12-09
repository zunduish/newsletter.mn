import Header from "../../components/layout/header/Header";
import NewsletterProfile from "../../components/layout/newsletterProfile/NewsletterProfile";
import Footer from "../../components/layout/footer/Footer";
import { useRouter } from "next/router";

import { GET_KNOWLEDGE_BASE_ARTICLES } from "./graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";
import Loader from "@/components/common/Loader";

export default function NewsLetter() {
  const router = useRouter();
  const field_query = useQuery(gql(GET_KNOWLEDGE_BASE_ARTICLES), {
    variables: { categoryIds: [router.query.id] },
    client: getErxesApolloClient(),
    fetchPolicy: "network-only",
  });
  return (
    <main className="w-full">
      <Header />
      {field_query.loading ? (
        <Loader type="NewsLetterList" />
      ) : (
        <NewsletterProfile data={field_query.data?.knowledgeBaseArticles} />
      )}
      <Footer />
    </main>
  );
}
