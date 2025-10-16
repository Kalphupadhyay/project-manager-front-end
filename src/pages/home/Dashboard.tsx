import { useEffect, useState } from "react";
import { CurrentTasks } from "../../components/CurrentTasks";
import { projectService } from "../../services/project.service";
import type { IProjectResponse } from "../../interface/api/projectResponse.interface";

export const Dashboard = () => {
  const [projects, setProjects] = useState<IProjectResponse[]>([]);

  const { getProjects } = projectService();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response.data);
  };

  return (
    <main className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Welcome back, Alex! Here's an overview of your tasks and projects.
          </p>
        </header>
        <CurrentTasks />
        <section>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">
            Projects
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-700/50 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Project Name
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {projects.map((project) => {
                  return (
                    <tr key={project.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {project.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};
