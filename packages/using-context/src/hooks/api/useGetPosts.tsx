import { useCallback, useState } from "react"
import { ActionType, Dispatch } from "../../context/AppContext/types";
import { MockPostData } from "../../utils/mocks";
import { ApiStatus } from "./types"

export const useGetPosts = () => {
  const [status, setStatus] = useState<ApiStatus>(ApiStatus.IDLE);
  const [response, setResponse] = useState<any>(null);
  const [err, setErr] = useState<any>(null)

  const fetchPosts = useCallback((dispatch: Dispatch) => {
    setStatus(ApiStatus.LOADING)
    try{
      const response = MockPostData
      setResponse(response)
      dispatch({ type: ActionType.ADD_FETCHED_POSTS, payload: response })
      setStatus(ApiStatus.SUCCEEDED)
    } catch (err) {
      setErr(err)
      setStatus(ApiStatus.FAILED)
    }
  }, [])
  return { status, response, err, fetchPosts }
}