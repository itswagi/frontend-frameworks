import axios from 'axios';
import { useCallback, useState } from 'react';
import { ActionType, Dispatch } from '../../context/AppContext/types';
import { MockPostData } from '../../utils/mocks';
import { ApiStatus } from './types';

export const useGetPosts = () => {
	const [status, setStatus] = useState<ApiStatus>(ApiStatus.IDLE);
	const [response, setResponse] = useState<any>(null);
	const [err, setErr] = useState<any>(null);

	const fetchPosts = useCallback(async (dispatch: Dispatch) => {
		setStatus(ApiStatus.LOADING);
		try {
			const response = await axios.get('http://localhost:3001/post');
			const parsedData = response.data.map((post: any, index: any) => ({
				...post,
				author: { ...MockPostData[index].author },
			}));
			setResponse(parsedData);
			dispatch({ type: ActionType.ADD_FETCHED_POSTS, payload: parsedData });
			setStatus(ApiStatus.SUCCEEDED);
		} catch (err) {
			setErr(err);
			setStatus(ApiStatus.FAILED);
		}
	}, []);
	return { status, response, err, fetchPosts };
};
