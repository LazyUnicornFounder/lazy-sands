import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import ShowcaseTicker from "@/components/ShowcaseTicker";
import CheckoutDialog from "@/components/CheckoutDialog";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const plans = [
  {
    name: "Solo Founder",
    price: "$1,500",
    productId: "5cb2606d-ad4f-4f79-aac4-58ee56d01d2a",
    description: "Landing page, auth, 1 core feature, database",
    features: [
      "1 custom landing page",
      "User authentication",
      "1 core feature built out",
      "Database setup",
      "Domain & deployment",
      "1 round of revisions",
    ],
  },
  {
    name: "Small Business",
    price: "$3,500",
    productId: "ed7cc3e3-aec0-428b-8b81-f5c645ba2c65",
    description: "Full web app, dashboard, payments, 3–5 features",
    features: [
      "Full multi-page web app",
      "Dashboard included",
      "Payments integration",
      "3–5 core features",
      "Database & auth setup",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Medium Business",
    price: "$7,500",
    productId: "c97eb6bd-5975-4796-8576-9cc34a68fe6d",
    description: "Multi-user, admin panel, integrations, analytics",
    features: [
      "Multi-user support",
      "Admin panel",
      "Third-party integrations",
      "Analytics dashboard",
      "Full auth & database",
      "2 weeks post-launch support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    productId: "",
    description: "Custom scope, SLA, dedicated support",
    features: [
      "Custom project scope",
      "SLA agreement",
      "Dedicated support",
      "Priority communication",
      "Unlimited revisions",
      "Ongoing maintenance",
    ],
  },
];

const Index = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  const handleCheckout = async (productId: string) => {
    setLoading(productId);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { productId },
      });
      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const handleDialogSubmit = (sellWhat: string, sellTo: string) => {
    if (!selectedPlan?.productId) return;
    // Store answers for the success page
    localStorage.setItem("checkout_context", JSON.stringify({ sellWhat, sellTo, plan: selectedPlan.name }));
    handleCheckout(selectedPlan.productId);
  };

  return (
    <div className="min-h-screen bg-background relative noise-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(38_80%_62%/0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-2xl border-b border-border/30">
        <div className="container flex items-center justify-between h-20">
          <img src="/logo.png" alt="Lazy Sands" className="h-10" />
          <a href="#pricing">
            <Button variant="ghost" className="text-foreground/60 hover:text-foreground text-sm font-light tracking-wide">
              Pricing
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="container relative z-10 max-w-5xl mx-auto">
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 flex items-center gap-2"
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
          >
            <Sparkles className="w-3 h-3 text-primary/60" />
            Lovable Platinum certified builder
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading leading-[1.1] tracking-tight mb-8"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            I launch and build your<br />
            businesses and apps<br />
            on <span className="text-gradient italic">Lovable.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 font-light leading-relaxed"
            initial="hidden" animate="visible" variants={fadeUp} custom={1.5}
          >
            Whether you're a solo founder needing a landing page, a small business launching a full web app with payments, or a growing company that needs multi-user dashboards and integrations — I'll build it, deploy it, and hand it over ready to run.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            <ShowcaseTicker />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32 relative z-10">
        <div className="container">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-heading mb-5">Choose your package</h2>
            <p className="text-muted-foreground font-light">One-time payment. No subscriptions. You own everything.</p>
            <p className="text-xs text-muted-foreground/50 mt-3 font-light">Powered by <a href="https://polar.sh" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">Polar</a> payments</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="group relative p-7 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm flex flex-col hover:border-primary/20 hover:bg-card/70 transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{plan.name}</p>
                <p className="text-3xl font-heading mb-2">{plan.price}</p>
                <p className="text-sm text-muted-foreground font-light mb-6 leading-relaxed">{plan.description}</p>
                
                <div className="h-px bg-border/50 mb-6" />

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground font-light">
                      <Check className="w-3.5 h-3.5 text-primary/70 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.productId ? (
                  <Button
                    size="lg"
                    className="w-full bg-transparent border border-border/70 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-light tracking-wide"
                    onClick={() => setSelectedPlan(plan)}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="w-full bg-transparent border border-border/70 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-light tracking-wide"
                    onClick={() => window.location.href = "mailto:hello@lovablebuilder.com"}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 relative z-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wide">
          <span className="font-body font-medium uppercase tracking-widest text-foreground/60">
            Lazy Sands
          </span>
          <p className="font-light">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      {/* Checkout Dialog */}
      <CheckoutDialog
        open={!!selectedPlan}
        planName={selectedPlan?.name ?? ""}
        planPrice={selectedPlan?.price ?? ""}
        loading={loading === selectedPlan?.productId}
        onClose={() => setSelectedPlan(null)}
        onSubmit={handleDialogSubmit}
      />
    </div>
  );
};

export default Index;
