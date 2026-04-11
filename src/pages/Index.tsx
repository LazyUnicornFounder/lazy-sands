import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Check, Linkedin } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import ShowcaseTicker from "@/components/ShowcaseTicker";
import CheckoutDialog from "@/components/CheckoutDialog";
import ShopSection, { type ShopProduct } from "@/components/ShopSection";
import PortfolioSection from "@/components/PortfolioSection";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const plans = [
  {
    name: "Solo Founder",
    price: "$99",
    productId: "5cb2606d-ad4f-4f79-aac4-58ee56d01d2a",
    description: "Landing page, auth, 1 core feature, database — 2–3 days delivery",
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
    price: "$199",
    productId: "ed7cc3e3-aec0-428b-8b81-f5c645ba2c65",
    description: "Full web app, dashboard, payments, 3–5 features — 5–7 days delivery",
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
    price: "$299",
    productId: "c97eb6bd-5975-4796-8576-9cc34a68fe6d",
    description: "Multi-user, admin panel, integrations, analytics — 10–15 days delivery",
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
  const [selectedShopProduct, setSelectedShopProduct] = useState<{ name: string; price: string; productId: string } | null>(null);

  const jumpToTop = () => {
    window.scrollTo(0, 0);
  };

  const jumpToSection = (sectionId: string, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const targetTop = Math.max(section.offsetTop - offset, 0);
    window.scrollTo(0, targetTop);
  };

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

      {/* Discount Banner */}

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-2xl border-b border-border/30">
        <div className="container flex items-center justify-between h-20">
          <button type="button" onClick={jumpToTop} className="font-heading text-2xl tracking-wide text-foreground/90 cursor-pointer leading-[1.1] text-left">
            <span className="block">Lazy</span>
            <span className="block">Sands</span>
          </button>
          <div className="flex items-center gap-1">
            <Button variant="ghost" className="text-foreground/60 hover:text-foreground text-sm font-light tracking-wide" onClick={() => jumpToSection("shop")}>
              Shop
            </Button>
            <Button variant="ghost" className="text-foreground/60 hover:text-foreground text-sm font-light tracking-wide" onClick={() => jumpToSection("portfolio")}>
              Portfolio
            </Button>
            <Button variant="ghost" className="text-foreground/60 hover:text-foreground text-sm font-light tracking-wide" onClick={() => jumpToSection("about")}>
              About
            </Button>
            <a href="https://x.com/SoloUnicorn" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground w-9 h-9">
                <XIcon className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/saadsahawneh/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground w-9 h-9">
                <Linkedin className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-48 pb-16 md:pt-60 md:pb-24">
        <div className="container relative z-10 max-w-5xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[9rem] font-heading leading-[1.05] tracking-tight mb-8"
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
          >
            Diamond certified<br />
            <span className="text-gradient italic">Lovable</span> agency
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 font-light leading-relaxed"
            initial="hidden" animate="visible" variants={fadeUp} custom={1.5}
          >
            Whether you're a solo founder needing a landing page, a small business launching a full web app with payments, or a growing company that needs multi-user dashboards and integrations — I'll build it, deploy it, and hand it over ready to run.
          </motion.p>

          <motion.div
            className="mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-light tracking-wide" onClick={() => jumpToSection("shop")}>
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mb-16"
            initial="hidden" animate="visible" variants={fadeUp} custom={2.5}
          >
            <a href="https://x.com/SoloUnicorn" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2 font-light">
                <XIcon className="w-4 h-4" />
                Follow me on X
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/saadsahawneh/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2 font-light">
                <Linkedin className="w-4 h-4" />
                Follow me on LinkedIn
              </Button>
            </a>
          </motion.div>

        </div>
      </section>

      {/* Portfolio */}
      <div className="container max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <PortfolioSection />

      {/* Divider */}
      <div className="container max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Shop */}

      <ShopSection onSelectProduct={(product) => setSelectedShopProduct(product)} />

      {/* About */}
      <div className="container max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <section id="about" className="py-24 md:py-32 relative z-10">
        <div className="container max-w-3xl mx-auto text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">Our Mission</h2>
            <p className="text-2xl md:text-3xl font-heading italic text-gradient mb-8">
              Accelerate autonomous capitalism.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Lazy Sands is a venture of{" "}
              <a
                href="https://lazyfounderventures.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary underline underline-offset-4 transition-colors"
              >
                Lazy Founder Ventures
              </a>
              , building and launching businesses and apps at speed using the latest AI-powered tools.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 pt-8 pb-4 relative z-10">
        <div className="container flex flex-col items-center gap-4 text-xs text-muted-foreground tracking-wide">
          <span className="font-heading text-lg tracking-wide text-foreground/60 leading-[1.1] text-center">
            <span className="block">Lazy</span>
            <span className="block">Sands</span>
          </span>
          <div className="flex items-center gap-4">
            <a href="https://x.com/SoloUnicorn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-foreground transition-colors">
              <XIcon className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/saadsahawneh/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-foreground transition-colors font-light">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors font-light">Privacy Policy</Link>
          </div>
          <p className="font-light">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      {/* Checkout Dialog - Plans */}
      <CheckoutDialog
        open={!!selectedPlan}
        planName={selectedPlan?.name ?? ""}
        planPrice={selectedPlan?.price ?? ""}
        loading={loading === selectedPlan?.productId}
        onClose={() => setSelectedPlan(null)}
        onSubmit={handleDialogSubmit}
      />

      {/* Checkout Dialog - Shop */}
      <CheckoutDialog
        open={!!selectedShopProduct}
        planName={selectedShopProduct?.name ?? ""}
        planPrice={selectedShopProduct?.price ?? ""}
        loading={loading === selectedShopProduct?.productId}
        onClose={() => setSelectedShopProduct(null)}
        onSubmit={(sellWhat, sellTo) => {
          if (!selectedShopProduct?.productId) return;
          localStorage.setItem("checkout_context", JSON.stringify({ sellWhat, sellTo, plan: selectedShopProduct.name }));
          handleCheckout(selectedShopProduct.productId);
        }}
      />
    </div>
  );
};

export default Index;
