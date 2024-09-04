import { PrismaClient, Project } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProjects(): Promise<Project[]> {
  return prisma.project.findMany()
}

export async function getProject(id: string): Promise<Project | null> {
  return prisma.project.findUnique({ where: { id } })
}

export async function addProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
  return prisma.project.create({ data: project })
}