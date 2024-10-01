export interface AuthContextProps {
  isAuthenticated: boolean;
  changeToLogged(): Promise<void>;
  handleLogout(): Promise<void>;
}
