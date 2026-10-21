// * https://developer.themoviedb.org/docs/authentication-application
const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN
// * this is like ArrayList<String>: the function tmdbFetch have a type of date that receive and the parameters that are inside () is the properties that these type
// * And Record<string, string>: is like a dictionary: key: string, value: string

export async function tmdbFetch<T>(
  endpoint: string,
  params: Record<string, string>
): Promise<T> {
  const searchParams = new URLSearchParams({
    language: 'es-ES',
    ...params,
  })
  const url = `${BASE_URL}${endpoint}${searchParams.toString()}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json'
    },
  })
  if (!response.ok) throw new Error(`Error: ${response.status}: ${response.statusText}`)
  return response.json() as Promise<T>
}
