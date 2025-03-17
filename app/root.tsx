import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import { Providers } from "./service/providers";

// Fonts
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Baloo+2:wght@400;700&family=Bungee&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <script
            dangerouslySetInnerHTML={{ __html: "window.global = window;" }}
          />
        </head>
        <body className="animated-bg text-text">
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </Providers>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
