import "./style.css";
import Header from './component/Header';
import Footer from "./component/Footer";
import HeroSection from "./component/herosection";
import AboutPage from "./component/About";
import ContactForm from "./component/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen main"> {/* Use flex to make the main a flex container */}
      <Header />
      <div className="flex-grow flex items-center justify-center"> {/* Center content vertically and horizontally */}
      <HeroSection />

      
      </div>
      <AboutPage />
      <ContactForm />
      <Footer />
    </main>
  );
}
