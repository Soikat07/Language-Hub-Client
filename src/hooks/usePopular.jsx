import { useEffect, useState } from "react";


const usePopular = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/popularclasses')
      .then(res => res.json())
      .then(data => {
        setClasses(data);
      });
  }, []);

  return [classes];
};

export default usePopular;