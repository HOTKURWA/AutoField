export interface  IUserData {
    id: number,
    name: string,
    image?: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

export interface IUseImage {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
  }