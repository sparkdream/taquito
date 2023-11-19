declare module 'axios/unsafe/core/buildFullPath' {
  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   *
   * @returns {string} The combined full path
   */
  export default function buildFullPath(baseURL: string, requestedURL: string): string;
}

declare module 'axios/unsafe/core/settle' {
  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   *
   * @returns {object} The response.
   */
  export default function settle(resolve: Function, reject: Function, response: object): object;
}

declare module 'axios/unsafe/helpers/buildURL' {
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @param {?object} options
   *
   * @returns {string} The formatted url
   */
  export default function buildURL(url: string, params: object, options?: object | null): string;
}

declare module 'axios/unsafe/platform/common/utils' {
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   *
   * @returns {boolean}
   */
  export const hasStandardBrowserEnv: boolean;
}

declare module 'axios/unsafe/utils' {
  /**
   * Determine if a value is a FormData
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is FormData, otherwise false
   */
  export const isFormData: (thing: any) => boolean;

  /**
   * Determine if a value is an undefined Object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is an undefined Object, otherwise false
   */
  export const isUndefined: (thing: any) => boolean;

  // Declare and export the _exported object in a single line
  const _exported: {
    isFormData: (thing: any) => boolean;
    isUndefined: (thing: any) => boolean;
  };

  export { _exported as default };
}
