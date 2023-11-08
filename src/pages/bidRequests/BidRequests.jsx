import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";

const BidRequests = () => {
    const {user} = useAuthContext();
    const axios = useAxios();

    const {data} = useQuery({
        queryKey: ['bidRequests'],
        queryFn: ()=>{
            return axios.get('')
        }
    })





  return <div className="min-h-screen">
    

    </div>;
};

export default BidRequests;
