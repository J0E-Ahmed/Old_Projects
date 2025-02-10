import { Outlet } from "react-router";
import MainHeader from "../component/MainHeader";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
