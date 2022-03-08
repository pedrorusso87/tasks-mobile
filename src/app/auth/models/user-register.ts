export interface RegisteredUserState {
  registerPending: boolean;
  error: null;
  username: null;
}
export interface UserRegistrationRequest {
  username: string;
  role: string;
  password: string;
}
