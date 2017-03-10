export interface User{
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  address: string;
  avatar_url: string;
  phone: string;
  role: string;
  last_logged_in: Date;
  status: number;
}
