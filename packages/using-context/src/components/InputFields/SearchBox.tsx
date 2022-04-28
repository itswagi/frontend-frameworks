import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { SearchBoxWrapper } from "./styles/SearchBox.styles";

type SearchBoxProps = {
  register: UseFormRegisterReturn
}

export const SearchBox: FC<SearchBoxProps> = ({ register }) => {
  return (
    <SearchBoxWrapper 
      type="text" 
      placeholder="Search for a song"
      {...register}
    />
  )
}