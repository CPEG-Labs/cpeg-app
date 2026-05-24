import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { PixelArt } from "@/components/PixelArt";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function LandingPage() {
  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden pb-20">
      {/* Navigation */}
      <nav className="w-full p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary pixel-border-static animate-pulse-glow" />
          <span className="font-pixel text-xl tracking-tighter text-foreground">CPEG</span>
        </div>
        <div className="hidden md:flex gap-6 font-pixel text-xs">
          <a href="#mechanics" className="hover:text-primary transition-colors uppercase">Mechanics</a>
          <a href="#tiers" className="hover:text-primary transition-colors uppercase">Tiers</a>
          <a href="#get-started" className="hover:text-primary transition-colors uppercase">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <motion.h1 variants={fadeInUp} className="font-pixel text-4xl md:text-5xl lg:text-6xl leading-tight">
            CPEG
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-bold text-primary">
            Commit Photographic Experts Group. The NFT20 Experience on Base.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
            Every token you buy automatically mints CPEG NFTs. Every token you sell automatically burns them. The more you hold, the higher the rarity of your NFTs, unlocking greater participation in trading fee rewards.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <a href="#get-started" data-testid="button-buy-cpeg" className="pixel-border bg-primary text-primary-foreground px-8 py-4 font-pixel text-sm uppercase text-center inline-block cursor-pointer">
              Buy CPEG
            </a>
            <a href="#mechanics" data-testid="button-learn-mechanics" className="pixel-border bg-white text-foreground px-8 py-4 font-pixel text-sm uppercase text-center inline-block cursor-pointer">
              Learn Mechanics
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <PixelArt type="hero" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float drop-shadow-2xl" />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 max-w-[3200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-3xl mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Zero steps needed. Just buy CPEG - everything else is automatic.</p>
        </motion.div>

        {/* Main flow steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-border z-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--border)) 0px, hsl(var(--border)) 8px, transparent 8px, transparent 16px)' }} />

          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {[
              {
                step: "01",
                icon: "🪙",
                label: "Buy CPEG",
                desc: "Buy CPEG on Base as usual. No extra steps needed.",
                color: "bg-slate-100 border-slate-300",
                dot: "bg-slate-400"
              },
              {
                step: "02",
                icon: "⚡",
                label: "Auto Detected",
                desc: "Your CPEG transfer event is detected on-chain within seconds.",
                color: "bg-blue-50 border-blue-200",
                dot: "bg-blue-400"
              },
              {
                step: "03",
                icon: "🖼",
                label: "NFT Minted",
                desc: "Your CPEG NFT appears in your wallet automatically. Tier matches your CPEG balance.",
                color: "bg-green-50 border-green-200",
                dot: "bg-green-400"
              },
              {
                step: "04",
                icon: "⬆",
                label: "Auto Upgrade",
                desc: "Buy more? Your old NFT burns and a higher-tier NFT mints instantly.",
                color: "bg-purple-50 border-purple-200",
                dot: "bg-purple-400"
              },
              {
                step: "05",
                icon: "💰",
                label: "Earn Rewards",
                desc: "Every CPEG trade sends 0.75% fee to the rewards pool for NFT holders.",
                color: "bg-yellow-50 border-yellow-200",
                dot: "bg-yellow-400"
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center">
                {/* Step bubble */}
                <div className={`w-28 h-28 pixel-border-static ${item.color} flex flex-col items-center justify-center mb-4 relative`}>
                  <span className="text-3xl mb-1" role="img" aria-hidden="true">{item.icon}</span>
                  <span className="font-pixel text-xs text-muted-foreground">{item.step}</span>
                </div>
                <h3 className="font-pixel text-sm mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sell scenario */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {/* Sell some */}
          <div className="pixel-border-static bg-red-50 p-6">
            <div className="font-pixel text-sm text-red-500 mb-3">Sell Some</div>
            <div className="flex items-center gap-3 flex-wrap text-sm">
              <span className="pixel-border-static bg-white px-3 py-2">Sell CPEG</span>
              <span className="text-muted-foreground font-pixel text-xs">-&gt;</span>
              <span className="pixel-border-static bg-white px-3 py-2 line-through text-red-400">Old NFT Burns</span>
              <span className="text-muted-foreground font-pixel text-xs">-&gt;</span>
              <span className="pixel-border-static bg-white px-3 py-2 text-purple-500">New Tier Mints</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Your NFT automatically drops to the correct tier for your remaining balance.</p>
          </div>
          {/* Sell all */}
          <div className="pixel-border-static bg-slate-50 p-6">
            <div className="font-pixel text-sm text-slate-500 mb-3">Sell All</div>
            <div className="flex items-center gap-3 flex-wrap text-sm">
              <span className="pixel-border-static bg-white px-3 py-2">Balance = 0</span>
              <span className="text-muted-foreground font-pixel text-xs">-&gt;</span>
              <span className="pixel-border-static bg-white px-3 py-2 line-through text-red-400">NFT Burns</span>
              <span className="text-muted-foreground font-pixel text-xs">-&gt;</span>
              <span className="pixel-border-static bg-white px-3 py-2 text-slate-400">No NFT</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Buy again anytime - your NFT mints back automatically.</p>
          </div>
        </motion.div>

        {/* Zero action callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-10 pixel-border-static bg-primary/5 p-6 text-center"
        >
          <p className="font-pixel text-sm text-primary mb-2">No approvals. No wallet connection needed here. No extra gas fees.</p>
          <p className="text-muted-foreground text-sm">All sync gas costs are covered by the protocol from the 0.50% protocol fee. User = zero friction.</p>
        </motion.div>
      </section>

      {/* Mechanics Section */}
      <section id="mechanics" className="py-24 px-6 bg-muted/50 border-y-4 border-border relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxZTI5M2IiLz48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMWUyOTNiIi8+PC9zdmc+')] opacity-10" />
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-pixel text-3xl mb-4">Core Mechanics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">How the protocol works automatically behind the scenes.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Automatic Minting",
                desc: "When you purchase tokens, CPEG NFTs are automatically minted proportional to the size of your transaction.",
                color: "bg-green-100"
              },
              {
                title: "Automatic Burning",
                desc: "When you sell tokens, whether partially or in full, the corresponding CPEG NFTs are burned or downgraded.",
                color: "bg-red-100"
              },
              {
                title: "Dynamic Rarity",
                desc: "CPEG NFTs automatically upgrade in rarity as your token holdings increase, providing higher reward multipliers.",
                color: "bg-purple-100"
              },
              {
                title: "Fee Rewards",
                desc: "Holders of CPEG NFTs can claim rewards from a dedicated pool funded by 0.75% of the trading fees.",
                color: "bg-yellow-100"
              }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp} className="pixel-border-static bg-card p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-12 h-12 ${card.color} pixel-border-static mb-6 flex items-center justify-center`}>
                  <div className="w-4 h-4 bg-border" />
                </div>
                <h3 className="font-pixel text-lg mb-4 leading-relaxed">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rarity Tiers Section */}
      <section id="tiers" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-3xl mb-4">NFT Rarity Tiers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Hold more tokens to automatically upgrade your CPEG NFT.</p>
        </motion.div>

        <div className="space-y-6">
          {[
            { tier: "Common", req: "10M – 50M Tokens", mult: "1.0x", type: "common" as const, desc: "Standard CPEG NFT", color: "text-slate-500", bg: "bg-slate-100" },
            { tier: "Uncommon", req: "50M – 100M Tokens", mult: "1.5x", type: "uncommon" as const, desc: "Enhanced CPEG NFT", color: "text-green-600", bg: "bg-green-100" },
            { tier: "Rare", req: "100M – 500M Tokens", mult: "2.0x", type: "rare" as const, desc: "Superior CPEG NFT", color: "text-blue-500", bg: "bg-blue-100" },
            { tier: "Epic", req: "500M – 1B Tokens", mult: "2.5x", type: "epic" as const, desc: "Premium CPEG NFT", color: "text-purple-500", bg: "bg-purple-100" },
            { tier: "Legendary", req: "1B – 2B Tokens", mult: "4.0x", type: "legendary" as const, desc: "Ultra Rare CPEG NFT", color: "text-orange-500", bg: "bg-orange-100" },
            { tier: "Mythic", req: "2B+ Tokens", mult: "6.0x", type: "mythic" as const, desc: "One-of-a-Kind CPEG NFT", color: "text-yellow-500", bg: "bg-yellow-100", glow: true }
          ].map((tier, i) => (
            <motion.div 
              key={tier.tier}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`pixel-border-static bg-card p-6 flex flex-col md:flex-row items-center gap-8 ${tier.glow ? 'animate-pulse-glow border-accent' : ''}`}
            >
              <div className={`${tier.bg} p-4 pixel-border-static shrink-0`}>
                <PixelArt type={tier.type} className="w-24 h-24" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className={`font-pixel text-xl mb-2 ${tier.color}`}>{tier.tier}</h3>
                <p className="font-bold text-lg">{tier.desc}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 text-center md:text-right">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Requirement</div>
                  <div className="font-pixel text-sm">{tier.req}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Multiplier</div>
                  <div className="font-pixel text-sm text-primary">{tier.mult}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fee Distribution */}
      <section className="py-24 px-6 bg-secondary/10 border-y-4 border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-pixel text-3xl mb-4">Fee Distribution</h2>
            <p className="text-xl text-muted-foreground">Total 2.4% trading fee breakdown</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { percent: "0.75%", label: "Rewards Pool", sub: "For NFT Holders", color: "bg-accent text-accent-foreground" },
              { percent: "0.75%", label: "Token Creator", sub: "Protocol Support", color: "bg-primary text-primary-foreground" },
              { percent: "0.50%", label: "CPEG", sub: "Protocol Treasury", color: "bg-secondary text-secondary-foreground" },
              { percent: "0.40%", label: "Clanker", sub: "Network Fee", color: "bg-foreground text-background" }
            ].map((fee, i) => (
              <motion.div key={i} variants={fadeInUp} className={`pixel-border-static ${fee.color} p-8 text-center`}>
                <div className="font-pixel text-2xl mb-4">{fee.percent}</div>
                <div className="font-bold text-lg mb-1">{fee.label}</div>
                <div className="text-sm opacity-80">{fee.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="font-pixel text-3xl mb-12 text-center">Key Features</h2>
        <div className="grid gap-4">
          {[
            "Authentic NFT20-style dynamic minting and burning mechanics",
            "Real-time synchronization between token holdings and CPEG NFT status",
            "Automatic rarity upgrades based on holding size",
            "Direct claiming of trading fee revenue through CPEG NFT ownership",
            "Seamless compatibility with all tokens on Base",
            "Gas-efficient ERC-1155 smart contract implementation",
            "Upcoming: CPEG native launchpad interface"
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-card pixel-border-static"
            >
              <div className="w-4 h-4 bg-primary shrink-0" />
              <span className="font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="pixel-border-static bg-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

          <h2 className="font-pixel text-2xl md:text-3xl mb-6 relative z-10">Start Earning Now</h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto relative z-10">
            No sign-up. No waitlist. It's fully automatic.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Just buy CPEG on Base. You instantly receive your CPEG NFT. Buy more and your NFT upgrades to a higher rarity tier. Sell some and it burns, then re-mints at the correct tier for your new balance. Everything happens on-chain, automatically.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10 mb-8">
            <a
              href="https://app.uniswap.org"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-buy-cpeg-cta"
              className="pixel-border bg-primary text-primary-foreground px-8 py-4 font-pixel text-sm uppercase inline-block"
            >
              Buy CPEG on Base
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="https://x.com/cpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border bg-white text-foreground px-6 py-3 font-pixel text-xs uppercase hover:bg-muted inline-block"
              data-testid="button-follow"
            >
              Follow on X
            </a>
            <a
              href="https://github.com/cpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border bg-white text-foreground px-6 py-3 font-pixel text-xs uppercase hover:bg-muted inline-block"
              data-testid="button-community"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t-4 border-border mt-20">
        <div className="flex justify-center gap-6 mb-4 font-pixel text-xs">
          <a href="https://x.com/cpeg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">X</a>
          <a href="https://github.com/cpeg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
        </div>
        <div className="font-pixel text-sm text-muted-foreground">
          CPEG 2026. Commit Photographic Experts Group on Base.
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
