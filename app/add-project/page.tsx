'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function AddProject() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('file')
  const [file, setFile] = useState<File | null>(null)
  const [link, setLink] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('type', type)
    if (type === 'file' && file) {
      formData.append('file', file)
    } else if (type === 'link') {
      formData.append('link', link)
    }

    const response = await fetch('/api/projects', {
      method: 'POST',
      body: formData,
    })
    if (response.ok) {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-4xl font-bold">Add New Project</h1>
      <Input
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <RadioGroup value={type} onValueChange={setType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="file" id="file" />
          <Label htmlFor="file">File Upload</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="link" id="link" />
          <Label htmlFor="link">External Link</Label>
        </div>
      </RadioGroup>
      {type === 'file' ? (
        <Input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />
      ) : (
        <Input
          placeholder="External Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      )}
      <Button type="submit">Add Project</Button>
    </form>
  )
}