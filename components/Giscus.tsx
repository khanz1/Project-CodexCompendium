import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Giscus = () => {
  const router = useRouter();
  const { theme } = useTheme();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "khanz1/giscus");
    script.setAttribute("data-repo-id", "R_kgDOJUonfQ");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOJUonfc4CVpvl");
    script.setAttribute("data-mapping", "url");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", theme ?? "light");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("data-loading", "lazy");
    script.async = true;

    const giscusEl = document.getElementById("giscus");

    giscusEl?.appendChild(script);

    return () => {
      if (giscusEl) {
        giscusEl?.removeChild(script);
      }
    };
  }, [router.pathname, theme]);

  return <div id="giscus"></div>;
};

export default Giscus;
