import ProductGridSection, { type Product } from "@/components/ProductGridSection";

const PRODUCTS: Product[] = [
  {
    name: "Amalico batana oil for hair growth",
    brand: "AMALICO",
    description: "This batana oil pro is derived from the miracu...",
    price: "AED 30.00",
    oldPrice: "AED 35.00",
    image: "/products/2900-v2.png",
    href: "/product/amalico-batana-oil",
  },
  {
    name: "Bepanthen moisturizing cream price",
    brand: "BEPANTHEN",
    description: "Bepanthen Moisturizing cream can be used daily...",
    price: "AED 30.00",
    oldPrice: "AED 38.00",
    image: "/products/2810-v2.png",
    href: "/product/bepanthen-moisturizing-cream",
  },
  {
    name: "Emami 7 Oils In One 500ml For Sticky Hair Oil",
    brand: "DR DESTA SELECTION",
    description: "Benefits Makes hair stronger and less prone ...",
    price: "AED 15.00",
    oldPrice: "AED 16.00",
    image: "/products/2601-v2.png",
    href: "/product/emami-7-oils-in-one",
  },
  {
    name: "DOVE Moisturising Soap For healthy Skin",
    brand: "DOVE",
    description: "Keep your skin soft, smooth, and nourished wit...",
    price: "AED 15.00",
    oldPrice: "AED 20.00",
    image: "/products/2599-v2.png",
    href: "/product/dove-moisturising-soap",
  },
];

export default function CustomerFavoritesSection() {
  return (
    <ProductGridSection
      eyebrow="CUSTOMER-REVIEWED FINDS"
      heading="Your next favorite, waiting."
      viewAllHref="/shop"
      products={PRODUCTS}
    />
  );
}
