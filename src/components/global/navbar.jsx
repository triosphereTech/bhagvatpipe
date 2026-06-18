"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg from "../../../public/Images/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const pathname = usePathname();
  const [hideTopStrip, setHideTopStrip] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 40 && window.scrollY > lastScrollY) {
        setHideTopStrip(true);
      } else {
        setHideTopStrip(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Vision", path: "/vision" },
    { name: "Mission", path: "/mission" },
  ];

  // Organized into columns for the mega menu
  const productColumns = [
    {
      heading: "CPVC Range",
      items: [
        
        { name: "C-PVC Plain Fittings", path: "/products/cpvc-plain-fittings", desc: "Solvent-weld joints & connectors" },
        { name: "C-PVC Brass Fittings", path: "/products/cpvc-brass-fittings", desc: "Metal-threaded transition pieces" },
      ],
    },
    {
      heading: "Upvc",
      items: [
        { name: "SWR Ring Fit", path: "/products/swr-fittings", desc: "Soil, waste & rainwater systems" },
        { name: "SWR Self Fit", path: "/products/swr-pipes", desc: "Rigid PVC drain & vent pipes" },
        { name: "Column Pipes", path: "/products/column-pipes", desc: "Submersible pump delivery pipes" },
      ],
    },
    
  ];

  // Flat list for mobile
  const allProductLinks = productColumns.flatMap((col) => col.items);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Strip */}
      <div
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          hideTopStrip ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="h-9 bg-[#8a2967] text-white flex items-center justify-center px-4 overflow-hidden">
          <div className="flex items-center gap-3 md:gap-6 whitespace-nowrap text-[11px] md:text-sm font-medium">
            <span className="opacity-95">
              Get Instant Online quotation on WhatsApp :
              <a href="https://wa.me/919797971181" className="ml-1 hover:underline">
                +91 - 9797971181
              </a>
            </span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/50" />
            <span className="opacity-95">
              Call :
              <a href="tel:+919104876565" className="ml-1 hover:underline">
                +91 - 9104876565
              </a>
            </span>
            <span className="hidden lg:block w-1 h-1 rounded-full bg-white/50" />
            <span className="hidden lg:block font-semibold tracking-wide">Bhagvat Pipe</span>
            <span className="hidden xl:block w-1 h-1 rounded-full bg-white/50" />
            <span className="hidden xl:block uppercase tracking-[0.2em] text-white/80 text-[10px]">Ahmedabad</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`fixed left-0 w-full z-50 px-4 md:px-8 transition-all duration-500 ${
          hideTopStrip ? "top-0 pt-4" : "top-0 pt-14"
        }`}
      >
        {/* Glass Blur Fade */}
        <div
          className="
            absolute inset-x-0 top-0 h-40
            bg-white/65 backdrop-blur-3xl pointer-events-none
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0)_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0)_100%)]
          "
        />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 rounded-full px-4 md:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image src={HeroImg} alt="Logo" width={140} height={140} className="object-contain" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center bg-[#fafaf7]/20 border border-black/5 rounded-xl p-1 px-2 py-2 gap-1">
              {navLinks.map((link) => {
                if (link.name === "Products") {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setProductOpen(true)}
                      onMouseLeave={() => setProductOpen(false)}
                    >
                      <Link
                        href={link.path}
                        className="relative px-5 py-1.5 cursor-pointer text-md font-medium rounded-full transition-all duration-300 inline-flex items-center gap-1"
                      >
                        {isActive(link.path) && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-[#8a2967] rounded-lg"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span
                          className={`relative z-10 transition-colors duration-300 ${
                            isActive(link.path) ? "text-white" : "text-black/70 hover:text-black"
                          }`}
                        >
                          Products
                        </span>
                        {/* Chevron */}
                        <svg
                          className={`relative z-10 w-3.5 h-3.5 transition-transform duration-300 ${
                            productOpen ? "rotate-180" : ""
                          } ${isActive(link.path) ? "text-white" : "text-black/40"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* ── Mega Menu Dropdown ── */}
                      <AnimatePresence>
                        {productOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 14 }}
                            transition={{ duration: 0.22 }}
                            className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[520px] rounded-2xl border border-black/8 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.10)] overflow-hidden"
                          >

                            {/* 3-column grid */}
                            <div className="grid grid-cols-2 divide-x divide-black/6 p-2">
                              {productColumns.map((col) => (
                                <div key={col.heading} className="px-3 py-3">
                                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a2967]/70 mb-3 px-2">
                                    {col.heading}
                                  </p>
                                  <div className="flex flex-col gap-0.5">
                                    {col.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.path}
                                        className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-[#8a29670a] transition-all duration-200"
                                      >
                                        {/* Pink dot accent */}
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8a2967]/30 flex-shrink-0 group-hover:bg-[#8a2967] transition-colors duration-200" />
                                        <div className="min-w-0">
                                          <p className="text-sm font-medium text-black leading-snug group-hover:text-[#8a2967] transition-colors duration-200">
                                            {item.name}
                                          </p>
                                          <p className="text-[11px] text-black/40 mt-0.5 leading-snug">{item.desc}</p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Bottom CTA strip */}
                            <div className="border-t border-black/6 bg-[#fafaf8] px-6 py-3 flex items-center justify-between">
                              <p className="text-xs text-black/40">
                                Can't find what you need?
                              </p>
                              <Link
                                href="/contact"
                                className="text-xs font-medium bg-[#8a2967] text-white px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                              >
                                Request a quote
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="relative px-5 py-1.5 cursor-pointer text-md font-medium rounded-full transition-all duration-300"
                  >
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-[#8a2967] rounded-lg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive(link.path) ? "text-white" : "text-black/70 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="bg-[#8a2967] text-white px-5 py-2.5 rounded-xl text-md font-medium hover:scale-[1.03] transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button onClick={() => setMenuOpen(true)} className="lg:hidden flex flex-col gap-1">
              <span className="w-6 h-[2px] bg-black rounded-full" />
              <span className="w-6 h-[2px] bg-black rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#f8f8f5] z-[100] flex flex-col"
          >
            {/* Top Bar */}
            <div className="h-20 border-b border-black/10 flex items-center justify-between px-6 flex-shrink-0">
              <Link href="/">
                <Image src={HeroImg} alt="Logo" width={90} height={90} />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center"
              >
                <span className="text-3xl leading-none">×</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-black/40 mb-5">Navigation</p>

                <div className="flex flex-col">
                  {navLinks.map((link) => {
                    if (link.name === "Products") {
                      return (
                        <div key={link.name} className="border-b border-black/8">
                          <button
                            onClick={() => setMobileProductOpen(!mobileProductOpen)}
                            className="w-full flex items-center justify-between py-5"
                          >
                            <span className="text-[36px] leading-none font-semibold tracking-tight text-black">
                              Products
                            </span>
                            <span
                              className={`text-2xl transition-transform duration-300 ${
                                mobileProductOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>

                          <AnimatePresence>
                            {mobileProductOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35 }}
                                className="overflow-hidden"
                              >
                                <div className="pb-5">
                                  {/* 2-column grid on mobile */}
                                  {productColumns.map((col) => (
                                    <div key={col.heading} className="mb-4">
                                      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8a2967]/60 mb-2 px-1">
                                        {col.heading}
                                      </p>
                                      <div className="grid grid-cols-2 gap-2">
                                        {col.items.map((item) => (
                                          <Link
                                            key={item.name}
                                            href={item.path}
                                            onClick={() => {
                                              setMenuOpen(false);
                                              setMobileProductOpen(false);
                                            }}
                                            className="group flex flex-col rounded-xl border border-black/8 bg-white px-4 py-3 hover:border-[#8a2967]/20 transition-all duration-200"
                                          >
                                            <span className="text-sm font-medium text-black leading-snug group-hover:text-[#8a2967] transition-colors duration-200">
                                              {item.name}
                                            </span>
                                            <span className="mt-1 text-[11px] text-black/40 leading-snug line-clamp-2">
                                              {item.desc}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}

                                  {/* View all link */}
                                  <Link
                                    href="/products"
                                    onClick={() => setMenuOpen(false)}
                                    className="mt-2 flex items-center justify-center gap-2 w-full rounded-xl border border-[#8a2967]/20 bg-[#8a29670a] py-3 text-sm font-medium text-[#8a2967]"
                                  >
                                    View all products <span>→</span>
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="group"
                      >
                        <div className="flex items-center justify-between py-5 border-b border-black/8">
                          <span className="text-[36px] leading-none font-semibold tracking-tight text-black">
                            {link.name}
                          </span>
                          <span className="text-black/20 text-2xl group-hover:translate-x-1 transition-all duration-300">
                            ↗
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Utility Buttons */}
                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="h-14 rounded-xl bg-[#8a2967] text-white text-sm font-medium flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                  <button className="h-14 rounded-xl border border-black/10 bg-white text-black text-sm font-medium">
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-10">
                <div className="border-t border-black/10 pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-black/40">Ahmedabad, India</p>
                    <p className="text-sm font-medium mt-1">hello@yourbrand.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-sm">In</div>
                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-sm">Ig</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;