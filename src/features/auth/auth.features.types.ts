export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  full_name: string;
  phone: string;
};

export type LoginResponse = {
  success: boolean;
  token: string;
};

export type RegisterResponse = {
  success: boolean;
};
