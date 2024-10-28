import './App.css';
import Aboutend from './components/Aboutend';
import Aboutheronew from './components/Aboutheronew';
import Aboutintro from './components/Aboutintro';
import Navbar from './components/Navbar';
import Servicehero from './components/Servicehero';
import Socialmedia from './components/Socialmedia';
import Footer from './components/Footer';
import Contactnew from './components/Contactnew';
import Videocarousel from './components/Videocarousel';
import Swiperjs from './components/Swiperjs';
import ScrollToTop from './components/Scrolltotop';
// import Carousel from './components/Carousel';
import Hero from './components/Hero';

function App() {
  return (
  <>
  <Navbar />
  <Hero />
  <ScrollToTop />
  <Aboutheronew />
  <Aboutintro />
  <Aboutend />
  <Videocarousel />
  <Swiperjs />
  <Servicehero />
  <Socialmedia />
  <Contactnew />
  <Footer />
  </>
  );
}

export default App;
