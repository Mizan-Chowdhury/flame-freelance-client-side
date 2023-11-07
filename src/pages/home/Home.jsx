import Banner from "../../components/banner/Banner";
import Categories from "../../components/category/Categories";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="lg:my-32 flex justify-center">
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
