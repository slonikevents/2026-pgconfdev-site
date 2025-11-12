export async function pgeu_data(name) {
  const root =
    'https://www.pgevents.ca/events/admin/pgconfdev2026/tokendata/6a28e5f09fa47669593ec44f4723cc244ffa8fa26ea2c70cfaed841c179822e4/';

  const response = await fetch(root + '/' + name);
  if (!response.ok) {
    throw new Error(`HTTP Status: ${response.status}`);
  }
  return await response.json();
}
