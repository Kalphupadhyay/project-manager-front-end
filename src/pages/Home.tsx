import { Outlet } from "react-router";
import { SideBar } from "../components/SideBar";

export const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-slate-900">
      <SideBar />
      <Outlet />
    </div>
  );
};
