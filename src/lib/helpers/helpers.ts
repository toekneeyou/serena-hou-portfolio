type ClassNameArg =
  | Array<ClassNameArg>
  | { [classname: string]: boolean }
  | string
  | undefined;

/**
 * Combines all arguments and returns a string.
 *
 * The argument can either be a string, an object with a class as key
 * and a truthy/falsy value, or an array/nested array containing
 * those two types.
 */
export const classnames = (
  ...args: Array<ClassNameArg>
): undefined | string => {
  if (args.filter(Boolean).length === 0) return undefined;

  const classNames: string[] = [];

  const recursivelyHandleArgs = (arg: ClassNameArg) => {
    if (Array.isArray(arg)) {
      arg.forEach(recursivelyHandleArgs);
    } else if (typeof arg === "object" && arg !== null) {
      Object.entries(arg).forEach(([key, value]) => {
        if (key && value) {
          classNames.push(key);
        }
      });
    } else if (typeof arg === "string") {
      if (arg) classNames.push(arg.trim());
    } else {
      if (arg) classNames.push(arg);
    }
  };

  args.forEach(recursivelyHandleArgs);

  return classNames.join(" ");
};

/**
 * Detects whether the user is using a mobile browser based on user agent substring matching.
 */
export function isMobileBrowser(): boolean {
  const userAgent = navigator.userAgent;

  // Common mobile device user agent substrings
  const mobileRegex =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

  return userAgent ? mobileRegex.test(userAgent) : false;
}
/**
 * Compares two values to see if they are equal and returns the strings 'true' or 'false'.
 */
export const isAriaHidden = (a: number | string, b: number | string) => {
  const isCurr = a === b;
  return isCurr ? "false" : "true";
};

export const getCloudUrl = (filename: string) => {
  return `https://tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud/${filename}`;
};
