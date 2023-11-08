import Header from "../components/layout/header/Header";
import MainBody from "../components/layout/mainbody/MainBody";
import Footer from "../components/layout/footer/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <MainBody />
      <Footer />
    </main>
  );
}
