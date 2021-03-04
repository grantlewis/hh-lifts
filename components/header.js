import Link from 'next/link'

export default function Header() {
  return (
    <header className="tracking-tight md:tracking-tighter leading-tight mb-2 mt-6 pb-4 border-b-2">
      <nav className="container mx-auto px-5 flex items-center">
        <div className="flex-1">
          <Link href="/">
            <img src="/assets/HHLifts.png" alt="HH Lifts" className="h-10" />
          </Link>
        </div>
        <div className="flex-1 space-x-4 text-center">
          <Link href="/about">
            about
          </Link>
          <Link href="/archive">
            archive
          </Link>
        </div>
        <div className="flex-1 text-right">
          train. healthy. habits.
        </div>
      </nav>
    </header>
  )
}
