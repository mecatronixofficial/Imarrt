import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Products from '@/components/Products';
import Strengths from '@/components/Strengths';
import Process from '@/components/Process';
import Categories from '@/components/Categories';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';
import LogoPage from '@/components/LogoPage';
import Collections from '@/components/Collections';



export default function Home() {
  return (
    <ScrollRevealProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Strengths />
        <Process />
        <LogoPage />
        <Collections/>
        <Categories />
        <Contact />
      </main>
      <Footer />
    </ScrollRevealProvider>
    

  );
}
