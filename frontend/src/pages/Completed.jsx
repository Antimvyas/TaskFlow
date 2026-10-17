import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/common/Logo.jsx";

function Completed() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fc]">

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white px-5 py-6 transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Logo />

        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute right-4 top-6 rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          ✕
        </button>

        <nav className="mt-10 flex flex-col gap-2">

          <Link
            to="/dashboard"
            className="rounded-xl px-4 py-3 font-medium text-gray-600 hover:bg-gray-50"
          >
            Dashboard
          </Link>

          <Link
            to="/tasks"
            className="rounded-xl px-4 py-3 font-medium text-gray-600 hover:bg-gray-50"
          >
            My Tasks
          </Link>

          <Link
            to="/completed"
            className="rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-600"
          >
            Completed
          </Link>

          <Link
            to="/calendar"
            className="rounded-xl px-4 py-3 font-medium text-gray-600 hover:bg-gray-50"
          >
            Calendar
          </Link>

        </nav>

        <div className="mt-auto">
          <Link
            to="/settings"
            className="block rounded-xl px-4 py-3 font-medium text-gray-600 hover:bg-gray-50"
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

      <main className="min-h-screen p-4 sm:p-6 lg:ml-64 lg:p-8">

        {/* Mobile */}
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
        <header>
          <p className="text-sm text-gray-500">
            Your achievements
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Completed Tasks
          </h1>
        </header>

        {/* Summary */}
        <section className="mt-8 rounded-2xl bg-green-600 p-6 text-white sm:p-8">

          <p className="text-sm text-green-100">
            Great work!
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            12 tasks completed
          </h2>

          <p className="mt-2 text-sm text-green-100">
            Keep building your productivity streak.
          </p>

        </section>

        {/* Completed list */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">

          <div className="space-y-3">

            <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm text-white">
                ✓
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-gray-700 line-through">
                  Complete project documentation
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Completed today
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm text-white">
                ✓
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-gray-700 line-through">
                  Prepare interview questions
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Completed yesterday
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm text-white">
                ✓
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-gray-700 line-through">
                  Practice JavaScript
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Completed 2 days ago
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Completed;