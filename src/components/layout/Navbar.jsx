"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setIsOpen(false);
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Esc চাপলে মেনু বন্ধ, বড় স্ক্রিনে গেলে মেনু বন্ধ
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    const onResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#003BE2]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-2 text-white"
        >
          <Image width={30} height={30} src="/nav-logo.png" alt="" />
          <span className="text-xl font-bold tracking-tight sm:text-2xl">
            Byte<span className="text-[#d5fb1e]">Space</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm font-medium transition hover:text-[#d5fb1e] ${
                isActive(link.href) ? "text-[#d5fb1e]" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          
          <Link
            href="/signin"
            className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#d5fb1e] hover:text-[#d5fb1e]"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#d5fb1e] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-95"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="rounded-full p-2.5 text-white transition hover:bg-white/10 hover:text-[#d5fb1e]"
          >
            <ShoppingBag size={20} />
          </Link>
        </div>

        {/* Mobile: Cart + Menu Button */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            href="/cart"
            aria-label="Cart"
            className="rounded-md p-2 text-white hover:bg-white/10"
          >
            <ShoppingBag size={22} />
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-md p-2 text-white hover:bg-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-[#003BE2] shadow-xl md:hidden"
        >
          <div className="mx-auto max-w-7xl px-5 py-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={close}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition hover:bg-white/10 ${
                    isActive(link.href) ? "text-[#d5fb1e]" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              <Link
                href="/signin"
                onClick={close}
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-[#d5fb1e] hover:text-[#d5fb1e]"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={close}
                className="rounded-full bg-[#d5fb1e] px-6 py-3 text-center text-sm font-semibold text-black transition hover:brightness-95"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

