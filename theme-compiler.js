let fs = require("fs")

let sourcePath = "./source/mao-color-theme.js"
let distPath = "./themes/mao-color-theme.json"

fs.watchFile(sourcePath, (curr, prev) => {

  let source = requireUncached(sourcePath);
  var dictstring = JSON.stringify(source);
  fs.writeFile(distPath, dictstring, (err, result) => {
    if (err) console.log("error", err);
  });

})

function requireUncached(module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}
