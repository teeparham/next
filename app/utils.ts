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
export function throttle(callback: (...args: any[]) => void, limit: number) {
  let waiting = false;
  return function () {
    if (!waiting) {
      // @ts-ignore this
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}
