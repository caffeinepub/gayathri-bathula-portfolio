import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Clock,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    icon: Code2,
    label: "Programming Languages",
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    icon: Globe,
    label: "Web Development",
    skills: ["HTML5", "CSS3", "Responsive Web Design"],
  },
  {
    icon: Briefcase,
    label: "Backend (Basics)",
    skills: ["Node.js", "Express.js"],
  },
  {
    icon: Database,
    label: "Database",
    skills: ["MongoDB", "SQL"],
  },
  {
    icon: Cloud,
    label: "Cloud",
    skills: ["AWS EC2", "S3", "VPC", "EBS"],
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Figma"],
  },
];

const PROJECTS = [
  {
    title: "Handmade Wood E-Commerce Website",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rococo-lebkuchen-c4e729.netlify.app/",
    description: [
      "Designed and developed a responsive e-commerce website for handmade wood products",
      "Implemented smooth UI animations and transitions to enhance user experience",
      "Developed category-based product filtering for easier navigation",
      "Ensured mobile responsiveness and cross-browser compatibility",
      "Deployed on Netlify for live access",
    ],
  },
  {
    title: "Amazon Website Clone",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://unrivaled-parfait-e67a7b.netlify.app/",
    description: [
      "Developed a responsive clone of the Amazon homepage",
      "Implemented interactive UI components and layouts similar to the original website",
      "Used modern CSS techniques to ensure responsiveness across multiple devices",
    ],
  },
  {
    title: "Fertilizer Recommendation System",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveUrl: null,
    description: [
      "Built a web-based system that recommends fertilizers based on crop and soil inputs",
      "Developed frontend forms for user input collection",
      "Implemented backend APIs using Node.js and Express.js",
      "Used MongoDB to store crop and soil data",
      "Tested and validated APIs during development",
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "Networking Basics Certificate",
    issuer: "Cisco / Networking Academy",
    icon: Globe,
  },
  {
    name: "Data Analytics Certificate",
    issuer: "Google / Coursera",
    icon: Brain,
  },
  {
    name: "Essentials Certificate",
    issuer: "IT Essentials",
    icon: Star,
  },
];

const EDUCATION = [
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "SR University",
    year: "2024 – 2028",
    detail: "Currently Pursuing",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "TSBIE Board",
    year: "2024",
    detail: "Percentage: 97.9%",
    icon: BookOpen,
  },
  {
    degree: "SSC",
    institution: "State Board",
    year: "2022",
    detail: "CGPA: 9.7",
    icon: BookOpen,
  },
];

const SOFT_SKILLS = [
  { label: "Problem Solving", icon: Lightbulb },
  { label: "Analytical Thinking", icon: Brain },
  { label: "Team Collaboration", icon: Users },
  { label: "Communication", icon: MessageSquare },
  { label: "Time Management", icon: Clock },
];

// ─── FlipCard ───────────────────────────────────────────────────────────────

interface FlipCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
}

