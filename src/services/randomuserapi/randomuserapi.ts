import { IBaseURL } from '../../models';
const baseURL = 'https://randomuser.me/api/';
const fiveUsers = `${baseURL}?results=5`;

class NetworkError extends Error {
  constructor() {
    super('Network error');
  }
}

export const getFiveRandomUsers = async (): Promise<IBaseURL> => {
  try {
    const response = await fetch(fiveUsers);
    if (!response.ok) throw new NetworkError();
    const data: IBaseURL = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
