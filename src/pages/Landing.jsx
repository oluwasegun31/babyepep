import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Token from "../components/Token";
import Buy from "../components/Buy";
import Footer from "../components/Footer";
export default function Landing() {
  return (
    <section className="sm:px-6 px-2 w-full">
      <header className="fixed top-0 left-0 w-full">
        <Navbar />
      </header>
      <main className="mt-20">
        <Hero />
        <About />
        <Token />
        <Buy />
      </main>
      <Footer />
    </section>
  );
}
