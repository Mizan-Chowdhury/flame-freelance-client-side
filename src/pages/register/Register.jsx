import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const { createUser, updateUser } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
      setError(
        "Error: Your password needs to be longer and contain a capital letter and special character."
      );
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res);
          updateUser(name, photo)
            .then((res) => {
              console.log(res);
              toast.success("You have successfully registered!");
              setError('')
              navigate("/");
              form.reset();
            })
            .catch((err) => {
              console.log(err);
              setError(err.message)
            });
        })
        .catch((err) => {
          console.log(err);
          setError(err.message)
        });
    }
  };

  return (
    <div className="flex items-center min-h-screen py-16 px-4 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center lg:gap-32">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold">
            Join the <span className="banner-title">Flame Freelance</span>{" "}
            Community
          </h1>
          <p className="py-6">
            Ready to set your freelance career on fire? Register with Flame
            Freelance and become part of a vibrant community of talented
            freelancers and clients. Ignite your potential, showcase your
            skills, and embark on a journey towards professional success. Your
            flame starts here!
          </p>
        </div>
        <div className="rounded-xl w-full lg:max-w-lg flex-1 shadow-xl bg-white bg-opacity-10  border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm relative z-2 p-10">
          <form
            onSubmit={handleForm}
            className="flex flex-col justify-evenly space-y-8"
          >
            <h1 className="text-center text-4xl font-bold banner-title">
              Register Now
            </h1>
            <div className="form-control">
              <input
                name="photo"
                type="text"
                placeholder="Photo Url"
                className=" bg-transparent focus:outline-none border-b-2 pb-1 text-white"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="name"
                type="text"
                placeholder="Full name"
                className=" bg-transparent focus:outline-none border-b-2 pb-1 text-white"
                required
              />
            </div>
            <div className="form-control">
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
            <div className="form-control">
              <input
                className="btn glass text-black rounded-full w-full"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-red-600 mt-4">{error}</p>
          <p className="text-center">
            Already have an acount? please{" "}
            <Link to={"/login"} className="font-semibold underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
