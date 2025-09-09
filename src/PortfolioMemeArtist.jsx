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

// NFT-style card
const NFTCard = ({ title, tag, img, idx }) => (
  <motion.div
    whileHover={{ y: -8, rotate: [0, -1, 1, 0] }}
    transition={{ type: "spring", stiffness: 200, damping: 12 }}
    className="group relative"
  >
    <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(168,85,247,.35),transparent_50%),radial-gradient(60%_100%_at_0%_100%,rgba(34,197,94,.25),transparent_50%),radial-gradient(80%_120%_at_100%_100%,rgba(45,212,191,.25),transparent_50%)]" />
      <CardContent className="p-5">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-emerald-400 to-cyan-400">
          <div className="flex h-full w-full items-center justify-center">
            <ImageIcon className="h-20 w-20 opacity-80" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
              {tag}
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0.6 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            className="rounded-full border border-white/20 bg-white/5 p-3"
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
        </div>
      </CardContent>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" style={{
        background:
          "linear-gradient(135deg, rgba(236,72,153,.6), rgba(34,197,94,.6), rgba(45,212,191,.6), rgba(168,85,247,.6))",
      }} />
      <div className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur">
        #{String(idx + 1).padStart(3, "0")}
      </div>
    </Card>
  </motion.div>
);

// Glitch text CSS (scoped)
const Glitch = ({ children }) => (
  <div className="relative inline-block select-none">
    <span className="glitch-text relative z-10 text-balance bg-gradient-to-br from-fuchsia-400 via-emerald-300 to-cyan-300 bg-clip-text text-5xl font-black uppercase tracking-[-0.02em] text-transparent md:text-7xl">
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

const ContactForm = () => {
  const controls = useAnimation();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        controls.start({ rotate: [0, -5, 5, 0], scale: [1, 1.05, 1] });
        alert("sent! (we'll reply faster than a meme pump)");
      }}
      className="relative mx-auto max-w-2xl space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_40px_rgba(34,197,94,0.25)]"
    >
      <motion.div animate={controls} className="pointer-events-none absolute -top-6 right-6">
        <Coins className="h-10 w-10 text-yellow-300 drop-shadow" />
      </motion.div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="group relative">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
            Your @
          </span>
          <input
            required
            placeholder="anon.eth | @degensupreme"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 outline-none ring-emerald-400/30 focus:ring"
          />
          <span className="pointer-events-none absolute right-3 top-9 text-white/50 transition group-focus-within:rotate-12">
            😎
          </span>
        </label>
        <label className="relative">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
            Email (optional)
          </span>
          <input
            type="email"
            placeholder="gm@meme.club"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 outline-none ring-fuchsia-400/30 focus:ring"
          />
          <span className="pointer-events-none absolute right-3 top-9 text-white/50">📧</span>
        </label>
        <label className="md:col-span-2 relative">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
            What are we minting?
          </span>
          <textarea
            required
            rows={5}
            placeholder="Pitch me your wildest meme-coin idea: mascot, lore, vibe, utility (lol), moon plan…"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 outline-none ring-cyan-400/30 focus:ring"
          />
          <span className="pointer-events-none absolute bottom-3 right-3 text-white/50">🚀</span>
        </label>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="rounded-full bg-white/10 px-2 py-1">gm</span>
          <span className="rounded-full bg-white/10 px-2 py-1">wagmi</span>
          <span className="rounded-full bg-white/10 px-2 py-1">ngmi (jk)</span>
        </div>
        <Button type="submit" className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-cyan-400 font-bold text-black shadow-xl">
          <Send className="mr-2 h-4 w-4" />
          Send It
        </Button>
      </div>
    </form>
  );
};

const GradientBG = () => (
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(236,72,153,.25),transparent_60%),radial-gradient(50%_50%_at_80%_0%,rgba(45,212,191,.25),transparent_50%),radial-gradient(70%_90%_at_50%_100%,rgba(168,85,247,.3),transparent_60%)]" />
    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/10 to-transparent" />
  </div>
);

