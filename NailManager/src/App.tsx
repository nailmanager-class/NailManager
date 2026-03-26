import {RegisterCard} from './pages/Register'
import {useState} from "react";
import {LoginCard} from "@/pages/Login.tsx";

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const switchToRegister = () => setIsLogin(false);
    const switchToLogin = () => setIsLogin(true);
    return (
        <>
            <main className='min-h-screen bg-background flex items-center justify-center p-4'>
                <div className='w-screen h-screen flex items-center justify-center'>
                    {isLogin ? (<LoginCard onSwitchToRegister={switchToRegister}/>) : (
                        <RegisterCard onSwitchToLogin={switchToLogin}/>)}
                </div>
            </main>
        </>
    )
}

export default App
