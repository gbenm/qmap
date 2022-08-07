/* eslint-disable */
const sort = require("../../tools/sidebar/sort.cjs")

process.chdir("docs/queries")

sort([
    "select",
    "access",
    "index-select",
    "functions",
    "onresult",
    "rename",
    "new-object",
    "global-access",
    "all",
    "exclude",
    "spread"
])

console.log("ok!")
