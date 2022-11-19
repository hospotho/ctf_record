## Writeup

window.INJECTED_WICKPROJECT_DATA is a large base64 encoded string. Tracing the code, only Wick.WickFile.fromWickFile() use this data. If we look deeper, we will find out that it is just a zip file.

```js
var zip = new JSZip();
    zip.loadAsync(wickFile, {
      base64: format === 'base64'
})
```

After extract the zip file. Searching "hkcert22" or "flag" in `project.json` will lead us to object "44e9d071-7058-47ee-8932-ef8d7eb58d88". This is the hint that text maybe be hidden in other other Path object under json.content

By searching "content", we can find the flag is spilt into characters and the first character "h" hidden in object "bc751a38-2563-4510-af92-355ba54e1bf5". And the second character "k" is hidden in next object and so on.

We can now combine those characters one by one to find the flag.
