import React, { useEffect } from 'react'

const Login = () => {
  return (
    <div>
        <h4>Login</h4>
        <div className='col-sm-6 offset-sm-3'>
            <input type='email' placeholder='Email' className='form-control'/>
            <input type='password' placeholder='Password' className='form-control'/>

            <button className='btn btn-primary'>Login</button>
        </div>
    </div>
  )
}

export default Login