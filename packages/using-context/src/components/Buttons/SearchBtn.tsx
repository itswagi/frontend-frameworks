import { FC } from "react";
import { SearchBtnWrapper } from "./styles/SearchBtn.styles";

export const SearchBtn: FC = () => {
  return (
    <SearchBtnWrapper
      type="submit"
    >
      Search
    </SearchBtnWrapper>
  )
}