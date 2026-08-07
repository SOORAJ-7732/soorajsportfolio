import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Play,
  Send,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter, SocialLinks } from "@/components/site-chrome";
import { Reveal, SectionHeading, TypingText, Counter } from "@/components/motion-primitives";
import { ACHIEVEMENTS, PROFILE, PROJECTS, SKILLS, TYPING_WORDS } from "@/data/portfolio";
import portrait from "@/assets/portrait.jpg";
import portraitCutoutAsset from "@/assets/sooraj-portrait.png.asset.json";

const portraitCutout = portraitCutoutAsset.url;
import projectPayroll from "@/assets/project-payroll.jpg";
import projectDeepfake from "@/assets/project-deepfake.jpg";
import projectHealth from "@/assets/project-health.jpg";

const PROJECT_IMAGES = [projectPayroll, projectDeepfake, projectHealth];
const SKILL_ICONS = [Code2, Database, Wrench, BrainCircuit, Users];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sooraj S — Aspiring Software Engineer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Sooraj S, final-year B.Tech IT student in Chennai. Java developer and AI enthusiast building payroll systems, deepfake detection and AI health assistants.",
      },
      { property: "og:title", content: "Sooraj S — Aspiring Software Engineer & AI Enthusiast" },
      {
        property: "og:description",
        content:
          "Projects, internship experience, technical skills and resume of Sooraj S, aspiring software engineer from Chennai, India.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sooraj S",
          jobTitle: "Aspiring Software Engineer",
          email: `mailto:${PROFILE.email}`,
          telephone: PROFILE.phone,
          address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
          sameAs: [PROFILE.github, PROFILE.linkedin],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
          },
          knowsAbout: ["Java", "Python", "Artificial Intelligence", "Machine Learning", "MySQL", "PostgreSQL"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Skills />
        <About />
        <Journey />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- HERO --------------------------------- */

function Hero() {
  return (
    <section id="home" className="hero-band relative overflow-hidden rounded-b-[2.5rem] px-5 pb-20 pt-32 sm:pt-36">
      <span className="absolute left-6 top-40 hidden h-28 w-2 dot-column text-primary-foreground/45 lg:block" aria-hidden="true" />
      <span className="absolute right-6 bottom-24 hidden h-28 w-2 dot-column text-primary-foreground/45 lg:block" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-[1.12] tracking-tight text-primary-foreground sm:text-5xl"
          >
            Hello, I&apos;m
            <br />
            Sooraj S An
            <br />
            <span className="text-accent">Aspiring Software Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg font-semibold text-primary-foreground/90"
          >
            <TypingText words={TYPING_WORDS} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-3 text-sm font-semibold text-primary-foreground"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/40">
                <Download size={15} aria-hidden="true" />
              </span>
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm font-semibold text-primary-foreground"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/40">
                <Play size={14} aria-hidden="true" />
              </span>
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8"
          >
            <SocialLinks onDark />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-md"
        >
          <span className="absolute -right-2 top-10 h-40 w-40 rounded-full bg-accent/85" aria-hidden="true" />
          <span className="absolute bottom-6 left-2 h-24 w-24 rounded-full bg-accent/60" aria-hidden="true" />
          <img
            src={portraitCutout}
            alt="Portrait of Sooraj S, aspiring software engineer"
            width={448}
            height={560}
            className="relative z-10 mx-auto w-full max-w-sm object-contain drop-shadow-2xl"
          />
          <div className="absolute bottom-8 right-0 z-20 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-[var(--shadow-lift)]">
            <span className="text-2xl font-bold text-primary">2027</span>
            <span className="text-xs leading-tight text-muted-foreground">
              Expected
              <br />
              Graduation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- SKILLS -------------------------------- */

function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Expertise! Let's check it out"
          subtitle="The languages, databases, tools and AI fundamentals I use to design and build reliable software solutions."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => {
            const Icon = SKILL_ICONS[i] ?? Code2;
            const featured = i === 1;
            return (
              <Reveal key={group.category} delay={i * 0.07}>
                <div
                  className={`card-lift h-full rounded-3xl p-8 ${
                    featured ? "bg-primary text-primary-foreground" : "soft-card bg-secondary"
                  }`}
                >
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl ${
                      featured ? "bg-primary-foreground/15 text-accent" : "bg-card text-primary"
                    }`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{group.category}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                          featured
                            ? "bg-primary-foreground/12 text-primary-foreground/90"
                            : "bg-card text-muted-foreground"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- ABOUT --------------------------------- */

function About() {
  return (
    <section id="about" className="bg-secondary/70 px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <span className="absolute inset-4 rounded-full bg-accent" aria-hidden="true" />
          <span
            className="absolute -inset-1 rounded-full border-2 border-dashed border-primary/40"
            aria-hidden="true"
          />
          <img
            src={portrait}
            alt="Sooraj S working on software projects"
            loading="lazy"
            width={912}
            height={1104}
            className="relative aspect-square w-full rounded-full object-cover object-top"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow">About Me</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Building Solutions, Not
            <br />
            Just Code
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            I am a passionate and dedicated Information Technology student with a strong interest in software
            development, artificial intelligence, and emerging technologies. I enjoy building practical software
            solutions that solve real-world challenges while continuously expanding my knowledge through projects,
            internships, and self-learning.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            My interests include Java development, AI-based applications, database systems, automation using n8n, and
            problem solving. I believe in continuous learning and enjoy working collaboratively to create impactful
            software products.
          </p>

          <div className="mt-7 space-y-4">
            <HighlightRow
              icon={Sparkles}
              tone="accent"
              title={
                <>
                  <Counter value={3} />+ Major Projects
                </>
              }
              text="Payroll management, deepfake detection and an AI health assistant."
            />
            <HighlightRow
              icon={Briefcase}
              tone="primary"
              title={
                <>
                  <Counter value={1} /> Internship Completed
                </>
              }
              text="Artificial Intelligence intern at Top Tech Developers, Chennai."
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Download CV <ArrowRight size={15} aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-medium text-muted-foreground">
              Final Year Student · Java &amp; Python
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HighlightRow({
  icon: Icon,
  title,
  text,
  tone,
}: {
  icon: typeof Sparkles;
  title: React.ReactNode;
  text: string;
  tone: "accent" | "primary";
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl p-5 ${
        tone === "accent" ? "bg-accent-soft" : "bg-primary-soft"
      }`}
    >
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
          tone === "accent" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        <Icon size={17} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

/* -------------------------- EDUCATION + EXPERIENCE ------------------------ */

function Journey() {
  const steps = [
    {
      icon: GraduationCap,
      label: "Education",
      title: "B.Tech Information Technology",
      meta: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai · 2023 – 2027",
      text: "Final-year student focused on software engineering, databases and applied artificial intelligence. Expected graduation in 2027.",
    },
    {
      icon: Briefcase,
      label: "Experience",
      title: "Artificial Intelligence Intern",
      meta: "Top Tech Developers, Chennai · June 11, 2025 – July 25, 2025",
      text: "Gained practical exposure to AI concepts and real-world implementation. Worked on AI-related tasks, enhanced analytical thinking, collaborated on project activities and strengthened technical problem-solving.",
    },
    {
      icon: Code2,
      label: "Next Step",
      title: "Software Engineer",
      meta: "Open to full-time roles · 2027",
      text: "Looking to join a product-driven engineering team where I can grow as a Java and AI developer while shipping impactful software.",
    },
  ];

  return (
    <section id="journey" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="My Education & Experience"
          subtitle="From classroom fundamentals to hands-on AI internship work, and where I'm headed next."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative h-full text-center">
                  {i < steps.length - 1 ? (
                    <ArrowRight
                      className="absolute -right-6 top-7 hidden text-accent md:block"
                      size={26}
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="eyebrow mt-5">{s.label}</p>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs font-medium text-accent-foreground/70">{s.meta}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ACHIEVEMENTS ------------------------------ */

function Achievements() {
  const icons = [Trophy, Award, Sparkles];
  return (
    <section id="achievements" className="bg-secondary/70 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Awards & Recognition"
          subtitle="Recognition earned through hackathons, datathons and innovation challenges."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = icons[i] ?? Trophy;
            return (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="card-lift soft-card h-full rounded-3xl p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent-foreground">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- PROJECTS ------------------------------- */

function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Digital Project Showcases"
          subtitle="Desktop applications, deep learning models and generative AI products I have designed and built."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.09}>
              <article className="card-lift soft-card flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="bg-secondary p-4">
                  <img
                    src={PROJECT_IMAGES[i]}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-44 w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  {p.subtitle ? <p className="mt-1 text-sm text-primary">{p.subtitle}</p> : null}
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {p.duration}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                  <div className="mt-5">
                    <p className="eyebrow">Key Features</p>
                    <ul className="mt-3 grid gap-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 pt-2">
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                    >
                      <Github size={14} aria-hidden="true" /> GitHub
                    </a>
                    <button
                      type="button"
                      onClick={() => toast("Live demo coming soon.")}
                      className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-5 py-2.5 text-xs font-semibold text-accent-foreground transition-transform hover:scale-105"
                    >
                      <ExternalLink size={14} aria-hidden="true" /> Demo
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CONTACT -------------------------------- */

function Contact() {
  const [sending, setSending] = useState(false);

  const cards = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: PROFILE.location },
    { icon: Github, label: "GitHub", value: "SOORAJ-7732", href: PROFILE.github },
    { icon: Briefcase, label: "LinkedIn", value: "sooraj-s-7440912aa", href: PROFILE.linkedin },
  ];

  return (
    <section id="contact" className="bg-secondary/70 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="I'm actively looking for software engineering opportunities. Feel free to reach out anytime."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div className="card-lift soft-card flex h-full items-center gap-4 rounded-2xl p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow">{c.label}</p>
                    <p className="truncate text-sm">{c.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={c.label} delay={i * 0.05}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <form
              className="soft-card rounded-3xl p-7 sm:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                const form = e.currentTarget;
                setTimeout(() => {
                  setSending(false);
                  form.reset();
                  toast.success("Thanks! Your message has been noted — I'll reply by email soon.");
                }, 700);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" type="text" placeholder="Your name" />
                <Field id="email" label="Email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mt-5">
                <Field id="subject" label="Subject" type="text" placeholder="What is this about?" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-2xl border border-input bg-secondary/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
              >
                <Send size={16} aria-hidden="true" /> {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-secondary/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </div>
  );
}
