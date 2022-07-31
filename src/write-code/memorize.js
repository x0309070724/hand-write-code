function memoize(fn) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    var value = cache[key];
    if (!value) {
      value = [fn.apply(null, arguments)]; // 放在一个数组中，方便应对 undefined，null 等异常情况
      cache[key] = value;
    }
    return value[0];
  };
}

const fibonacci = memoize((n) =>
  n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
);
console.log(fibonacci(4)); // 执行后缓存了 fibonacci(2), fibonacci(3),  fibonacci(4)
console.log(fibonacci(10)); // fibonacci(2), fibonacci(3),  fibonacci(4) 的结果直接从缓存中取出，同时缓存其他的
