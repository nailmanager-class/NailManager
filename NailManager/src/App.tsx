import './App.css'
import { LoginCard } from './components/ui/login_card'

function App() {
  return (
    <>
      <main className='min-h-screen bg-background flex items-center justify-center p-4'>
        <div className='w-screen h-screen flex items-center justify-center'>
          <LoginCard></LoginCard>

        </div>
      </main>
    </>
  )
}

export default App
