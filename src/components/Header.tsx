import { Link } from "react-router";
import { TaskLogo } from "../assets/task-logo";

export const Header = () => {
  return (
    <header className=" bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to={"/"} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <TaskLogo />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              TaskMaster
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};
