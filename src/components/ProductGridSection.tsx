import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export type Product = {
  name: string;
  brand: string;
  description: string;
  price: string;
  oldPrice: string;
  image: string;
  href: string;
};

type ProductGridSectionProps = {
  eyebrow: string;
  heading: string;
  viewAllHref: string;
  products: Product[];
};

export default function ProductGridSection({
  eyebrow,
  heading,
  viewAllHref,
  products,
}: ProductGridSectionProps) {
  return (
    <section className="bg-cream pb-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">{eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">{heading}</h2>
          </div>

          <Link
            href={viewAllHref}
            className="flex shrink-0 items-center gap-1.5 border border-ink px-4 py-2 text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            VIEW ALL
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.href} className="group flex flex-col">
              <Link href={product.href} className="relative block bg-white">
                <span className="absolute left-3 top-3 z-10 bg-cream px-2 py-1 text-[10px] font-semibold tracking-[0.1em] text-gold">
                  SALE
                </span>
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute right-3 top-3 z-10 text-ink/70 transition-colors hover:text-gold"
                >
                  <Heart size={18} strokeWidth={1.5} />
                </button>
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="mt-4">
                <p className="text-[11px] font-semibold tracking-[0.15em] text-ink/50">
                  {product.brand}
                </p>
                <Link href={product.href}>
                  <h3 className="mt-1.5 text-base text-ink transition-colors hover:text-gold">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-ink/50">{product.description}</p>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">{product.price}</span>
                  <span className="text-sm text-ink/35 line-through">{product.oldPrice}</span>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full border border-ink py-2.5 text-[11px] font-semibold tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
