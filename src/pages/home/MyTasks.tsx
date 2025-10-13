export const MyTasks = () => {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold leading-tight">My Tasks</h2>
          <p className="hidden text-sm text-[var(--text-secondary)] md:block">
            Manage your tasks effectively
          </p>
        </div>
        <div className="relative w-full max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
            search
          </span>
          <input
            className="w-full rounded-md border-slate-700 bg-slate-800 py-2 pl-10 pr-4 text-sm text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
            placeholder="Search tasks..."
            type="search"
          />
        </div>
      </header>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Filter by:</span>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-md border border-slate-700 bg-slate-800 px-3 text-sm text-[var(--text-primary)] hover:bg-slate-700">
              <span>Status</span>
              <span className="material-symbols-outlined text-base text-[var(--text-secondary)]">
                expand_more
              </span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-md border border-slate-700 bg-slate-800 px-3 text-sm text-[var(--text-primary)] hover:bg-slate-700">
              <span>Due Date</span>
              <span className="material-symbols-outlined text-base text-[var(--text-secondary)]">
                expand_more
              </span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-md border border-slate-700 bg-slate-800 px-3 text-sm text-[var(--text-primary)] hover:bg-slate-700">
              <span>Project</span>
              <span className="material-symbols-outlined text-base text-[var(--text-secondary)]">
                expand_more
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid flex-1 grid-cols-1 gap-6 overflow-x-auto md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <h3 className="font-semibold">To Do</h3>
                <span className="text-sm text-slate-400">3</span>
              </div>
              <button className="text-slate-400 hover:text-white">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="space-y-4 rounded-lg bg-slate-900/50 p-4">
              <div
                className="cursor-grab rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-sm"
                draggable="true"
              >
                <h4 className="font-semibold">Write documentation</h4>
                <p className="mt-1 text-sm text-slate-400">Documentation</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-blue-900/20 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    To Do
                  </span>
                  <div className="text-sm text-slate-500">Sep 01</div>
                </div>
              </div>
              <div
                className="cursor-grab rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-sm"
                draggable="true"
              >
                <h4 className="font-semibold">Deploy to production</h4>
                <p className="mt-1 text-sm text-slate-400">Deployment</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-blue-900/20 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    To Do
                  </span>
                  <div className="text-sm text-slate-500">Sep 10</div>
                </div>
              </div>
              <div
                className="cursor-grab rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-sm"
                draggable="true"
              >
                <h4 className="font-semibold">Fix login bug</h4>
                <p className="mt-1 text-sm text-slate-400">User Management</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-blue-900/20 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    To Do
                  </span>
                  <div className="text-sm text-slate-500">Aug 20</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                <h3 className="font-semibold">In Progress</h3>
                <span className="text-sm text-slate-400">1</span>
              </div>
              <button className="text-slate-400 hover:text-white">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="space-y-4 rounded-lg bg-slate-900/50 p-4">
              <div
                className="cursor-grab rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-sm"
                draggable="true"
              >
                <h4 className="font-semibold">Design landing page</h4>
                <p className="mt-1 text-sm text-slate-400">Website Redesign</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-yellow-900/20 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
                    In Progress
                  </span>
                  <div className="text-sm text-slate-500">Aug 15</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <h3 className="font-semibold">In Review</h3>
                <span className="text-sm text-slate-400">1</span>
              </div>
              <button className="text-slate-400 hover:text-white">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="space-y-4 rounded-lg bg-slate-900/50 p-4">
              <div
                className="cursor-grab rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-sm"
                draggable="true"
              >
                <h4 className="font-semibold">Test application</h4>
                <p className="mt-1 text-sm text-slate-400">Quality Assurance</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-purple-900/20 px-2.5 py-0.5 text-xs font-medium text-purple-400">
                    In Review
                  </span>
                  <div className="text-sm text-slate-500">Aug 25</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <h3 className="font-semibold">Done</h3>
                <span className="text-sm text-slate-400">1</span>
              </div>
              <button className="text-slate-400 hover:text-white">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="space-y-4 rounded-lg bg-slate-900/50 p-4">
              <div
                className="cursor-grab rounded-lg border border-slate-800 bg-slate-900 p-4 shadow-sm opacity-60"
                draggable="true"
              >
                <h4 className="font-semibold line-through">
                  Implement user authentication
                </h4>
                <p className="mt-1 text-sm text-slate-400">User Management</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                    Completed
                  </span>
                  <div className="text-sm text-slate-500">Jul 20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
