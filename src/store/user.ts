import JSEncrypt from "jsencrypt";
import { makeAutoObservable } from "mobx";
import { RootStore } from ".";
import { IAccount } from "../types/user";

class UserStore {
  rootStore: RootStore;
  account?: IAccount;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setAccount(
    username: string,
    privKey: JSEncrypt,
    token: string,
    tokenExp: number
  ) {
    this.account = { username, privKey, token, tokenExp };
  }

  updateToken(token: string) {
    if (this.account) {
      this.account.token = token;
    }
  }

  unsetAccount() {
    this.account = undefined;
  }
}

export default UserStore;
