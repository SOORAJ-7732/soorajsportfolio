import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Menu, X, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#journey", label: "Journey" },
  { href: "/#projects", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-primary shadow-[var(--shadow-card)]" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 lg:flex lg:justify-between"
      >
        <Link to="/" className="min-w-0 text-xl font-bold tracking-tight text-primary-foreground">
          Sooraj<span className="text-accent"> S</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-primary-foreground/75 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className="text-sm font-medium text-primary-foreground/75 transition-colors hover:text-accent"
              activeProps={{ className: "text-sm font-medium text-accent" }}
            >
              Resume
            </Link>
          </li>
          <li>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex shrink-0 items-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary-foreground/25 text-primary-foreground lg:hidden"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="bg-primary lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 pb-5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-primary-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/resume"
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-primary-foreground/80"
              >
                Resume
              </Link>
            </li>
            <li className="pt-2">
              <a
                href={PROFILE.resume}
                download
                className="inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export function SocialLinks({ onDark = false }: { onDark?: boolean }) {
  const items = [
    { href: PROFILE.github, label: "GitHub profile", Icon: Github },
    { href: PROFILE.linkedin, label: "LinkedIn profile", Icon: Linkedin },
    { href: `mailto:${PROFILE.email}`, label: "Send an email", Icon: Mail },
  ];
  return (
    <ul className="flex items-center gap-3">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className={`grid h-11 w-11 place-items-center rounded-full transition-all hover:-translate-y-1 ${
              onDark
                ? "bg-primary-foreground/12 text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                : "bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="hero-band">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center">
        <SocialLinks onDark />
        <div>
          <p className="text-sm font-semibold text-primary-foreground">© 2026 Sooraj S</p>
          <p className="mt-1 text-sm text-primary-foreground/70">
            Designed with passion for Software Engineering and Artificial Intelligence.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          <ArrowUp size={15} aria-hidden="true" /> Back to Top
        </button>
      </div>
    </footer>
  );
}
