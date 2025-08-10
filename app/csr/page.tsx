'use client'

import { useEffect, useState } from 'react'
import { BASE_URL } from '../const';

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  }
  views: number;
  userId: number;
}

export default function CSRPage() {
  const [data, setData] = useState<Post | null>(null)
  const [timestamp, setTimestamp] = useState<string>('')

  useEffect(() => {
    setTimestamp(new Date().toLocaleString())
    fetch(`${BASE_URL}/1`)
      .then(res => res.json())
      .then(setData)
  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <div>
      <h1>CSR Page</h1>
      <p style={{marginTop: '16px', marginBottom: '12px'}}>
        Data fetched at: <strong>{timestamp}</strong>
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
