export async function getData() {
  const response = await fetch("https://hn.algolia.com/api/v1/search?query=react-fetch");
  if(response.ok) return response.json();
  throw response;
}
