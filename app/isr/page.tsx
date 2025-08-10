import { BASE_URL } from "../const"

export const revalidate = 10

export default async function ISRPage() {
  const res = await fetch(`${BASE_URL}/4`)
  const data = await res.json()
  const timestamp = new Date().toLocaleString()

  return (
    <div>
      <h1>ISR Page (revalidates every 10s)</h1>
      <p style={{marginTop: '16px', marginBottom: '12px'}}>
        Data fetched at: <strong>{timestamp}</strong>
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}