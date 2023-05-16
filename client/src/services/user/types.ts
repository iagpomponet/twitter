export interface UserPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UserI {
  id: string;
  fullName: string;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  profilePic: string;
}
