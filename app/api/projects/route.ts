import { NextResponse } from 'next/server'
import { addProject } from '@/lib/projects'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const type = formData.get('type') as string

  let filePath: string | undefined
  let link: string | undefined

  if (type === 'file') {
    const file = formData.get('file') as File
    if (file) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const fileName = `${Date.now()}-${file.name}`
      const uploadDir = path.join(process.cwd(), 'public', 'uploads')
      
      // Ensure the upload directory exists
      await mkdir(uploadDir, { recursive: true })
      
      const fullFilePath = path.join(uploadDir, fileName)
      await writeFile(fullFilePath, buffer)
      filePath = `/uploads/${fileName}`
    }
  } else if (type === 'link') {
    link = formData.get('link') as string
  }

  const newProject = await addProject({ name, description, filePath, link })
  return NextResponse.json(newProject, { status: 201 })
}