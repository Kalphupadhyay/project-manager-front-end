import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { projectService } from "../services/project.service";
import type { IProjectResponse } from "../interface/api/projectResponse.interface";
import { useEffect, useState } from "react";

export const AddNewTask = () => {
  const [projects, setProjects] = useState<IProjectResponse[]>([]);
  const navigate = useNavigate();
  const { getProjects } = projectService();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response.data);
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <main className="flex flex-1 justify-center py-10">
        <div className="w-full max-w-2xl px-4">
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold tracking-tight">
              Add New Task
            </h1>
            <p className="text-gray-400 mt-1">
              Fill out the form below to create a new task.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="project-name"
              >
                Project Name
              </label>
              <select
                className="form-select mt-1 block w-full appearance-none rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                id="project-name"
                name="project-name"
              >
                <option>Select a project</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="task-name"
              >
                Task Name
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                id="task-name"
                name="task-name"
                placeholder="Enter task name"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-gray-300"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  className="form-select mt-1 block w-full appearance-none rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                  id="status"
                  name="status"
                >
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                id="description"
                name="description"
                placeholder="Add a detailed description..."
              ></textarea>
            </div>
            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={handleCancel}
                className="rounded-md border border-[#30363d] bg-transparent px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-[#1c2128] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                type="button"
              >
                Cancel
              </button>
              <button
                className="rounded-md border border-transparent bg-[var(--primary-color)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#116dca] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                type="submit"
              >
                Save Task
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
