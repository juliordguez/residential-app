export interface ApiResponse<T> {
  type: string;
  status: string;
  message: T;
}


export interface LoginResponse {
  token: string;
}
