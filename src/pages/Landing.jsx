import {
    ArrowRight,
    Search,
    Sparkles,
    Users,
    Database,
    Bot,
  } from "lucide-react";
  
  import { Link } from "react-router-dom";
  
  const Landing = () => {
    const token = localStorage.getItem("token");
    const isAuthenticated = !!token;
  
    const models = [
      "GPT-5",
      "Claude",
      "Gemini",
      "Grok",
      "Midjourney",
      "Flux",
    ];
  
    const heroCards = [
      {
        image: "/image1.png",
        title: "Ultra-premium conceptual automotive campaign poster",
        desc: "Luxury automotive advertising campaign",
      },
      {
        image: "/image2.png",
        title: "A slender elegant hand holding futuristic AI card",
        desc: "Holographic digital identity concept",
      },
      {
        image: "/image3.png",
        title: "Ultra-realistic candid night photography",
        desc: "Professional cinematic portrait photography",
      },
      {
        image: "/image4.png",
        title: "Premium automotive brand campaign",
        desc: "High-end commercial vehicle marketing",
      },
    ];
  
    return (
      <div className="min-h-screen bg-white">
        {/* Navbar */}
  
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <h1 className="text-3xl font-black">PromptLibrary</h1>
  
            <div className="hidden md:flex gap-8 text-gray-600 font-medium">
              <a href="#models">Models</a>
              <a href="#features">Features</a>
              <a href="#faq">FAQ</a>
            </div>
  
            <div className="flex gap-3">
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="px-5 py-2.5 border rounded-xl hover:bg-gray-50"
                >
                  Login
                </Link>
              )}
  
              <Link
                to={isAuthenticated ? "/explore" : "/register"}
                className="px-5 py-2.5 bg-black text-white rounded-xl"
              >
                {isAuthenticated ? "Dashboard" : "Get Started"}
              </Link>
            </div>
          </div>
        </nav>
  
        {/* HERO */}
  
        <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-20 items-center">
            {/* Left */}
  
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-gray-50 text-sm font-medium">
                🚀 10,000+ Prompts Shared
              </span>
  
              <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mt-8">
                Discover.
                <br />
                Create.
                <br />
                Share
                <span className="block text-gray-400">AI Prompts.</span>
              </h1>
  
              <p className="text-lg text-gray-600 mt-8 max-w-xl">
                Explore prompts for ChatGPT, Claude, Gemini, Grok, Midjourney and
                Flux. Discover community creations and share your own prompt
                engineering masterpieces.
              </p>
  
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to={isAuthenticated ? "/explore" : "/register"}
                  className="bg-black text-white px-7 py-4 rounded-2xl flex items-center gap-2 font-medium"
                >
                  {isAuthenticated ? "Go To Dashboard" : "Get Started"}
                  <ArrowRight size={18} />
                </Link>
  
                <Link
                  to={isAuthenticated ? "/explore" : "/login"}
                  className="border px-7 py-4 rounded-2xl font-medium"
                >
                  Explore Prompts
                </Link>
              </div>
  
              <div className="flex gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-black">10K+</h3>
                  <p className="text-gray-500">Prompts</p>
                </div>
  
                <div>
                  <h3 className="text-3xl font-black">5K+</h3>
                  <p className="text-gray-500">Creators</p>
                </div>
  
                <div>
                  <h3 className="text-3xl font-black">20K+</h3>
                  <p className="text-gray-500">Views</p>
                </div>
              </div>
            </div>
  
            {/* Right Hero Cards */}
  
            <div className="relative">
              <div className="grid grid-cols-2 gap-5">
                {heroCards.map((card, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                    />
  
                    {/* BLACK GRADIENT */}
  
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
  
                    {/* CONTENT */}
  
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-bold text-lg leading-snug">
                        {card.title}
                      </h3>
  
                      <p className="text-sm text-gray-200 mt-2">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Glow */}
  
              <div className="absolute -z-10 top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-3xl" />
            </div>
          </div>
        </section>
  
        {/* Models */}
  
        <section id="models" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-black text-center">
              Supported AI Models
            </h2>
  
            <p className="text-center text-gray-500 mt-4">
              Build prompts for every major AI platform.
            </p>
  
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-3xl p-8 text-center hover:shadow-lg transition"
                >
                  <Bot size={36} className="mx-auto mb-5" />
  
                  <h3 className="text-xl font-bold">{model}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Features */}
  
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-black text-center">
              Why PromptLibrary?
            </h2>
  
            <div className="grid md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white border rounded-3xl p-8">
                <Sparkles size={36} />
                <h3 className="font-bold text-xl mt-5">Upload Prompts</h3>
                <p className="text-gray-500 mt-3">
                  Share your best AI prompts with the community.
                </p>
              </div>
  
              <div className="bg-white border rounded-3xl p-8">
                <Users size={36} />
                <h3 className="font-bold text-xl mt-5">Creator Profiles</h3>
                <p className="text-gray-500 mt-3">
                  Build your reputation and audience.
                </p>
              </div>
  
              <div className="bg-white border rounded-3xl p-8">
                <Database size={36} />
                <h3 className="font-bold text-xl mt-5">Collections</h3>
                <p className="text-gray-500 mt-3">
                  Organize prompts into powerful libraries.
                </p>
              </div>
  
              <div className="bg-white border rounded-3xl p-8">
                <Bot size={36} />
                <h3 className="font-bold text-xl mt-5">AI Categories</h3>
                <p className="text-gray-500 mt-3">
                  Easily discover prompts by AI model.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA */}
  
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-5xl font-black">
              Ready To Share Your Best Prompt?
            </h2>
  
            <p className="text-gray-300 mt-6 text-lg">
              Join thousands of creators building the future of AI.
            </p>
  
            <Link
              to={isAuthenticated ? "/explore" : "/register"}
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-white text-black rounded-2xl font-semibold"
            >
              {isAuthenticated ? "Dashboard" : "Get Started"}
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
  
        {/* Footer */}
  
        <footer className="border-t py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="font-black text-2xl">PromptLibrary</h2>
  
            <p className="text-gray-500">
              © 2026 PromptLibrary. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Landing;