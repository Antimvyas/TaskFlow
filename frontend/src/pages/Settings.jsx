import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/common/Logo.jsx";

function Settings() {
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
            className="rounded-xl px-4 py-3 font-medium text-gray-600 hover:bg-gray-50"
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
            className="block rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-600"
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
            Customize your experience
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Settings
          </h1>
        </header>

        {/* Profile */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Profile
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

          </div>

          <button className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
            Save Changes
          </button>

        </section>

        {/* Preferences */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Preferences
          </h2>

          <div className="mt-6 space-y-5">

            <div className="flex items-center justify-between gap-4">

              <div>
                <p className="font-medium text-gray-900">
                  Email notifications
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Receive reminders about upcoming tasks.
                </p>
              </div>

              <input
                type="checkbox"
                className="h-5 w-5 accent-indigo-600"
              />

            </div>

            <div className="flex items-center justify-between gap-4">

              <div>
                <p className="font-medium text-gray-900">
                  Daily summary
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Get a summary of your tasks every day.
                </p>
              </div>

              <input
                type="checkbox"
                className="h-5 w-5 accent-indigo-600"
              />

            </div>

          </div>

        </section>

        {/* Security */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Security
          </h2>

          <button className="mt-5 rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
            Change Password
          </button>

        </section>

      </main>
    </div>
  );
}

export default Settings;