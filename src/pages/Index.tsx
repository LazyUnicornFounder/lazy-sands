import { motion } from "framer-motion";
import { Globe, ArrowLeftRight } from "lucide-react";
import { Sparkles, Layout, Rocket, MessageSquare, ArrowRight, CheckCircle2, Zap, Users, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Layout,
    title: "Custom Web Apps",
    description: "From idea to production-ready app — built fast with Lovable's AI-powered platform.",
  },
  {
    icon: Rocket,
    title: "MVP Launch",
    description: "Get your minimum viable product live in days, not months. Perfect for startups and founders.",
  },
  {
    icon: Globe,
    title: "Domain Setup",
    description: "Buy or connect your custom domain, configure DNS, set up SSL — all handled for you seamlessly.",
  },
  {
    icon: ArrowLeftRight,
    title: "Project Transfer",
    description: "Moving between workspaces or accounts? I'll handle the full transfer with zero downtime.",
  },
  {
    icon: Code2,
    title: "App Optimization",
    description: "Already on Lovable? I'll refine your design, fix bugs, and add features that delight users.",
  },
  {
    icon: MessageSquare,
    title: "1-on-1 Coaching",
    description: "Learn to build confidently on Lovable with personalized sessions tailored to your goals.",
  },
];

const steps = [
  { number: "01", title: "Discovery Call", description: "We discuss your vision, goals, and timeline." },
  { number: "02", title: "Design & Build", description: "I craft your app on Lovable with rapid iterations." },
  { number: "03", title: "Review & Launch", description: "You review, we refine, and go live together." },
];

const testimonials = [
  {
    quote: "Went from a napkin sketch to a live product in under a week. Absolutely incredible.",
    name: "Sarah K.",
    role: "Startup Founder",
  },
  {
    quote: "The coaching sessions unlocked Lovable for me. Now I build my own features confidently.",
    name: "Marcus T.",
    role: "Solo Entrepreneur",
  },
  {
    quote: "Professional, fast, and truly understands what makes a great web app. Highly recommend.",
    name: "Elena R.",
    role: "Agency Owner",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <span className="font-heading font-bold text-xl text-foreground">
            <Sparkles className="inline-block w-5 h-5 text-primary mr-2" />
            LovableBuilder
          </span>
          <Button size="sm">
            Book a Call
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.08)_0%,transparent_70%)]" />
        <div className="container relative text-left max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Zap className="w-3.5 h-3.5" /> Lovable Expert
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            I'm a <span className="text-gradient">Platinum Level</span> builder on Lovable and I help you launch an autonomous business on Lovable.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            initial="hidden" animate="visible" variants={fadeUp} custom={1.5}
          >
            Solo founder? I'll build your app, buy and set up your custom domain, and transfer the entire project to you — ready to run. Everything you need to launch your solo unicorn, handled end to end.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            <div className="text-left">
              <label className="block text-sm font-medium text-muted-foreground mb-2">What do you want to sell?</label>
              <textarea
                className="w-full h-36 md:h-44 rounded-xl border border-border bg-card p-5 text-foreground text-base placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-shadow"
                placeholder="Describe your product or service..."
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Who do you want to sell to?</label>
              <textarea
                className="w-full h-36 md:h-44 rounded-xl border border-border bg-card p-5 text-foreground text-base placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-shadow"
                placeholder="Describe your ideal customer..."
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <Button size="lg" className="glow-primary text-base px-8">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              See My Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What I can build for you</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Whether you need a full product or a helping hand, I've got you covered.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain & Transfer */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Domain & Transfer Services</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Go live with your own domain or move projects between accounts — stress-free.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-xl border border-border bg-card"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            >
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Custom Domain Setup</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Buy a new domain or connect one you already own</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> DNS configuration — A records, TXT verification, SSL</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Cloudflare proxy & advanced setup support</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Root domain + www subdomain properly configured</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Email DNS records (MX, SPF, DKIM, DMARC)</li>
              </ul>
            </motion.div>
            <motion.div
              className="p-8 rounded-xl border border-border bg-card"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            >
              <ArrowLeftRight className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Project Transfer</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Transfer projects between workspaces seamlessly</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Move to a new account with zero data loss</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Backend disconnect & reconnect handled for you</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Billing & workspace admin setup guidance</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Domain migration between projects supported</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container max-w-3xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground">Three simple steps to your dream product.</p>
          </motion.div>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-6 items-start"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <span className="text-4xl font-heading font-bold text-primary/20">{step.number}</span>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What clients say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-6 rounded-xl border border-border bg-card"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <p className="text-foreground text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Users className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to build something amazing?</h2>
            <p className="text-muted-foreground mb-8">
              Let's chat about your project and see how fast we can bring it to life.
            </p>
            <Button size="lg" className="glow-primary text-base px-10">
              Book Your Free Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-heading font-semibold text-foreground">
            <Sparkles className="inline-block w-4 h-4 text-primary mr-1" />
            LovableBuilder
          </span>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
