export interface ContactQueryParams {
  loginAfterCreate?: boolean;
  id: string;
}

export interface ContactIdParams {
  id: string;
}

export interface ContactResponse {
  email: string;
  isApproved: boolean;
}
