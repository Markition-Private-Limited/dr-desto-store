import ProductGridSection, { type Product } from "@/components/ProductGridSection";

const PRODUCTS: Product[] = [
  {
    name: "Tresemme shampoo pro collection",
    brand: "TRESEMME",
    description: "Keratin shampoo to control frizzy hair and smo...",
    price: "AED 20.00",
    oldPrice: "AED 25.00",
    image: "/products/2912-v2.png",
    href: "/product/tresemme-shampoo-pro-collection",
  },
  {
    name: "Now solutions castor oil for hair",
    brand: "NOW SOLUTIONS",
    description: "This Now Foods castor oil has anti-inflammator...",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2910-v2.png",
    href: "/product/now-solutions-castor-oil",
  },
  {
    name: "Now vegetable glycerin",
    brand: "DR DESTA SELECTION",
    description: "Pure Vegetable Glycerin Is An Outstanding Mois...",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2908-v2.png",
    href: "/product/now-vegetable-glycerin",
  },
  {
    name: "Now solutions almond oil",
    brand: "NOW SOLUTIONS",
    description: "100% Pure Moisturizing Oil Nourishing Promotes...",
    price: "AED 45.00",
    oldPrice: "AED 50.00",
    image: "/products/2906-v2.png",
    href: "/product/now-solutions-almond-oil",
  },
];

export default function NewArrivalsSection() {
  return (
    <ProductGridSection
      eyebrow="JUST DISCOVERED"
      heading="New to your routine."
      viewAllHref="/new-arrivals"
      products={PRODUCTS}
    />
  );
}
