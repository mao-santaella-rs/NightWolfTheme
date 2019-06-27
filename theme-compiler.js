const fs = require("fs")

const sourcePath = "./source"
const paths = fs.readdirSync(sourcePath)
let compileJsFiles = []
let watchJsFiles = []
let folders = [sourcePath]

// gather the folders paths
for(let path of paths){
  if(!path.endsWith('.js')){
    folders.push(sourcePath +"/"+ path)
  }
}
// gather the .js files
for(let folder of folders){
  let subContent = fs.readdirSync(folder)
  let subJsFiles = subContent.filter(path => path.endsWith('.js'))
  for(let file of subJsFiles){
    if(folder === sourcePath) compileJsFiles.push(folder +"/"+ file)
    watchJsFiles.push(folder +"/"+ file)
  }
}

if(process.argv[2] === 'dev'){
  console.info("Watching files:")
  for(let file of watchJsFiles){
    fs.watchFile(file, compile)
    console.info(file)
  }
} else if (process.argv[2] === 'prod'){
  compile()
  process.exit()
}

function compile(){
  // delete cache
  for (let path in require.cache) {
    if (path.endsWith('.js')) delete require.cache[path]
  }

  // loop in every theme file
  for (let compFile of compileJsFiles){
    const source = require(compFile)
    let dictstring = JSON.stringify(source)
    let dictstringNi = dictstring.replace(/,"fontStyle":"italic"/g,'')

    // create json file name
    let jsonFileName = compFile.replace('.js','').split("/")
    jsonFileName = jsonFileName[jsonFileName.length -1]
    let jsonFileNameNi = jsonFileName + '-noitalics'

    // create name field inside the json
    let jsonName = jsonFileName.replace(/-/g,' ')
    let jsonNameNi = jsonFileNameNi.replace(/-/g,' ')

    dictstring = dictstring.replace(/themename/g,jsonName)
    dictstringNi = dictstringNi.replace(/themename/g,jsonNameNi)
    
    try{
      fs.writeFileSync(`./themes/${jsonFileName}.json`, dictstring)
      fs.writeFileSync(`./themes/${jsonFileNameNi}.json`, dictstringNi)
    }catch(e){
      console.error("error",e)
    }
    console.info(`file compiled! ${jsonFileName}.json`)
  }
}
