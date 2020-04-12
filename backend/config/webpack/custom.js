const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@javascript": path.resolve(__dirname, "..", "..", "app/javascript"),
      "@common": path.resolve(
        __dirname,
        "..",
        "..",
        "app/javascript/components/common"
      ),
      "@components": path.resolve(
        __dirname,
        "..",
        "..",
        "app/javascript/components"
      ),
    },
  },
};
