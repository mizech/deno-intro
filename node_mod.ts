import { createRequire } from "https://deno.land/std@0.137.0/node/module.ts";

const require = createRequire(import.meta.url);

const path = require("path");
const definePath = path.dirname("/foo/bar/baz/folder/file");
console.log(definePath);

const os = require("os");
const homeDir = os.homedir();
console.log(homeDir);