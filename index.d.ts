// Types for https://www.npmjs.com/package/country-codes-list
// by jakeisnt, Feb. 2022

declare module 'country-codes-list' {

  export type CountryData = {
    countryNameEn: string
    countryNameLocal: string
    countryCode: string
    currencyCode: string
    currencyNameEn: string
    tinType: string
    tinName: string
    officialLanguageCode: string
    officialLanguageNameEn: string
    officialLanguageNameLocal: string
    countryCallingCode: string
    region: string
    flag: string
  }

  export type CountryProperty = keyof CountryData

  type Filter<T> = (element: T, index: number, array: T[]) => T[]

  type CustomArraySettings = {
    sortDataBy?: CountryProperty
    sortBy?: any
    filter?: Filter<CountryData>
  }

  export function all(): CountryData[]

  export function filter(
    countryProperty: CountryProperty,
    value: string,
  ): CountryData[]

  export function findOne(
    countryProperty: CountryProperty,
    value: string,
  ): CountryData

  export function customArray(
    fields?: Record<string, string>,
    settings?: CustomArraySettings,
  ): Record<string, string>[]

  export function customList(
    key?: CountryProperty,
    label?: string,
    settings?: CustomArraySettings,
  ): { [key in CountryProperty]: string }
}
