import { RegisterCard } from './pages/Register'
import { useState } from "react";
import { LoginCard } from "@/pages/Login.tsx";

function App() {
    const [currentPage, setCurrentPage] = useState<"login" | "register">("login")
    return (
        <>
            <main className='min-h-screen bg-background flex items-center justify-center p-4'>
                <div className='w-screen h-screen flex items-center justify-center'>
                    {currentPage == "login" ? (
                        <LoginCard onSwitchToRegister={() => setCurrentPage("register")} />
                    ) : (
                        <RegisterCard onSwitchToLogin={() => setCurrentPage("login")} />
                    )}
                </div>
            </main>
        </>
    )
}

export default App
