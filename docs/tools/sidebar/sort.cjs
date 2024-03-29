/* eslint-disable */

const fs = require("node:fs")
const path = require("node:path")

/** @param {string} filename */
function addExtName(filename) {
    const currentExt = path.extname(filename)
    if (!currentExt) {
        return filename.concat(".md")
    }
    return filename
}

/** @param {string[]} files */
const addExtensions = (files) => files.map(addExtName)

/** @param {string[]} files */
const resolveFilenames = (files) => files.map((file) => path.resolve(file))

/** @param {string[]} entries */
function sort(entries) {
    entries = addExtensions(entries)
    entries = resolveFilenames(entries)
    entries.forEach(writeSideBarPosition)
}

function writeSideBarPosition(filename, i) {
    const basename = path.basename(filename)
    let re = /(sidebar_position:)\s*[1-9]\d*/
    if (basename === "_category_.json") {
        re = /(\s*"position":)\s*[1-9]\d*/
    }
    const content = fs.readFileSync(filename).toString()
    const newContent = content.replace(re, `$1 ${i+1}`)
    fs.writeFileSync(filename, newContent)
}

module.exports = sort
