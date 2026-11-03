
import React from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  FileText,
  ShieldCheck,
  MessageSquare,
  BrainCircuit,
  FileSearch,
} from "lucide-react";

// Custom GitHub icon — avoids lucide-react export issues
function GithubMark({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.68 5.39-5.24 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "PaperPilot",
    subtitle: "AI Research Paper Assistant",
    description:
      "An AI-powered research assistant that helps users explore academic PDFs, retrieve relevant information, and generate contextual answers using retrieval-augmented generation.",
    tags: [
      "Python",
      "Streamlit",
      "RAG",
      "FAISS",
      "Sentence Transformers",
      "Ollama",
    ],
    github: "https://github.com/shrutisharma26/PaperPilot",
    icon: FileText,
    accent: "from-violet-500 to-indigo-500",
    glow: "rgba(139, 92, 246, 0.18)",
    preview: "paperpilot",
  },
  {
    number: "02",
    title: "Customer Query Classifier",
    subtitle: "Intelligent Support Automation",
    description:
      "A machine learning application that classifies customer queries into categories such as billing, technical support, and general inquiries to streamline support workflows.",
    tags: ["Python", "Scikit-learn", "TF-IDF", "Flask", "SQLite"],
    github:
      "https://github.com/shrutisharma26/customer-query-classifier",
    icon: MessageSquare,
    accent: "from-cyan-500 to-blue-500",
    glow: "rgba(6, 182, 212, 0.16)",
    preview: "classifier",
  },
  {
    number: "03",
    title: "FraudShield",
    subtitle: "Financial Fraud Detection",
    description:
      "A fraud detection dashboard built around machine learning, designed to analyze transaction data, identify suspicious activity, and visualize fraud-related insights.",
    tags: ["Python", "Random Forest", "FastAPI", "React", "Recharts"],
    github: "https://github.com/shrutisharma26/FraudShield",
    icon: ShieldCheck,
    accent: "from-blue-500 to-violet-500",
    glow: "rgba(59, 130, 246, 0.18)",
    preview: "fraudshield",
  },
  {
    number: "04",
    title: "AI Mock Interview System",
    subtitle: "Personalized Interview Preparation",
    description:
      "An AI-assisted interview preparation tool that uses resume information and NLP techniques to support personalized interview practice.",
    tags: ["Python", "Streamlit", "NLP", "TF-IDF"],
    github:
      "https://github.com/shrutisharma26/AI-Mock-Interview-System",
    icon: BrainCircuit,
    accent: "from-fuchsia-500 to-purple-500",
    glow: "rgba(217, 70, 239, 0.16)",
    preview: "interview",
  },
  {
    number: "05",
    title: "Resume ATS Analyzer",
    subtitle: "Resume Optimization Tool",
    description:
      "A resume analysis application that compares resume content against job descriptions and provides insights to help improve keyword alignment and relevance.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Plotly"],
    github:
      "https://github.com/shrutisharma26/Resume-ATS-Analyzer",
    icon: FileSearch,
    accent: "from-indigo-500 to-cyan-500",
    glow: "rgba(99, 102, 241, 0.18)",
    preview: "resume",
  },
];

function ProjectTag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300 transition-colors hover:border-purple-400/40 hover:text-purple-300">
      {children}
    </span>
  );
}

