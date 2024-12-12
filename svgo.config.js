/**@type {import("svgo").Config} */
const config = {
  multipass: true,
  plugins: [
    "minifyStyles",
    {
      name: "preset-default",
      params: {
        overrides: {
          inlineStyles: {
            onlyMatchedOnce: true,
            removeMatchedSelectors: true,
          },
          mergeStyles: true,
          removeComments: true,
          minifyStyles: {
            comments: false,
            restructure: true,
            forceMediaMerge: true,
          },
        },
      },
    },
  ],
};

module.exports = config;
