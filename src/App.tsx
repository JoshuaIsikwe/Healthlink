import './App.css'
import { Button } from './components/ui/button'
import { AuthScreen } from "@/features/auth/components/auth-screen"

function App() {
  

  return (
    <>
     <div className='h-screen w-screen' >
        <AuthScreen/>
     </div>
    </>
  )
}

export default App
