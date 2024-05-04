import { useEffect } from "react";

const LogementsData = ({ onDataFetch }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        onDataFetch(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [onDataFetch]);
};

export default LogementsData;