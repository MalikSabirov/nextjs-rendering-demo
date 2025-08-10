import { BASE_URL } from "../const"

export const dynamic = 'force-dynamic'

export default async function SSRPage() {
  const res = await fetch(`${BASE_URL}/2`, {
    cache: 'no-store'
  })
  const data = await res.json()
  const timestamp = new Date().toLocaleString()

  return (
    <div>
      <h1>SSR Page</h1>
      <p style={{marginTop: '16px', marginBottom: '12px'}}>
        Data fetched at: <strong>{timestamp}</strong>
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}