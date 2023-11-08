import { useEffect, useState } from "react";

const ConnectYourWallet = () => {
    const [author, setAuthor] = useState();

  useEffect(() => {
    fetch("/public/seller.json")
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data);
      });
  }, []);
  console.log();


  return (
    <div className="px-4 lg:px-20">
      <h1 className="text-4xl font-bold banner-title">Connect Our Author</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
        {
            author?.map(Aauthor=> <div key={Aauthor.id}>
                <div className="bg-[#0b1126] card-body">
                    <img className="w-20 h-20 rounded-full" src={Aauthor.image} alt="" />
                    <h1>{Aauthor.name}</h1>
                    <button className="btn border-none p-4 text-[#ffff] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Follow</button>
                </div>
            </div>)
        }
      </div>

    </div>
  );
};

export default ConnectYourWallet;
