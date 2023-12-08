import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/category/Categories";
import Footer from "../../components/footer/Footer";
import TopSeller from "../../components/extraSection/TopSeller";
import ConnectYourWallet from "../../components/extraSection/ConnectYourWallet";

const Home = () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
                <title>Flame Frelance | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div className="lg:my-32">
        <Categories></Categories>
      </div>
      <div>
        <TopSeller></TopSeller>
      </div>
      <div>
        <ConnectYourWallet></ConnectYourWallet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
