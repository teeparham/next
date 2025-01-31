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
export function throttle<F extends (...args: any[]) => void>(
  callback: F,
  limit: number
) {
  let waiting = false;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}
