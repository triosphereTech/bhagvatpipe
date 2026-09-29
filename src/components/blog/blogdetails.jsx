'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineClock,
} from "react-icons/hi2";

const renderBlock = (block, index) => {
  if (block.type === "h2") {
    return (
      <h2
        key={index}
        id={`blog-section-${index}`}
        className="scroll-mt-28 mt-14 text-[26px] font-semibold leading-tight text-[#20181d] sm:text-[31px]"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3
        key={index}
        id={`blog-section-${index}`}
        className="scroll-mt-28 mt-10 text-[21px] font-semibold leading-snug text-[#20181d] sm:text-[24px]"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={index} className="mt-6 text-[16px] leading-8 text-black/60 sm:text-[17px]">
        {block.text}
      </p>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul key={index} className="mt-6 space-y-3 text-[16px] leading-8 text-black/60 sm:text-[17px]">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a2967]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "numbered") {
    return (
      <ol
        key={index}
        className="mt-6 list-decimal space-y-3 pl-6 text-[16px] leading-8 text-black/60 marker:font-semibold marker:text-[#8a2967] sm:text-[17px]"
      >
        {block.items.map((item) => (
          <li key={item} className="pl-2">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "highlight") {
    return (
      <div
        key={index}
        className="mt-9 rounded-[18px] border border-[#8a2967]/20 bg-[#8a2967]/10 p-6 sm:p-7"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a2967]">
          {block.title}
        </p>
        <p className="mt-3 text-[16px] leading-8 text-black/60 sm:text-[17px]">
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        key={index}
        className="mt-10 border-l-4 border-[#8a2967] pl-6 text-[22px] font-medium leading-9 text-[#20181d] sm:text-[26px] sm:leading-10"
      >
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={index} className="mt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-[#8a29660e]">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            sizes="(min-width: 1024px) 860px, 100vw"
            className="object-contain p-8"
          />
        </div>
        {block.caption ? (
          <figcaption className="mt-3 text-sm leading-6 text-black/45">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.type === "table") {
    return (
      <div key={index} className="mt-10 overflow-hidden rounded-[18px] border border-black/10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse bg-white text-left">
            <thead className="bg-[#8a2967] text-white">
              <tr>
                {block.columns.map((column) => (
                  <th key={column} className="px-5 py-4 text-sm font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {block.rows.map((row) => (
                <tr key={row.join("-")} className="text-[15px] leading-7 text-black/60">
                  {row.map((cell) => (
                    <td key={cell} className="px-5 py-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
};

const BlogDetail = ({ blog, previousBlog, nextBlog }) => {
  const sections = useMemo(
    () =>
      blog.content
        .map((block, index) => ({ ...block, index }))
        .filter((block) => block.type === "h2" || block.type === "h3"),
    [blog.content],
  );
  const [activeSection, setActiveSection] = useState(sections[0]?.index ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections[0]) {
          setActiveSection(Number(visibleSections[0].target.id.replace("blog-section-", "")));
        }
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(`blog-section-${section.index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (index) => {
    setActiveSection(index);
    document.getElementById(`blog-section-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-x-clip bg-[#fbfaf8] text-[#20181d]">
      <article className="px-3 pt-32 sm:px-4 sm:pt-40 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[4/3] min-h-[180px] overflow-hidden rounded-[16px] bg-[#8a29660e] shadow-[0_24px_90px_rgba(32,24,29,0.10)] sm:aspect-[16/8.6] sm:min-h-[260px] sm:rounded-[22px]">
            <Image
              src={blog.heroImage || blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 pb-16 pt-8 sm:gap-10 sm:pb-20 sm:pt-12 lg:grid-cols-[minmax(0,880px)_240px] lg:items-start sm:pt-14">
        <div className="min-w-0">
        <header>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#8a2967]/20 bg-[#8a2967]/10 px-3.5 py-1.5 text-xs font-semibold text-[#8a2967]">
              {blog.category}
            </span>
            <span className="text-sm text-black/45">{blog.date}</span>
            <span className="flex items-center gap-1.5 text-sm text-black/45">
              <HiOutlineClock className="text-base" />
              {blog.readingTime}
            </span>
          </div>

          <h1 className="mt-5 break-words text-[30px] font-semibold leading-[1.14] text-[#20181d] sm:mt-6 sm:text-[44px] lg:text-[52px]">
            {blog.title}
          </h1>

          <div className="mt-7 border-y border-black/10 py-5">
            <p className="text-sm uppercase tracking-[0.18em] text-black/38">Written by</p>
            <p className="mt-1 text-[17px] font-medium text-[#20181d]">{blog.author}</p>
          </div>
        </header>

        <div className="min-w-0 pt-2 sm:pb-4">
          {blog.content.map(renderBlock)}
        </div>
        </div>

        {sections.length > 0 ? (
          <aside
            className="order-first min-w-0 lg:order-none lg:sticky lg:top-28 lg:z-10 lg:h-fit lg:self-start"
            aria-label="Blog details index"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a2967]">
              Blog Index
            </p>
            <nav className="mt-4 max-h-64 overflow-y-auto overscroll-contain border-l border-black/10 pr-2 sm:max-h-72 lg:max-h-none lg:overflow-visible lg:pr-0">
              {sections.map((section) => (
                <button
                  key={section.index}
                  type="button"
                  onClick={() => scrollToSection(section.index)}
                  className={`block w-full border-l-2 px-4 py-2 text-left text-sm leading-6 transition-colors ${
                    activeSection === section.index
                      ? "-ml-px border-[#8a2967] font-semibold text-[#8a2967]"
                      : "border-transparent text-black/50 hover:text-[#8a2967]"
                  }`}
                >
                  {section.text}
                </button>
              ))}
            </nav>
          </aside>
        ) : null}
        </div>
      </article>

      <nav className="px-4 pb-24" aria-label="Blog navigation">
        <div className="mx-auto grid max-w-[880px] gap-4 border-t border-black/10 pt-8 sm:grid-cols-2">
          {previousBlog ? (
            <Link
              href={`/blog/${previousBlog.slug}`}
              className="group rounded-[18px] border border-black/10 bg-white p-5 shadow-[0_14px_45px_rgba(32,24,29,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8a2967]/30"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#8a2967]">
                <HiOutlineArrowLeft />
                Previous Blog
              </span>
              <p className="mt-3 text-[17px] font-semibold leading-snug text-[#20181d]">
                {previousBlog.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog ? (
            <Link
              href={`/blog/${nextBlog.slug}`}
              className="group rounded-[18px] border border-black/10 bg-white p-5 text-left shadow-[0_14px_45px_rgba(32,24,29,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8a2967]/30 sm:text-right"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#8a2967] sm:justify-end">
                Next Blog
                <HiOutlineArrowRight />
              </span>
              <p className="mt-3 text-[17px] font-semibold leading-snug text-[#20181d]">
                {nextBlog.title}
              </p>
            </Link>
          ) : null}
        </div>
      </nav>
    </main>
  );
};

export default BlogDetail;
