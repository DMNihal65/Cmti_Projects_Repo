import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View your site statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your analytics data goes here</p>
            <Button className="mt-4">View Details</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Manage your ongoing projects</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your project list goes here</p>
            <Button className="mt-4">View All Projects</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Track your daily tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your task list goes here</p>
            <Button className="mt-4">Add New Task</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}