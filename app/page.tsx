import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CatalogPreview from "@/components/CatalogPreview";
import Advantages from "@/components/Advantages";
import Cities from "@/components/Cities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <CatalogPreview />
        <Advantages />
        <Cities />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
