import Header from "../../components/layout/header/Header";
import NewsletterProfile from "../../components/layout/newsletterprofile/NewsletterProfile";
import Footer from "../../components/layout/footer/Footer";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";

export default function NewsLetter() {
  const router = useRouter();
  console.log("router.query.id >>> ", router.query.id);
  return (
    <main className="w-full">
      <Header />
      <NewsletterProfile />
      <Footer />
    </main>
  );
}
