import React from 'react'
import Header from '../components/Header'
import { LoginContext } from '../contexts/logincontext'

export default function Home() {

  const {userdet} =React.useContext(LoginContext);
  return (
    <>
    <Header name={userdet.name}/>
    <div className="container mt-5">
    <div className="h1 m-5">Organistion {userdet.org}</div>
    <div className="h2 m-5">CEO {userdet.org_info[0].orgceo}</div>
    </div>

     
    </>
  )
   
}
