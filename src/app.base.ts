import fs from 'fs'
import { yarg } from './config/args.plugin'

const { b: base, l: limit, s: show } = yarg

const header = `
===============================
       Tabla del ${base}
===============================
`

let body = `${header}\n`

for (let i = 1; i <= limit; i++) {
    body += `${base} x ${i} = ${base * i}\n`
}

if (show) console.log(body)

const outputPath = 'outputs'

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, body)

