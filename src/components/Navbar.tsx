"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBag, User, X } from "lucide-react";

const LEFT_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Skincare", href: "/category/skincare" },
  { label: "Haircare", href: "/category/haircare" },
  { label: "Body Care", href: "/category/body-care" },
];

const RIGHT_LINKS = [
  { label: "Sunscreen", href: "/category/sunscreen" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Offers", href: "/offers" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type MegaMenuColumn = {
  header: string;
  links: { label: string; href: string }[];
};

type MegaMenu = {
  columns: MegaMenuColumn[];
  image: string;
  imageAlt: string;
};

const MEGA_MENUS: Record<string, MegaMenu> = {
  Skincare: {
    columns: [
      {
        header: "SHOP SKINCARE",
        links: [
          { label: "All Skincare", href: "/category/skincare" },
          { label: "Cleansers", href: "/category/skincare/cleansers" },
          { label: "Face Creams", href: "/category/skincare/face-creams" },
          { label: "Serums & Treatments", href: "/category/skincare/serums-treatments" },
        ],
      },
      {
        header: "COMPLETE YOUR ROUTINE",
        links: [
          { label: "Facial Oils", href: "/category/skincare/facial-oils" },
          { label: "Sunscreens", href: "/category/sunscreen" },
          { label: "Masks & Exfoliants", href: "/category/skincare/masks-exfoliants" },
        ],
      },
    ],
    image: "/nav/skincare-menu.jpg",
    imageAlt: "Woman with glowing skin touching her cheek",
  },
  Haircare: {
    columns: [
      {
        header: "SHOP HAIRCARE",
        links: [
          { label: "All Haircare", href: "/category/haircare" },
          { label: "Shampoos", href: "/category/haircare/shampoos" },
          { label: "Conditioners", href: "/category/haircare/conditioners" },
          { label: "Hair Oils", href: "/category/haircare/hair-oils" },
        ],
      },
      {
        header: "MORE CARE",
        links: [
          { label: "Hair Masks & Treatments", href: "/category/haircare/masks-treatments" },
          { label: "Hair Growth Products", href: "/category/haircare/growth-products" },
        ],
      },
    ],
    image: "/nav/haircare-menu.jpg",
    imageAlt: "Woman with long wavy hair looking over her shoulder",
  },
  "Body Care": {
    columns: [
      {
        header: "SHOP BODY CARE",
        links: [
          { label: "Body Care", href: "/category/body-care" },
          { label: "Body Lotions", href: "/category/body-care/body-lotions" },
          { label: "Body Creams", href: "/category/body-care/body-creams" },
          { label: "Soaps & Cleansers", href: "/category/body-care/soaps-cleansers" },
        ],
      },
    ],
    image: "/nav/bodycare-menu.jpg",
    imageAlt: "Dropper bottle, pump bottle and jar styled on stone",
  },
};

type NavbarProps = {
  /** Renders the nav row with a transparent background so it can float over a hero image. */
  transparent?: boolean;
};

export default function Navbar({ transparent = false }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenuNow = (label: string | null) => {
    clearCloseTimer();
    setIsClosing(false);
    setOpenMenu(label);
  };

  const closeMenu = () => {
    if (!openMenu) return;
    clearCloseTimer();
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setIsClosing(false);
    }, 180);
  };

  const activeMenu = openMenu ? MEGA_MENUS[openMenu] : null;

  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-50"
          : "relative z-50 border-b border-ink/10 bg-cream"
      }
    >
      {activeMenu && (
        <div
          className={
            "fixed inset-0 z-30 bg-ink/10 backdrop-blur-md transition-opacity duration-200 " +
            (isClosing ? "opacity-0" : "opacity-100")
          }
          onClick={closeMenu}
        />
      )}

      <div className="relative z-50" onMouseLeave={closeMenu}>
        <div className="relative z-50 bg-ink">
        <div className="relative mx-auto flex max-w-[1800px] items-center justify-center px-6 py-2.5 sm:px-10">
          <p className="text-center text-xs text-cream/90">
            Discover beauty essentials for your everyday routine.
          </p>
          <div className="absolute right-6 flex items-center gap-5 text-cream sm:right-10">
            <button aria-label="Search" className="transition-colors hover:text-gold">
              <Search size={16} strokeWidth={1.5} />
            </button>
            <button aria-label="Account" className="transition-colors hover:text-gold">
              <User size={16} strokeWidth={1.5} />
            </button>
            <button aria-label="Wishlist" className="transition-colors hover:text-gold">
              <Heart size={16} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart"
              className="flex items-center gap-1 transition-colors hover:text-gold"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              <span className="text-[11px] text-gold">0</span>
            </button>
          </div>
        </div>
      </div>

      <nav
        className={
          "relative z-50 " +
          (transparent
            ? "border-b border-white/15 bg-white/12 backdrop-blur-md"
            : "bg-cream")
        }
      >
        <ul className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-2.5 text-sm font-medium text-ink sm:px-10">
          {LEFT_LINKS.map((link, i) => {
            const menu = MEGA_MENUS[link.label];
            return (
              <li
                key={link.href}
                onMouseEnter={() => (menu ? openMenuNow(link.label) : closeMenu())}
              >
                <Link
                  href={link.href}
                  className={
                    (i === 0 ? "" : "text-ink/80 ") +
                    "transition-colors hover:text-gold" +
                    (openMenu === link.label ? " text-gold" : "")
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li onMouseEnter={closeMenu}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Dr Desta Store — Cosmetic and Beauty"
                width={819}
                height={933}
                priority
                className="h-20 w-auto object-contain"
              />
            </Link>
          </li>

          {RIGHT_LINKS.map((link) => (
            <li key={link.href} onMouseEnter={closeMenu}>
              <Link href={link.href} className="text-ink/80 transition-colors hover:text-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {!transparent && <div className="mx-6 border-t border-ink/10 sm:mx-10" />}

        {activeMenu && (
          <div
            key={openMenu}
            className={
              (isClosing ? "animate-dropdown-fall" : "animate-dropdown-rise") +
              " absolute inset-x-0 top-full border-t border-ink/10 bg-cream shadow-xl"
            }
          >
            <div className="relative mx-auto flex max-w-[1800px] justify-between gap-10 px-6 py-9 sm:px-10 lg:px-24">
              <div className="flex gap-16">
                {activeMenu.columns.map((col) => (
                  <div key={col.header} className="w-[230px] shrink-0">
                    <p className="text-xs font-semibold tracking-[0.25em] text-gold">
                      {col.header}
                    </p>
                    <ul className="mt-5 space-y-4">
                      {col.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            className="text-base text-ink/90 transition-colors hover:text-gold"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="relative h-[260px] w-[340px] shrink-0 overflow-hidden">
                <Image
                  src={activeMenu.image}
                  alt={activeMenu.imageAlt}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </div>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="absolute bottom-5 right-6 flex h-9 w-9 items-center justify-center text-ink/60 transition-colors hover:text-ink sm:right-10 lg:right-24"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}
      </nav>
      </div>
    </header>
  );
}
