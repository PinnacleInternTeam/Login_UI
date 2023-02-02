import { useState } from 'react'
import Login from './components/Login'
import '../src/css/mycss.css'
import Home from '../src/components/Home'
import Profile from './components/profile'
import { LoginContext } from './contexts/logincontext'

function App() {
  const [showprofile, setShowprofile] = useState(!true)
  const [name, setName] = useState("")
    const [userdet,setUserdet]=useState([])
  return (
    <div className="App">
      <LoginContext.Provider value={{name,userdet, setName, setShowprofile, setUserdet}}>
      {
      showprofile ? 
     <Home/> : <Login/>
      }
      </LoginContext.Provider>
    </div>
  )
}

export default App
