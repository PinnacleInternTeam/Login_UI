import React,{useContext} from 'react'
import axios from 'axios'
import '../css/mycss.css'
import { LoginContext } from '../contexts/logincontext';

export default function Body() {

   

    //const [name, setName] = React.useState("")
    const {setName, setShowprofile,name,setUserdet} =useContext(LoginContext);
    const [pass, setPass] = React.useState("")
    const [valid, setValid] = React.useState("")
    const seeisLog = () => {
        axios.post('http://localhost:3000/Ex/getf',
            {
                name: name,
                pass: pass
            }
        )
            .then((res) => {
                console.log(res)
                if (res.data[0].name == "error") {
                    setValid("invalid")
                }
                else {
                   setShowprofile(true)
                    setUserdet(res.data[0])
                }
            })

        console.log("clicked log")
    }
    return (
        <div>
            <section className="vh-100 bg-dark" >
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                      
                            <div className="card shadow-2-strong divcolor" >
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Sign in</h3>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" value={name} onChange={(e) => setName(e.target.value)} />
                                        <label className="form-label" >UserName</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={pass} onChange={(e) => setPass(e.target.value)} />
                                        <label className="form-label" >Password</label>
                                    </div>

                                    <button className="btn btn-primary btn-lg btn-block" type="button" onClick={seeisLog}>Login</button>
                                    <div>{valid}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
