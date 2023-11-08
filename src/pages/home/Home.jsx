import Banner from "../../components/banner/Banner";
import Categories from "../../components/category/Categories";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="lg:my-32 flex justify-center">
        <Categories></Categories>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
