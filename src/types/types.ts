export interface LoginFormData {
  username: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: number;
  access: string;
  refresh: string;
}

export interface SignupResponse {
  email: string;
  username: string;
  password: string;
}
