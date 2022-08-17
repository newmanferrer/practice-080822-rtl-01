interface IName {
  first: string;
  last: string;
  title: string;
}

interface ICoordinates {
  latitude: string;
  longitude: string;
}

interface IStreet {
  name: string;
  number: number;
}

interface ITimezone {
  description: string;
  offset: string;
}

interface ILocation {
  city: string;
  coordinates: ICoordinates;
  country: string;
  postcode: number;
  state: string;
  street: IStreet;
  timezone: ITimezone;
}

interface ILogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

interface IDob {
  age: number;
  date: Date;
}

interface IRegistered {
  date: string;
  age: number;
}

interface IID {
  name: string;
  value: string | null;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDob;
  registered: IRegistered;
  phone: string;
  cell: string;
  id: IID;
  picture: IPicture;
  nat: string;
}
