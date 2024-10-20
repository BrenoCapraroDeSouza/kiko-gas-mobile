export interface AuthContextProps {
  isAuthenticated: boolean;
  isMakingRefresh: boolean;
  handleAuthenticate(): Promise<void>;
  handleLogout(): Promise<void>;
}
