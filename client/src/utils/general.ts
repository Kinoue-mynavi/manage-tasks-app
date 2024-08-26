export const isNotNullable = <T>(o: T): o is Exclude<T, undefined | null> =>
  o !== undefined && o !== null;
