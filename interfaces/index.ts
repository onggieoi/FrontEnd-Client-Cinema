export interface TableItem {
  name: string;
}

export interface CardData {
  id: string;
  title: string;
  image: string;
  subTitle?: string;
  images?: string[];
}

export interface Possition {
  id: string;
  name: string;
  status: boolean;
}

export interface ISignUp {
  id?: number;
  fullname: string,
  username: string,
  password: string,
  creditCardNumber: string,
  csv: string,
}
