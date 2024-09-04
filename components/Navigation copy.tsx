import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navigation = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 rounded hover:bg-gray-100">Home</Link>
          </li>
          <li>
            <Link href="/analytics" className="block p-2 rounded hover:bg-gray-100">Analytics</Link>
          </li>
          <li>
            <Link href="/projects" className="block p-2 rounded hover:bg-gray-100">Projects</Link>
          </li>
          <li>
            <Link href="/tasks" className="block p-2 rounded hover:bg-gray-100">Tasks</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation