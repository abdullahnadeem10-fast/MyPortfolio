import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Reading", href: "/reading" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-primary text-sm font-bold text-white transition-colors hover:bg-mint-dark"
          aria-label="Home"
        >
          AN
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-mint-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-mint-primary"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <a
          href="/Abdullah_CV.pdf"
          download
          className="rounded-lg border border-mint-primary bg-surface px-4 py-2 text-sm font-medium text-mint-dark transition-colors hover:bg-mint-primary hover:text-white"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
