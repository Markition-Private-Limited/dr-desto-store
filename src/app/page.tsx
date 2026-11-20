import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import CustomerFavoritesSection from "@/components/CustomerFavoritesSection";
import BrandCollectionSection from "@/components/BrandCollectionSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <main className="flex-1">
        <div className="relative">
          <Navbar transparent />
          <Hero />
        </div>
        <CategorySection />
        <NewArrivalsSection />
        <CustomerFavoritesSection />
        <BrandCollectionSection />
      </main>
    </div>
  );
}
