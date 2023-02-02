import React from 'react'
// import { usertypeContext } from './contexts/usertypecontext'
import Admin from '../components/Admin'
import User from './User'
import { LoginContext } from '../contexts/logincontext'

export default function profile() {
    const {userdet} =React.useContext(LoginContext);
  return (<>
  <div>

    {
    
(userdet.org=="google" ? <Admin/>:<User/>)

    }


  </div>
  </>
    
  )
}
