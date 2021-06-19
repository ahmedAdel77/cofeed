import { Account } from "./account";

export interface Feed {
  imageUrl: string;
  account: Account;
  interactions: {
    likes?: number;
    comments?: String[];
  };
}
