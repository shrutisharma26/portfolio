
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#050708] text-[#F2F5F3]">
      {/* Dark holographic atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        {/* Upper-left green light */}
        <div className="absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full bg-[#C8FF00]/[0.045] blur-[150px]" />

        {/* Subtle emerald glow */}
        <div className="absolute -right-40 top-[25%] h-[600px] w-[600px] rounded-full bg-[#1B5E40]/[0.12] blur-[170px]" />

        {/* Lower green atmosphere */}
        <div className="absolute -left-20 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8FF00]/[0.025] blur-[150px]" />

        {/* Fine technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.3) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Dark vignette for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050708]/10 to-[#050708]/70" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievement />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
