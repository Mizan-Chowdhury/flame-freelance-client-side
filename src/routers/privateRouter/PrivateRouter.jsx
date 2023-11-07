import useAuthContext from "../../hooks/useAuthContext";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useAuthContext();

  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
};

export default PrivateRouter;
