import { getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

function formatLink(link: string) {
  if (link.startsWith('http://') || link.startsWith('https://')) {
    return link;
  }
  return `http://${link}`;
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.description}</p>
      {project.filePath ? (
        <>
          <iframe src={project.filePath} className="w-full h-[80vh] border-2 border-gray-300 rounded-lg mb-4" />
          <div className="flex space-x-4">
            <Link href="/">
              <Button>Back to Projects</Button>
            </Link>
            <a href={project.filePath} target="_blank" rel="noopener noreferrer">
              <Button>Open in New Tab</Button>
            </a>
          </div>
        </>
      ) : project.link ? (
        <a href={formatLink(project.link)} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visit Project
        </a>
      ) : (
        <p>No file or link available for this project.</p>
      )}
    </div>
  )
}