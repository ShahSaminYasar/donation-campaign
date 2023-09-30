import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseColorsData from "../../hooks/useColorsData";
import DonationGif from "../../Assets/images/donation.gif"

const Donation = () => {
  const [colorSet, setColorSet] = useState({});
  const [requireShowAll, setRequireShowAll] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [noData, setNoData] = useState(false);
  const [donations, setDonations] = useState([]);

  const getColorSet = async () => {
    const colorSet = await UseColorsData();
    setColorSet(colorSet);
  };

  useEffect(() => {
    getColorSet();
  }, []);

  useEffect(() => {
    const donationsData = JSON.parse(localStorage.getItem("donations"));

    if (donationsData?.length > 0) {
      setDonations(donationsData);

      if (donationsData.length > 4) {
        setRequireShowAll(true);
        setDonations(donationsData.slice(0, 4));
      }
    } else {
      setNoData(true);
    }
  }, []);

  const seeAll = () => {
    if (!showAll) {
      setShowAll(true);
      setDonations(JSON.parse(localStorage.getItem("donations")));
    } else {
      setShowAll(false);
      setDonations(JSON.parse(localStorage.getItem("donations")).slice(0, 4));
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-3">
      {noData ? (
        <div className="min-h-[50vh] py-4 flex flex-col justify-center items-center">
          <img src={DonationGif} alt="" className="w-full max-w-[200px] mx-auto" />
          <p className="text-xl text-center mb-2">
            You haven&apos;t donated in any program yet!
          </p>
          <p className="text-xl text-center font-medium">
            Wanna{" "}
            <Link to="/" className="text-green-600">
              donate?
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {donations.map((donation) => {
              const colors = colorSet[donation.category];
              return (
                <div
                  key={donation.id}
                  className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden p-5 md:p-0"
                  style={{ background: colors && colors["bg"] }}
                >
                  <img
                    className="h-full aspect-square object-cover rounded-xl md:rounded-none"
                    src={donation.square_image}
                    alt=""
                  />
                  <div className="px-5 py-3">
                    <span
                      className="block w-fit capitalize py-1 px-3 mb-2 rounded-md text-sm font-medium"
                      style={{
                        background: colors && colors["secondary"],
                        color: colors && colors["primary"],
                      }}
                    >
                      {donation.category}
                    </span>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                      {donation.title}
                    </h3>
                    <span
                      className="block mb-4 text-lg font-semibold"
                      style={{ color: colors && colors.primary }}
                    >
                      ${donation.price}
                    </span>
                    <Link
                      to={`/program/${donation.id}`}
                      className="text-lg text-white py-2 px-4 rounded-md"
                      style={{ background: colors && colors.primary }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {/* See All Button */}
          {requireShowAll && (
            <button
              onClick={seeAll}
              className="block w-fit mx-auto py-2 px-6 my-5 text-lg text-white font-medium rounded-lg bg-green-600"
            >
              {showAll ? "See less" : "See all"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
