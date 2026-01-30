export async function load({ parent }) {
  return (await parent()).schedule[1];
}