function FlipCard({ project, index }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const ocidMap = ["projects.item.1", "projects.item.2", "projects.item.3"];

  return (
    <div
      className={`flip-card cursor-pointer select-none ${flipped ? "flipped" : ""}`}
      data-ocid={ocidMap[index]}
      onClick={() => setFlipped((p) => !p)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((p) => !p);
      }}
    >
      <div className="flip-card-inner">
        {/* ── FRONT ── */}
        <div className="flip-card-front bg-card shadow-card border border-border flex flex-col">
          {/* Gradient header strip */}
          <div className="gradient-bg h-2 w-full rounded-t-2xl flex-shrink-0" />

          <div className="flex flex-col flex-1 p-6 gap-4">
            {/* Title */}
            <h3 className="text-lg font-bold text-foreground leading-tight font-display">
              {project.title}
            </h3>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="skill-badge text-xs font-semibold px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Live Demo button — FRONT ONLY */}
            <div className="mt-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity shadow-sm"
                  data-ocid={`projects.item.${index + 1}.button` as string}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                  <Code2 size={14} />
                  In Development
                </span>
              )}
            </div>

            {/* Flip hint */}
            <p className="text-xs text-muted-foreground mt-auto text-center opacity-60">
              Hover / tap to see details
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="flip-card-back flex flex-col"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.2 290), oklch(0.5 0.22 340))",
          }}
        >
          <div className="flex flex-col flex-1 p-6 gap-3">
            <h3 className="text-base font-bold text-white leading-tight font-display">
              {project.title}
            </h3>
            <div className="w-10 h-0.5 rounded-full bg-white/40" />
            <ul className="flex flex-col gap-2 overflow-y-auto flex-1">
              {project.description.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2 text-white/90 text-sm leading-relaxed"
                >
                  <CheckCircle
                    size={14}
                    className="text-white/70 flex-shrink-0 mt-0.5"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50 text-center mt-auto">
              Click / tap to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── NavBar ──────────────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="gradient-text font-display font-bold text-xl tracking-tight"
        >
          Gayathri Bathula
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:text-primary ${
                scrolled ? "text-foreground" : "text-white hover:text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? "" : "text-white"}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden nav-glass border-t border-border">
          <div className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        data-ocid="hero.section"
        className="hero-bg min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 relative overflow-hidden"
      >
        {/* Decorative orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl bg-white pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl bg-white pointer-events-none" />

        {/* Profile photo */}
        <div className="photo-ring mb-6 fade-in-up">
          <div
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.35 0.15 290), oklch(0.45 0.18 345))",
            }}
          >
            <img
              src="/assets/uploads/me-1-1.jpeg"
              alt="Bathula Gayathri"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-display tracking-tight fade-in-up delay-100">
          Bathula Gayathri
        </h1>

        <p className="mt-3 text-lg sm:text-xl text-white/85 font-medium fade-in-up delay-200">
          B.Tech – Computer Science Engineering (2nd Year)
        </p>

        <div className="flex items-center justify-center gap-2 mt-3 text-white/70 text-sm fade-in-up delay-300">
          <MapPin size={15} />
          <span>Hanamkonda, Telangana</span>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3 fade-in-up delay-400">
          {[
            "Aspiring Software Engineer",
            "Web Developer",
            "Problem Solver",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full border border-white/25 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social icons */}
        <div className="mt-7 flex gap-4 fade-in-up delay-500">
          <a
            href="mailto:gbathula55@gmail.com"
            className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-violet-DEFAULT transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/gayathribathula"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-violet-DEFAULT transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/bathula-gayatri-5a4994385/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-violet-DEFAULT transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 bounce-slow fade-in-up delay-600">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" data-ocid="about.section" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Briefcase size={22} />}>
            Professional Summary
          </SectionTitle>

          <div className="mt-8 relative">
            {/* Left gradient bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full gradient-bg" />
            <div className="pl-8 pr-0">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                  Computer Science undergraduate with a strong interest in
                  software engineering and problem solving. Experienced in
                  developing web applications using HTML, CSS, JavaScript, and
                  basic backend technologies like Node.js and Express.js.
                  Familiar with databases, cloud fundamentals, and programming
                  languages such as C, Java, and Python. Seeking opportunities
                  to apply technical skills, build scalable software systems,
                  and grow as a Software Engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section
        id="skills"
        data-ocid="skills.section"
        className="py-20 px-4 bg-secondary"
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={<Code2 size={22} />}>
            Technical Skills
          </SectionTitle>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.label}
                  className="bg-card rounded-2xl p-5 shadow-card border border-border hover:shadow-card-hover transition-shadow"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground font-display">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge text-xs font-medium px-3 py-1.5 rounded-full cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section
        id="projects"
        data-ocid="projects.section"
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<Code2 size={22} />}>Projects</SectionTitle>
          <p className="mt-2 text-sm text-muted-foreground">
            Hover over a card (or tap on mobile) to reveal the description
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <FlipCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────── */}
      <section
        id="certifications"
        data-ocid="certifications.section"
        className="py-20 px-4 bg-secondary"
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={<Award size={22} />}>Certifications</SectionTitle>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="cert-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-card"
                  data-ocid={`certifications.item.${i + 1}`}
                >
                  {/* Certificate icon with gradient ring */}
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground font-display leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  {/* Certified badge */}
                  <span className="inline-flex items-center gap-1.5 gradient-bg text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <CheckCircle size={12} />
                    Certified
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────── */}
      <section
        id="education"
        data-ocid="education.section"
        className="py-20 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <SectionTitle icon={<GraduationCap size={22} />}>
            Education
          </SectionTitle>

          <div className="mt-8 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[22px] top-6 bottom-6 w-0.5 gradient-bg rounded-full" />

            <div className="flex flex-col gap-8">
              {EDUCATION.map((edu, i) => {
                const Icon = edu.icon;
                return (
                  <div
                    key={edu.degree}
                    className="flex gap-6"
                    data-ocid={`education.item.${i + 1}`}
                  >
                    {/* Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="timeline-dot mt-1" />
                    </div>

                    {/* Card */}
                    <div className="bg-card rounded-2xl p-5 shadow-card border border-border flex-1 hover:shadow-card-hover transition-shadow">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <h3 className="font-bold text-base text-foreground font-display">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="inline-block text-xs font-semibold gradient-text">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                          <Icon size={12} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground/70">
                          {edu.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOFT SKILLS ──────────────────────────────────────── */}
      <section
        id="softskills"
        data-ocid="softskills.section"
        className="py-20 px-4 bg-secondary"
      >
        <div className="max-w-3xl mx-auto">
          <SectionTitle icon={<Star size={22} />}>Soft Skills</SectionTitle>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SOFT_SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.label}
                  className="flex items-center gap-3 bg-card rounded-full px-5 py-3 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-white" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">
                    {skill.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" data-ocid="contact.section" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <SectionTitle icon={<Mail size={22} />}>Contact</SectionTitle>

          <div className="mt-8 contact-card rounded-2xl p-8 shadow-card">
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Feel free to reach out — I'm open to internship and collaboration
              opportunities.
            </p>
            <div className="flex flex-col gap-4">
              <ContactRow
                icon={<Mail size={18} />}
                label="Email"
                value="gbathula55@gmail.com"
                href="mailto:gbathula55@gmail.com"
              />
              <ContactRow
                icon={<Github size={18} />}
                label="GitHub"
                value="github.com/gayathribathula"
                href="https://github.com/gayathribathula"
                external
              />
              <ContactRow
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                value="linkedin.com/in/bathula-gayatri-5a4994385"
                href="https://www.linkedin.com/in/bathula-gayatri-5a4994385/"
                external
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer
        data-ocid="footer.section"
        className="gradient-bg py-6 px-4 text-center"
      >
        <p className="text-white/90 text-sm">
          © {new Date().getFullYear()} Bathula Gayathri. All rights reserved.
        </p>
        <p className="text-white/55 text-xs mt-1">
          Built with{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

// ─── Helper components ───────────────────────────────────────────────────────

function SectionTitle({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold font-display section-title-bar gradient-text">
        {children}
      </h2>
    </div>
  );
}

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ContactRow({ icon, label, value, href, external }: ContactRowProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-all hover:-translate-y-0.5 group"
    >
      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <p className="text-sm font-semibold text-foreground truncate">
          {value}
        </p>
      </div>
      {external && (
        <ExternalLink
          size={14}
          className="ml-auto text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
        />
      )}
    </a>
  );
}
