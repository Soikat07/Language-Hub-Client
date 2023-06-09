import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
  const { data: data = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/classes');
      return res.json()
    }
  })
  return [data, refetch];
};

export default useClasses;