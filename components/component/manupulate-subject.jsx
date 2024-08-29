"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"

export function ManupulateSubject() {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Mathematics",
      description: "Explore the world of numbers and patterns.",
    },
    {
      id: 2,
      name: "English",
      description: "Develop your language skills and communication abilities.",
    },
    {
      id: 3,
      name: "History",
      description: "Uncover the stories that have shaped our world.",
    },
    {
      id: 4,
      name: "Biology",
      description: "Dive into the fascinating study of living organisms.",
    },
    {
      id: 5,
      name: "Computer Science",
      description: "Learn the foundations of technology and programming.",
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [newSubjectName, setNewSubjectName] = useState("")
  const [newSubjectDescription, setNewSubjectDescription] = useState("")
  const filteredSubjects = subjects.filter((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const handleAddSubject = () => {
    if (newSubjectName.trim() !== "" && newSubjectDescription.trim() !== "") {
      const newSubject = {
        id: subjects.length + 1,
        name: newSubjectName,
        description: newSubjectDescription,
      }
      setSubjects([...subjects, newSubject])
      setNewSubjectName("")
      setNewSubjectDescription("")
    }
  }
  const handleDeleteSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id))
  }
  return (
    (<div className="container mx-auto py-8 p-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Subjects</h1>
        <div className="flex items-center space-x-4">
          <Input
            type="text"
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Subject name"
              value={newSubjectName}
              onChange={(e) => setNewSubjectName(e.target.value)}
              className="w-64 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
            <Input
              type="text"
              placeholder="Subject description"
              value={newSubjectDescription}
              onChange={(e) => setNewSubjectDescription(e.target.value)}
              className="w-64 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
            <Button
              onClick={handleAddSubject}
              className="rounded-md bg-primary px-4 py-2 hover:bg-primary-dark">
              Add Subject
            </Button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubjects.map((subject) => (
              <tr key={subject.id} className="border-b">
                <td className="px-4 py-2">{subject.name}</td>
                <td className="px-4 py-2">{subject.description}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-md text-primary hover:bg-primary hover:text-secondary">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-md text-red-500 hover:bg-primary hover:text-secondary"
                      onClick={() => handleDeleteSubject(subject.id)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>)
  );
}
