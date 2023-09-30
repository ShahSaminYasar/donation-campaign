import { useLoaderData } from "react-router-dom";
import DonationCards from "../../components/DonationCards/DonationCards";
import Banner from "../../components/Home/Banner/Banner";
import { useCallback, useState } from "react";
import NoDataGif from "../../Assets/images/no_data.gif"

const Home = () => {
  const fetchedData = useLoaderData();
  const [programsData, setProgramsData] = useState(fetchedData);
  const [noData, setNoData] = useState(false);

  const onSearch = useCallback((searchText) => {
    if (searchText !== "") {
      const filteredPrograms = fetchedData.filter(
        (program) =>
          program.title.toLowerCase().includes(searchText.toLowerCase()) ||
          program.category.toLowerCase().includes(searchText.toLowerCase())
      );
      setProgramsData(filteredPrograms);
      if (filteredPrograms.length !== 0) {
        setNoData(false);
      } else {
        setNoData(true);
      }
    } else {
      setProgramsData(fetchedData);
      setNoData(false);
    }
  }, []);

  return (
    <div>
      <Banner onSearch={onSearch} />
      <DonationCards programsData={programsData} />
      {noData && (
        <div className="py-12 px-3 text-center text-xl text-neutral-600 font-medium mt-[-80px]">
          <img src={NoDataGif} alt="" className="w-full max-w-[200px] mx-auto -translate-x-[20px]" />
          Sorry, no programs found...
        </div>
      )}
    </div>
  );
};

export default Home;
