import Header from "@/components/layout/header/Header";
import HomeBody from "@/components/layout/homebody/HomeBody";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HomeBody />
      <Footer />
    </main>
  );
}
