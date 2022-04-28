import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { ApiStatus, useSearchSong } from "../../hooks/api/SearchSong.hook";
import { FormFields, SearchFormSchema } from "../../utils/forms";
import { SearchBtn } from "../Buttons";
import { SearchBox } from "../InputFields";
import { FormWrapper } from "./styles/SearchContainer.styles";

type FormData = {
  [FormFields.QUERY]: string
}

type SearchContainerProps = {
  getSearchedSong: (query: string) => Promise<void>
  setQuery: React.Dispatch<React.SetStateAction<string | null>>
  status: ApiStatus
}
export const SearchContainer: FC<SearchContainerProps> = ({ getSearchedSong, setQuery, status}) => {
  const { register, handleSubmit, formState: { errors }} = useForm<FormData>({
    mode: "onTouched",
    resolver: yupResolver(SearchFormSchema())
  })
  const navigate = useNavigate();
  const onSubmit = ({ query }: FormData) => {
    if( status === ApiStatus.IDLE){
      getSearchedSong(query)
      setQuery(query)
    }
  }

  return (
    <FormWrapper className="flex" onSubmit={handleSubmit(onSubmit)}>
      <SearchBox register={register(FormFields.QUERY)}/>
      <SearchBtn />
    </FormWrapper>
  )
}