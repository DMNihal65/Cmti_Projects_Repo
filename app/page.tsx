import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { getProjects } from '@/lib/projects'

function formatLink(link: string) {
  if (link.startsWith('http://') || link.startsWith('https://')) {
    return link;
  }
  return `http://${link}`;
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Project Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {project.filePath ? (
                <Link href={`/projects/${project.id}`}>
                  <Button className="mt-4">View Project</Button>
                </Link>
              ) : project.link ? (
                <a href={formatLink(project.link)} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4">Visit Project</Button>
                </a>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}