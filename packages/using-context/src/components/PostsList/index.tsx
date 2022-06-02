import { FC, useEffect } from 'react';
import { ApiStatus } from '../../hooks/api/types';
import { useGetPosts } from '../../hooks/api/useGetPosts';
import { PostDataType } from '../../utils/mocks';
import { Post } from '../Post';
import { PostListWrapper } from './styles';
import { ShouldRender } from 'should-render';
import { useApp } from '../../context/AppContext';

export const PostsLists: FC = () => {
	const {
		state: { posts },
		dispatch,
	} = useApp();
	const { status, fetchPosts } = useGetPosts();

	useEffect(() => {
		console.log(status);
		if (status === ApiStatus.IDLE) {
			fetchPosts(dispatch);
		}
	}, [fetchPosts, status, dispatch]);

	const renderPostsList = posts?.map((post: PostDataType) => (
		<Post {...post} key={post.id} />
	));

	return (
		<>
			<ShouldRender if={status === ApiStatus.SUCCEEDED}>
				<PostListWrapper className="flex flex-col divide-y divide-secondary px-5 shadow-lg rounded-2xl bg-primary-light/5">
					{renderPostsList}
				</PostListWrapper>
			</ShouldRender>
			<ShouldRender if={status !== ApiStatus.SUCCEEDED}>
				<>Loading...</>
			</ShouldRender>
		</>
	);
};
