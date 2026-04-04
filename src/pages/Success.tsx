import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

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

  const handleGoogleSignIn = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/success",
    });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
    }
    if (!result.error && !result.redirected) {
      setCreated(true);
      toast.success("Signed in with Google!");
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

            <Button
              size="lg"
              variant="outline"
              className="w-full border-border/50 text-foreground hover:bg-card/80 transition-all duration-300 font-light tracking-wide text-sm py-5 gap-3 mb-4"
              onClick={handleGoogleSignIn}
            >
              <GoogleIcon />
              Sign up with Google
            </Button>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-xs text-muted-foreground/50 uppercase tracking-widest font-light">or</span>
              <div className="h-px flex-1 bg-border/50" />
            </div>

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
              You're all set! We'll be in touch soon.
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
