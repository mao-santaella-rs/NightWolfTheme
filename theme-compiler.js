const fs = require("fs")

const sourcePath = "./source/night-wolf.js"
const distPath = "./themes/night-wolf.json"

if (process.argv.length === 2) {
  console.error("Expected environment argument! 'dev' or 'prod'")
  process.exit(1)
}

if(process.argv[2] === 'dev'){
  fs.watchFile(sourcePath, compile)
  console.info("Watching file: " +sourcePath)
} else if (process.argv[2] === 'prod'){
  compile()
  process.exit()
}

function compile(){
  const source = requireUncached(sourcePath)
  const dictstring = JSON.stringify(source)
  try{
    fs.writeFileSync(distPath, dictstring)
  }catch(e){
    console.error("error",e)
    process.exit()
  }
  console.info("file compiled!")
}

function requireUncached(module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}