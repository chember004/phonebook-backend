export interface UserQueryParams {
  loginAfterCreate?: boolean;
  id: string;
}

export interface UserIdParams {
  id: string;
}

export interface UserResponse {
  email: string;
  isApproved: boolean;
}
