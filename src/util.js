export default function formatCurrency(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + ' ';
}

export function increasePrice(a, b) {
  return a.price > b.price ? 1 : -1;
}

export function decreasePrice(a, b) {
  return a.price < b.price ? 1 : -1;
}

export function increaseId(a, b) {
  return a.id < b.id ? 1 : -1;
}