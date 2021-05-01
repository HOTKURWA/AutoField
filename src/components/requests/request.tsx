import { IUserData , IUseImage }  from '../interfaces/ISelectList'

export async function fetchUser():Promise<IUserData[]> {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
  }

export  async function fetchIcons():Promise<IUseImage[]> {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        return response.json();
      })
  }