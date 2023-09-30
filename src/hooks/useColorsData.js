const UseColorsData = async () => {
  const data = await fetch("/data/Colors.json");
  const colorSet = await data.json();

  return colorSet;
};

export default UseColorsData;
