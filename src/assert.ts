import { NullPointerException, AssertionException } from "./exceptions";

export default class Assert {
  static assertNotNull<T>(t: T): T {
    if (!t) throw new NullPointerException("Null Pointer Exception!");
    else return t;
  }

  static assertTypeOf<T>(t: T, expected: string): T {
    if (!(typeof t === expected)) {
      throw new AssertionException(
        `Woah, I didn't expect a ${typeof t}, it should be ${expected} `
      );
    } else {
      return t;
    }
  }

  public static isNumber(x: any): x is number {
    return typeof x === "number";
  }

  public static isString(x: any): x is string {
    return typeof x === "string";
  }

  public static isBoolean(x: any): x is boolean {
    return typeof x === "boolean";
  }
}
