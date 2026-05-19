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

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Vision", path: "/vision" },
    { name: "Mission", path: "/mission" },
  ];
  const productLinks = [
    {
      name: "C-PVC Plumbing Pipe",
      path: "/products/cpvc-plumbing-pipe",
    },
    {
      name: "C-PVC Plain Fittings",
      path: "/products/cpvc-plain-fittings",
    },
    {
      name: "C-PVC Brass Fittings",
      path: "/products/cpvc-brass-fittings",
    },
    {
      name: "SWR Fittings",
      path: "/products/swr-fittings",
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  return (
    <>
    <div
  className={`fixed top-0 left-0 w-full z-[60]  transition-all duration-500 ${
    hideTopStrip
      ? "-translate-y-full opacity-0"
      : "translate-y-0 opacity-100"
  }`}
>
    <div className="">
      <div className="h-9 bg-[#8a2967] text-[#ffffff] flex items-center justify-center px-4 overflow-hidden">

        <div className="flex items-center gap-3 md:gap-6 whitespace-nowrap text-[11px] md:text-sm font-medium">

          <span className="opacity-95">
            Get Instant Online quotation on WhatsApp :
            <a
              href="https://wa.me/919797971181"
              className="ml-1 hover:underline"
            >
              +91 - 9797971181
            </a>
          </span>

          <span className="hidden md:block w-1 h-1 rounded-full bg-white/50" />

          <span className="opacity-95">
            Call :
            <a
              href="tel:+919104876565"
              className="ml-1 hover:underline"
            >
              +91 - 9104876565
            </a>
          </span>

          <span className="hidden lg:block w-1 h-1 rounded-full bg-white/50" />

          <span className="hidden lg:block font-semibold tracking-wide">
            Bhagvat Pipe
          </span>

          <span className="hidden xl:block w-1 h-1 rounded-full bg-white/50" />

          <span className="hidden xl:block uppercase tracking-[0.2em] text-white/80 text-[10px]">
            Ahmedabad
          </span>

        </div>
      </div>
    </div>
  </div>


     <nav
  className={`fixed left-0 w-full z-50 px-4 md:px-8 transition-all duration-500 ${
    hideTopStrip
      ? "top-0 pt-4"
      : "top-0 pt-14"
  }`}
>
        {/* Glass Blur Fade */}
        <div
          className="
    absolute
    inset-x-0
    top-0
    h-40
    bg-[#ffffff]/65
    backdrop-blur-3xl
    pointer-events-none
    [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0)_100%)]
    [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0)_100%)]
  "
        />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 rounded-full px-4 md:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={HeroImg}
                  alt="Logo"
                  width={140}
                  height={140}
                  className="object-contain"
                />
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
                      {/* Clickable Main Link */}
                      <Link
                        href={link.path}
                        className="relative px-5 py-1.5 cursor-pointer text-md font-medium rounded-full transition-all duration-300 inline-flex items-center"
                      >
                        {isActive(link.path) && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-[#8a2967] rounded-lg"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}

                        <span
                          className={`relative z-10 transition-colors duration-300 ${
                            isActive(link.path)
                              ? "text-white"
                              : "text-black/70 hover:text-black"
                          }`}
                        >
                          Products
                        </span>
                      </Link>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {productOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.22 }}
                            className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[340px] rounded-[10px] border border-black/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden"
                          >
                            <div className="p-3">
                              {productLinks.map((item, index) => (
                                <Link
                                  key={item.name}
                                  href={item.path}
                                  className="group block"
                                >
                                  <div
                                    className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 hover:bg-[#8a29660e] ${
                                      index !== productLinks.length - 1
                                        ? "border-b border-black/5"
                                        : ""
                                    }`}
                                  >
                                    <div>
                                      <h3 className="text-[17px] font-medium text-black">
                                        {item.name}
                                      </h3>

                                      <p className="mt-1 text-sm text-black/45">
                                        Product Category
                                      </p>
                                    </div>

                                    <span className="text-black/20 text-xl group-hover:translate-x-1 transition-all duration-300">
                                      ↗
                                    </span>
                                  </div>
                                </Link>
                              ))}
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
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive(link.path)
                          ? "text-white"
                          : "text-black/70 hover:text-black"
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
                href={"/contact"}
                className="bg-[#8a2967] text-white px-5 py-2.5 rounded-xl text-md font-medium hover:scale-[1.03] transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-black rounded-full"></span>
              <span className="w-6 h-[2px] bg-black rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 bg-[#f8f8f5] z-[100] flex flex-col"
          >
            {/* Top Bar */}
            <div className="h-20 border-b border-black/10 flex items-center justify-between px-6">
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

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col justify-between">
              <div>
                {/* Small Label */}
                <p className="text-xs uppercase tracking-[0.25em] text-black/40 mb-6">
                  Navigation
                </p>

                {/* Main Links */}
                <div className="flex flex-col">
                  {navLinks.map((link, index) => {
                    if (link.name === "Products") {
                      return (
                        <div
                          key={link.name}
                          className="border-b border-black/8"
                        >
                          {/* Main Button */}
                          <button
                            onClick={() =>
                              setMobileProductOpen(!mobileProductOpen)
                            }
                            className="w-full flex items-center justify-between py-5"
                          >
                            <span className="text-[40px] leading-none font-semibold tracking-tight text-black">
                              Products
                            </span>

                            <span
                              className={`text-2xl transition-all duration-300 ${
                                mobileProductOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>

                          {/* Dropdown */}
                          <AnimatePresence>
                            {mobileProductOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35 }}
                                className="overflow-hidden"
                              >
                                <div className="pb-5 flex flex-col gap-2">
                                  {productLinks.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.path}
                                      onClick={() => {
                                        setMenuOpen(false);
                                        setMobileProductOpen(false);
                                      }}
                                      className="group flex items-center justify-between rounded-2xl border border-black/8 bg-white px-5 py-4"
                                    >
                                      <div>
                                        <h3 className="text-lg font-medium text-black">
                                          {item.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-black/40">
                                          Product Category
                                        </p>
                                      </div>

                                      <span className="text-black/20 text-xl">
                                        ↗
                                      </span>
                                    </Link>
                                  ))}
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
                        onClick={() => {
                          setActive(link.name);
                          setMenuOpen(false);
                        }}
                        className="group"
                      >
                        <div className="flex items-center justify-between py-5 border-b border-black/8">
                          <span className="text-[40px] leading-none font-semibold tracking-tight text-black">
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

                {/* Utility Section */}
                <div className="mt-8">
                  {/* <p className="text-xs uppercase tracking-[0.25em] text-black/40 mb-5">
              Quick Actions
            </p> */}

                  <div className="flex flex-col gap-4">
                    <button className="h-14 rounded-xl bg-black text-white text-sm font-medium">
                      Contact Us
                    </button>

                    <button className="h-14 rounded-xl border border-black/10 bg-white text-black text-sm font-medium">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="pt-12">
                <div className="border-t border-black/10 pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-black/40">Ahmedabad, India</p>

                    <p className="text-sm font-medium mt-1">
                      hello@yourbrand.com
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-sm">
                      In
                    </div>

                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-sm">
                      Ig
                    </div>
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
