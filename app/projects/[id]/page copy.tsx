import { getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.description}</p>
      <iframe src={project.path} className="w-full h-[80vh] border-2 border-gray-300 rounded-lg" />
    </div>
  )
}