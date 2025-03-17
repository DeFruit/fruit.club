import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { motion } from "framer-motion";
import { Rocket, DollarSign, Code, Droplet, Sword, Zap } from "lucide-react";
import { useState, useEffect } from "react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Baloo+2:wght@400;700&family=Bungee&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "animated-bg text-text", children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col md:flex-row items-center justify-between min-h-screen pl-8 md:pl-16 lg:pl-24", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "md:w-1/2 text-left",
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              className: "text-5xl lg:text-6xl font-bold text-text",
              initial: { opacity: 0, y: -30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
              children: [
                "Welcome to ",
                /* @__PURE__ */ jsx("span", { className: "text-text", children: "Fruit Club" }),
                "!"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              className: "mt-4 text-lg lg:text-xl text-text",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
              children: "The most fun and vibrant DeFi experience. Stake, play, and earn with your favorite fruits! 🍏🍍🍇🍓"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(
              motion.button,
              {
                className: "fruit-button bg-primary neon-glow mt-6 text-2xl",
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.7, duration: 0.6, ease: "easeOut" },
                children: "Join the Fun!"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                className: "fruit-button bg-white text-primary mt-6 text-2xl",
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.7, duration: 0.6, ease: "easeOut" },
                children: "Read the whitepaper"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "md:w-1/2 flex justify-center ",
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "./hero image.svg",
            alt: "Massive Fruit Mound",
            className: "w-full h-auto max-w-[540px] md:max-w-full object-cover"
          }
        )
      }
    )
  ] });
}
const features = [
  { title: "Fast Performance", icon: Rocket, desc: "Instant finality and < 3 second blocktimes! 🤯" },
  { title: "Low fees", icon: DollarSign, desc: "Less than $0.001 per transaction" },
  { title: "No downtime", icon: Code, desc: "No downtime, no maintenance, just fun!" }
];
function Features() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#1a1a1a] text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: "Only on Algorand" }),
    /* @__PURE__ */ jsx("p", { className: " mb-10", children: "The only blockchain that can handle all the fun!" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "p-6 bg-background rounded-lg text-center",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: index * 0.2 },
        children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "h-12 w-12 mx-auto mb-4 text-text" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-text", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-secondary", children: feature.desc })
        ]
      },
      index
    )) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "py-6 bg-gray-800 text-gray-400 text-center", children: /* @__PURE__ */ jsx("p", { children: "© 2025 DeFruit. All rights reserved." }) });
}
const themes = [
  { name: "apple", imgPath: "./apple-icon.svg" },
  { name: "grape", imgPath: "./grape-icon.svg" },
  { name: "pinapple", imgPath: "./pinapple-icon.svg" },
  { name: "strawberry", imgPath: "./strawberry-icon.svg" }
];
function ThemeSwitcher({ setTheme }) {
  const [activeTheme, setActiveTheme] = useState(
    () => typeof window !== "undefined" ? localStorage.getItem("theme") || "apple" : "apple"
  );
  useEffect(() => {
    if (typeof document !== "undefined") {
      setActiveTheme(
        document.documentElement.getAttribute("data-theme") || "apple"
      );
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex bg-transparent ", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-3", children: themes.map((t) => /* @__PURE__ */ jsx(
    "button",
    {
      className: `w-10 h-10 flex items-center justify-center rounded-full border-2 ${activeTheme === t.name ? "border-black neon-glow" : "border-transparent"}`,
      style: { backgroundColor: `var(--primary)` },
      onClick: () => {
        setTheme(t.name);
        setActiveTheme(t.name);
      },
      children: /* @__PURE__ */ jsx("img", { src: t.imgPath, alt: t.name })
    },
    t.name
  )) }) });
}
function Navbar() {
  const [theme, setTheme] = useState(
    () => typeof window !== "undefined" ? localStorage.getItem("theme") || "apple" : "apple"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      className: "fixed top-0 w-full bg-transparent text-white py-4 px-6 ",
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5 },
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "FRUIT.CLUB" }),
        /* @__PURE__ */ jsx(ThemeSwitcher, { setTheme }),
        /* @__PURE__ */ jsx(
          motion.button,
          {
            className: "fruit-button bg-primary neon-glow",
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 },
            transition: { delay: 0.7, duration: 0.6, ease: "easeOut" },
            children: "Get squeezing!"
          }
        )
      ] })
    }
  );
}
const teams = [
  { title: "Gorgeous Grapes", imgSrc: "./grape-icon.svg", bgColor: "bg-grapeBG" },
  { title: "Ascending Apples", imgSrc: "./apple-icon.svg", bgColor: "bg-appleBG" },
  { title: "Perfect Pinapples", imgSrc: "./pinapple-icon.svg", bgColor: "bg-pinappleBG" },
  { title: "Smooth Strawberries", imgSrc: "./strawberry-icon.svg", bgColor: "bg-strawberryBG" }
];
function TeamFun() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#1a1a1a] text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: "Join a team!" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-10", children: "Play, Stake and earn with your teammates." }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-8", children: teams.map((team, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: `p-6 rounded-lg text-center ${team.bgColor}`,
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: index * 0.2 },
        children: [
          /* @__PURE__ */ jsx("img", { src: team.imgSrc, alt: team.title, className: "h-24 w-24 mx-auto mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-text", children: team.title })
        ]
      },
      index
    )) })
  ] }) });
}
const steps = [
  {
    title: "Squeeze Fruits",
    description: "Squeez your fruits daily and contribute to your team",
    icon: /* @__PURE__ */ jsx(Droplet, { className: "w-12 h-12 text-secondary" })
  },
  {
    title: "Beat Out the Competition",
    description: "Compete against others to maximize your $JUICE earnings.",
    icon: /* @__PURE__ */ jsx(Sword, { className: "w-12 h-12 text-secondary" })
  },
  {
    title: "Earn Juice",
    description: "$JUICE is your reward! Use it to power up and win even more.",
    icon: /* @__PURE__ */ jsx(Zap, { className: "w-12 h-12 text-secondary" })
  }
];
function GameLoop() {
  return /* @__PURE__ */ jsxs("section", { className: "py-20 px-8 md:px-16 lg:px-24 text-center", children: [
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        className: "text-4xl lg:text-5xl font-bold text-text",
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: "The Fruit Club Loop 🍏🍌🍇🍓"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg lg:text-xl text-secondary", children: "Squeeze fruits, compete, and earn sweet rewards!" }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-col md:flex-row justify-center gap-12", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "p-6 bg-background rounded-xl shadow-lg w-full md:w-1/3 text-center ",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.3, duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: step.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-text", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-secondary mt-2", children: step.description })
        ]
      },
      index
    )) })
  ] });
}
function JuiceToken() {
  return /* @__PURE__ */ jsxs("section", { className: "py-20 px-8 md:px-16 lg:px-24 text-center ", children: [
    /* @__PURE__ */ jsxs(
      motion.h2,
      {
        className: "text-4xl lg:text-5xl font-bold text-text",
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          "Introducing ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "JUICE" }),
          "! 🥤"
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg lg:text-xl text-secondary", children: "The reward for squeezing, competing, and dominating Fruit Club!" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col md:flex-row items-center justify-center gap-12", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "w-full md:w-1/3 flex justify-center",
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "./juice-token.svg",
              alt: "JUICE Token",
              className: "w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "w-full md:w-2/3 text-left",
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-text", children: "Why JUICE Matters? 💰" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-secondary", children: "JUICE is the core currency of Fruit Club. Earn it by squeezing fruits, competing in events, and dominating the leaderboard. Use JUICE to unlock rewards, boost your power, and flex on the competition!" }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                className: "fruit-button bg-primary neon-glow mt-6",
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                children: "Start Earning JUICE!"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TeamFun, {}),
    /* @__PURE__ */ jsx(GameLoop, {}),
    /* @__PURE__ */ jsx(Features, {}),
    /* @__PURE__ */ jsx(JuiceToken, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BPkV09ij.js", "imports": ["/assets/index-BJHAE5s4.js", "/assets/components-YRyMgPEI.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-B69VPq0J.js", "imports": ["/assets/index-BJHAE5s4.js", "/assets/components-YRyMgPEI.js"], "css": ["/assets/root-v5funq7S.css"] }, "routes/index": { "id": "routes/index", "parentId": "root", "path": "index", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/index-piH7pO3E.js", "imports": ["/assets/index-BJHAE5s4.js"], "css": [] } }, "url": "/assets/manifest-7e95cb76.js", "version": "7e95cb76" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
