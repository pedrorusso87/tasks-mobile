export class UserLoginRequest {
  username: string;
  password: string;
}

export class UserLoginResponse {
  username: string;
  createdDate: string;
  lastLoginDate: string;
  role: string;
  status: string;
}
