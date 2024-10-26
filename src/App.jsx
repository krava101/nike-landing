import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import Subscribe from "./components/Subscribe";
import SuperQuality from "./components/SuperQuality";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
