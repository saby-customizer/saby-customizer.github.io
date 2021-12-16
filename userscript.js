const latestVersion = '0.0.0-pre.31'


/**
 * Подключение файла скрипта с CDN
 *
 * @param {string} uri Путь доступа к скрипту в с учетом версии и режима работы
 */
async function importSabyCustomizer(uri) {
  uri = `saby-customizer@${uri}`

  try {
    await import(`https://cdn.jsdelivr.net/npm/${uri}/userscript.js/+esm`)
  } catch (e) {
    // console.error(e.stack || e)
    // try {
    //   await import(`https://unpkg.com/${uri}/userscript.js?module`)
    // } catch (e) {
    console.error(e.stack || e)
    throw new Error(`saby-customizer uri: '${uri}' is not found!`)
    // }
  }

  console.log(`saby-customizer uri: '${uri}' is loaded`)
}


(async () => {
  const version = window.sessionStorage.getItem('saby-customizer.version') || latestVersion
  const mode = window.sessionStorage.getItem('saby-customizer.mode') || 'production'
  const uri = mode === 'debug' ? '/debug' : ''

  console.log(`saby-customizer prefetch: v${version}, mode: ${mode}`)

  try {
    await importSabyCustomizer(version + uri)
  } catch (e) {
    console.error(e.stack || e)
    window.sessionStorage.removeItem('saby-customizer.version')
    window.sessionStorage.removeItem('saby-customizer.mode')
    await importSabyCustomizer(latestVersion)
  }
})().catch(e => console.error(e.stack || e))
