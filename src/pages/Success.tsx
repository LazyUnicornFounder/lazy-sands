import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Success = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) return;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      setCreated(true);
      toast.success("Account created! Check your email to verify.");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative noise-bg flex items-center justify-center p-6">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(38_80%_62%/0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-center mb-10">
          <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-heading mb-3">Payment Successful</h1>
          <p className="text-muted-foreground font-light">
            Thank you! I'll reach out within 24 hours to kick off your project.
          </p>
        </div>

        {!created ? (
          <div className="rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
            <h2 className="text-lg font-heading mb-2">Create your account</h2>
            <p className="text-sm text-muted-foreground font-light mb-6">
              Set up an account to track your project progress and communicate with me.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 transition-all duration-300 font-light"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 transition-all duration-300 font-light"
                  placeholder="Min 6 characters"
                />
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-light tracking-wide"
              onClick={handleSignUp}
              disabled={loading || !email || !password}
            >
              {loading ? "Creating..." : "Create Account"}
              {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
            </Button>

            <button
              onClick={() => navigate("/")}
              className="w-full mt-4 text-center text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors font-light"
            >
              Skip for now
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-light mb-6">
              Check your email to verify your account. You're all set!
            </p>
            <Button
              size="lg"
              className="bg-transparent border border-border/70 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-light tracking-wide"
              onClick={() => navigate("/")}
            >
              Back to Home
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Success;
