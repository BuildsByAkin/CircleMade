import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WallShowcase } from './components/WallShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WallShowcase />
        <HowItWorks />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
