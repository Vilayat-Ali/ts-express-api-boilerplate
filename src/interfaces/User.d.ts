export interface UserType {
  username: string;
  email: string;
  password: string;
  role: "Admin" | "User";
}

export interface UserTokenPayload {
  username: string;
  email: string;
  role: "Admin" | "User";
}
