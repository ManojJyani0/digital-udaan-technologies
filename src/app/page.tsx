import Background from "@/components/background";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
