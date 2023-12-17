import React, { ReactNode } from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Giscus from "./components/Giscus";
import Image from "next/image";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <Image src="/images/mascot.png" alt="Image of cat" width={50} height={50} />
  ),
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.khanz1.dev" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link rel="icon" href="/images/mascot.ico" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "kDocs"} />
        <meta
          property="og:description"
          content={frontMatter.description || "kDocs"}
        />
      </>
    );
  },
  project: {
    link: "https://github.com/khanz1/khanz1-docs",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    // create c logo project xavier
    text: `© ${new Date().getFullYear()} Xavier Project`,
  },
  main: ({ children }: { children: ReactNode }) => (
    <div>
      {children}
      <Giscus />
    </div>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  gitTimestamp: ({ timestamp }) => {
    // create format timestamp -> thursday, 1 january 2021
    const updatedAt = new Date(timestamp).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return <span>Last updated: {updatedAt}</span>;
  },
};

export default config;
