import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Banner.css";

const Banner = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  return (
    <div className="banner -mt-[135px]">
      <div className="max-w-6xl mx-auto w-full min-h-[65vh] py-[80px] flex flex-col gap-8 justify-center items-center ">
        <h1 className="text-4xl md:text-5xl text-neutral-900 font-bold capitalize text-center">
          I grow by helping people in need
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(searchText);
          }}
          className="flex flex-row rounded-xl overflow-hidden border-4 border-neutral-100 w-full max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Search here..."
            className="py-2 px-4 text-neutral-800 w-full outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button type="submit" className="py-2 px-4 bg-red-500 text-white">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  onSearch: PropTypes.func,
};
