import { BASE_URL } from "../const"

export const dynamic = 'force-static'

export default async function SSGPage() {
  const res = await fetch(`${BASE_URL}/3`)
  const data = await res.json()
  const timestamp = new Date().toLocaleString()

  return (
    <div>
      <h1>SSG Page</h1>
      <p style={{marginTop: '16px', marginBottom: '12px'}}>
        Data fetched at: <strong>{timestamp}</strong>
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}