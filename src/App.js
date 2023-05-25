import './assets/scss/style.scss';
import ChoosingUs from './pages/ChoosingUs';
import Experience from './pages/Experience';
import Home from './pages/Home/Home';
import SellingProduct from './pages/Selling';
import Testimonials from './pages/Testimonials';
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <Home />
      <ChoosingUs />
      <SellingProduct />
      <Experience />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
