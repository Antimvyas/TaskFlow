import { Link, useNavigate } from "react-router-dom"
import Logo from "../components/common/Logo.jsx"
import { use, useState } from "react"
import axios from "axios"

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState('')
    const [agree, setAgree] = useState(false)
    const [error, setError] = useState("");
    // const [success, setSuccess] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!name || !email || !password) {
                return setError("Please Fill All the Fields")
            }
            if (password !== confirmpassword) {
                return setError("Both password is not match");
            }
            if (!agree) {
                return setError("Please agree to the terms");
            }

            const response = await axios.post("http://localhost:1801/api/register", {
                name,
                email,
                password
            })
            console.log(response)
            navigate("/dashboard")
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong");
        }

    }
    return (
        <div className="flex min-h-screen flex-col bg-[#f7f8fc] px-4 py-5 sm:px-6 lg:px-8">
            {/* Header */}
            <header className="mx-auto flex w-full max-w-6xl items-center justify-between">
                <Logo />
                <p className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                    Already Have Account ? {" "}
                    <Link to="/login" className="font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-700 cursor-pointer">
                        Sign In
                    </Link>
                </p>
            </header>

            {/* Register Area */}
            <main className="flex flex-1 items-center justify-center py-6 sm:py-8">

                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_18px_50px_rgba(20,20,40,0.08)] sm:p-8 md:p-10">

                    {/* Heading */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Create your account
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                            Start Managing....
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                            />
                        </div>
                        {/*Confirm Password*/}
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Confirm Password
                            </label>

                            <input
                                id="confirm-password"
                                type="password"
                                value={confirmpassword}
                                onChange={(e) => setConfirmpassword(e.target.value)}
                                placeholder="Enter your password"
                                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                            />
                        </div>

                        {/* Options */}
                        <div className="flex items-center justify-between gap-3 text-sm">

                            <label className="flex cursor-pointer items-center gap-2 text-gray-500">
                                <input
                                    type="checkbox"
                                    value={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    className="h-4 w-4 cursor-pointer accent-indigo-600"
                                />
                                I agree to terms
                            </label>


                        </div>
                        {error && (
                            <p className="text-red-500 text-sm">
                                {error}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="h-12 w-full rounded-xl bg-indigo-600 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 active:translate-y-0"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Mobile Register */}
                    <p className="mt-6 text-center text-sm text-gray-500 sm:hidden">
                        Already Have Account ? {" "}
                        <Link to="/login" className="font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-700 cursor-pointer">
                            Sign In
                        </Link>
                    </p>

                </div>
            </main>
        </div>
    )
}

export default Register