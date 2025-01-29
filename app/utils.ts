export function cx(...args: unknown[]) {
  return args
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim();
}

// see lodash implementation
// return true if value is null or undefined
export function isNil(value: any) {
  return value == null;
}

// simpler version of lodash throttle
export function throttle(callback: Function, limit: number) {
  var waiting = false;
  return function (this: any, ...args: any[]) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}
