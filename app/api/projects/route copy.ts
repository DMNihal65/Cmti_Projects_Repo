import { NextResponse } from 'next/server'
import { addProject } from '@/lib/projects'

export async function POST(request: Request) {
  const body = await request.json()
  const newProject = await addProject(body)
  return NextResponse.json(newProject, { status: 201 })
}