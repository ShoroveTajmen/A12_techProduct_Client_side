import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProduct = () => {
//using tanstack query to get data
const axiosPublic = useAxiosPublic();
const {data: products = [], refetch} = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
        const res = await axiosPublic.get('/products')
        // console.log(res.data)
        return res.data;
    }
})
return [products, refetch]
};

export default useProduct;