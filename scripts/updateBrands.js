const fs = require("fs/promises");
const path = require("path");

function upperFirst(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}
function snakeToPascal(string) {
  return string
    .split("_")
    .map((str) => {
      return upperFirst(str.split("/").map(upperFirst).join("/"));
    })
    .join("");
}

async function run() {
  const dir = (
    await fs.readdir(
      path.join(__dirname, "../src/components/Landing/assets/brands")
    )
  ).filter((file) => file.endsWith(".png"));

  const imports = dir.map(
    (brand) =>
      `import ${brand
        .split(".")[0]
        .replaceAll("-", "_")} from './webp/${brand.replace(".png", ".webp")}'`
  );
  const exportDefault = `export default [${dir
    .map((brand) => brand.split(".")[0].replaceAll("-", "_"))
    .join(",")}];`;
  fs.writeFile(
    path.join(__dirname, "../src/components/Landing/assets/brands/brands.js"),
    `${imports.join("\n")}\n\n${exportDefault}`
  );
}
run();
