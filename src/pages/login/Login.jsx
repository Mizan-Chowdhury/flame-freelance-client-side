import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen py-20 lg:py-">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="rounded-xl flex-1 shadow-xl w-full max-w-sm bg-white bg-opacity-10  border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm relative z-2">
          <form className="card-body flex flex-col justify-evenly ">
            <h1 className="text-center text-2xl font-bold">Login Now</h1>
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
            <p>
              Did not have a account? please{" "}
              <Link to={"/register"} className="underline font-semibold">
                Register
              </Link>
            </p>
            <div className="form-control mt-6">
              <input
                className="btn glass text-black rounded-full w-full"
                type="submit"
                value="Login"
              />
            </div>
            <p className="text-center">or </p>
            <div className="form-control">
              <input
                className="btn glass text-black w-full rounded-full"
                type="submit"
                value="Login With Google"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
