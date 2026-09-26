import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/data/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Sooraj S | Software Engineer Portfolio" },
      {
        name: "description",
        content:
          "View and download the resume of Sooraj S, final-year B.Tech IT student and aspiring software engineer skilled in Java, Python and AI.",
      },
      { property: "og:title", content: "Resume — Sooraj S" },
      {
        property: "og:description",
        content: "Download the resume of Sooraj S, aspiring software engineer and AI enthusiast.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/resume" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Resume</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Sooraj S</h1>
            <p className="mt-1 text-muted-foreground">Aspiring Software Engineer</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild className="h-11">
              <a href={PROFILE.resume} download="Sooraj_S_Resume.pdf">
                <Download aria-hidden="true" /> Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11">
              <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden="true" /> View PDF
              </a>
            </Button>
          </div>
        </div>

        <article className="border border-border bg-card px-5 py-8 text-sm leading-relaxed text-card-foreground shadow-[var(--shadow-card)] sm:px-10 sm:py-10">
          <header className="border-b border-border pb-6 text-center">
            <h2 className="text-2xl font-bold text-foreground">Sooraj S</h2>
            <div className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 text-muted-foreground">
              <a className="hover:text-primary hover:underline" href={`tel:${PROFILE.phone.replaceAll(" ", "")}`}>9345715909</a>
              <span aria-hidden="true">·</span>
              <a className="hover:text-primary hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </div>
            <div className="mt-1 flex flex-wrap justify-center gap-x-2 gap-y-1 text-muted-foreground">
              <a className="break-all hover:text-primary hover:underline" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/sooraj-s-7440912aa</a>
              <span aria-hidden="true">·</span>
              <a className="break-all hover:text-primary hover:underline" href={PROFILE.github} target="_blank" rel="noopener noreferrer">github.com/SOORAJ-7732</a>
            </div>
          </header>

          <p className="mt-6 text-muted-foreground">Aspiring Software Engineer with a strong academic background in Information Technology and hands-on project experience in AI/ML. Skilled at solving complex problems through analytical thinking and programming, with a passion for delivering impactful, technology-driven solutions.</p>

          <ResumeSection title="Education">
            <ResumeEntry title="B.Tech, Information Technology" date="2023 – 2027" detail="Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College · CGPA 7.77/10" />
            <ResumeEntry title="12th (Senior Secondary Examination)" date="2022 – 2023" detail="Jaya Matriculation Higher Secondary School · Tamil Nadu State Board · 79.33%" />
            <ResumeEntry title="10th (Secondary Examination)" date="2020 – 2021" detail="Jaya Matriculation Higher Secondary School · Tamil Nadu State Board · 100%" />
          </ResumeSection>

          <ResumeSection title="Technical Skills">
            <ul className="space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Programming Languages:</strong> Java, Python</li>
              <li><strong className="text-foreground">Database:</strong> MySQL, PostgreSQL</li>
              <li><strong className="text-foreground">Tools &amp; Automation:</strong> N8N (AI Agent Building)</li>
            </ul>
          </ResumeSection>

          <ResumeSection title="Internships">
            <ResumeEntry title="Artificial Intelligence Intern, Top Tech Developers" date="11 Jun – 25 Jul 2025" />
            <ResumeBullets items={[
              "Worked on AI-focused tasks, gaining hands-on exposure to core concepts and practical implementation.",
              "Assisted in building, testing and evaluating AI/ML models; collaborated with the team to debug outputs and document findings.",
            ]} />
          </ResumeSection>

          <ResumeSection title="Academic Projects">
            <ResumeEntry title="Employee Payroll Management System" date="Apr 2026 – 30 Jul 2026" detail="Java SE 17 · Java Swing · AWT" />
            <p className="text-muted-foreground">Employee management, payroll processing and payslip generation with secure login and CSV storage.</p>
            <ResumeBullets items={[
              "Add, update, search and delete employee records.",
              "Automates salary calculation with allowances and deductions.",
              "Generates printable payslips and an interactive payroll dashboard.",
            ]} />
            <div className="mt-5"><ResumeEntry title="Deep Fake Detector using Python & Deep Learning" date="Sep 2024 – Feb 2025" detail="Python · OpenCV · TensorFlow/Keras · CNN" /></div>
            <p className="text-muted-foreground">CNN-based system to detect deepfake videos and images; trained and optimized on public datasets.</p>
            <div className="mt-5"><ResumeEntry title="AI Health Assistant System – Symptom Checker & Diet Recommendation" date="Sep 2025 – 2026" detail="Python · TypeScript · Mistral 7B · LoRA" /></div>
            <ResumeBullets items={[
              "Predicts possible health conditions from symptoms and gives personalized diet recommendations.",
              "Offers a user-friendly system for quick, effective health guidance.",
            ]} />
          </ResumeSection>

          <ResumeSection title="Achievements">
            <ResumeEntry title="Best Idea Presentation Award – Internal Smart India Hackathon" date="2023" />
            <p className="text-muted-foreground">Awarded for “Optimizing Riding Quality” by the Institution Innovation Council, Vel Tech High Tech Engineering College, Chennai.</p>
            <div className="mt-4"><ResumeEntry title="IBM Z Datathon 2024 – Global Datathon Event" date="2024" /></div>
            <p className="text-muted-foreground">Hosted by Shooting Stars Foundation and powered by IBM; applied data analysis to real-world datasets and earned a Certificate of Appreciation.</p>
            <div className="mt-4"><ResumeEntry title="Innovation Excellence Award – Mini Project Review" date="11 & 13 Oct 2025" /></div>
            <p className="text-muted-foreground">Recognized for the AI Health Assistant System at Vel Tech High Tech Engineering College, Avadi, Chennai; presented at the Mini Project Review by AICTE IDEA Lab and Institution&apos;s Innovation Council.</p>
          </ResumeSection>

          <ResumeSection title="Soft Skills">
            <p className="text-muted-foreground">Time Management · Communication · Problem Solving</p>
          </ResumeSection>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-8"><h3 className="mb-4 border-b border-border pb-2 text-base font-bold text-primary">{title}</h3>{children}</section>;
}

function ResumeEntry({ title, date, detail }: { title: string; date: string; detail?: string }) {
  return <div className="mb-3"><div className="flex flex-wrap items-baseline justify-between gap-x-4"><h4 className="font-semibold text-foreground">{title}</h4><span className="text-xs text-muted-foreground">{date}</span></div>{detail ? <p className="mt-1 text-muted-foreground">{detail}</p> : null}</div>;
}

function ResumeBullets({ items }: { items: string[] }) {
  return <ul className="ml-5 list-disc space-y-1 text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
