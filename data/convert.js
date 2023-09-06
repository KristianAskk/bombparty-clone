import { readFileSync, writeFileSync } from "fs"

function convertFile(file) {
  const array = readFileSync(`${file}.txt`)
    .toString()
    .replace(/\r\n/g, "\n")
    .split("\n")

  // strip whitespaces in each word
  array.forEach((word, i) => {
    array[i] = word.replace(/\s/g, "")
  })

  const obj = array.reduce((acc, cur, i) => {
    if (cur.length >= 3) {
      acc[cur.toLowerCase()] = 1
    }
    return acc
  }, {})

  writeFileSync(`${file}.json`, JSON.stringify(obj, null, 2))
}

convertFile("enable2k")
convertFile("popular")

const p = JSON.parse(readFileSync("./wordlist.json"))
const s = JSON.parse(readFileSync("./enable2k.json"))

const g = { ...p, ...s }
writeFileSync(`wordlist.json`, JSON.stringify(g, null, 2))
