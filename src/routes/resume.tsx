import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
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
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <SectionHeading
          eyebrow="Resume"
          title="Curriculum Vitae"
          subtitle="A complete overview of my education, internship experience, technical skills and projects."
        />

        <Reveal className="mb-8 flex flex-wrap justify-center gap-3">
          <a
            href={PROFILE.resume}
            download="Sooraj_S_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50"
          >
            <ExternalLink size={16} aria-hidden="true" /> Open in New Tab
          </a>
        </Reveal>

        <Reveal>
          <div className="soft-card overflow-hidden rounded-3xl p-2">
            <object
              data={PROFILE.resume}
              type="application/pdf"
              title="Resume of Sooraj S"
              className="h-[70vh] min-h-[520px] w-full rounded-2xl bg-secondary"
            >
              <p className="p-8 text-center text-sm text-muted-foreground">
                Your browser can&apos;t display the PDF inline.{" "}
                <a href={PROFILE.resume} className="text-primary underline">
                  Download the resume
                </a>{" "}
                instead.
              </p>
            </object>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
