import { useEffect, useState } from "react";
import UseColorsData from "../../hooks/useColorsData";
import { Link } from "react-router-dom";

const DonationCard = ({ programData }) => {
  const {id, image, title, category } = programData;
  const [colorSet, setColorSet] = useState({});

  const getColorSet = async () => {
    const colorSet = await UseColorsData();
    setColorSet(colorSet);
  };

  useEffect(() => {
    getColorSet();
  }, []);

  return (
    <Link to={`/program/${id}`}>
      <div
        className="w-full max-w-sm mx-auto rounded-xl overflow-hidden flex flex-col gap-1 text-base"
        style={{ background: colorSet[category]?.bg }}
      >
        <img src={image} alt="" className="w-full" />
        <span
          style={{
            background: colorSet[category]?.secondary,
            color: colorSet[category]?.primary,
          }}
          className="mx-3 w-fit py-1 px-2 rounded-lg bg-slate-100 mt-2 mb-1 font-medium capitalize"
        >
          {category}
        </span>
        <h2
          className="mx-3 text-xl text-left font-medium mb-3"
          style={{ color: colorSet[category]?.primary }}
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default DonationCard;
