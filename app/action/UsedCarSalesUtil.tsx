
export function formatSaleDateDate(saleDate: string): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(saleDate);
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}