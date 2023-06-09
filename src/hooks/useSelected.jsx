import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";


const useSelected = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const { data: selectClasses = [], refetch } = useQuery({
    queryKey: ["selectClasses",user?.email],
    queryFn: async() => {
      const res = await fetch(`http://localhost:5000/selectClass?email=${user?.email}`, {
        headers: {
          authorization:`bearer ${token}`
        }
      });
      return res.json();
    }
  });
  return [selectClasses, refetch];
};

export default useSelected;