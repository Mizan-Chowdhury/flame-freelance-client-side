import { useEffect, useState } from "react";

const TopSeller = () => {
  const [seller, setSeller] = useState();

  useEffect(() => {
    fetch("/seller.json")
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
      });
  }, []);
  console.log(seller);

  return (
    <div className="px-4 lg:px-20">
      <h1 className="text-4xl font-bold banner-title">Our Top Seller</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
        {seller?.map((Aseller) => (
          <div className="" key={Aseller.id}>
            <div>
            <div className="flex items-center gap-8">
              <img
                className="rounded-full w-20 h-20"
                src={Aseller.image}
                alt=""
              />
              <div className="-space-y-2">
                <p>{Aseller.name}</p>
                <p>{Aseller.price}000</p>
                <p>Rating : {Aseller.rating}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
