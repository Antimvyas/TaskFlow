import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/common/Logo.jsx";
import AddTaskModal from "../components/tasks/AddTaskModal.jsx";
function Tasks() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f7f8fc]">

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white px-5 py-6 transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Logo />

        <button
          type="button"
          onClick={() => setIsSidebarOpen(false)}
          className="absolute right-4 top-6 rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          ✕
        </button>

        <nav className="mt-10 flex flex-col gap-2">

          <Link
            to="/dashboard"
            className="rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Dashboard
          </Link>

          <Link
            to="/tasks"
            className="rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-600"
          >
            My Tasks
          </Link>

          <Link
            to="/completed"
            className="rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Completed
          </Link>

          <Link
            to="/calendar"
            className="rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Calendar
          </Link>

        </nav>

        <div className="mt-auto">
          <Link
            to="/settings"
            className="block rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Settings
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Main */}
      <main className="min-h-screen p-4 sm:p-6 lg:ml-64 lg:p-8">

        {/* Mobile header */}
        <div className="mb-6 flex items-center lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-xl border border-gray-200 bg-white p-3"
          >
            ☰
          </button>

          <div className="ml-3">
            <Logo />
          </div>
        </div>

        {/* Header */}
        <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Stay organized
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              My Tasks
            </h1>
          </div>

          <button
            onClick={() => setIsAddTaskOpen(true)}
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            + Add Task
          </button>

        </header>

        {/* Filters */}
        <section className="mt-8 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 md:flex-row">

          <input
            type="search"
            placeholder="Search tasks..."
            className="h-11 flex-1 rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />

          <select className="h-11 rounded-xl border border-gray-200 px-4 text-sm text-gray-600 outline-none focus:border-indigo-500">
            <option>All Tasks</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <select className="h-11 rounded-xl border border-gray-200 px-4 text-sm text-gray-600 outline-none focus:border-indigo-500">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </section>

        {/* Task list */}
        <section className="mt-6 space-y-3">

          {/* Task 1 */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">

            <input
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-indigo-600"
            />

            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-gray-900">
                Complete project documentation
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Complete the documentation for TaskFlow project.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-lg bg-red-50 px-2 py-1 font-medium text-red-600">
                  High Priority
                </span>

                <span className="rounded-lg bg-gray-100 px-2 py-1 text-gray-500">
                  Today
                </span>
              </div>
            </div>

            <button className="rounded-lg px-3 py-2 text-xl text-gray-400 hover:bg-gray-100">
              ⋮
            </button>

          </div>

          {/* Task 2 */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">

            <input
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-indigo-600"
            />

            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-gray-900">
                Practice React Hooks
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Study useState, useEffect and custom hooks.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-lg bg-yellow-50 px-2 py-1 font-medium text-yellow-600">
                  Medium Priority
                </span>

                <span className="rounded-lg bg-gray-100 px-2 py-1 text-gray-500">
                  Tomorrow
                </span>
              </div>
            </div>

            <button className="rounded-lg px-3 py-2 text-xl text-gray-400 hover:bg-gray-100">
              ⋮
            </button>

          </div>

          {/* Task 3 */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">

            <input
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-indigo-600"
            />

            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-gray-900">
                Solve LeetCode problems
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Complete today's array and string problems.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-lg bg-green-50 px-2 py-1 font-medium text-green-600">
                  Low Priority
                </span>

                <span className="rounded-lg bg-gray-100 px-2 py-1 text-gray-500">
                  Today
                </span>
              </div>
            </div>

            <button className="rounded-lg px-3 py-2 text-xl text-gray-400 hover:bg-gray-100">
              ⋮
            </button>

          </div>

        </section>

      </main>
      {isAddTaskOpen && (
        <AddTaskModal
          onClose={() => setIsAddTaskOpen(false)}
        />
      )}
    </div>
  );
}

export default Tasks;