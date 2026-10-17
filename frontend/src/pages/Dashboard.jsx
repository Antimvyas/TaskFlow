import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/common/Logo.jsx";
import AddTaskModal from "../components/tasks/AddTaskModal.jsx";
function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    return (
        <div className="min-h-screen bg-[#f7f8fc]">

            {/* ================= SIDEBAR ================= */}
            <aside
                className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white px-5 py-6 transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo */}
                <Logo />

                {/* Close button - Mobile */}
                <button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute right-4 top-6 rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 lg:hidden"
                >
                    ✕
                </button>

                {/* Navigation */}
                <nav className="mt-10 flex flex-col gap-2">

                    <Link
                        to="/dashboard"
                        className="rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-100"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/tasks"
                        className="rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                    >
                        My Tasks
                    </Link>

                    <Link
                        to="/completed"
                        className="rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                    >
                        Completed
                    </Link>

                    <Link
                        to="/calendar"
                        className="rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                    >
                        Calendar
                    </Link>

                </nav>

                {/* Bottom */}
                <div className="mt-auto">
                    <Link
                        to="/settings"
                        className="block rounded-xl px-4 py-3 font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                    >
                        Settings
                    </Link>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                />
            )}

            {/* ================= MAIN ================= */}
            <main className="min-h-screen p-4 sm:p-6 lg:ml-64 lg:p-8">

                {/* Mobile Header */}
                <div className="mb-6 flex items-center lg:hidden">

                    <button
                        type="button"
                        onClick={() => setIsSidebarOpen(true)}
                        className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition hover:bg-gray-50"
                    >
                        ☰
                    </button>

                    <div className="ml-3">
                        <Logo />
                    </div>

                </div>

                {/* ================= HEADER ================= */}
                <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    {/* Title */}
                    <div>
                        <p className="text-sm text-gray-500">
                            Welcome back
                        </p>

                        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                            Dashboard
                        </h1>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">

                        {/* Search */}
                        <div className="hidden md:block">
                            <input
                                type="search"
                                placeholder="Search tasks..."
                                className="h-11 w-52 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 lg:w-64"
                            />
                        </div>

                        {/* Add Task */}
                        <button
                            onClick={() => setIsAddTaskOpen(true)}
                            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                        >
                            + Add Task
                        </button>

                        {/* Profile */}
                        <button
                            type="button"
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white font-semibold text-gray-700 transition hover:bg-gray-50"
                        >
                            A
                        </button>

                    </div>

                </header>

                {/* ================= WELCOME ================= */}
                <section className="mt-8 rounded-2xl bg-indigo-600 p-6 text-white shadow-lg shadow-indigo-600/10 sm:p-8">

                    <div className="max-w-2xl">

                        <p className="text-sm font-medium text-indigo-100">
                            Let's get things done
                        </p>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                            Stay focused. Stay productive.
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-indigo-100 sm:text-base">
                            Organize your tasks, track your progress, and make every day
                            more productive.
                        </p>

                    </div>

                </section>

                {/* ================= STATISTICS ================= */}
                <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {/* Total */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">

                        <p className="text-sm font-medium text-gray-500">
                            Total Tasks
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <h2 className="text-3xl font-bold text-gray-900">
                                24
                            </h2>

                            <span className="rounded-lg bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                                All
                            </span>
                        </div>

                    </div>

                    {/* Completed */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">

                        <p className="text-sm font-medium text-gray-500">
                            Completed
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <h2 className="text-3xl font-bold text-gray-900">
                                12
                            </h2>

                            <span className="rounded-lg bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                50%
                            </span>
                        </div>

                    </div>

                    {/* Pending */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">

                        <p className="text-sm font-medium text-gray-500">
                            Pending
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <h2 className="text-3xl font-bold text-gray-900">
                                8
                            </h2>

                            <span className="rounded-lg bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                                Active
                            </span>
                        </div>

                    </div>

                    {/* Overdue */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">

                        <p className="text-sm font-medium text-gray-500">
                            Overdue
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <h2 className="text-3xl font-bold text-gray-900">
                                4
                            </h2>

                            <span className="rounded-lg bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                                Attention
                            </span>
                        </div>

                    </div>

                </section>

                {/* ================= LOWER CONTENT ================= */}
                <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

                    {/* Today's Tasks */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 xl:col-span-2">

                        <div className="flex items-center justify-between">

                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Today's Tasks
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Keep moving forward.
                                </p>
                            </div>

                            <Link
                                to="/tasks"
                                className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
                            >
                                View all
                            </Link>

                        </div>

                        {/* Task 1 */}
                        <div className="mt-6 flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50">

                            <input
                                type="checkbox"
                                className="h-5 w-5 shrink-0 cursor-pointer accent-indigo-600"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate font-medium text-gray-900">
                                    Complete project documentation
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Today · High priority
                                </p>
                            </div>

                            <button
                                type="button"
                                className="rounded-lg px-2 py-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                            >
                                ⋮
                            </button>

                        </div>

                        {/* Task 2 */}
                        <div className="mt-3 flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50">

                            <input
                                type="checkbox"
                                className="h-5 w-5 shrink-0 cursor-pointer accent-indigo-600"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate font-medium text-gray-900">
                                    Prepare interview questions
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Today · Medium priority
                                </p>
                            </div>

                            <button
                                type="button"
                                className="rounded-lg px-2 py-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                            >
                                ⋮
                            </button>

                        </div>

                        {/* Task 3 */}
                        <div className="mt-3 flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50">

                            <input
                                type="checkbox"
                                className="h-5 w-5 shrink-0 cursor-pointer accent-indigo-600"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate font-medium text-gray-900">
                                    Practice React hooks
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Today · Low priority
                                </p>
                            </div>

                            <button
                                type="button"
                                className="rounded-lg px-2 py-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                            >
                                ⋮
                            </button>

                        </div>

                    </div>

                    {/* ================= PROGRESS ================= */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">

                        <h2 className="text-xl font-bold text-gray-900">
                            Weekly Progress
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Your productivity this week.
                        </p>

                        {/* Progress */}
                        <div className="mt-8">

                            <div className="flex items-end justify-between">

                                <span className="text-sm font-medium text-gray-500">
                                    Completion
                                </span>

                                <span className="text-2xl font-bold text-gray-900">
                                    68%
                                </span>

                            </div>

                            <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">

                                <div className="h-full w-[68%] rounded-full bg-indigo-600" />

                            </div>

                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-4">

                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs text-gray-500">
                                    Completed
                                </p>

                                <p className="mt-1 text-xl font-bold text-gray-900">
                                    17
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs text-gray-500">
                                    Remaining
                                </p>

                                <p className="mt-1 text-xl font-bold text-gray-900">
                                    8
                                </p>
                            </div>

                        </div>

                        {/* Message */}
                        <div className="mt-6 rounded-xl bg-indigo-50 p-4">

                            <p className="text-sm font-medium text-indigo-700">
                                Keep going!
                            </p>

                            <p className="mt-1 text-xs leading-5 text-indigo-600">
                                You're making good progress. Finish a few more tasks today.
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

export default Dashboard;