import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      {/* prefetch off, so the click is what loads /other's chunks */}
      <Link href="/other" prefetch={false}>
        Go to /other
      </Link>
    </main>
  )
}
