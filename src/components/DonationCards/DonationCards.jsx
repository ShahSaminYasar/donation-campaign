import PropTypes from "prop-types";
import DonationCard from "./DonationCard";

const DonationCards = ({ programsData }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-center">
      {programsData.map((program) => (
        <DonationCard key={program.id} programData={program} />
      ))}
    </div>
  );
};

export default DonationCards;

DonationCards.propTypes = {
  programsData: PropTypes.array,
};
