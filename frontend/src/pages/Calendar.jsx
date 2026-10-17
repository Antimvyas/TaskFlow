import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/common/Logo.jsx";
import AddTaskModal from "../components/tasks/AddTaskModal.jsx";
function Calendar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    const days = [
        ["Mon", "22"],
        ["Tue", "23"],
        ["Wed", "24"],
        ["Thu", "25"],
        ["Fri", "26"],
        ["Sat", "27"],
        ["Sun", "28"],
    ];

    return (
        <div className="min-h-screen bg-[#f7f8fc]">

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white px-5 py-6 transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                        className="rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-600"
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
                <header className="flex items-center justify-between">

                    <div>
                        <p className="text-sm text-gray-500">
                            Plan your work
                        </p>

                        <h1 className="mt-1 text-3xl font-bold text-gray-900">
                            Calendar
                        </h1>
                    </div>

                    <button
                        onClick={() => setIsAddTaskOpen(true)}
                        className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                    >
                        + Add Task
                    </button>
                </header>

                {/* Calendar */}
                <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">

                    <div className="flex items-center justify-between">

                        <h2 className="text-xl font-bold text-gray-900">
                            September 2026
                        </h2>

                        <div className="flex gap-2">
                            <button className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50">
                                ←
                            </button>

                            <button className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50">
                                →
                            </button>
                        </div>

                    </div>

                    {/* Days */}
                    <div className="mt-6 grid grid-cols-7 gap-2">

                        {days.map(([day, date]) => (
                            <div
                                key={day}
                                className={`min-h-24 rounded-xl border p-3 ${date === "24"
                                        ? "border-indigo-200 bg-indigo-50"
                                        : "border-gray-100"
                                    }`}
                            >

                                <p className="text-xs font-medium text-gray-400">
                                    {day}
                                </p>

                                <p className="mt-2 font-bold text-gray-900">
                                    {date}
                                </p>

                                {date === "24" && (
                                    <div className="mt-2 rounded-md bg-indigo-600 px-1 py-1 text-[10px] text-white">
                                        3 tasks
                                    </div>
                                )}

                            </div>
                        ))}

                    </div>

                </section>

                {/* Upcoming */}
                <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">

                    <h2 className="text-xl font-bold text-gray-900">
                        Upcoming Tasks
                    </h2>

                    <div className="mt-5 space-y-3">

                        <div className="rounded-xl border border-gray-100 p-4">
                            <p className="font-medium text-gray-900">
                                Complete API integration
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Tomorrow · High priority
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 p-4">
                            <p className="font-medium text-gray-900">
                                Learn Express middleware
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                Friday · Medium priority
                            </p>
                        </div>

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

export default Calendar;