export type FetchSearchedSongResponseType = {
  tracks: {
    id: string
    href: string
    external_urls: {
      spotify: string
    }
    name: string
    artists: {
      id: string;
      name: string;
    }[]
    album: {
      id: string;
      images: {
        height: number;
        url: string;
        width:number
      }[]
      name: string
    }
  }[]
}