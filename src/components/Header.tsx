import { Logo } from "./Logo.tsx"

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 fixed top-0 z-10">
            <Logo />
        </header>
    )
}