import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { SearchContainer } from "../../components/SearchContainer/SearchContainer";
import { ApiStatus, useSearchSong } from "../../hooks/api/SearchSong.hook";
import { FetchSearchedSongResponseType } from "../../hooks/api/types";
import { HomeWrapper } from "./styles/home.styles";

export const Home: FC = () => {
  const { data, status, error, getSearchedSong } = useSearchSong()
  const [ query, setQuery ] = useState<string | null>(null) 
  const navigate = useNavigate()

  useEffect(() => {
    if ( status === ApiStatus.SUCCEEDED) {
      navigate(`/search?q=${query}`)
    }
  }, [navigate, query, status])
  return (
    <HomeWrapper className="flex flex-col items-center">
      <SearchContainer getSearchedSong={getSearchedSong} setQuery={setQuery} status={status}/>
      <Outlet context={data}/>
    </HomeWrapper>
  )
}

export function useSearchedSongData() {
  return useOutletContext<FetchSearchedSongResponseType>()
}