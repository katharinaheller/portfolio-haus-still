export default function (eleventy) {
  eleventy.addPassthroughCopy({ public: "/" });
  eleventy.addFilter(
    "absolute",
    (path) =>
      `${process.env.SITE_ORIGIN || "https://katharinaheller.github.io"}${process.env.BASE_PATH || "/"}${path.replace(/^\//, "")}`,
  );
  eleventy.addFilter("year", () => new Date().getFullYear());
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: process.env.BASE_PATH || "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
