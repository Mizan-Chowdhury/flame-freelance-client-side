import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

const MyBids = () => {



const axios = useAxios();

const {data} = useQuery({
    queryKey: ['myBids'],
    queryFn: ()=>{
        return axios.get('')
    }
})













    return (
        <div>
           
        </div>
    );
};

export default MyBids;