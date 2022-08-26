import axios, { AxiosResponse } from 'axios';
import { IBaseURL } from '../../models';
const baseURL = 'https://randomuser.me/api/';
const fiveUsers = `${baseURL}?results=5`;
const fiveUsersFemale = `${fiveUsers}&gender=female`;

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
  }
}

//* Fetch
export const getFiveRandomUsersFetch = async (): Promise<IBaseURL> => {
  try {
    const response = await fetch(fiveUsers);
    if (!response.ok) throw new NetworkError(`Error code: ${response.status}`);
    const data: IBaseURL = await response.json();
    return data;
  } catch (error: any) {
    throw new NetworkError(error.message);
  }
};

export const getFiveRandomUsersFemaleFetch = async (): Promise<IBaseURL> => {
  try {
    const response = await fetch(fiveUsersFemale);
    if (!response.ok) throw new NetworkError(`Error code: ${response.status}`);
    const data: IBaseURL = await response.json();
    return data;
  } catch (error: any) {
    throw new NetworkError(error.message);
  }
};

//* Axios
export const getFiveRandomUsersAxios = async (): Promise<IBaseURL> => {
  try {
    const { data }: AxiosResponse<IBaseURL, IBaseURL> = await axios.get(fiveUsers);
    return data;
  } catch (error: any) {
    throw new NetworkError(error.message);
  }
};

export const getFiveRandomUsersFemaleAxios = async (): Promise<IBaseURL> => {
  try {
    const { data }: AxiosResponse<IBaseURL, IBaseURL> = await axios.get(fiveUsersFemale);
    return data;
  } catch (error: any) {
    throw new NetworkError(error.message);
  }
};
