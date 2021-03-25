export interface Store {
  state: {
    readonly isRegistered: boolean;
    readonly isAuthenticate: boolean;
  };
  login: () => void;
  logout: () => void;
}
