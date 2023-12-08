import Header from "../../components/layout/header/Header";
import NewsLetterDetails from "../../components/layout/newsletterdetail/NewsLetterDetail";
import Footer from "../../components/layout/footer/Footer";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";

export default function NewsLetterDetail() {
  const router = useRouter();
  // console.log("router.query.id >>> ", router.query.id);
  return (
    <main className="w-full">
      <Header />
      <NewsLetterDetails nlid={router.query.id} />
      <Footer />
    </main>
  );
}
