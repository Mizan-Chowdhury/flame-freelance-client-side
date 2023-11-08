import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const {googleSingIn, signInUser} = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");






  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
    .then(res=>{
      console.log(res.user)
      form.reset()
      toast.success('You have successfully loged!')
      setError("");
      navigate(location?.state ? location.state : '/')
    })
    .catch(err=>{
      console.log(err);
      setError(err.message);
    })

  };

  const handleGoogleLogin = () => {
    googleSingIn()
    .then(res=>{
      console.log(res)
      toast.success('You have successfully loged!')
      navigate(location?.state ? location.state : '/')
    })
    .catch(err=>{
      console.log(err);
    })
  };
  return (
    <div className="flex items-center min-h-screen py-16 px-4 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center lg:gap-32">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="banner-title">Flame Freelance</span>{" "}
            Portal
          </h1>
          <p className="py-6">
            Unlock a world of opportunities! Log in to your Flame Freelance
            account to ignite your freelance journey. Access exclusive projects,
            connect with clients, and blaze a trail to success in the world of
            freelancing. Your next big opportunity awaits behind the login.
          </p>
        </div>
        <div className="rounded-xl w-full lg:max-w-lg flex-1 shadow-xl bg-white bg-opacity-10  border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm relative z-2 p-10">
          <form onSubmit={handleForm} className="flex flex-col justify-evenly ">
            <h1 className="text-center text-4xl font-bold banner-title">
              Login Now
            </h1>
            <div className="form-control my-8">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className=" bg-transparent focus:outline-none border-b-2 pb-1 text-white"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="bg-transparent focus:outline-none border-b-2 pb-1 text-white mb-4"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn glass text-black rounded-full w-full"
                type="submit"
                value="Login"
              />
            </div>
            <p className="text-center">or </p>
          </form>
          <div className="form-control">
            <input
              onClick={handleGoogleLogin}
              className="btn glass text-black w-full rounded-full"
              type="submit"
              value="Login With Google"
            />
          </div>
          <p className="text-red-600 mt-4">{error}</p>
          <p className="text-center">
            Did not have a account? please{" "}
            <Link to={"/register"} className="underline font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
