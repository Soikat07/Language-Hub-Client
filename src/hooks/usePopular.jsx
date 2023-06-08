import { useQuery } from "@tanstack/react-query";



const usePopular = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/popularclasses');
      return res.json();
    },
  });

  return [classes,loading,refetch];
};

export default usePopular;