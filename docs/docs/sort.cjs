/* eslint-disable */
const path = require("node:path")
const sort = require("../tools/sidebar/sort.cjs")

process.chdir("docs")

sort([
    "intro.mdx",
    "create-instance",
    "instance",
    "cache",
    path.join("queries", "_category_.json")
])

console.log("ok!")
