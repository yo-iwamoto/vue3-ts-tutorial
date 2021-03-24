export interface Store {
  state: {
    readonly loggedIn: boolean;
  };
  login: () => void;
  logout: () => void;
}
