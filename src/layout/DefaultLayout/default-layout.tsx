import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};
