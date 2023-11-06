import { useContext } from "react";
import { AuthContext } from "../routers/authProvider/AuthProvider";

const useAuthContext = () => {
    return useContext(AuthContext);
};

export default useAuthContext;