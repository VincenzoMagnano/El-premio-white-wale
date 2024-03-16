import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
      <form className='form-des'>
        <div className="mb-3" >
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Non condivideremo con nessuno il tuo indirizzo email.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="mx-2 form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Rimani collegato</label>
        </div>
        <button type="submit" className="btn btn-design2">Login</button>
      </form>
    </>
  )
}

export default Login
