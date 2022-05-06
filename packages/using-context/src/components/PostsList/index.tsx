import { FC } from "react"
import { MockPostData } from "../../utils/mocks"
import { Post } from "../Post"
import { PostListWrapper } from "./styles"

export const PostsLists: FC = () => {
  const renderPostsList = MockPostData.map((post) => (
    <Post {...post} key={post.id}/>
  ))
  return (
    <PostListWrapper className="flex flex-col gap-y-3">
      {renderPostsList}
    </PostListWrapper>
  )
}