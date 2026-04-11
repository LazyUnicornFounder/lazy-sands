import { ArrowRight, Globe, LayoutDashboard, Smartphone, Code, FolderSearch, FileText, CalendarCheck, Briefcase, BarChart3, ShoppingBag, Users, MessageSquare, Mail, Contact, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ShopProduct {
  name: string;
  price: string;
  productId: string;
  description: string;
  icon: React.ReactNode;
}

export const shopProducts: ShopProduct[] = [
  { name: "Portfolio", price: "$39", productId: "92efb480-88fb-4695-a3ab-869ea1a2500d", description: "Professional showcase site with projects & contact form.", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Landing Page", price: "$49", productId: "0f439b97-de22-48ad-b3ca-ad199fe5a191", description: "Responsive landing page with CTA sections & deployment.", icon: <Globe className="w-5 h-5" /> },
  { name: "Blog / CMS", price: "$59", productId: "ef5bdc81-14e7-4442-86f5-b10ccef91445", description: "Content management with editor, categories & SEO.", icon: <FileText className="w-5 h-5" /> },
  { name: "Newsletter Platform", price: "$69", productId: "ec57e767-edf1-4e2c-9b3d-8edc4a4c4b9b", description: "Subscriber management, templates & analytics.", icon: <Mail className="w-5 h-5" /> },
  { name: "API Integration", price: "$79", productId: "356dc1c5-eca5-459c-a584-21b6cc910b32", description: "Custom API development or third-party integration.", icon: <Code className="w-5 h-5" /> },
  { name: "Directory", price: "$89", productId: "d290444c-c3c5-4b80-9a25-989b4daad0b7", description: "Searchable listing platform with filters & categories.", icon: <FolderSearch className="w-5 h-5" /> },
  { name: "Dashboard", price: "$99", productId: "d3c58d93-490a-4df2-9857-65c322dd0872", description: "Analytics or admin dashboard with charts & real-time data.", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Community Forum", price: "$109", productId: "f757d253-c168-4ead-9042-fc98bb8b1206", description: "Discussion forum with threads, profiles & moderation.", icon: <MessageSquare className="w-5 h-5" /> },
  { name: "Analytics Dashboard", price: "$119", productId: "f2f14658-0dd8-4c54-a6ff-8e3cfd83ab85", description: "Data visualization with KPIs, filters & export.", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Booking System", price: "$129", productId: "dfe92a5c-6024-45ba-bc40-4667bb683e18", description: "Appointments with calendar, availability & notifications.", icon: <CalendarCheck className="w-5 h-5" /> },
  { name: "E-commerce Store", price: "$149", productId: "e1cab631-76af-4ac4-930a-93a5c0ffbeca", description: "Product catalog, cart, checkout & payment integration.", icon: <Store className="w-5 h-5" /> },
  { name: "CRM System", price: "$179", productId: "d2ef5068-2ccf-4a31-8e8b-4d3e051b2a09", description: "Contacts, deals pipeline & reporting.", icon: <Contact className="w-5 h-5" /> },
  { name: "Full Web App", price: "$199", productId: "0dcbd11a-36ce-44c1-97e0-f91a28bd20d9", description: "Multi-page app with auth, database & core features.", icon: <Globe className="w-5 h-5" /> },
  { name: "Mobile App", price: "$249", productId: "58de1ee6-bb67-42b8-9d83-824c1b9a8005", description: "Cross-platform mobile app with backend integration.", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Marketplace", price: "$249", productId: "403db495-ff54-40de-9049-742074786832", description: "Two-sided marketplace with listings & transactions.", icon: <ShoppingBag className="w-5 h-5" /> },
  { name: "SaaS Platform", price: "$299", productId: "f8013675-577e-4df5-bf86-b2f09452659b", description: "Full SaaS with billing, dashboards & multi-tenancy.", icon: <Users className="w-5 h-5" /> },
];

interface ShopSectionProps {
  onSelectProduct: (product: ShopProduct) => void;
}

const ShopSection = ({ onSelectProduct }: ShopSectionProps) => {
  return (
    <section id="shop" className="py-24 md:py-32 relative z-10">
      <div className="container">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Shop</p>
          <h2 className="text-4xl md:text-5xl font-heading mb-5">À la carte</h2>
          <p className="text-muted-foreground font-light">Pick exactly what you need. One-time payment, you own everything.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {shopProducts.map((product) => (
            <button
              key={product.productId}
              onClick={() => onSelectProduct(product)}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm flex flex-col text-left hover:border-primary/20 hover:bg-card/70 transition-all duration-500 cursor-pointer"
            >
              <div className="text-primary/60 mb-4 group-hover:text-primary transition-colors duration-300">
                {product.icon}
              </div>
              <p className="text-sm font-heading mb-1">{product.name}</p>
              <p className="text-xs text-muted-foreground font-light mb-4 leading-relaxed flex-1">{product.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-heading">{product.price}</p>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
