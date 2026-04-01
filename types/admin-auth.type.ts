export interface AdminLoginRequest {
  username: string;
  password: string;
}

export interface AdminLoginResponse {
  accessToken?: string;
  token?: string;
  expiresAt?: number;
  expiresInSeconds?: number;
  username?: string;
  adminId?: number | string;
}

export interface AdminAuthSession {
  username: string;
  accessToken: string | null;
  expiresAt: number;
}
