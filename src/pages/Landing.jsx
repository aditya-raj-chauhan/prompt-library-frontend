import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Image as ImageIcon,
  Brain,
  Users,
  Star,
  LogOut,
  Compass
} from "lucide-react";

// Static data moved outside to prevent recreation
const heroCards = [
  {
    image: "/image1.png",
    title: "Prompt Engineering",
    desc: "Professional AI prompt collection",
  },
  {
    image: "/image2.png",
    title: "Code Generation",
    desc: "Developer focused prompts",
  },
  {
    image: "/image3.png",
    title: "Image Creation",
    desc: "Midjourney & Flux workflows",
  },
  {
    image: "/image4.png",
    title: "Research Assistant",
    desc: "Deep analysis templates",
  },
];

const features = [
  {
    icon: <Sparkles size={22} />,
    title: "Curated Prompt Library",
    desc: "Discover high-quality prompts for every AI model and workflow.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Developer Focused",
    desc: "Code generation, reviews, debugging and architecture prompts.",
  },
  {
    icon: <ImageIcon size={22} />,
    title: "Image AI Support",
    desc: "Midjourney, Flux, DALL-E and Stable Diffusion collections.",
  },
  {
    icon: <Brain size={22} />,
    title: "Advanced Workflows",
    desc: "Multi-step prompt chains built by experienced creators.",
  },
];

const models = ["GPT-5", "Claude", "Gemini", "Grok", "Midjourney", "Flux"];
const tickerItems = [...models, "DALL-E", "Sora"];
const duplicatedTicker = [...tickerItems, ...tickerItems];

const testimonials = [
  {
    name: "Anika",
    role: "Product Manager",
    text: "Reduced report writing time dramatically using community prompts.",
  },
  {
    name: "James",
    role: "Engineer",
    text: "Built an audience sharing engineering prompts and workflows.",
  },
  {
    name: "Mia",
    role: "Designer",
    text: "The image generation prompts are better than anything else online.",
  },
];

const Landing = () => {
  // Using state to demonstrate the UI changes. 
  // Replace this with your actual auth hook context/redux later!
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Mock logout function
  const handleLogout = () => {
    setIsAuthenticated(false);
    // Add your token clearing/logout logic here
  };

  // Mock login function for testing the UI
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent navigation for demo
    setIsAuthenticated(true);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight hover:text-white/80 transition-colors">
            PromptLibrary
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#models" className="hover:text-white transition-colors">Models</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
          </nav>

          <div className="flex gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  to="/explore"
                  className="px-4 py-2 rounded-lg border border-white/15 hover:bg-white/5 transition-colors text-sm flex items-center gap-2"
                >
                  <Compass size={16} />
                  Explore
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-medium hover:bg-red-500/20 transition-colors flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 rounded-lg border border-white/15 hover:bg-white/5 transition-colors text-sm"
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full text-xs text-white/60"
              >
                <Sparkles size={14} className="text-yellow-400" />
                AI Prompt Community
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-none"
              >
                Discover.
                <br />
                <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                  Create.
                </span>
                <br />
                Share Prompts.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-white/60 text-lg max-w-xl leading-relaxed"
              >
                Browse thousands of curated prompts for ChatGPT, Claude, Gemini,
                Grok, Midjourney and Flux. Share your best work with the AI
                community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link
                  to="/explore"
                  className="group px-6 py-3 bg-white text-black rounded-xl font-medium flex items-center gap-2 hover:bg-white/90 transition-all"
                >
                  Explore Prompts
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                {isAuthenticated ? (
                  <Link
                    to="/create"
                    className="px-6 py-3 border border-white/15 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Create New Prompt
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="px-6 py-3 border border-white/15 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Join the Community
                  </Link>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14"
              >
                {[
                  { label: "Prompts", val: "10K+" },
                  { label: "Creators", val: "5K+" },
                  { label: "Views", val: "20K+" },
                  { label: "Platforms", val: "6+" },
                ].map((stat, i) => (
                  <div key={i}>
                    <h3 className="text-3xl font-bold">{stat.val}</h3>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT HERO CARDS */}
            <div className="relative h-[550px] hidden md:block">
              {heroCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.2 },
                    scale: { duration: 0.5, delay: index * 0.2 },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8,
                    },
                  }}
                  className={`absolute w-[260px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl backdrop-blur-md
                  ${
                    index === 0
                      ? "top-0 left-0 z-10"
                      : index === 1
                      ? "top-12 right-0 z-20"
                      : index === 2
                      ? "bottom-12 left-12 z-30"
                      : "bottom-0 right-12 z-40"
                  }`}
                >
                  <div className="relative h-56 bg-zinc-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  </div>
                  <div className="p-5 relative z-10 bg-zinc-950">
                    <h3 className="font-semibold text-white">{card.title}</h3>
                    <p className="text-sm text-white/50 mt-2">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-y border-white/10 overflow-hidden py-4 bg-white/[0.01]">
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex whitespace-nowrap text-white/40 text-sm font-medium uppercase tracking-widest gap-16 px-8"
          >
            {duplicatedTicker.map((item, idx) => (
              <span key={idx} className="flex-shrink-0">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-white/40 uppercase tracking-[0.25em] text-xs font-semibold">
            Features
          </p>
          <h2 className="text-4xl font-bold mt-4">
            Everything needed to build better prompts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-white/10 rounded-3xl p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center mb-6 bg-white/[0.03] group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODELS */}
      <section id="models" className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center md:text-left"
        >
          Supported Platforms
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {models.map((model, index) => (
            <motion.div
              key={model}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.05] transition-colors cursor-pointer"
            >
              <Brain className="mx-auto mb-3 opacity-60" size={24} />
              <p className="font-medium text-white/80">{model}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <Users className="text-blue-400" />
          <h2 className="text-4xl font-bold">Loved by the community</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-3xl p-6 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/20 transition-colors"
            >
              <Star className="mb-4 text-yellow-500/80" size={18} fill="currentColor" />
              <p className="text-white/70 leading-relaxed italic">
                "{item.text}"
              </p>
              <div className="mt-6">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-white/40">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative border border-white/10 rounded-[40px] overflow-hidden p-12 md:p-16 text-center bg-zinc-900/50"
        >
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
              Ready to share your best prompt?
            </h2>
            <p className="text-white/50 mt-6 max-w-xl mx-auto text-lg">
              Join thousands of creators building the future of AI prompting.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/create"
                    className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    Create a Prompt
                  </Link>
                  <Link
                    to="/explore"
                    className="px-8 py-4 border border-white/15 rounded-xl font-medium hover:bg-white/10 transition-colors"
                  >
                    Go to Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    Create Account
                  </Link>
                  <Link
                    to="/explore"
                    className="px-8 py-4 border border-white/15 rounded-xl font-medium hover:bg-white/10 transition-colors"
                  >
                    Explore First
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-semibold text-lg tracking-tight hover:text-white/80 transition-colors">
            PromptLibrary
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/" className="hover:text-white transition-colors">API</Link>
            <Link to="/" className="hover:text-white transition-colors">Blog</Link>
          </div>

          <p className="text-sm text-white/40">© {new Date().getFullYear()} PromptLibrary</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;