function ProjectPreview({ type }) {
  const common =
    "relative flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b18]";

  if (type === "paperpilot") {
    return (
      <div className={common}>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10" />

        <div className="relative w-[85%] rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
          <div className="mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-violet-400" />
            <span className="text-xs text-gray-300">
              Research Assistant
            </span>
            <span className="ml-auto rounded-full bg-violet-500/20 px-2 py-1 text-[9px] text-violet-300">
              RAG
            </span>
          </div>

          <div className="mb-3 h-2 w-3/4 rounded-full bg-white/10" />
          <div className="mb-2 h-2 w-full rounded-full bg-white/5" />
          <div className="mb-4 h-2 w-2/3 rounded-full bg-white/5" />

          <div className="flex items-start gap-2 rounded-lg bg-violet-500/10 p-3">
            <Sparkles className="mt-0.5 h-3 w-3 text-violet-400" />
            <div className="space-y-1">
              <div className="h-1.5 w-24 rounded-full bg-violet-300/30" />
              <div className="h-1.5 w-32 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "classifier") {
    return (
      <div className={common}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

        <div className="relative w-[85%] rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-cyan-400" />
            <span className="text-xs text-gray-300">
              Query Classification
            </span>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
            <p className="text-[10px] text-gray-400">
              “I need help with my payment.”
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[10px] text-gray-500">
              Predicted category
            </span>
            <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-[10px] text-cyan-300">
              Billing
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "fraudshield") {
    return (
      <div className={common}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10" />

        <div className="relative w-[85%] rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            <span className="text-xs text-gray-300">
              Fraud Analytics
            </span>
            <span className="ml-auto text-[9px] text-gray-500">
              Dashboard
            </span>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            {["Transactions", "Flagged", "Risk"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-white/5 bg-white/[0.03] p-2"
              >
                <p className="text-[8px] text-gray-500">{label}</p>
                <p className="mt-1 text-sm font-semibold text-gray-200">
                  —
                </p>
              </div>
            ))}
          </div>

          <div className="flex h-12 items-end gap-1.5">
            {[35, 55, 42, 78, 50, 90, 65, 45, 75, 60, 85, 40].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/50 to-violet-400/80"
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "interview") {
    return (
      <div className={common}>
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10" />

        <div className="relative w-[85%] rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex items-center gap-2">
            <BrainCircuit className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs text-gray-300">
              Interview Practice
            </span>
          </div>

          <div className="rounded-lg bg-fuchsia-500/10 p-3">
            <p className="text-[10px] text-fuchsia-200">
              Question 01
            </p>
            <p className="mt-1 text-xs text-gray-300">
              Tell me about a challenging project you worked on.
            </p>
          </div>

          <div className="mt-3 flex gap-2">
            <div className="h-1.5 w-1/3 rounded-full bg-fuchsia-400/40" />
            <div className="h-1.5 w-1/4 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/5 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={common}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />

      <div className="relative w-[85%] rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <div className="mb-3 flex items-center gap-2">
          <FileSearch className="h-4 w-4 text-indigo-400" />
          <span className="text-xs text-gray-300">Resume Analysis</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-indigo-400/30">
            <span className="text-sm font-bold text-indigo-300">
              ATS
            </span>
          </div>

          <div className="flex-1 space-y-2">
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-3/5 rounded-full bg-indigo-400/30" />
            <div className="h-2 w-2/3 rounded-full bg-cyan-400/30" />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Skills", "Keywords", "Experience"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-indigo-500/10 px-2 py-1 text-[9px] text-indigo-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0b16]/80 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-[#101020] sm:p-6">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundColor: project.glow }}
      />

      {/* Large title beside project number */}
      <div className="relative mb-5 flex items-center gap-4">
        <span
          className={`shrink-0 bg-gradient-to-r ${project.accent} bg-clip-text font-mono text-lg font-semibold text-transparent`}
        >
          {project.number}
        </span>

        <div className="h-10 w-px shrink-0 bg-white/10" />

        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-purple-200 sm:text-3xl">
            {project.title}
          </h3>

          <p
            className={`mt-1 bg-gradient-to-r ${project.accent} bg-clip-text text-xs font-semibold uppercase tracking-wider text-transparent`}
          >
            {project.subtitle}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${project.accent}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="relative mb-5">
        <ProjectPreview type={project.preview} />
      </div>

      <div className="relative flex flex-1 flex-col">
        <p className="mb-5 flex-1 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <ProjectTag key={tag}>{tag}</ProjectTag>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubMark className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <span className="text-xs text-gray-600">
            View repository
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070711] px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
              Things I’ve Built
            </span>
          </div>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A collection of projects exploring machine learning, NLP, and
            AI-powered applications — built to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/shrutisharma26"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
          >
            <GithubMark className="h-4 w-4" />
            Explore More on GitHub
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
