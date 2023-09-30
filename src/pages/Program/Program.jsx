import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Program = () => {
  const { id } = useParams();
  const programs = useLoaderData();

  const [program, setProgram] = useState({});

  useEffect(() => {
    const findProgram = programs?.find((program) => program.id == id);
    setProgram(findProgram);
  }, [id, programs]);

  const donate = () => {
    let donations = [];

    const localData = JSON.parse(localStorage.getItem("donations"));

    if (localData) {
      if (!localData.find((data) => data.id == id)) {
        donations = [...localData, program];
        Swal.fire("Donated Successfully", "Thank You!", "success");
      } else {
        donations = [...localData];
        Swal.fire(
          "Already Donated...",
          "You have already donated to this program.",
          "error"
        );
      }
    } else {
      donations.push(program);
      Swal.fire("Donated Successfully", "Thank You!", "success");
    }

    localStorage.setItem("donations", JSON.stringify(donations));
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-3">
      <div className="rounded-xl overflow-hidden relative mb-14">
        <img src={program.image} alt="" className="w-full rounded-xl" />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-black bg-opacity-40">
          <button
            onClick={() => donate()}
            className="rounded-md py-3 px-5 bg-red-500 text-white"
          >
            Donate ${program.price}
          </button>
        </div>
      </div>
      <h1 className="text-5xl text-neutral-950 font-bold mb-7">
        {program.title}
      </h1>
      <p className="text-lg text-neutral-700 text-justify">
        {program.description}
      </p>
    </div>
  );
};

export default Program;
