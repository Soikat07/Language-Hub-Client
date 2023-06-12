import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
  const { data: data = [], refetch } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch(
        'https://summer-camp-server-ruby.vercel.app/classes'
      );
      return res.json();
    },
  });
  return [data, refetch];
};

export default useClasses;
