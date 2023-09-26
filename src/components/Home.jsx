import programs from "../data/Programs";
import colors from "../data/Colors";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto place-items-center">
      {programs.map((program) => (
        <div style={{ background: colors[program.category].bg }}>
          <img src={program.image} alt="" />
          <p
            style={{
              color: colors[program.category].primary,
              background: colors[program.category].secondary,
            }}
            className="m-3 p-1 rounded-sm inline-block text-lg "
          >
            {program.category}
          </p>
          <h3>{program.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
