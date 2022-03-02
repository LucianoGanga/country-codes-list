// Types for https://www.npmjs.com/package/country-codes-list
// by jakeisnt, Feb. 2022

declare module 'country-codes-list' {
  enum CountryProperty {
    countryNameEn = 'countryNameEn',
    countryNameLocal = 'countryNameLocal',
    countryCode = 'countryCode',
    currencyCode = 'currencyCode',
    currencyNameEn = 'currencyNameEn',
    tinType = 'tinType',
    tinName = 'tinName',
    officialLanguageCode = 'officialLanguageCode',
    officialLanguageNameEn = 'officialLanguageNameEn',
    officialLanguageNameLocal = 'officialLanguageNameLocal',
    countryCallingCode = 'countryCallingCode',
    region = 'region',
    flag = 'flag',
  }

  type CountryData = {
    [CountryProperty.countryNameEn]: string,
    [CountryProperty.countryNameLocal]: string,
    [CountryProperty.countryCode]: string,
    [CountryProperty.currencyCode]: string,
    [CountryProperty.currencyNameEn]: string,
    [CountryProperty.tinType]: string,
    [CountryProperty.tinName]: string,
    [CountryProperty.officialLanguageCode]: string,
    [CountryProperty.officialLanguageNameEn]: string,
    [CountryProperty.officialLanguageNameLocal]: string,
    [CountryProperty.countryCallingCode]: string,
    [CountryProperty.region]: string,
    [CountryProperty.flag]: string,
  };

  type Filter<T> = (element: T, index: number, array: T[]) => T[];

  type CustomArraySettings = {
    sortDataBy?: CountryProperty,
    sortBy?: any,
    filter?: Filter<CountryData>,
  };

  export function all(): CountryData[];

  export function filter(countryProperty: CountryProperty, value: string): CountryData[];

  export function findOne(countryProperty: CountryProperty, value: string): CountryData;

  export function customArray(
    fields?: { name?: string, value?: string },
    settings?: CustomArraySettings
  ): string[];

  export function customList(
    key?: CountryProperty,
    label?: string,
    settings?: CustomArraySettings,
  ): { [CountryProperty]: string };
}
