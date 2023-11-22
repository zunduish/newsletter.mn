import Header from "../components/layout/header/Header";
import NewsletterProfile from "../components/layout/newsletterprofile/NewsletterProfile";
import Footer from "../components/layout/footer/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <NewsletterProfile />
      <Footer />
    </main>
  );
}
