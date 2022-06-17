function sumBigNumber(a, b) {
  let res = "";
  let temp = 0;

  a = a.split("");
  b = b.split("");

  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop(); // 12 11 9
    res = (temp % 10) + res; // 2 12 912
    temp = temp > 9;
  }
  return res.replace(/^0+/, "");
}

console.log("res", sumBigNumber("123", "789"));
