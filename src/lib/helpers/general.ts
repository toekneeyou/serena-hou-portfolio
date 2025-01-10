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
