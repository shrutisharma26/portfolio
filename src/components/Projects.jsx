
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  X,
  Sparkles,
  Search,
  ShieldCheck,
  FileText,
  Newspaper,
  MessageSquare,
  Activity,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NewsLens",
    category: "AI / RECOMMENDER SYSTEMS",
    description:
      "A hybrid news recommendation engine combining collaborative filtering, semantic understanding, and reinforcement learning for personalized news discovery.",
    tags: ["Python", "BERT", "NLP", "Reinforcement Learning"],
    icon: Newspaper,
    github: "https://github.com/shrutisharma26",
    featured: true,
    demo: "news",
  },
  {
    number: "02",
    title: "Semantic Retrieval Engine",
    category: "INFORMATION RETRIEVAL",
    description:
      "A semantic search engine that retrieves relevant information using sentence embeddings and vector similarity rather than keyword matching alone.",
    tags: ["SBERT", "FAISS", "Python", "REST API"],
    icon: Search,
    github: "https://github.com/shrutisharma26",
    demo: "search",
  },
  {
    number: "03",
    title: "FraudShield",
    category: "MACHINE LEARNING / FINTECH",
    description:
      "An explainable fraud detection dashboard designed to identify suspicious transactions and make model predictions easier to interpret.",
    tags: ["Machine Learning", "React", "Explainable AI"],
    icon: ShieldCheck,
    github: "https://github.com/shrutisharma26",
    demo: "fraud",
  },
  {
    number: "04",
    title: "PaperPilot",
    category: "GENERATIVE AI / RAG",
    description:
      "A research assistant that lets users interact with academic PDFs, retrieve relevant passages, and generate grounded answers with citations.",
    tags: ["RAG", "Ollama", "FAISS", "SBERT"],
    icon: FileText,
    github: "https://github.com/shrutisharma26",
    demo: "paper",
  },
  {
    number: "05",
    title: "Customer Query Classifier",
    category: "NLP / TEXT CLASSIFICATION",
    description:
      "An NLP-based classifier that categorizes customer messages to support automated routing and faster customer support workflows.",
    tags: ["Python", "NLP", "Text Classification"],
    icon: MessageSquare,
    github: "https://github.com/shrutisharma26",
    demo: "classifier",
  },
];

const demoContent = {
  news: {
    eyebrow: "PERSONALIZED NEWS INTELLIGENCE",
    title: "NewsLens",
    description:
      "A recommendation interface combining user interests, semantic relevance, and personalized ranking.",
  },
  search: {
    eyebrow: "SEMANTIC INFORMATION RETRIEVAL",
    title: "Semantic Retrieval",
    description:
      "Search across documents using meaning-aware embeddings and vector similarity.",
  },
  fraud: {
    eyebrow: "TRANSACTION INTELLIGENCE",
    title: "FraudShield",
    description:
      "An interactive dashboard concept for exploring transaction risk and model predictions.",
  },
  paper: {
    eyebrow: "RESEARCH PAPER ASSISTANT",
    title: "PaperPilot",
    description:
      "A document-grounded research assistant designed for PDF exploration and question answering.",
  },
  classifier: {
    eyebrow: "CUSTOMER SUPPORT AUTOMATION",
    title: "Query Classifier",
    description:
      "A preview of how incoming customer queries could be categorized and routed.",
  },
};

