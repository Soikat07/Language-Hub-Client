import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import useAxiosSecure from "./useAxiosSecure";


const useSelected = () => {
  const { user,loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: selectClasses = [], refetch } = useQuery({
    queryKey: ["selectClasses", user?.email],
    enabled:!loading,
    queryFn: async() => {
      const res = await axiosSecure(`/selectClass?email=${user?.email}`);
      console.log('res from axios', res);
      return res.data;
    }
  });
  return [selectClasses, refetch];
};

export default useSelected;