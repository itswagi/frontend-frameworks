import { FC } from "react";
import { AuthorId, AuthorImage, AuthorName, PostAuthorDetails, PostAuthorImageContainer, PostContent, PostContentContainer, PostText, PostTime, PostWrapper } from "./styles";

type PostProps = {
  id: number;
  author: {
    id: string;
    name: string;
    username: string;
    displayPicture: string;
  }
  content: string;
  dateCreated: string;
}

export const Post: FC<PostProps> = 
  ({author: {displayPicture, id, name, username}, content, dateCreated}) => {

  const timePublished = (date: string) => {
    const datePosted = new Date(date)
    const currentTime = new Date()
    const timeSincePostedInMs = currentTime.valueOf() - datePosted.valueOf()
    const timeSincePosted = new Date(timeSincePostedInMs)
    const timeSincePostedInMins = timeSincePosted.getMinutes()
    const timeSincePostedInHrs = timeSincePosted.getHours()
    if(timeSincePostedInHrs >= 24) {
      const timeSincePostedInDays = Math.floor(timeSincePostedInHrs / 24)
      return `${timeSincePostedInDays} d`
    }
    if(timeSincePostedInHrs >= 1) {
      return `${timeSincePostedInHrs} h`
    }
    return `${timeSincePostedInMins} m`
  }
  return (
    <PostWrapper className="max-w-md w-full px-3 py-3">
      <PostContentContainer className="flex">
        <PostAuthorImageContainer className="flex shrink-0 justify-center mt-2">
          <AuthorImage className="bg-slate-400 w-12 h-12 rounded-full flex justify-center items-center shrink-0">Img</AuthorImage>
        </PostAuthorImageContainer>
        <PostContent className="text-white ml-3">
          <PostAuthorDetails className="flex gap-x-2 font-medium text-xs mb-1">
            <AuthorName>{name}</AuthorName>
            <AuthorId className="text-secondary">@{username}</AuthorId>
            <PostTime className="text-secondary">{timePublished(dateCreated)}</PostTime>
          </PostAuthorDetails>
          <PostText className="text-sm">
            {content}
          </PostText>
        </PostContent>
      </PostContentContainer>
    </PostWrapper>
  )
}