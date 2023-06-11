import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";


const useSelected = () => {
  const { user,loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: selectClasses = [], refetch } = useQuery({
    queryKey: ["selectClasses", user?.email],
    enabled:!loading,
    queryFn: async() => {
      const res = await axiosSecure(`/selectClass?email=${user?.email}`);
      // console.log('res from axios', res);
      return res.data;
    }
  });
  return [selectClasses, refetch];
};

export default useSelected;