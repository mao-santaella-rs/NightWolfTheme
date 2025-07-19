import fs from 'fs'

const sourcePath = './source'
const { files, folders } = getFilesAndFoldersFromPath(sourcePath)

if (process.argv[2] === 'dev') {
  for (let folder of [sourcePath, ...folders]) {
    fs.watch(folder, async () => {
      try {
        await compile()
      } catch (e) {
        console.error(e)
      }
    })
  }
  await compile()
} else if (process.argv[2] === 'prod') {
  await compile()
  process.exit()
}

async function compile() {
  // Filter the array directly using the constant prefix
  const themeVersions = files.filter(
    (path) => path.replace(sourcePath + '/', '').indexOf('/') === -1,
  )

  for (let themeVersionPath of themeVersions) {
    try {
      const [versionName] = themeVersionPath.replace('.js', '').split('/').slice(-1)
      const versionConstructor = await getImportDefault(themeVersionPath)

      const colorsPath = files.find(
        (path) => path.includes(versionName) && path.includes('/colors/'),
      )

      const syntaxPath = files.find(
        (path) => path.includes(versionName) && path.includes('/syntax/'),
      )
      const syntaxModifier = await getImportDefault(syntaxPath)

      const variantsPaths = files.filter(
        (path) => path.includes(versionName) && path.includes('/variants/'),
      )

      for (let variantPath of variantsPaths) {
        try {
          const [variantName] = variantPath.replace('.js', '').split('/').slice(-1)
          const variantFileName = `night-wolf-${variantName}`
          const variantFileNameNi = `${variantFileName}-noitalics`
          const variantModifier = await getImportDefault(variantPath)
          const baseColors = await getImportDefault(colorsPath)
          const varianColors = variantModifier(baseColors)
          const syntaxColors = syntaxModifier(varianColors)
          const variant = versionConstructor(syntaxColors)

          const variantStringified = JSON.stringify({ name: variantFileName, ...variant })
          const variantStringifiedNi = JSON.stringify(
            { name: variantFileNameNi, ...variant },
            (key, value) =>
              key === 'fontStyle' && value === 'italic' ? 'normal' : value,
          )
          fs.writeFileSync(`./themes/${variantFileName}.json`, variantStringified)
          fs.writeFileSync(`./themes/${variantFileNameNi}.json`, variantStringifiedNi)
          console.info(
            `${variantFileName}.json and ${variantFileNameNi}.json files compiled!`,
          )
        } catch (e) {
          console.error(e)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }
  console.info('----------------done----------------')
  console.info('')
}

function getFilesAndFoldersFromPath(path) {
  const result = { files: [], folders: [] }
  const subPaths = fs.readdirSync(path)
  subPaths.forEach((subPath) => {
    const fullPath = `${path}/${subPath}`
    if (fs.statSync(fullPath).isDirectory()) {
      result.folders.push(fullPath)
      const subResult = getFilesAndFoldersFromPath(fullPath)
      result.files.push(...subResult.files)
      result.folders.push(...subResult.folders)
    } else {
      result.files.push(fullPath)
    }
  })
  return result
}

async function getImportDefault(path) {
  return (await import(`${path}?t=${Date.now()}&r=${Math.random()}`)).default
}
