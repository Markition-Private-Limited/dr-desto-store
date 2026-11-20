"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = {
  image: string | null;
  alt: string;
  eyebrow: string;
  heading: { text: string; italic?: boolean }[];
  paragraph: string;
  ctaLabel: string;
  ctaHref: string;
  objectPosition?: string;
};

const SLIDES: Slide[] = [
  {
    image: "/hero/slide-1-v2.webp",
    alt: "Woman with radiant skin wearing a cream knit wrap",
    eyebrow: "THE BEAUTY EDIT",
    heading: [{ text: "Beauty," }, { text: "Thoughtfully Curated.", italic: true }],
    paragraph:
      "Discover skincare and beauty essentials selected to complement your everyday routine.",
    ctaLabel: "EXPLORE THE COLLECTION",
    ctaHref: "/shop",
  },
  {
    image: "/hero/slide-2.webp",
    alt: "Woman with long, glossy wavy hair wrapped in a cream towel",
    eyebrow: "THE HAIRCARE EDIT",
    heading: [{ text: "Give Your Hair the" }, { text: "Care It Deserves.", italic: true }],
    paragraph:
      "Explore shampoos, nourishing oils, conditioners and haircare essentials.",
    ctaLabel: "DISCOVER HAIRCARE",
    ctaHref: "/category/haircare",
  },
  {
    image: "/hero/slide-3.webp",
    alt: "Amber dropper bottle, frosted pump bottle and cream jar styled on stone with an orchid",
    eyebrow: "THE EVERYDAY EDIT",
    heading: [{ text: "Your Daily Ritual," }, { text: "Elevated.", italic: true }],
    paragraph:
      "Find the essentials that make your personal-care routine feel a little more special.",
    ctaLabel: "SHOP BEAUTY ESSENTIALS",
    ctaHref: "/shop",
    objectPosition: "right top",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-cream sm:h-[680px] lg:h-[860px]">
      <div
        className="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ width: `${SLIDES.length * 100}%`, transform: `translateX(-${active * (100 / SLIDES.length)}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <div key={i} className="relative h-full shrink-0" style={{ width: `${100 / SLIDES.length}%` }}>
            <div className="absolute inset-0">
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: slide.objectPosition ?? "75% 0%" }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream-dark via-[#e9d4bb] to-[#d9bb95]">
                  <span className="rounded-full border border-ink/15 bg-cream/70 px-5 py-2 text-[11px] font-medium tracking-[0.2em] text-ink/50">
                    {slide.alt.toUpperCase()}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-cream/55 via-cream/10 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto flex h-full max-w-[1800px] items-center pl-6 pr-6 sm:pl-16 sm:pr-10 lg:pl-24">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.3em] text-gold">
                  {slide.eyebrow}
                </p>

                <h1 className="mt-6 font-display text-6xl leading-[1.05] text-ink sm:text-7xl">
                  {slide.heading.map((line, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      <span className={line.italic ? "italic font-normal" : ""}>
                        {line.text}
                      </span>
                    </span>
                  ))}
                </h1>

                <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60">
                  {slide.paragraph}
                </p>

                <Link
                  href={slide.ctaHref}
                  className="mt-10 inline-flex items-center bg-ink px-8 py-4 text-xs font-semibold tracking-[0.2em] text-cream transition-colors hover:bg-gold"
                >
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 mx-auto flex max-w-[1800px] items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-ink/70">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <span className="text-ink/30">/</span>
          <span>{String(SLIDES.length).padStart(2, "0")}</span>
          <div className="ml-3 flex h-px w-28 overflow-hidden bg-ink/15">
            <div
              className="h-full bg-gold transition-all duration-300"
              style={{ width: `${((active + 1) / SLIDES.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(active - 1)}
            className="flex h-12 w-12 items-center justify-center border border-ink/20 bg-cream text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(active + 1)}
            className="flex h-12 w-12 items-center justify-center border border-ink/20 bg-cream text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
