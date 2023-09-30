import { useEffect, useState } from "react";
import StatisticsPieChart from "../../components/StatisticsPieChart/StatisticsPieChart";

const Statistics = () => {
  const [totalPrograms, setTotalPrograms] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    const getPrograms = async () => {
      let data = await fetch("/data/Programs.json");
      data = await data.json();
      setTotalPrograms(data.length);
    };

    const getDonations = () => {
      const data = JSON.parse(localStorage.getItem("donations"));
      if (data) {
        setTotalDonations(data.length);
      } else {
        setTotalDonations(0);
      }
    };

    getPrograms();
    getDonations();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center">
        <StatisticsPieChart totalPrograms={totalPrograms} totalDonations={totalDonations} />
      </div>
    </div>
  );
};

export default Statistics;
