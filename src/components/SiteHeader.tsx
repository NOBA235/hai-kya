import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center px-4 py-4 sm:px-6">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-sm font-display text-2xl font-semibold tracking-tight text-brand"
      >
        Hai Kya?
      </Link>
    </header>
  );
}
