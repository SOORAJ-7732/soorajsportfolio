import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Menu, X, ArrowUp, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between"
      >
        <Link to="/" className="min-w-0 text-lg font-bold tracking-tight">
          Sooraj<span className="text-primary">.</span>S
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground text-sm" }}
            >
              Resume
            </Link>
          </li>
          <li>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Download size={15} aria-hidden="true" /> Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border lg:hidden"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="glass border-t border-border lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/resume" onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export function SocialLinks({ size = 18 }: { size?: number }) {
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
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-foreground"
          >
            <Icon size={size} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center">
        <SocialLinks />
        <div>
          <p className="text-sm text-foreground">© 2026 Sooraj S</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Designed with passion for Software Engineering and Artificial Intelligence.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          <ArrowUp size={15} aria-hidden="true" /> Back to Top
        </button>
      </div>
    </footer>
  );
}
