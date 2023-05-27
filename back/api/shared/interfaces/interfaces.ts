export interface Address {
  zipcode: number;
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}
export interface IUserErrorMessages  {
  UserAlreadyExists: string
  MissingRequiredFields: string
  InvalidAge: string
  UnknownError:string
  UserNotFound: string
};
