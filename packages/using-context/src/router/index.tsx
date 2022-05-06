import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Error } from "../pages/error";
import { RoutePaths } from "./types";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.ERROR} element={<Error />} />
    </Routes>
  )
}