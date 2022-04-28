import { AxiosResponse } from "axios"
import { useCallback, useState } from "react"
import { useQuery } from "react-query"
import { server } from "../../utils/api"
import { FetchSearchedSongResponseType } from "./types"

export enum ApiStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

const fetchSearchedSong = async (query: string) => {
  return await server.get<FetchSearchedSongResponseType>(`/search?q=${query}&type=track`)
}

export const useSearchSong = () => {
  const [ data, setData ] = useState<null| FetchSearchedSongResponseType>(null);
  const [ status, setStatus ] = useState<ApiStatus>(ApiStatus.IDLE);
  const [ error, setError ] = useState<any>(null);

  const getSearchedSong = useCallback( async (query: string ) => {
    setStatus(ApiStatus.LOADING)
    try{
      const response = await fetchSearchedSong(query)
      console.log("🚀 ~ file: SearchSong.hook.ts ~ line 25 ~ getSearchedSong ~ response", response)
      setData(response.data)
      setStatus(ApiStatus.SUCCEEDED)
    } catch (err) {
      setError(err)
      setStatus(ApiStatus.FAILED)
    }
  }, [])

  return { data, status, error, getSearchedSong }
}