import { IUser } from '../';

interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface IBaseURL {
  results: IUser[];
  info: IInfo;
}
