import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
  const { data: data = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/classes');
      return res.json()
    }
  })
  return [data, loading, refetch];
};

export default useClasses;