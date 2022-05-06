import { FC } from "react";
import { PostsLists } from "../../components/PostsList";
import { HomeWrapper } from "./styles/home.styles";

export const Home: FC = () => {

  return (
    <HomeWrapper className="flex flex-col items-center">
      <PostsLists />
    </HomeWrapper>
  )
}
