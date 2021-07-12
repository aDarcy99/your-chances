export function roundNumberToDecimal(Num) {
  if (Num < 0.0001) {
      return Number(Num.toFixed(6))
  }
  if (Num < 0.01) {
      return Number(Num.toFixed(4));
  }
  if (Num < 1) {
      return Number(Num.toFixed(2));
  }
  if (Num > 1) {
      return Number(Num.toFixed(1));
  }
}