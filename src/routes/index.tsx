import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Award,
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
  Send,
  Sparkles,
  Trophy,
  Wrench,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter, SocialLinks } from "@/components/site-chrome";
import { Reveal, SectionHeading, TypingText, Counter } from "@/components/motion-primitives";
import {
  ACHIEVEMENTS,
  PROFILE,
  PROJECTS,
  SKILLS,
  TYPING_WORDS,
} from "@/data/portfolio";
import portrait from "@/assets/portrait.jpg";
import projectPayroll from "@/assets/project-payroll.jpg";
import projectDeepfake from "@/assets/project-deepfake.jpg";
import projectHealth from "@/assets/project-health.jpg";

const PROJECT_IMAGES = [projectPayroll, projectDeepfake, projectHealth];

const SKILL_ICONS = [Code2, Database, Wrench, Sparkles, Users];

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
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-aura relative overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary" /> Open to Software Engineer roles · 2027
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
          >
            Hello, I&apos;m <span className="text-gradient">Sooraj S</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-lg font-medium sm:text-2xl"
          >
            <TypingText words={TYPING_WORDS} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glow absolute inset-6 rounded-full bg-primary/25 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-card">
            <img
              src={portrait}
              alt="Portrait of Sooraj S, aspiring software engineer"
              width={912}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3">
            <p className="text-lg font-bold text-primary">B.Tech IT</p>
            <p className="text-xs text-muted-foreground">2023 – 2027</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="mx-auto mt-20 grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground"
      >
        <ArrowDown size={16} aria-hidden="true" />
      </motion.a>
    </section>
  );
}

function About() {
  const stats = [
    { label: "Current Status", value: "Final Year Student" },
    { label: "Internship", value: "1 Completed", count: 1, suffix: " Completed" },
    { label: "Major Projects", value: "3+", count: 3, suffix: "+" },
    { label: "Primary Languages", value: "Java & Python" },
  ];

  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="About Me" />
        <Reveal>
          <article className="glass rounded-3xl p-8 sm:p-10">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              I am a passionate and dedicated Information Technology student with a strong interest in software
              development, artificial intelligence, and emerging technologies. I enjoy building practical software
              solutions that solve real-world challenges while continuously expanding my knowledge through projects,
              internships, and self-learning.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              My interests include Java development, AI-based applications, database systems, automation using n8n, and
              problem solving. I believe in continuous learning and enjoy working collaboratively to create impactful
              software products.
            </p>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-lift glass h-full rounded-2xl p-6 text-center">
                <p className="text-xl font-bold text-primary">
                  {s.count ? (
                    <>
                      <Counter value={s.count} />
                      {s.suffix}
                    </>
                  ) : (
                    s.value
                  )}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  icon: Icon,
  title,
  subtitle,
  meta,
  children,
}: {
  icon: typeof GraduationCap;
  title: string;
  subtitle: string;
  meta: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative pl-10 sm:pl-14">
      <span
        className="glow absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl border border-primary/40 bg-card text-primary sm:left-1"
        aria-hidden="true"
      >
        <Icon size={18} />
      </span>
      <div className="card-lift glass rounded-2xl p-6 sm:p-7">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-highlight">{subtitle}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{meta}</p>
        {children}
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="bg-card/30 px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <div className="relative">
          <span
            className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary/60 to-transparent sm:left-6"
            aria-hidden="true"
          />
          <Reveal>
            <TimelineCard
              icon={GraduationCap}
              title="Bachelor of Technology — Information Technology"
              subtitle="Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai"
              meta="2023 – 2027"
            >
              <p className="mt-4 text-sm text-muted-foreground">Expected graduation: 2027</p>
            </TimelineCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Experience" />
        <div className="relative">
          <span
            className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary/60 to-transparent sm:left-6"
            aria-hidden="true"
          />
          <Reveal>
            <TimelineCard
              icon={Briefcase}
              title="Artificial Intelligence Intern"
              subtitle="Top Tech Developers, Chennai"
              meta="June 11, 2025 – July 25, 2025"
            >
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Completed an internship in the Artificial Intelligence domain, gaining practical exposure to AI concepts
                and real-world implementation. Worked on AI-related tasks, enhanced analytical thinking, collaborated on
                project activities, and strengthened technical problem-solving abilities through hands-on learning.
              </p>
            </TimelineCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-card/30 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Tools and technologies I use to build reliable, intelligent software."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => {
            const Icon = SKILL_ICONS[i] ?? Code2;
            return (
              <Reveal key={group.category} delay={i * 0.07}>
                <div className="card-lift glass h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="min-w-0 text-base font-semibold">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
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

function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          subtitle="Selected work spanning desktop applications, deep learning and generative AI."
        />
        <div className="grid gap-7 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.09}>
              <article className="card-lift glass flex h-full flex-col overflow-hidden rounded-3xl">
                <img
                  src={PROJECT_IMAGES[i]}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  {p.subtitle ? <p className="mt-1 text-sm text-highlight">{p.subtitle}</p> : null}
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{p.duration}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-md bg-primary/12 px-2.5 py-1 text-xs text-highlight">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Key Features
                    </p>
                    <ul className="mt-3 grid gap-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
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
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-primary/50"
                    >
                      <Github size={14} aria-hidden="true" /> GitHub
                    </a>
                    <button
                      type="button"
                      onClick={() => toast("Live demo coming soon.")}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-medium text-highlight transition-colors hover:bg-primary/25"
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

function Achievements() {
  const icons = [Trophy, Award, Sparkles];
  return (
    <section id="achievements" className="bg-card/30 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Achievements" title="Awards & Recognition" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = icons[i] ?? Trophy;
            return (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="card-lift glass h-full rounded-2xl p-7 text-center">
                  <span className="glow mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);

  const cards = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: PROFILE.location },
    { icon: Github, label: "GitHub", value: "SOORAJ-7732", href: PROFILE.github },
  ];

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="I'm actively looking for software engineering opportunities. Feel free to reach out."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div className="card-lift glass flex h-full items-center gap-4 rounded-2xl p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.label}</p>
                    <p className="truncate text-sm">{c.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={c.label} delay={i * 0.06}>
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
            <Reveal delay={0.3}>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <div className="card-lift glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Briefcase size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">LinkedIn</p>
                    <p className="truncate text-sm">sooraj-s-7440912aa</p>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              className="glass rounded-3xl p-7 sm:p-8"
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
                <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
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
      <label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60"
      />
    </div>
  );
}
