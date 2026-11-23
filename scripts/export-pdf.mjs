import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright'

const id = process.argv[2]
const baseUrl = process.env.CV_URL ?? 'http://localhost:5173'

if (!id) {
  console.error('Uso: pnpm pdf <id>')
  console.error('Ejemplo: pnpm pdf bcp-frontend')
  process.exit(1)
}

async function isUp() {
  try {
    const response = await fetch(baseUrl)
    return response.ok
  } catch {
    return false
  }
}

async function waitUntilUp() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (await isUp()) return
    await new Promise((resolve) => setTimeout(resolve, 250))
  }
  throw new Error(`No responde ${baseUrl}`)
}

let server
if (!(await isUp())) {
  server = spawn('pnpm', ['exec', 'vite', '--port', '5173', '--strictPort'], {
    stdio: 'ignore',
    shell: true,
  })
  await waitUntilUp()
}

const browser = await chromium.launch()
try {
  const page = await browser.newPage()
  const response = await page.goto(`${baseUrl}/cv/${id}`, { waitUntil: 'networkidle' })
  if (!response || response.status() >= 400) {
    throw new Error(`No se pudo abrir /cv/${id}`)
  }

  const missing = await page.getByRole('heading', { name: 'CV no encontrado' }).count()
  if (missing > 0) {
    throw new Error(`No existe un CV con id "${id}"`)
  }

  const title = await page.title()
  await mkdir('output', { recursive: true })
  const filePath = `output/${title}.pdf`
  await page.pdf({
    path: filePath,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })
  console.log(filePath)
} finally {
  await browser.close()
  server?.kill()
}
