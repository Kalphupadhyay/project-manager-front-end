import { useNavigate } from "react-router";
import { AppRoutes } from "../constants/routes";
import { TaskLogo } from "../assets/task-logo";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(AppRoutes.DASHBOARD);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-slate-900 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center gap-2">
            <TaskLogo />
            <h1 className="text-3xl font-bold tracking-tighter text-slate-100">
              TaskMaster
            </h1>
          </div>
          <p className="mt-2 text-slate-400">
            Welcome back! Please login to your account.
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Username or Email
            </label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-slate-500">
                  person
                </span>
              </span>
              <input
                className="form-input block w-full rounded-md border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-slate-100 placeholder-slate-500 shadow-sm transition duration-150 ease-in-out focus:border-primary focus:ring-primary sm:text-sm"
                id="email"
                name="email"
                placeholder="e.g. john.doe@example.com"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300">
              {" "}
              Password{" "}
            </label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-slate-500">
                  lock
                </span>
              </span>
              <input
                className="form-input block w-full rounded-md border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-slate-100 placeholder-slate-500 shadow-sm transition duration-150 ease-in-out focus:border-primary focus:ring-primary sm:text-sm"
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a
                className="font-medium text-primary hover:text-blue-400"
                href="#"
              >
                Forgot Password?{" "}
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={handleLogin}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Don't have an account?
            <a
              className="font-medium text-[var(--primary-color)] hover:text-blue-400"
              href="#"
            >
              {" "}
              Sign up{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
