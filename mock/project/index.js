const user = require("./user");
const product = require("./product");

module.exports = [...user, ...product].map(({ url, ...extra }) => ({
  url: "/api/project" + url,
  ...extra,
}));
