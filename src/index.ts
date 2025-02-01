import groupBy from "./utils/groupBy";
import supplant from "./utils/supplant";
import countriesData, { CountryData } from "./countriesData";

export type { CountryData };

export const utils = {
  groupBy,
};

export function all(): CountryData[] {
  return countriesData;
}

export function filter(
  countryProperty: keyof CountryData,
  value: string
): CountryData[] {
  return countriesData.filter(
    (countryData: CountryData) => countryData[countryProperty] === value
  );
}

export function findOne(
  countryProperty: keyof CountryData,
  value: string
): CountryData | undefined {
  return countriesData.find(
    (countryData: CountryData) => countryData[countryProperty] === value
  );
}

export function customArray(
  fields: Record<string, string> = {
    name: "{countryNameEn} ({countryCode})",
    value: "{countryCode}",
  },
  {
    sortBy,
    sortDataBy,
    filter: filterFunc,
  }: {
    sortBy?: keyof CountryData;
    sortDataBy?: keyof CountryData;
    filter?: (cd: CountryData) => boolean;
  } = {}
) {
  const finalCollection: Record<string, string>[] = [];
  let data: CountryData[] = countriesData;
  if (typeof filterFunc === "function") {
    data = data.filter(filterFunc);
  }

  if (sortDataBy) {
    const collator = new Intl.Collator([], { sensitivity: "accent" });
    data.sort((a: CountryData, b: CountryData) =>
      collator.compare(a[sortDataBy] as string, b[sortDataBy] as string)
    );
  }

  data.forEach((countryData: CountryData) => {
    const collectionObject: Record<string, string> = {};
    for (const field in fields) {
      collectionObject[field] = supplant(fields[field], countryData);
    }
    finalCollection.push(collectionObject);
  });

  if (sortBy && fields[sortBy as string]) {
    const collator = new Intl.Collator([], { sensitivity: "accent" });
    finalCollection.sort((a, b) =>
      collator.compare(a[sortBy as string], b[sortBy as string])
    );
  }

  return finalCollection;
}

export function customList(
  key: keyof CountryData = "countryCode",
  label: string = "{countryNameEn} ({countryCode})",
  { filter: filterFunc }: { filter?: (cd: CountryData) => boolean } = {}
) {
  const finalObject: Record<string, string> = {};
  let data: CountryData[] = countriesData;
  if (typeof filterFunc === "function") {
    data = data.filter(filterFunc);
  }
  data.forEach((countryData: CountryData) => {
    const value = supplant(label, countryData);
    finalObject[String(countryData[key])] = value;
  });

  return finalObject;
}
