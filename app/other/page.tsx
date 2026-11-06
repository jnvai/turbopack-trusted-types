'use client'

import { useState } from 'react'

// A client component, so /other has chunks of its own that the browser loads on navigation.
export default function Other() {
  const [count, setCount] = useState(0)
  return (
    <main>
      <h1>Other</h1>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </main>
  )
}
