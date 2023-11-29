import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllCoupons = () => {
    const axiosSecure = useAxiosSecure();
    const { data: coupons = [], refetch } = useQuery({
      queryKey: ["couponsDetails"],
      queryFn: async () => {
        const res = await axiosSecure.get("/coupons");
        return res.data;
      },
    });
    return [coupons, refetch];
    
};

export default useAllCoupons;