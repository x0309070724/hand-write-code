// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeoutMS) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeoutMS);
  });

(async () => {
  // 声明即执行的 async 函数表达式
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      await sleep(1000);
    }
    console.log(new Date(), i);
  }
  await sleep(1000);
  console.log(new Date(), i);
})();
