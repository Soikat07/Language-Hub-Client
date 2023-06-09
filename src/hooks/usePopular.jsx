import { useQuery } from "@tanstack/react-query";



const usePopular = () => {
  const {
    data: classes = [],
    refetch,
  } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/popularclasses');
      return res.json();
    },
  });

  return [classes,refetch];
};

export default usePopular;