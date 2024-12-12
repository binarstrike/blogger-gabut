import { replaceInFileSync } from "replace-in-file";
import { globIterateSync } from "glob";
import { optimize, loadConfig } from "svgo";
import { readFileSync, writeFileSync } from "node:fs";
import { exit } from "node:process";

const SVG_PATH_PATTERN = "./**/*.svg";

/**@type {import("glob").GlobOptions} */
const globOpts = {
  ignore: ["node_modules/**", "build/**"],
  dot: false,
};

/**@type {import("replace-in-file").ReplaceInFileConfig} */
const replaceOptions = {
  files: "./**/*.svg",
  from: /\(data:.*AAA=\)/,
  to: "(/fonts/ComicShanns.woff)",
};

function optimizeSVG() {
  const g = globIterateSync(SVG_PATH_PATTERN, globOpts);
  const svgoConfig = loadConfig();
  let s = g.next();
  while (!s.done) {
    const d = readFileSync(s.value);
    const r = optimize(d.toString(), svgoConfig);
    writeFileSync(s.value, r.data);
    console.log("done optimizing SVG: %s", s.value);
    s = g.next();
  }
}

function replaceSVGFontURL() {
  const result = replaceInFileSync(replaceOptions);
  console.log("done replacing string in file: %s", result.map((v) => v.file).join(", "));
}

try {
  replaceSVGFontURL();
  optimizeSVG();
} catch (error) {
  console.error(error);
  exit(1);
}
