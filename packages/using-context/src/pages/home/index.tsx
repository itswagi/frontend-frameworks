import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { SearchContainer } from "../../components/SearchContainer/SearchContainer";
import { FetchSearchedSongResponseType } from "../../hooks/api/types";
import { HomeWrapper } from "./styles/home.styles";

export const Home: FC = () => {

  return (
    <HomeWrapper className="flex flex-col items-center">
      
    </HomeWrapper>
  )
}