const Header = () => {
  const { scrollY } = useScroll();
  const yTrans = useTransform(scrollY, [0, 400], [0, -80]);
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <GradientBG />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <motion.div style={{ y: yTrans }} className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Meme-Coin Digital Artist
          </div>
          <div className="flex flex-wrap items-end gap-4">
            <Glitch>CHAOTIC • PROFESSIONAL</Glitch>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-tight text-white/80">
            Designing the internet’s next cult mascot, NFT drops & coin identities. Neon gradients. Glitch energy. Art that pumps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-cyan-400 font-bold text-black shadow-xl">
              View Portfolio
            </Button>
            <Button variant="outline" className="rounded-2xl border-white/20 bg-black/30 text-white">
              <Coins className="mr-2 h-4 w-4" />
              Book a Drop
            </Button>
          </div>

          {/* Floating coins */}
          <FloatingCoin delay={0.1} size={36} x={"5%"} y={"-20px"} />
          <FloatingCoin delay={0.6} size={56} x={"70%"} y={"30px"} />
          <FloatingCoin delay={1.1} size={44} x={"85%"} y={"-10px"} />
        </motion.div>

        {/* Hero marquee */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -600, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap text-sm uppercase tracking-[0.35em] text-white/50"
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="opacity-80">
                memes • coins • art • gifs • stickers • lore • {
                  i % 2 === 0 ? "wagmi" : "to the moon"
                }
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-20">
    <SectionHeader icon={ImageIcon} label="Portfolio Gallery" sub="NFT-style cards • hover to flex" />
    {/* Asymmetric grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
      <div className="lg:col-span-4">
        <NFTCard idx={0} title="$PEPEVERSE" tag="Meme Brand System" />
      </div>
      <div className="lg:col-span-2">
        <NFTCard idx={1} title="$WAGMI" tag="Animated Mascot" />
      </div>
      <div className="lg:col-span-2">
        <NFTCard idx={2} title="$ZOOMER" tag="Sticker Pack" />
      </div>
      <div className="lg:col-span-4">
        <NFTCard idx={3} title="$CHAOS" tag="Landing Page" />
      </div>
      <div className="lg:col-span-3">
        <NFTCard idx={4} title="$MOON" tag="Mint Pass" />
      </div>
      <div className="lg:col-span-3">
        <NFTCard idx={5} title="$VIBE" tag="Motion Loop" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
    <SectionHeader icon={Info} label="About the Artist" sub="chaos director • pixel wrangler" />
    <div className="grid items-center gap-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80">
            I’m <span className="font-bold text-white">AN0N</span>, your favorite meme alchemist. I design mascots, coin lore, sticker packs, and animated splash pages that look like they ate a synthwave sunset. If it’s loud, weird, and extremely online—perfect.
          </p>
          <p className="mt-4 text-white/70">
            Past drops have trended on Crypto Twitter, crashed three Discords (good problem), and minted out in minutes. Let’s craft a visual identity that makes the timeline stop scrolling.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 md:grid-cols-3">
            <li className="rounded-xl bg-white/5 px-3 py-2">⚡ Rapid launch kits</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">🎨 Mascots & stickers</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">🌀 Glitch loops</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">🧪 Meme experiments</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">🚀 Mint pages</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">🏛️ Gallery-grade layouts</li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 text-center shadow-[0_0_40px_rgba(236,72,153,0.25)]">
          <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-emerald-400 to-cyan-400 text-5xl">
            🐸
          </div>
          <p className="text-sm text-white/70">Official mascot wrangler</p>
          <p className="mt-2 text-xs text-white/50">powered by caffeine & chaos</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
    <SectionHeader icon={Laugh} label="Contact" sub="send me your unhinged brief" />
    <ContactForm />
  </section>
);

export default function PortfolioMemeArtist() {
  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      {/* Global neon grid background */}
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.06]" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30 mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'.8\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.4\'/></svg>")' }} />

      <Header />
      <Portfolio />
      <About />
      <Contact />

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AN0N • meme energy + art gallery
      </footer>

      {/* Scoped glitch keyframes */}
      <style>{`
        @keyframes glitch {
          0% { clip-path: inset(0 0 95% 0); transform: translate(0); }
          20% { clip-path: inset(10% 0 85% 0); transform: translate(-1px, 1px); }
          40% { clip-path: inset(20% 0 70% 0); transform: translate(1px, -1px); }
          60% { clip-path: inset(30% 0 60% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(40% 0 40% 0); transform: translate(1px, 1px); }
          100% { clip-path: inset(50% 0 20% 0); transform: translate(0); }
        }
        .glitch-text::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(236,72,153,.8), rgba(34,197,94,.8), rgba(45,212,191,.8), rgba(168,85,247,.8)); mix-blend: screen; opacity: .15; animation: glitch 2.5s infinite steps(6); filter: blur(1px); border-radius: .5rem; }
      `}</style>
    </div>
  );
}
