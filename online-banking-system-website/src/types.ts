export enum UserType {
  CLIENT = "Client",
  BANKER = "Banker",
  ADMIN = "Admin",
}

export interface User {
  name: string;
  email: string;
  username: string;
  type: UserType;
  password: string;
}
