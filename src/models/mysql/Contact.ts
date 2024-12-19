export interface Contact {
  ownerId: string;
  sharedWith: string[];
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  profilePhoto?: string;
}
