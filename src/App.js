import "./App.css";
import Brands from "./Components/Brands/Brands";
import Category from "./Components/Category/Category";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Product from "./Components/Products/Product";
import RecentProduct from "./Components/RecentProducts/RecentProduct";
import Review from "./Components/Review/Review";
import MySlider from "./Components/Slider/MySlider";

function App() {
  return (
    <>
      <Header />
      <MySlider />
      <Brands />
      <Feature />
      <Category />
      <Product />
      <NewsLetter />
      <RecentProduct />
      <Review />
      <Footer />
    </>
  );
}

export default App;
