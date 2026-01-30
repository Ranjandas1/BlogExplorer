import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-gray-200 
           bg-white/80 backdrop-blur-md text-black"
    >
      <nav className="container flex items-center justify-between h-14 mx-auto px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white">
            <span className="text-sm font-bold ">BE</span>
          </div>
          <span className="font-semibold text-lg hidden sm:inline">
            BlogExplorer
          </span>
        </Link>
      </nav>
    </header>
  );
}
