import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header";

function HomeLayout() {
  return (
    <>
      <Header />
      <main className="py-7 text-xl">
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout