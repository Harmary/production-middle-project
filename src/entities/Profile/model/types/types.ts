import { Country, Currency } from 'shared/const/common';

export interface Profile {
  id: number;
  name: string;
  lastname: string;
  username: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  avatar: string;
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
}
