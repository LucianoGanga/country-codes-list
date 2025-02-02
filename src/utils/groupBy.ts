/**
 * Groups an array by a specified key.
 * @param array - The array to group.
 * @param key - The key to group the array by.
 * @returns An object where each key is a unique value from the array, and each value is an array of items from the original array that match the key.
 */
export default function groupBy<T>(
  array: T[],
  key: keyof T
): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}
