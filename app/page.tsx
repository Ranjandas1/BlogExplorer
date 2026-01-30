import ArticleCardList from "@/components/articleCardList";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Hero />
      <ArticleCardList />
      <Footer />
    </main>
  );
}