function DemoInterface({ type }) {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (query.trim()) setSubmitted(true);
  };

  if (type === "news") {
    return (
      <div className="project-demo news-demo">
        <div className="demo-topbar">
          <span className="demo-brand">
            <Newspaper size={15} /> NewsLens
          </span>
          <span className="demo-status">PERSONALIZED FEED</span>
        </div>

        <div className="demo-welcome">
          <span>YOUR DAILY SIGNAL</span>
          <h3>Stories worth your attention.</h3>
        </div>

        <div className="news-demo-grid">
          {[
            ["AI & TECHNOLOGY", "The next wave of intelligent systems"],
            ["SCIENCE", "New discoveries reshape our understanding"],
            ["BUSINESS", "Technology trends transforming industries"],
          ].map(([category, headline], index) => (
            <div className="news-demo-card" key={headline}>
              <span>0{index + 1} / {category}</span>
              <h4>{headline}</h4>
              <div className="demo-relevance">
                <span>RELEVANCE</span>
                <strong>{94 - index * 7}%</strong>
              </div>
            </div>
          ))}
        </div>
        <p className="demo-note">
          Preview interface · Personalized ranking concept
        </p>
      </div>
    );
  }

  if (type === "search") {
    return (
      <div className="project-demo search-demo">
        <div className="demo-topbar">
          <span className="demo-brand">
            <Search size={15} /> Semantic Search
          </span>
          <span className="demo-status">VECTOR RETRIEVAL</span>
        </div>

        <div className="demo-search-content">
          <span className="demo-label">QUERY YOUR KNOWLEDGE BASE</span>
          <form className="demo-input-row" onSubmit={submit}>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSubmitted(false);
              }}
              placeholder="How do neural networks learn?"
            />
            <button type="submit">
              <ArrowUpRight size={16} />
            </button>
          </form>

          {submitted ? (
            <div className="demo-result">
              <span>SIMULATED RETRIEVAL RESULT</span>
              <h4>Relevant semantic matches</h4>
              <p>
                Results would be ranked by embedding similarity and retrieved
                from the indexed knowledge base.
              </p>
            </div>
          ) : (
            <div className="demo-result">
              <span>EXAMPLE RESULT</span>
              <h4>Understanding representation learning</h4>
              <p>
                Semantic similarity helps retrieve related concepts even when
                they use different words.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === "fraud") {
    return (
      <div className="project-demo fraud-demo">
        <div className="demo-topbar">
          <span className="demo-brand">
            <ShieldCheck size={15} /> FraudShield
          </span>
          <span className="demo-status">RISK MONITOR</span>
        </div>

        <div className="fraud-stats">
          <div>
            <span>TRANSACTIONS</span>
            <strong>1,284</strong>
          </div>
          <div>
            <span>FLAGGED</span>
            <strong className="lime">18</strong>
          </div>
          <div>
            <span>MODEL STATUS</span>
            <strong className="lime">ACTIVE</strong>
          </div>
        </div>

        <div className="fraud-chart">
          <span>RISK DISTRIBUTION</span>
          <div className="fraud-bars">
            {[34, 58, 42, 75, 48, 88, 55, 68, 38, 80, 46, 62].map(
              (height, index) => (
                <div key={index} style={{ height: `${height}%` }} />
              )
            )}
          </div>
        </div>

        <p className="demo-note">
          Preview interface · Illustrative dashboard data
        </p>
      </div>
    );
  }

  if (type === "paper") {
    return (
      <div className="project-demo paper-demo">
        <div className="demo-topbar">
          <span className="demo-brand">
            <FileText size={15} /> PaperPilot
          </span>
          <span className="demo-status">RAG ASSISTANT</span>
        </div>

        <div className="paper-layout">
          <div className="paper-sidebar">
            <span>LIBRARY</span>
            <div className="paper-file active">◈ Research Paper.pdf</div>
            <div className="paper-file">◈ ML Survey.pdf</div>
            <div className="paper-file">◈ NLP Notes.pdf</div>
          </div>

          <div className="paper-chat">
            <span className="demo-label">ASK YOUR DOCUMENT</span>
            <div className="paper-message user">
              Summarize the key findings.
            </div>
            <div className="paper-message assistant">
              <Sparkles size={14} />
              <p>
                The paper's key findings would be summarized using retrieved
                passages from the uploaded document.
              </p>
              <span>[1] Research Paper.pdf · Page 4</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-demo classifier-demo">
      <div className="demo-topbar">
        <span className="demo-brand">
          <MessageSquare size={15} /> Query Classifier
        </span>
        <span className="demo-status">NLP PIPELINE</span>
      </div>

      <div className="classifier-content">
        <span className="demo-label">CUSTOMER MESSAGE</span>
        <form className="demo-input-row" onSubmit={submit}>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSubmitted(false);
            }}
            placeholder="I can't access my account..."
          />
          <button type="submit">
            <ArrowUpRight size={16} />
          </button>
        </form>

        <div className="classifier-result">
          <span>CLASSIFICATION</span>
          <div className="classifier-category">
            {submitted ? "Account Support" : "Billing Support"}
            <span>{submitted ? "SIMULATED" : "EXAMPLE"}</span>
          </div>
          <div className="classifier-confidence">
            <div />
          </div>
          <p>
            {submitted
              ? "This is a simulated prediction. Connect the trained model to enable real classification."
              : "Example category prediction"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-ambient ambient-one" />
      <div className="projects-ambient ambient-two" />

      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            SELECTED WORK
          </span>

          <h2>
            Ideas into <span>intelligence.</span>
          </h2>

          <p>
            A collection of experiments and projects across machine learning,
            information retrieval, and generative AI.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                className={`project-card ${project.featured ? "featured" : ""}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                onClick={() => setActiveProject(project)}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-open">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <div className="project-icon">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-card-bottom">
                  <span>EXPLORE PROJECT</span>
                  <ChevronRight size={16} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="projects-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Activity size={15} />
          <span>BUILDING · EXPERIMENTING · ITERATING</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.82, rotateX: 12, y: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotateX: -8, y: 25 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close project preview"
              >
                <X size={19} />
              </button>

              <div className="modal-heading">
                <span>{demoContent[activeProject.demo].eyebrow}</span>
                <h2>{demoContent[activeProject.demo].title}</h2>
                <p>{demoContent[activeProject.demo].description}</p>
              </div>

              <DemoInterface type={activeProject.demo} />

              <div className="modal-bottom">
                <div className="modal-tech">
                  {activeProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-github"
                >
                  <span style={{ fontWeight: 700 }}>GH</span>
                  GitHub
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-section {
          position: relative;
          overflow: hidden;
          padding: 130px 24px;
          background: #050708;
          color: #F2F5F3;
          isolation: isolate;
        }

        .projects-ambient {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.12;
          pointer-events: none;
          z-index: -1;
        }

        .ambient-one {
          top: 5%;
          left: -250px;
          background: #C8FF00;
        }

        .ambient-two {
          bottom: 0;
          right: -250px;
          background: #4D7600;
        }

        .projects-container {
          width: min(1150px, 100%);
          margin: 0 auto;
        }

        .projects-heading {
          max-width: 720px;
          margin-bottom: 58px;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #C8FF00;
          font: 500 11px "DM Mono", monospace;
          letter-spacing: 0.18em;
          margin-bottom: 22px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #C8FF00;
          box-shadow: 0 0 12px rgba(200,255,0,0.6);
        }

        .projects-heading h2 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 1.05;
          letter-spacing: -0.055em;
          margin: 0 0 20px;
          font-weight: 700;
        }

        .projects-heading h2 span {
          color: #C8FF00;
        }

        .projects-heading p {
          color: #A1AAA5;
          font-size: 16px;
          line-height: 1.8;
          max-width: 580px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          perspective: 1200px;
        }

        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 340px;
          padding: 28px;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(19,26,27,0.96), rgba(8,12,13,0.96));
          border: 1px solid rgba(255,255,255,0.09);
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .project-card::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          background: radial-gradient(circle at 15% 0%, rgba(200,255,0,0.09), transparent 45%);
          transition: opacity 0.3s;
        }

        .project-card:hover {
          border-color: rgba(200,255,0,0.35);
          box-shadow: 0 18px 60px rgba(0,0,0,0.3), 0 0 25px rgba(200,255,0,0.04);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card.featured {
          border-color: rgba(200,255,0,0.2);
        }

        .project-card-top,
        .project-card-bottom {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-number {
          color: #75817B;
          font: 12px "DM Mono", monospace;
        }

        .project-open {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          color: #C8FF00;
          border: 1px solid rgba(200,255,0,0.2);
          border-radius: 50%;
          transition: background 0.3s, transform 0.3s;
        }

        .project-card:hover .project-open {
          background: rgba(200,255,0,0.1);
          transform: rotate(45deg);
        }

        .project-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          margin: 22px 0 18px;
          border-radius: 12px;
          color: #C8FF00;
          background: rgba(200,255,0,0.06);
          border: 1px solid rgba(200,255,0,0.15);
        }

        .project-category {
          color: #C8FF00;
          font: 10px "DM Mono", monospace;
          letter-spacing: 0.11em;
          margin-bottom: 10px;
        }

        .project-card h3 {
          position: relative;
          font-size: clamp(1.35rem, 2.5vw, 1.8rem);
          letter-spacing: -0.035em;
          margin: 0 0 12px;
          color: #F2F5F3;
        }

        .project-description {
          color: #A1AAA5;
          font-size: 13px;
          line-height: 1.75;
          margin: 0 0 22px;
          max-width: 520px;
        }

        .project-tags,
        .modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
        }

        .project-tags span,
        .modal-tech span {
          padding: 6px 9px;
          border-radius: 5px;
          color: #A1AAA5;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.07);
          font: 10px "DM Mono", monospace;
        }

        .project-card-bottom {
          margin-top: 24px;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: #C8FF00;
          font: 10px "DM Mono", monospace;
          letter-spacing: 0.1em;
        }

        .projects-footer-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 45px;
          color: #75817B;
          font: 10px "DM Mono", monospace;
          letter-spacing: 0.14em;
        }

        .projects-footer-note svg {
          color: #C8FF00;
        }

        /* Modal */

        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0,0,0,0.82);
          backdrop-filter: blur(14px);
          perspective: 1400px;
        }

        .project-modal {
          position: relative;
          width: min(850px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          padding: 35px;
          border-radius: 22px;
          background: linear-gradient(145deg, #111819, #080B0C);
          border: 1px solid rgba(200,255,0,0.22);
          box-shadow: 0 0 80px rgba(200,255,0,0.07), 0 30px 100px rgba(0,0,0,0.6);
          transform-style: preserve-3d;
        }

        .modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: #F2F5F3;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          z-index: 2;
        }

        .modal-close:hover {
          color: #C8FF00;
          border-color: rgba(200,255,0,0.4);
        }

        .modal-heading {
          padding-right: 35px;
          margin-bottom: 25px;
        }

        .modal-heading > span {
          color: #C8FF00;
          font: 10px "DM Mono", monospace;
          letter-spacing: 0.14em;
        }

        .modal-heading h2 {
          margin: 12px 0;
          font-size: clamp(2rem, 5vw, 3rem);
          letter-spacing: -0.05em;
        }

        .modal-heading p {
          color: #A1AAA5;
          line-height: 1.7;
          font-size: 14px;
        }

        .project-demo {
          padding: 22px;
          border-radius: 13px;
          background: #080C0D;
          border: 1px solid rgba(255,255,255,0.09);
          min-height: 250px;
        }

        .demo-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .demo-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #F2F5F3;
          font-size: 12px;
          font-weight: 600;
        }

        .demo-brand svg {
          color: #C8FF00;
        }

        .demo-status,
        .demo-label {
          color: #75817B;
          font: 9px "DM Mono", monospace;
          letter-spacing: 0.1em;
        }

        .demo-welcome {
          padding: 20px 0 14px;
        }

        .demo-welcome > span {
          color: #C8FF00;
          font: 9px "DM Mono", monospace;
        }

        .demo-welcome h3 {
          margin: 8px 0;
          font-size: 22px;
          color: #F2F5F3;
        }

        .news-demo-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .news-demo-card {
          display: flex;
          flex-direction: column;
          min-height: 135px;
          padding: 13px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          background: rgba(255,255,255,0.025);
        }

        .news-demo-card > span {
          color: #C8FF00;
          font: 8px "DM Mono", monospace;
        }

        .news-demo-card h4 {
          font-size: 12px;
          line-height: 1.5;
          margin: 10px 0 auto;
        }

        .demo-relevance {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          color: #75817B;
          font: 8px "DM Mono", monospace;
        }

        .demo-relevance strong {
          color: #C8FF00;
        }

        .demo-note {
          margin: 14px 0 0;
          color: #75817B;
          font-size: 9px;
        }

        .demo-search-content,
        .classifier-content {
          padding-top: 22px;
        }

        .demo-input-row {
          display: flex;
          gap: 8px;
          margin: 10px 0 18px;
        }

        .demo-input-row input {
          flex: 1;
          min-width: 0;
          padding: 12px;
          color: #F2F5F3;
          background: #111718;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          outline: none;
          font: 11px "DM Mono", monospace;
        }

        .demo-input-row input:focus {
          border-color: rgba(200,255,0,0.45);
        }

        .demo-input-row button {
          display: grid;
          place-items: center;
          width: 42px;
          border: 0;
          border-radius: 6px;
          color: #050708;
          background: #C8FF00;
          cursor: pointer;
        }

        .demo-result,
        .classifier-result {
          padding: 15px;
          border: 1px solid rgba(200,255,0,0.14);
          border-radius: 8px;
          background: rgba(200,255,0,0.025);
        }

        .demo-result > span,
        .classifier-result > span {
          color: #C8FF00;
          font: 9px "DM Mono", monospace;
        }

        .demo-result h4 {
          margin: 10px 0 6px;
          font-size: 13px;
        }

        .demo-result p,
        .classifier-result p {
          color: #A1AAA5;
          font-size: 11px;
          line-height: 1.7;
          margin: 0;
        }

        .fraud-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 20px 0;
        }

        .fraud-stats > div {
          padding: 13px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 7px;
        }

        .fraud-stats span {
          display: block;
          color: #75817B;
          font: 8px "DM Mono", monospace;
        }

        .fraud-stats strong {
          display: block;
          margin-top: 8px;
          font-size: 20px;
        }

        .fraud-stats .lime {
          color: #C8FF00;
        }

        .fraud-chart {
          padding: 15px;
          border-radius: 8px;
          background: rgba(255,255,255,0.025);
        }

        .fraud-chart > span {
          color: #75817B;
          font: 9px "DM Mono", monospace;
        }

        .fraud-bars {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 80px;
          margin-top: 15px;
        }

        .fraud-bars div {
          flex: 1;
          min-width: 0;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(to top, rgba(200,255,0,0.2), #C8FF00);
          opacity: 0.8;
        }

        .paper-layout {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 15px;
          padding-top: 20px;
        }

        .paper-sidebar > span {
          color: #75817B;
          font: 9px "DM Mono", monospace;
        }

        .paper-file {
          margin-top: 10px;
          padding: 9px 7px;
          border-radius: 5px;
          color: #A1AAA5;
          font-size: 9px;
          overflow-wrap: anywhere;
        }

        .paper-file.active {
          color: #C8FF00;
          background: rgba(200,255,0,0.07);
        }

        .paper-chat {
          min-width: 0;
        }

        .paper-message {
          padding: 12px;
          margin-top: 10px;
          border-radius: 7px;
          font-size: 10px;
          line-height: 1.6;
        }

        .paper-message.user {
          color: #F2F5F3;
          background: rgba(255,255,255,0.06);
          margin-left: 25px;
        }

        .paper-message.assistant {
          color: #A1AAA5;
          background: rgba(200,255,0,0.04);
          border: 1px solid rgba(200,255,0,0.12);
        }

        .paper-message.assistant svg {
          color: #C8FF00;
        }

        .paper-message.assistant p {
          margin: 7px 0;
        }

        .paper-message.assistant span {
          color: #C8FF00;
          font: 8px "DM Mono", monospace;
        }

        .classifier-category {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 12px 0;
          font-size: 18px;
          color: #F2F5F3;
        }

        .classifier-category span {
          color: #C8FF00;
          font: 8px "DM Mono", monospace;
        }

        .classifier-confidence {
          height: 5px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          margin-bottom: 12px;
          overflow: hidden;
        }

        .classifier-confidence div {
          width: 87%;
          height: 100%;
          background: #C8FF00;
          box-shadow: 0 0 10px rgba(200,255,0,0.3);
        }

        .modal-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .modal-github {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          color: #050708;
          background: #C8FF00;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .modal-github:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(200,255,0,0.2);
        }

        @media (max-width: 700px) {
          .projects-section {
            padding: 90px 18px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            min-height: 320px;
            padding: 23px;
          }

          .project-modal {
            padding: 24px 18px;
          }

          .news-demo-grid {
            grid-template-columns: 1fr;
          }

          .news-demo-card {
            min-height: 100px;
          }

          .paper-layout {
            grid-template-columns: 1fr;
          }

          .paper-sidebar {
            display: none;
          }

          .fraud-stats {
            grid-template-columns: 1fr;
          }

          .modal-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
