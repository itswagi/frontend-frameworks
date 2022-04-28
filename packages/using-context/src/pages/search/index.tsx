import { FC, useEffect } from "react";
import { useSearchedSongData } from "../home";
import { SearchResultsWrapper, SearchItemWrapper } from "./styles/search.styles";

export const Search: FC = () => {
  const {tracks} = useSearchedSongData()
  useEffect(() => {
    console.log(tracks)
  }, [tracks])
  return (
    <SearchResultsWrapper className="grid grid-cols-3">
      <SearchItemWrapper className="">
        hello
      </SearchItemWrapper>
    </SearchResultsWrapper>
  )
}