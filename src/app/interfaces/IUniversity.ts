export interface IUniversity {
  _id?: Object;
  alpha_two_code: string;
  name: string;
  web_pages: string[];
  'state-province': string | null;
  domains: string[];
  country: string;
}