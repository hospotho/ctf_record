var fs = require('fs')
var JSZip = require('jszip')

const data = fs.readFileSync('data.txt', 'utf8')
var zip = new JSZip()
zip.loadAsync(data, {base64: true}).then(zip => {
  zip.generateNodeStream({type: 'nodebuffer', streamFiles: true}).pipe(fs.createWriteStream('wickFile.zip'))
})
