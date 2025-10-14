import { Link, useNavigate } from "react-router";
import { TaskLogo } from "../assets/task-logo";
import { SideBarAuth } from "./Sidebar_auth";

export const SideBar = () => {
  const navigate = useNavigate();

  const handleAddNewTask = () => {
    navigate("/addtask");
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-800 border-r border-gray-700 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="size-8">
            <TaskLogo />
          </div>
          <h1 className="text-lg font-bold text-white">TaskMaster</h1>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          className="flex items-center gap-3 px-4 py-2 rounded-md bg-blue-600 text-white font-semibold"
          to={"/"}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white"
          to={"/tasks"}
        >
          <span className="material-symbols-outlined">task_alt</span>
          <span>My Tasks</span>
        </Link>
        <a
          className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white"
          href="#"
        >
          <span className="material-symbols-outlined">folder</span>
          <span>Projects</span>
        </a>
      </nav>
      <div className="px-4 py-2 border-t border-gray-700 ">
        <button
          onClick={handleAddNewTask}
          className=" cursor-pointer w-full flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors"
        >
          <span className="material-symbols-outlined">add</span>
          <span>New Task</span>
        </button>
      </div>
      <SideBarAuth />
    </aside>
  );
};
