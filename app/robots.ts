export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://blog-explorer-neon.vercel.app/sitemap.xml",
  };
}
