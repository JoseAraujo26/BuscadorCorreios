import fs from 'fs/promises'
import fsync from 'fs'

export const readCodes = async () => {
  const reading = (await fs.readFile(`${__dirname}/../codes.txt`)).toString()
  const readingArr = reading.split('\r\n').filter(code => code.length !== 0)
  return readingArr.length ? readingArr : false
}

export const createCodeFile = async () => {
  const exist = fsync.existsSync(`${__dirname}/../codes.txt`)
  if (!exist) {
    await fs.writeFile(`${__dirname}/../codes.txt`, '')
  }
}