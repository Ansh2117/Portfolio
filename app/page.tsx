import Image from "next/image";
import FadeIn from "./components/FadeIn";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />
      </div>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <h1 className="text-xl font-bold">Arya Malviya</h1>

        <div className="hidden md:flex gap-8 text-zinc-400">
          {/* Navbar */}
          <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 backdrop-blur-xl bg-black/40 border-b border-white/5">
            <a
              href="#"
              className="text-xl font-bold hover:text-zinc-300 transition duration-300"
            ></a>

            <div className="flex gap-8 text-zinc-400">
              <a
                href="#about"
                className="transition duration-300 hover:text-white"
              >
                About
              </a>

              <a
                href="#leadership"
                className="transition duration-300 hover:text-white"
              >
                Leadership
              </a>

              <a
                href="#experience"
                className="transition duration-300 hover:text-white"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="transition duration-300 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="transition duration-300 hover:text-white"
              >
                Contact
              </a>
              <a
                href="#resume"
                className="transition duration-300 hover:text-white"
              >
                Resume
              </a>
            </div>
          </nav>
        </div>
      </nav>

      {/* Hero Section */}
      <FadeIn>
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4">
          <div className="relative mb-10">
            <Image
              src="/arya.jpg"
              alt="Arya Malviya"
              width={260}
              height={260}
              className="h-40 w-40 md:h-64 md:w-64 rounded-full object-cover border border-zinc-800 shadow-2xl"
            />
          </div>

          <div className="mb-6">
            <p className="text-zinc-500 tracking-[0.3em] uppercase">
              AI • Product • Leadership
            </p>

            <p className="text-zinc-400 text-sm md:text-base mt-4">
              AI Engineer Intern @ StopNThink Infoconnect Pvt. Ltd.
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-6 max-w-5xl leading-tight">
            From Ideas To Impact.
          </h1>

          <p className="max-w-3xl text-base md:text-xl text-zinc-400 mb-10 leading-relaxed px-4">
            Technology builder and community leader focused on transforming
            ideas into meaningful outcomes through innovation, execution, and
            impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-zinc-700 hover:border-white transition"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-4">
            <div className="border border-zinc-800 rounded-2xl p-6 hover:border-white hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-2">3+</h3>
              <p className="text-zinc-500">Years Volunteering</p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 hover:border-white hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-3xl font-bold">3</h3>
              <p className="text-zinc-500">AI Projects</p>
            </div>
            <div className="border border-zinc-800 rounded-2xl p-6 hover:border-white hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div>
                <h3 className="text-3xl font-bold">1</h3>
                <p className="text-zinc-500">Industry Internship</p>
              </div>
            </div>
            <div className="border border-zinc-800 rounded-2xl p-6 hover:border-white hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-3xl font-bold">🏆</h3>
              <p className="text-zinc-500">Best Volunteer Award</p>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* About Section */}
      <FadeIn>
        <section id="about" className="max-w-6xl mx-auto px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-zinc-500 mb-4 uppercase tracking-widest">
                About Me
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Building Technology, Communities & Impact
              </h2>

              <p className="text-zinc-400 leading-8 text-lg">
                A technology enthusiast driven by the challenge of solving
                real-world problems and creating meaningful impact. My work
                spans artificial intelligence, community initiatives,
                leadership, and technology-driven innovation.
                <br />
                <br />
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-6 md:p-10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5">
              <div className="space-y-8">
                <div>
                  <p className="text-zinc-500">Education</p>
                  <h3 className="text-xl font-semibold">
                    B.Tech in Artificial Intelligence
                  </h3>
                </div>

                <div>
                  <p className="text-zinc-500">Core Interests</p>
                  <h3 className="text-xl font-semibold">
                    Artificial Intelligence • Product Strategy • Technology
                  </h3>
                </div>

                <div>
                  <p className="text-zinc-500">Leadership</p>
                  <h3 className="text-xl font-semibold">
                    Volunteer Lead & Community Contributor
                  </h3>
                </div>

                <div>
                  <p className="text-zinc-500">Location</p>
                  <h3 className="text-xl font-semibold">Nagpur, India</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* Leadership & Impact Section */}
      <FadeIn>
        <section
          id="leadership"
          className="max-w-6xl mx-auto px-10 py-16 md:py-24"
        >
          <div className="mb-20">
            <p className="text-zinc-500 uppercase tracking-[0.25em] mb-4">
              Leadership & Impact
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Leading Communities, Creating Impact.
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl text-lg leading-8">
              Technology is only valuable when it improves lives. Alongside
              building technical skills, I have spent years contributing to
              initiatives focused on education, collaboration, and community
              impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">Agresar Foundation</h3>

                  <p className="text-zinc-400 mt-2">
                    Volunteer & Community Contributor
                  </p>
                </div>

                <span className="text-zinc-500">3+ Years</span>
              </div>

              <p className="text-zinc-400 leading-8">
                Contributed to educational initiatives supporting
                underprivileged students through school outreach, volunteer
                coordination, event execution, logistics management, and
                community-driven programs.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5">
              <h3 className="text-2xl font-semibold mb-6">Recognition</h3>

              <p className="text-zinc-400 leading-8">
                Received Best Volunteer recognition at Be Eke Be 2025 for
                dedication, leadership, teamwork, and contribution toward
                education-focused social impact programs.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 rounded-full border border-zinc-700">
                  Leadership
                </span>

                <span className="px-4 py-2 rounded-full border border-zinc-700">
                  Community Impact
                </span>

                <span className="px-4 py-2 rounded-full border border-zinc-700">
                  Event Management
                </span>

                <span className="px-4 py-2 rounded-full border border-zinc-700">
                  Teamwork
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* Experience Section */}
      <FadeIn>
        <section
          id="experience"
          className="max-w-6xl mx-auto px-10 py-16 md:py-24"
        >
          <p className="text-zinc-500 uppercase tracking-[0.25em] mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-bold mb-16">Professional Experience</h2>

          <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
              <div>
                <h3 className="text-3xl font-bold">AI Engineer Intern</h3>

                <p className="text-zinc-400 text-lg mt-2">
                  StopNThink Infoconnect Pvt. Ltd.
                </p>
              </div>

              <span className="text-zinc-500">June 2026 – Present</span>
            </div>

            <div className="space-y-4 text-zinc-400 leading-8 text-lg">
              <p>
                • Working remotely on the exploration and implementation of
                artificial intelligence solutions for real-world business use
                cases.
              </p>

              <p>
                • Researching and evaluating modern AI tools, automation
                workflows, and intelligent systems to improve productivity and
                operational efficiency.
              </p>

              <p>
                • Collaborating with team members to identify opportunities
                where AI can streamline processes and create measurable value.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* Projects Section */}
      <FadeIn>
        <section
          id="projects"
          className="max-w-7xl mx-auto px-10 py-16 md:py-24"
        >
          <div className="mb-20">
            <p className="text-zinc-500 uppercase tracking-[0.25em] mb-4">
              Featured Projects
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Building Real Solutions
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
              A collection of projects spanning computer vision, artificial
              intelligence, machine learning, and automation focused on solving
              real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5">
              <div className="h-48 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-8 flex items-center justify-center text-zinc-500 text-lg">
                Computer Vision
              </div>

              <p className="text-zinc-500 mb-3">Computer Vision</p>

              <h3 className="text-3xl font-bold mb-6">
                Real-Time Hand Gesture Recognition System
              </h3>

              <p className="text-zinc-400 leading-8 mb-8">
                Built a real-time hand tracking and gesture recognition system
                capable of detecting hand landmarks through webcam input and
                enabling touchless interaction. Implemented gesture
                classification logic for intuitive system control and enhanced
                accessibility.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  Python
                </span>

                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  OpenCV
                </span>

                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  MediaPipe
                </span>
              </div>
            </div>

            {/* Project 2 */}

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5">
              <div className="h-48 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-8 flex items-center justify-center text-zinc-500 text-lg">
                OCR & Automation
              </div>

              <p className="text-zinc-500 mb-3">OCR & Automation</p>

              <h3 className="text-3xl font-bold mb-6">
                OCR Document Intelligence System
              </h3>

              <p className="text-zinc-400 leading-8 mb-8">
                Developed an OCR-based application capable of extracting text
                from images and scanned documents. Implemented image
                preprocessing techniques including thresholding, enhancement,
                and noise reduction to improve recognition accuracy and automate
                text extraction workflows.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  Python
                </span>

                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  OpenCV
                </span>

                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  Tesseract OCR
                </span>
              </div>
            </div>

            {/* Featured Project */}

            <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5 md:col-span-2 min-h-[420px]">
              <div className="h-56 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-8 flex items-center justify-center text-zinc-500 text-lg">
                AI Healthcare Solution
              </div>

              <div className="mb-6">
                <span className="px-3 py-2 rounded-full bg-white text-black text-sm font-semibold">
                  Featured Project
                </span>
              </div>

              <p className="text-zinc-500 mb-3">
                Artificial Intelligence & Healthcare
              </p>

              <h3 className="text-4xl font-bold mb-6">
                AI-Based Medical Adherence System
              </h3>

              <p className="text-zinc-400 leading-8 mb-8 text-lg">
                Engineered an AI-powered healthcare solution designed to improve
                patient medication adherence. Built a real-time pill detection
                and intake verification pipeline using computer vision,
                integrated machine learning models for adherence monitoring, and
                developed an NLP-powered reminder system to deliver personalized
                alerts and adherence reports.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  Python
                </span>

                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  Machine Learning
                </span>

                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  NLP
                </span>

                <span className="px-3 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                  OpenCV
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* Contact Section */}
      <FadeIn>
        {/* Resume Section */}
        <FadeIn>
          <section
            id="resume"
            className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24"
          >
            <div className="border border-zinc-800 rounded-3xl p-12 bg-zinc-950 text-center hover:border-white transition-all duration-300">
              <p className="text-zinc-500 uppercase tracking-[0.25em] mb-4">
                Resume
              </p>

              <h2 className="text-5xl font-bold mb-6">My Resume</h2>

              <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
                Explore my academic background, internship experience,
                leadership initiatives, and technical projects.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
              >
                View Resume
              </a>
            </div>
          </section>
        </FadeIn>
        <section
          id="contact"
          className="max-w-6xl mx-auto px-10 py-16 md:py-24"
        >
          <div className="border border-zinc-800 rounded-[40px] p-16 bg-zinc-950/60 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600">
            <p className="text-zinc-500 uppercase tracking-[0.25em] mb-4 text-center">
              Let's Connect
            </p>

            <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center">
              Open To Meaningful Conversations
            </h2>

            <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-8 mb-12 md:mb-16 text-center px-4">
              Whether it's artificial intelligence, technology, leadership,
              internships, collaboration opportunities, or innovative ideas, I'm
              always open to connecting with people building impactful things.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:aryamalviya2107@gmail.com"
                className="border border-zinc-800 rounded-3xl p-6 md:p-8 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5"
              >
                <p className="text-zinc-500 mb-2">Email</p>
                <h3 className="text-sm md:text-xl font-semibold break-all">
                  aryamalviya2107@gmail.com
                </h3>
              </a>

              <a
                href="https://www.linkedin.com/in/arya-malviya-bb8346311/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5"
              >
                <p className="text-zinc-500 mb-2">LinkedIn</p>
                <h3 className="text-xl font-semibold">Connect With Me</h3>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* Footer */}

      {/* Footer */}

      <footer className="border-t border-zinc-900 mt-24">
        <div className="max-w-6xl mx-auto px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Arya Malviya</h3>
            <p className="text-zinc-500 mt-2">From Ideas To Impact.</p>
          </div>

          <div className="text-zinc-500 text-center">
            Building technology, leadership & community impact.
          </div>

          <div className="text-zinc-500 text-sm">© 2026 Arya Malviya</div>
        </div>
      </footer>
    </main>
  );
}
