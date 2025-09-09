import React from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Send, Sparkles, Image as ImageIcon, Laugh, Info } from "lucide-react";

// Helper: floating coin component
const FloatingCoin = ({ delay = 0, size = 48, x = 0, y = 0 }) => (
  <motion.div
    className="pointer-events-none absolute"
    style={{ left: x, top: y }}
    initial={{ y: 0, rotate: 0, opacity: 0.6 }}
    animate={{ y: [0, -20, 0], rotate: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
    transition={{ repeat: Infinity, duration: 6, delay, ease: "easeInOut" }}
  >
    <div
      className="rounded-full shadow-2xl backdrop-blur-md"
      style={{
        width: size,
        height: size,
        background:
          "conic-gradient(from 0deg, #ffd700, #ffa200, #ffe066, #ffd700)",
        boxShadow:
          "0 0 20px rgba(255,215,0,0.8), inset 0 0 10px rgba(255,255,255,0.6)",
      }}
    />
  </motion.div>
);

// Glitch title
const Glitch = ({ children }) => (
  <div className="relative inline-block select-none">
    <span className="glitch-text relative z-10 bg-gradient-to-br from-fuchsia-400 via-emerald-300 to-cyan-300 bg-clip-text text-5xl font-black uppercase tracking-[-0.02em] text-transparent md:text-7xl">
      {children}
    </span>
    <span aria-hidden className="absolute left-0 top-0 -translate-x-[2px] translate-y-[1px] text-5xl font-black text-fuchsia-400 mix-blend-screen opacity-70 md:text-7xl">
      {children}
    </span>
    <span aria-hidden className="absolute left-0 top-0 translate-x-[1px] -translate-y-[1px] text-5xl font-black text-cyan-400 mix-blend-screen opacity-70 md:text-7xl">
      {children}
    </span>
  </div>
);

// Section header
const SectionHeader = ({ icon: Icon, label, sub }) => (
  <div className="mb-8 flex items-end justify-between">
    <div className="flex items-center gap-3">
      <Icon className="h-6 w-6 text-emerald-300" />
      <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
        {label}
      </h2>
    </div>
    {sub && <p className="text-sm text-white/60">{sub}</p>}
  </div>
);

// Hero header
const Header = () => {
  const { scrollY } = useScroll();
  const yTrans = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <motion.div style={{ y: yTrans }} className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Meme-Coin Digital Artist
          </div>
          <Glitch>CHAOTIC • PROFESSIONAL</Glitch>
          <p className="mt-6 max-w-2xl text-lg leading-tight text-white/80">
            Designing the internet’s next cult mascot, NFT drops & coin
            identities. Neon gradients. Glitch energy. Art that pumps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-cyan-400 font-bold text-black shadow-xl">
              View Portfolio
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl border-white/20 bg-black/30 text-white"
            >
              <Coins className="mr-2 h-4 w-4" />
              Book a Drop
            </Button>
          </div>

          <FloatingCoin delay={0.1} size={36} x={"5%"} y={"-20px"} />
          <FloatingCoin delay={0.6} size={56} x={"70%"} y={"30px"} />
          <FloatingCoin delay={1.1} size={44} x={"85%"} y={"-10px"} />
        </motion.div>
      </div>
    </header>
  );
};

// Portfolio placeholder
const Portfolio = () => (
  <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-20">
    <SectionHeader
      icon={ImageIcon}
      label="Portfolio Gallery"
      sub="NFT-style cards • hover to flex"
    />
    <p className="text-white/60">🎨 Галерея проектов будет тут</p>
  </section>
);

// About placeholder
const About = () => (
  <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
    <SectionHeader
      icon={Info}
      label="About the Artist"
      sub="chaos director • pixel wrangler"
    />
    <p className="text-white/70">
      Я — AN0N, мем-алхимик. Делаю маскотов, лор для монет и глитч-арт.
    </p>
  </section>
);

// Contact placeholder
const Contact = () => (
  <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
    <SectionHeader icon={Laugh} label="Contact" sub="send me your unhinged brief" />
    <p className="text-white/70">📩 Форма контактов будет тут</p>
  </section>
);

// === Default export ===
export default function PortfolioMemeArtist() {
  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      {/* Background grid */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
  className="pointer-events-none fixed inset-0 -z-10 opacity-20 mix-blend-soft-light"
  style={{
    background:
      "radial-gradient(60% 60% at 20% 10%, rgba(236,72,153,.15), transparent 60%)," +
      "radial-gradient(50% 50% at 80% 0%, rgba(45,212,191,.15), transparent 50%)," +
      "radial-gradient(70% 90% at 50% 100%, rgba(168,85,247,.2), transparent 60%)",
  }}
/>


      {/* Sections */}
      <Header />
      <Portfolio />
      <About />
      <Contact />

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AN0N • meme energy + art gallery
      </footer>
    </div>
  );
}
